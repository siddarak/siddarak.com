# Candidacy brief (source of truth)

This file is the shared memory for the campaign. The hub chat collects raw material; other chats and agents read this file (and `PRODUCT.md`) instead of inventing voice, claims, or layout.

Fill sections as material arrives. Distinguish **source** (what Siddhesh said or linked) from **draft** (how we might phrase it). Do not treat drafts as approved until marked.

## Status

- Hub chat: this conversation (candidacy + site + collateral)
- Homepage today: **personal site stays**. Campaign is a **new route** on this domain. Later `/` can become the campaign; after the election it swaps back.
- Position: **Communications Chair**, Cornell Tech Student Government (CTSG)
- Approved messaging: none yet (first source dump 2026-08-28; drafts below)
- Phase: **palette locked (Pine + Punch)**. Copy in `CAMPAIGN-COPY.md`. UI agent builds `/campaign` from that + `DESIGN.md`.

## Site shift (source — Siddhesh, 2026-08-28)

Use the **name and this domain** as the campaign. Do not destroy the current site.

**Now:** keep `/`, `/about`, `/projects` as they are. Add something like `/campaign` (or `/ctsg` if that is the office) in this Next.js app.

**When campaign should own the front door:** `/` renders that same page. Today’s personal home moves to `/me` (story can stay `/about`). `/campaign` redirects to `/` so links survive.

**After the election:** `/` is personal again. Campaign stays at `/campaign` as an archive or is removed. Git keeps the history. No second domain.

## Reference sites (source)

### R1 — [Robbie for Cornell Tech](https://robbie-for-cornelltech.netlify.app/) (2026-08-28)

Cornell Tech student government. Office: **Professional Co-President**. Vote **Sep 2–5**. Single long page (no extra routes). Hosted as a static Netlify site.

**Information architecture (scroll order)**

1. Sticky bar: name-for-campus, 4 section links, **vote dates** always visible
2. Hero: full name, office, slogan, one-sentence why, two CTAs, framed headshot
3. Vision: one campus sentence + **three named pillars** (cards that jump to platform)
4. Why I’m running: 3–4 paragraphs + campus photo grid
5. Platform: same three pillars, each a list of concrete commitments
6. About: résumé proof + one “I was there” photo
7. Closer: vote ask + dates
8. Footer: slogan + email

**Hero / slogan pattern:** name → *for* → office → slogan (“Building a brighter future for you”) → one lede sentence. Primary CTA is the platform, not the ballot. Secondary CTA is an **in-person event** (Partiful picnic).

**Three-pillar machine:** Opportunity / Unity / Community. Each pillar has (a) a one-line promise on the vision cards and (b) 4–6 bullet commitments. Verbs: advocate, demand, champion, ensure, implement, explore.

**Copy types present**

| Slot | What they wrote (paraphrase of function) |
|------|------------------------------------------|
| Meta title/description | Name + office + pillars + slogan + dates |
| Brand lockup | “Robbie for Cornell Tech” |
| Office line | Full official title |
| Slogan | Repeated in hero, closer, footer |
| Why paragraph | Mission of the school → I will get resources/policies/spaces |
| Named problems | Immigration policy, job market, isolation |
| Platform bullets | Mix of hard asks (career resources, student union, legal clinics) and soft explores (nap pods) |
| Bio | Two prestige jobs as proof of *how* he works, not a campus record |
| Vote closer | Dates + “bring a classmate” |
| Contact | Cornell email only |

**Pictures (6 JPEGs, inlined)**

| # | Role | Subject |
|---|------|---------|
| 1 | Hero headshot | Formal portrait, white frame on blue |
| 2–5 | “Why” mosaic | Campus/community: outdoor table, Tata ticker, Mets game, classroom group — **students, not the candidate** |
| 6 | About | Candidate + President Biden / WH press team, with caption |

CSS also defines an unused **life gallery** and **3 credential chips** — they designed for more photos and a stats row than they shipped.

**Campaign mechanics on the page:** vote window, event RSVP, email. No donate, no endorsements, no opponent, no FAQ, no volunteer form.

**What this site is doing rhetorically:** US campaign-poster look (Cornell-adjacent blue + orange, Anton condensed type, chevrons). Trust comes from **White House / Accountable Tech** plus **pictures of the campus tribe**. The school’s own promise (“brighter future”) is borrowed as the slogan. Pillars are broad enough that almost any student can find themselves; specificity lives only in the accordion bullets.

**Steal for our kit (structure, not voice):** one page; name + office + dates above the fold; 3 pillars that map 1:1 to platform; why + proof; campus photos vs résumé photo; one in-person ask; one vote ask.

**Interrogate later (do not copy blindly):** “brighter future” as glue; pillar names that sound like every campaign; prestige bio vs local proof; unused gallery/creds; how much is a real commitment vs “explore.”

### R2 — [Ayomide /ctsg](https://www.ayomideoribamise.com/ctsg) (2026-08-28)

Same office and calendar as R1: **CTSG Professional Co-President**, campaign **Aug 26–Sep 1**, vote **Sep 2–5** (results Sep 8). **Not a separate campaign domain** — a `/ctsg` route on his personal site (about / work / writing / contact stay in the same nav). Media kit at `/ctsg/media`. Page dated **Aug 25, 2026**.

**Information architecture**

1. Site chrome (personal) + **campaign subnav:** Why / Priorities / How it would work / Candidate / Election
2. Hero: slogan as H1, diagnosis paragraph, “read why,” dates, name + MBA + office + **campaign portrait**
3. Why: name etymology → listening this summer → programs are not one experience → expandable Statement of Interest
4. Thesis line: **Connect earlier. Represent better. Leave something behind.**
5. Platform as three named jobs: **From Day One** / **One Cornell Tech** / **Close the loop**
6. Continuity: institutional memory + one CTSG website (audit → consolidate → maintain) + links to live vs legacy sites
7. Representation model: student → program rep → owners → status (diagram)
8. Issue intake form (optional program, optional email, **anonymous allowed**)
9. First 100 days: 30 / 60 / 100
10. Candidate: short bio + speaking photo + link to `/about`
11. Election mechanics + WhatsApp share + media kit

**Slogan / thesis (specific, not borrowed school language)**

- Headline: *One Cornell Tech. From Day One.*
- One-liner: *Connect earlier. Represent better. Leave something behind.*
- Diagnosis: too much time spent figuring out who to ask, where opportunities are, how to get heard

**Platform is operational, not vibe**

| Pillar | Job | Specifics |
|--------|-----|-----------|
| From Day One | Make CTSG useful earlier | Find opportunities, find the owner, incoming-student start, stop rediscovering answers |
| One Cornell Tech | Cross programs without killing them | Named formats: Cornell Tech Tables, Teach Me Something, Open the Network |
| Close the loop | Visible ownership | Heard → Assigned → In progress → With Cornell → Resolved/closed. Explicit limit: cannot promise every answer students want |

Plus a **process layer** Robbie does not have: 30/60/100-day plan, issue router, website consolidation with named existing URLs (`ctsg.tech.cornell.edu`, `ilovecornelltech.com`).

**Copy / collateral types R1 did not have**

- Expandable **Statement of Interest** (official filing voice vs campaign-page voice)
- **OG/share image** (1200×630) and `/ctsg/media` with approved language + portrait PNG; poster/PDF/video/ballot marked TBD
- **WhatsApp share** with slogan + URL prefilled
- **Ballot placeholder** (“link will be added when available”)
- **Current phase** chip (Campaigning)
- **How the vote works:** 70% campus-wide student vote · 30% weighted Program Representative vote
- Intake form as campaign *and* as a demo of “close the loop”

**Pictures (few, of him, not of the tribe)**

| Asset | Role |
|-------|------|
| `ayomide-ctsg.jpg` | Campaign portrait (hero) |
| `ayomide-speaking.jpg` | Proof of work (Kquika / presenting) |
| Open Graph PNG | Link-unfurl / poster-adjacent |
| Media kit portrait | Print/share |

Personal `/about` holds the long story (Nigeria → Belgorod student president → Kansas → Kquika → Cornell). Campaign page only **points** there.

**Rhetorically:** sounds like an operator / institution-builder. Trust from **listening this summer**, **named mechanisms**, **honest constraint**, **prior student-community presidency** — not from celebrity adjacency. Visual system is his personal site, not a blue/orange poster.

**Steal:** campaign as a route on the existing site; slogan that names a diagnosis; thesis in three verbs; named programs; 100-day plan; how-it-works diagram; media kit page that poster copy is generated from; election mechanics; intake that matches the platform.

**Interrogate later:** density (this is a briefing, not a 10-second poster); whether “systems/continuity” moves a tired voter; two-photo-only vs campus belonging; form without a public “what I heard” log yet; Statement of Interest collapsed (easy to skip).

### R1 vs R2 (same race)

| | Robbie (R1) | Ayomide (R2) |
|--|-------------|--------------|
| Container | Dedicated campaign site | `/ctsg` on personal site |
| Slogan | School language, generic | Diagnosis of Cornell Tech |
| Pillars | Opportunity / Unity / Community | Usefulness / crossing programs / closing loops |
| Specificity | Long “I will advocate” lists | Named formats + pipeline + 100 days |
| Photos | Campus groups + White House | Two portraits of him |
| Proof | Prestige résumé | Listening + prior student leadership + company |
| Ask | Picnic + vote dates | Form + WhatsApp + vote + media kit |
| Collateral | Implied (the page *is* the poster) | Explicit media page; assets still incomplete |

Both teach: **name, office, dates, slogan, why, 3 priorities, bio, vote.** They disagree on whether the page should feel like a **poster** or a **governing memo**. Siddhesh’s instruction (2026-08-28): do not get stuck on that fork yet — ship a campaign page on this domain, use the name as the campaign, swap onto `/` later.

### What each does better (R1 vs R2)

**Robbie is better at**

- Instant recognition (name, office, dates, headshot in one screen)
- Poster-to-web: type and color could print tomorrow
- Feeling like *this campus* (group photos)
- A social ask besides voting (picnic)
- Light cognitive load

**Ayomide is better at**

- Using his **name/site** as the campaign (exactly the container we want)
- A slogan that is a diagnosis, not school marketing
- Specific mechanisms, 100-day plan, how CTSG actually works
- Honest limit + issue form that matches the pitch
- Media kit so poster/share copy is not a second story
- Election mechanics (70/30) and phase/dates
- After-election: delete `/ctsg`, personal site remains

**Build direction (source — Siddhesh, 2026-08-28):** Robbie’s path. He does not have (and does not want to invent) an Ayomide-style governing plan. Page shape = name, office, dates, slogan, three pillars, short why, bio, photos, vote. Hosting still this domain, extra route, reversible. Do not add 100-day plan, issue router, or intake form unless asked.

### Wider candidate sites (source, 2026-08-28)

Same jobs at every scale: **name + office, one sentence, platform, bio, ask, shareable look.** Scale changes the ask.

| Site | Pattern | Relevant to us |
|------|---------|----------------|
| [zohranfornyc.com](https://zohranfornyc.com/) (Mamdani) | Name-for-place lockup. Hero is slogan + email/SMS. Meet / volunteer / platform. After winning, URL stays a movement/donate shell; governing is nyc.gov. | Steal: one job sentence, name as brand, platform as its own object. Skip: donate, SMS, volunteer army. |
| Archive of same (Jun–Jul 2025) | Explicit: *running for Mayor to lower the cost of living*; Meet Zohran (Uganda → NYC + receipts); join a canvass; link out to full issues. | Steal: bio as proof of *how he fights*, 3–4 concrete promises in the hero story. |
| [ocasiocortez.com](https://www.ocasiocortez.com/) | Splash → list capture, then district, voices, **record of wins**, take action. | Steal later if we have a record. Skip splash gate. |
| Typical Bernie / national | Issues mega-nav, events map, donate always visible, newsroom. | Too much machine for CTSG. One page + media kit is enough. |

**Student-gov vs city campaign:** no money, no volunteer field program. The ask is **vote + bring a classmate + share**. Mamdani/AOC teach *clarity of the sentence* and *name as the URL*, not their stack.

## Identity

- Legal / formal first name: **Siddhesh** (site and repo; spoken dump once said “Sidhesh” — treat as STT)
- Campaign name: **Sid Darak**
- Full name on ballot-style lines: **Siddhesh Darak**
- How to be addressed: Sid
- Affiliation / role today: Cornell Tech — MS Applied Information Science & Information Systems (Health Tech). NYC since 2025.
- Location: NYC / Cornell Tech
- Undergrad: **NMIMS University, MPSTME Shirpur**, B.Tech Computer Engineering, **2020–2024**, 3.89/4. **General Secretary 2022–2023** (3rd year), MPSTME student council, **1,800 students**. “Campus representative” is the same office; public copy uses General Secretary.
- Also published (not in spoken dump): President, UAS NMIMS (Jun 2020 – May 2024); President, “saturday 10AM@NMIMS” industry sessions (Aug 2021 – May 2024); Corporate relations head, Protsahan’23.

## Office / race

- Position standing for: **Communications Chair**
- Body: Cornell Tech Student Government (he said “CTSD” once — treat as CTSG unless he corrects)
- Constituency: Cornell Tech master’s and PhD students (no undergrads on this campus — his point)
- Timeline: **Vote September 2–5** (same window as Co-President; campaign week likely Aug 26–Sep 1). Results date unknown.
- Why this race (in his words): already done the job at undergrad scale; Cornell Tech’s identity in NYC is unfinished; comms should be the campus voice and a lower-friction way to reach student government; also mailbox, broadcasts, planning committee.

## Source dump — Siddhesh, spoken, 2026-08-28

**Already done this (undergrad)**

- Campus representative for ~2,000 students: accountability for what they need, talk to administration.
- Knows how hard it is to go back and forth with admin: persuade them, create opportunities, create a platform.
- Organized events as **campus general secretary** in undergrad.
- Frame: fit for this office because he has already held a version of it.

**Cornell Tech identity**

- Loves the campus; beautiful school.
- Still lives inside the identity of Cornell (Ithaca / “mother campus”).
- At NYC networking, “I’m from Cornell” → people hear Ithaca.
- School is new; he wants to be part of establishing what Cornell Tech *is*.
- Comparison he used: people know Stanford, MIT, Berkeley; he thinks Cornell Tech can compare and beat them in a few years.
- Marketing: university is doing a great job; he does **not** want to question that. As Communications Chair he still wants to work toward the identity being better understood.

**The job as he understands it**

- Handle Cornell mailbox from student government.
- Broadcast event details and requests from Student Affairs.
- Work with the planning committee often.
- Also: be the voice that represents the campus at large.
- Create a more accessible channel for students to voice opinions. A channel exists; students are not very active or comfortable reaching CTSG — there is friction.
**Published site (source — `/about`, `/projects`, `/`)**

Do not treat research papers as campaign proof. They stay on the personal site. Campaign uses the **student-leadership block** and the Cornell/NYC timeline.

Timeline that matters for the race:

| When | Fact |
|------|------|
| 2020–2024 | B.Tech Computer Engineering, NMIMS MPSTME Shirpur. Joined UAS NMIMS. |
| Jun 2020 – May 2024 | President, UAS NMIMS (drone R&D club) |
| Aug 2021 – May 2024 | President, saturday 10AM@NMIMS (industry engagement — this is comms/events) |
| 2022–2023 | General Secretary (spoken; 3rd year). Not listed by that title on `/about`. |
| (undated on site) | Campus representative, MPSTME student council, **1,800 students** |
| 2023 | Corporate relations head, Protsahan’23 (fest) |
| 2024 | Graduated; ZS Associates Pune (incentive compensation, pharma) |
| 2025 | Left ZS; moved to NYC; started Cornell MS (AIS + Health Tech) |

Home currently: “Siddhesh Darak / researcher · cornell ms · nyc”. Campaign name split (Sid vs Siddhesh) is a change from the live personal home — only on `/campaign` until we swap.

**Title lock:** General Secretary = campus representative. Public copy uses General Secretary only.

## Source material

Links, documents, notes, and quotes go here with date and what they are for.

| Date | Type | Source | Notes |
|------|------|--------|-------|
| 2026-08-28 | Reference site | https://robbie-for-cornelltech.netlify.app/ | CTSG Professional Co-President. See R1. |
| 2026-08-28 | Spoken dump | This hub chat | Undergrad GS/rep; identity vs Ithaca; Comms Chair duties + friction to CTSG. See dump above. |
| 2026-08-28 | Spoken dump | This hub chat | Undergrad 2020–24; GS 2022–23 (3rd yr, corrected); vote Sep 2–5; name: Sid Darak + Siddhesh Darak. |
| 2026-08-28 | Published site | `/about`, `/projects`, `/` | NMIMS MPSTME; 1,800-student council; UAS + saturday 10AM presidencies; Cornell MS 2025; lab. |

## Voice and framing (working)

- How he actually talks: first-person, concrete (2,000 students, mailbox, networking mix-up). Warm about the school. Frustrated by friction, not by the institution.
- What we will not sound like: attacking Cornell marketing; Co-President platforms (careers, nap pods, legal clinics); “I have dedicated my life.”
- Claims we can make (if we keep them modest): NMIMS MPSTME, 2020–24; General Secretary of the student council, 1,800 students (2022–23); UAS president 2020–24; saturday 10AM president 2021–24; Protsahan’23 corporate relations; Cornell Tech MS since 2025; Communications Chair; vote Sep 2–5.
- Claims we must not make: papers/drones as why to elect a comms chair; “beat Stanford”; that CTSG fails; Co-President; 2,000 students (site says 1,800).

### Draft framing (aligned with CAMPAIGN-COPY.md)

Order: **vision → why → platform → about.**

**Vision:** make it easier to find what’s happening, make room for more to happen, and help tell the student side beyond campus. Build on the work already happening.

**Platform:** (1) Find what’s happening (2) More to show up for (3) Tell the student side. Mailbox is part of the job, not a campaign plank.

**Credit:** last comms team; Cornell / Cornell Tech comms.

**Slogan:** none. Name, office, and vote dates carry the poster.

**Name system (draft — 2026-08-28)**

Same person, two registers. Robbie did “Robbie” in the bar and full name in the hero. We split **Sid** (how people know him) and **Siddhesh** (formal).

| Place | Use |
|--------|-----|
| Sticky bar / poster shout / “Vote ___” | **Sid Darak** |
| Hero display type (the big type) | **Sid Darak** |
| Hero subline, under the office | Siddhesh Darak · Communications Chair |
| About heading / meta title / footer legal | Siddhesh Darak |
| Browser title | Sid Darak for Communications Chair · Cornell Tech |
| URL | siddarak.com already *is* the Sid lockup |

Do not write “Sidhesh.” Do not put only “Sid” with no last name on a ballot-looking line.

**Hero lede (draft):** Make it easier to find what’s happening, make room for more to happen, and help tell the student side of this campus beyond it.

**Closer (draft):** Vote Sid Darak · Communications Chair · September 2–5

**About / bio (draft, from published facts)**

Sid Darak is an MS student at Cornell Tech (Applied Information Science, Health Tech). Before NYC he did Computer Engineering at NMIMS MPSTME, Shirpur (2020–2024), where he served on the student council (about 1,800 students), ran saturday 10AM industry sessions, led UAS NMIMS, and handled corporate relations for Protsahan’23.

Do not put ICIVC, YOLO, Lean, or ZS on the campaign about unless we need one “who is this person” line. ZS is optional color (left industry for Cornell / NYC).

## Site (working)

- Job of `/campaign`: one-page poster. Visitor knows name, office, dates, three promises, who he is, how to vote.
- Must-have: sticky vote dates, hero (name + office + city/campus photo), 3 pillars, why (short), about, vote closer, email
- Out of scope unless asked: 100-day plan, issue form, how-CTSG-works diagram, named programs, donate
- Primary action: vote (and maybe one in-person / share later)
- Hosting: new route; `/` unchanged until swap

## Collateral (working)

Poster, one-pagers, and other pieces pull copy from here — they do not invent a second story.

- Poster: headline, subhead, proof line, ask
- Other: TBD

## Open questions

- Cornell email vs Gmail on the page
- Campaign headshot (and whether `/my-profile.jpg` is allowed meanwhile)
- Campaign headshot approval for the hero
