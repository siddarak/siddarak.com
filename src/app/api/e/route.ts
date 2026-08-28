import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/analytics/redis";
import { getClientIp, getVisitorHash, todayKey } from "@/lib/analytics/visitor";

// Deliberately generic route name ("/api/e", not "/api/track") — filter
// lists like EasyPrivacy include generic path patterns (containing
// "track"/"analytics"/"collect"/etc.) that apply regardless of domain. This
// is a first-party, cookieless, non-cross-site endpoint, so it isn't the
// kind of tracking those lists exist to stop — this just avoids a
// false-positive match on the literal word in the URL.

export const runtime = "nodejs"; // we need the `crypto` module for hashing

type TrackPayload = {
  type: "pageview" | "click";
  path: string;
  referrer?: string;
  target?: string; // for clicks: the link text or element label
  href?: string; // for clicks: where the link points
};

// A small, non-exhaustive UA sniff — good enough to bucket "mobile vs
// desktop" for a personal site's dashboard. Real products reach for a
// library like `ua-parser-js` when they need precise browser/OS detection.
function classifyDevice(userAgent: string): "mobile" | "desktop" {
  return /mobile|android|iphone/i.test(userAgent) ? "mobile" : "desktop";
}

export async function POST(req: NextRequest) {
  let body: TrackPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  if (!body?.type || !body?.path) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  const userAgent = req.headers.get("user-agent") ?? "unknown";
  const ip = getClientIp(req.headers);
  const country = req.headers.get("x-vercel-ip-country") ?? "unknown";
  const date = todayKey();
  const visitorHash = getVisitorHash(ip, userAgent, date);
  const device = classifyDevice(userAgent);
  const path = body.path.slice(0, 200); // basic guard against giant payloads
  const now = Date.now();

  const pipeline = redis.pipeline();

  if (body.type === "pageview") {
    pipeline.incr("analytics:pageviews:total");
    pipeline.incr(`analytics:pageviews:day:${date}`);
    pipeline.zincrby("analytics:top:paths", 1, path);
    pipeline.pfadd(`analytics:visitors:day:${date}`, visitorHash);
    if (body.referrer) {
      const referrerHost = safeHostname(body.referrer);
      if (referrerHost) pipeline.zincrby("analytics:top:referrers", 1, referrerHost);
    }
  } else {
    pipeline.incr("analytics:clicks:total");
    pipeline.incr(`analytics:clicks:day:${date}`);
    if (body.href) pipeline.zincrby("analytics:top:links", 1, body.href.slice(0, 200));
  }

  pipeline.lpush(
    "analytics:events:recent",
    JSON.stringify({
      type: body.type,
      path,
      target: body.target?.slice(0, 80),
      href: body.href?.slice(0, 200),
      country,
      device,
      ts: now,
    })
  );
  pipeline.ltrim("analytics:events:recent", 0, 199); // keep only the latest 200

  await pipeline.exec();

  // 204: nothing meaningful to return, and it keeps the beacon cheap.
  return new NextResponse(null, { status: 204 });
}

function safeHostname(url: string): string | null {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}
