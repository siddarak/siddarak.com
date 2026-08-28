"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Respect explicit opt-out signals. Ad blockers are a blunt, often
// false-positive instrument (they block plenty of first-party, non-invasive
// requests); Do Not Track / Global Privacy Control are the user directly
// telling us "don't track me" — that's a signal we should always honor,
// regardless of what we do about blocklist false positives.
function hasOptedOut(): boolean {
  const dnt = navigator.doNotTrack ?? (window as unknown as { doNotTrack?: string }).doNotTrack;
  const gpc = (navigator as unknown as { globalPrivacyControl?: boolean }).globalPrivacyControl;
  return dnt === "1" || dnt === "yes" || gpc === true;
}

// Endpoint is named "/api/e", not "/api/track" — see the route file for why.
function send(payload: Record<string, unknown>) {
  if (hasOptedOut()) return;

  const body = JSON.stringify(payload);
  // sendBeacon is built for exactly this: fire-and-forget delivery that the
  // browser still completes even if the page is navigating away right now
  // (e.g. the click that triggered this beacon is also opening a new page).
  // No response is read, no cookie is attached, nothing is stored locally.
  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon("/api/e", blob);
  } else {
    fetch("/api/e", { method: "POST", body, keepalive: true }).catch(() => {});
  }
}

export default function Analytics() {
  const pathname = usePathname();

  // Fires once per page the visitor lands on, including client-side
  // App Router navigations (pathname changes without a full page reload).
  useEffect(() => {
    send({
      type: "pageview",
      path: pathname,
      referrer: document.referrer || undefined,
    });
  }, [pathname]);

  // A single delegated listener on the whole document, rather than one
  // listener per link. Every click bubbles up here; we just check whether
  // it originated from (or inside) an <a> tag.
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement)?.closest("a");
      if (!link) return;

      send({
        type: "click",
        path: pathname,
        target: link.textContent?.trim() || link.getAttribute("aria-label") || undefined,
        href: link.href,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
