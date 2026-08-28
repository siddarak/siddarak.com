import { Redis } from "@upstash/redis";

// Upstash's REST-based client: every call is a plain HTTPS request,
// which is what makes it usable from stateless serverless functions
// (no long-lived TCP connection to manage between invocations).
export const redis = Redis.fromEnv();
