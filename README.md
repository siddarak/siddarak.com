# Siddhesh Darak - Personal Website

This repository contains the source code for my personal website, built with a focus on minimalism, clean typography, and a warm aesthetic.

## 🛠 Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel
- **Domain:** IONOS

## 🎨 Design System & Aesthetics
- **Theme:** Warm, minimal, and professional theme.
- **Background Color:** Warm Light Grey/Beige (`#bdb9b3`)
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
- **Profile Header:** Clean image, Name, and an italicized bio ("researcher @ matter of tech lab", "cornell grad, building in nyc").
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

## 🚀 Next Steps
The core aesthetic and infrastructure are essentially perfectly configured. The next logical phases are to build out the internal routing pages listed on the homepage:
1. Building `/projects` to showcase work.
2. Building `/about` to dive deeper into the story.
3. Building `/resume` to host a CV or detailed career timeline.
