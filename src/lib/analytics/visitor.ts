import { createHash } from "crypto";

/**
 * Cookieless "unique visitor" identity.
 *
 * Instead of handing the browser a persistent ID (a cookie), we derive a
 * fingerprint entirely on the server from signals that are already part of
 * every HTTP request: the IP address and the User-Agent string.
 *
 * Two things make this privacy-respecting rather than just "a cookie in
 * disguise":
 *
 * 1. It's a one-way hash (SHA-256) — the raw IP is never stored anywhere,
 *    only the digest. You cannot reverse a hash back into an IP.
 * 2. The salt rotates every day. Today's hash for a given person is
 *    completely different from tomorrow's hash for the same person, because
 *    the salt (derived from the current date) is baked into the input. That
 *    means it's only useful for "how many distinct people today", never for
 *    following one person across days/weeks — there is no long-lived
 *    identifier being created or stored.
 */

function dailySalt(date: string): string {
  const secret = process.env.ANALYTICS_SALT_SECRET ?? "dev-secret-change-me";
  return createHash("sha256").update(`${secret}:${date}`).digest("hex");
}

export function getClientIp(headers: Headers): string {
  // Vercel populates this with the real client IP; the first entry in a
  // comma-separated list is the original client (the rest are proxies).
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return headers.get("x-real-ip") ?? "unknown";
}

export function getVisitorHash(ip: string, userAgent: string, date: string): string {
  const salt = dailySalt(date);
  return createHash("sha256")
    .update(`${salt}:${ip}:${userAgent}`)
    .digest("hex")
    .slice(0, 16);
}

export function todayKey(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
}
