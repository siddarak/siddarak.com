# Siddhesh Darak - Personal Website

This repository contains the source code for my personal website, built with a focus on minimalism, clean typography, and a warm aesthetic.

## 🛠 Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel
- **Domain:** IONOS

## 🎨 Design System & Aesthetics
- **Theme:** Clean, minimal, and professional pastel blue theme.
- **Background Color:** Pastel Sky Blue (`#e0f2fe`)
- **Text Color:** Professional Deep Navy Blue (`#0d1e3d`)
- **Typography:** Geist Sans & Geist Mono
- **Layout:** Centered single column with a max-width of 640px. Two-column links layout for desktop (`gap-20`), collapsing into a seamless single vertical list on mobile.
- **Image:** `my-profile.jpg` (Custom cropped with CSS `object-top` to focus tightly on the face).

## 📝 Features & Completed Work (History)

### 1. Initialization & Boilerplate Cleanup
- Cleaned out all default Next.js starter templates, SVGs, and boilerplate code.
- Removed unused global CSS variables and normalized the theme to solely rely on our custom Tailwind colors.
- Stripped all `page.tsx` React comments to keep the repository extremely short and clean.

### 2. The Homepage
- **Profile Header:** Clean image, Name, and an italicized bio ("cornell tech ms · nyc").
- **Internal Navigation:** Links pointing to `/projects`, `/about` (my story), and `/resume`. 
  - *Note:* The "my thoughts" link to Substack has been built but intentionally hidden/commented out at the user's request. It is safely preserved in the code for future activation.
- **External Links:** Links to Instagram and a direct `mailto:` link for "get in touch".
  - *Note:* The links for `x.com` and `linkedin` have been built but intentionally hidden/commented out at the user's request. They are preserved in the code.
- **Responsive Layout:** The two columns of links spread out beautifully on a broad screen but collapse into a tight single list (`gap-4`) with equal spacing on mobile phones.

### 3. Contact Methods Evolution
- Initially experimented with a separate `/contact` page containing a back-arrow and duplicate profile image.
- Decided to scrap the separate page in favor of absolute minimalism: "get in touch" now points directly to the email address natively on the homepage.

### 4. Deployment & Domain
- **GitHub:** Code is hosted in the `siddarak.com` repository under the `@siddarak` GitHub namespace.
- **Vercel:** Automatically deployed directly from the `main` branch.
- **DNS Configuration:** Connected via IONOS with two records:
  - `A` Record (`@`) pointing to `216.198.79.1`
  - `CNAME` Record (`www`) pointing to `cfe398615a9f7cdd.vercel-dns-017.com.`

### 5. Cookieless Analytics
- **Ingestion:** `POST /api/e` records pageviews and link clicks. No cookies, `localStorage`, or `sessionStorage` are ever set on the client. The route is deliberately named `/api/e` (not `/api/track`) so it doesn't trip generic ad-blocker filter-list path rules — it's still first-party and cookieless, this just avoids a false-positive block on the literal word "track" in the URL.
- **Client:** `src/components/Analytics.tsx` fires a `navigator.sendBeacon` on every route change and on every link click (delegated document click listener). It checks `navigator.doNotTrack` / Global Privacy Control first and sends nothing if either is set — an explicit user opt-out is always honored.
- **Unique visitors:** computed server-side only, from a SHA-256 hash of `IP + User-Agent + a daily-rotating salt` (`src/lib/analytics/visitor.ts`). The raw IP is never stored, and the salt changes every day so the hash can't be used to track someone across days.
- **Storage:** Upstash Redis (REST-based, works from stateless serverless functions). Sorted sets power "top pages / top links / top referrers"; a HyperLogLog (`PFADD`/`PFCOUNT`) estimates daily unique visitors in constant space; a capped list holds the last 200 raw events for the "recent activity" feed.
- **Dashboard:** `/admin/analytics`, gated by HTTP Basic Auth in `src/proxy.ts` (Next.js 16's replacement for `middleware.ts`) — no login cookie, the browser just resends the `Authorization` header per request.
- **Required env vars (set in Vercel + `.env.local` for dev):**
  - `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` — from a free [Upstash](https://upstash.com) Redis database.
  - `ANALYTICS_SALT_SECRET` — any long random string, used to salt the daily visitor hash.
  - `ANALYTICS_DASHBOARD_USER`, `ANALYTICS_DASHBOARD_PASSWORD` — credentials for `/admin/analytics`.

## 🚀 Next Steps
The core aesthetic and infrastructure are essentially perfectly configured. The next logical phases are to build out the internal routing pages listed on the homepage:
1. Building `/resume` to host a CV or detailed career timeline.
2. Creating the Upstash Redis database and wiring up the env vars above so analytics data actually starts flowing in production.
