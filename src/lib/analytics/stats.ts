import { redis } from "@/lib/analytics/redis";

export type RecentEvent = {
  type: "pageview" | "click";
  path: string;
  target?: string;
  href?: string;
  country: string;
  device: "mobile" | "desktop";
  ts: number;
};

function lastNDays(n: number): string[] {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - i);
    return d.toISOString().slice(0, 10);
  });
}

export async function getDashboardStats() {
  const days = lastNDays(7); // most recent first

  const pipeline = redis.pipeline();
  pipeline.get<number>("analytics:pageviews:total");
  pipeline.get<number>("analytics:clicks:total");
  pipeline.zrange<string[]>("analytics:top:paths", 0, 9, { withScores: true, rev: true });
  pipeline.zrange<string[]>("analytics:top:links", 0, 9, { withScores: true, rev: true });
  pipeline.zrange<string[]>("analytics:top:referrers", 0, 9, { withScores: true, rev: true });
  pipeline.lrange<string>("analytics:events:recent", 0, 49);
  for (const day of days) pipeline.get<number>(`analytics:pageviews:day:${day}`);
  for (const day of days) pipeline.pfcount(`analytics:visitors:day:${day}`);

  const results = await pipeline.exec<
    [number | null, number | null, string[], string[], string[], string[], ...number[]]
  >();

  const [
    totalPageviews,
    totalClicks,
    topPathsRaw,
    topLinksRaw,
    topReferrersRaw,
    recentRaw,
    ...dayCounts
  ] = results as unknown as [
    number | null,
    number | null,
    string[],
    string[],
    string[],
    string[],
    ...number[]
  ];

  const pageviewsPerDay = dayCounts.slice(0, days.length);
  const uniquesPerDay = dayCounts.slice(days.length, days.length * 2);

  return {
    totalPageviews: totalPageviews ?? 0,
    totalClicks: totalClicks ?? 0,
    topPaths: toPairs(topPathsRaw),
    topLinks: toPairs(topLinksRaw),
    topReferrers: toPairs(topReferrersRaw),
    dailySeries: days.map((day, i) => ({
      day,
      pageviews: pageviewsPerDay[i] ?? 0,
      uniqueVisitors: uniquesPerDay[i] ?? 0,
    })),
    recentEvents: (recentRaw ?? []).map((raw) => JSON.parse(raw) as RecentEvent),
  };
}

// zrange with withScores flattens to [member, score, member, score, ...]
function toPairs(flat: string[]): { key: string; count: number }[] {
  const pairs: { key: string; count: number }[] = [];
  for (let i = 0; i < flat.length; i += 2) {
    pairs.push({ key: flat[i], count: Number(flat[i + 1]) });
  }
  return pairs;
}
