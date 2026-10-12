# Tiwa 'N' Tiwa — Website Pitch Plan

Target: Tiwa 'N' Tiwa, Nigerian (Yoruba) restaurant, 34 Peckham High St, London SE15 5DP.
Goal: build a pitch-ready demo site that wins them as a paying client.

## 1. What they have today (research, 12 Oct 2026)

| Item | Finding |
|---|---|
| Website | `tiwa-n-tiwa.menu-world.com` — a third-party template on a subdomain, not their own domain. Sits behind a Cloudflare challenge. Has a "book a table" flow. |
| Own domain | None found. Directories list "facebook.com" or nothing as the website. |
| Social | No Instagram / TikTok found via search (confirm in person; likely exists under a different handle). |
| Google rating | 4.3 / 5, ~235 reviews |
| Press | The Infatuation 7.4 ("Good") — suya, jollof, beef ayamase called out. Harden's listed, no write-up. |
| Delivery | Two Uber Eats listings (duplicate stores = messy). Suya £15.99, jollof + 2 meats £12.99. |
| Hours | Mon–Thu 12–23:00, Fri–Sat 12–00:00, Sun 12–22:00 (consistent across 3 directories) |
| Phone | +44 7448 963313 |
| Menu | Suya, eja tutu (tilapia), pounded yam, amala, moinmoin, egusi, ayamase, pepper soup, rice & beans, assorted meats. No official menu online anywhere. |
| Vibe | Casual canteen, big screen playing music videos / football, outdoor suya grill on nice days, Guinness Foreign Extra. Big groups, families, solo diners. |

Gaps that hurt them: no own domain, no photos online, no official menu, inconsistent address (34 / 34A / 34B), duplicate Uber Eats stores, no SEO presence for "Nigerian restaurant Peckham" / "suya Peckham".

## 2. Pitch angle

Not "your site is bad". Instead: "You already have 235 reviews and a press write-up. Nothing online shows that. Here's what it could look like."

Three promises:
1. A site that looks as good as the food — photos, menu, story, mobile-first.
2. Reservations still work day one (keep their existing booking flow or embed a free one).
3. Found on Google for "Nigerian food Peckham" / "suya Peckham" — own domain, Google Business linked.

## 3. What to show them first (the demo)

Build ONE page, live on a free URL (Vercel/Netlify), viewable on a phone when you walk in.

Sections, top to bottom:
1. **Hero** — full-bleed food image, name, "Authentic Yoruba cooking in the heart of Peckham", two buttons: Book a table / Order delivery.
2. **Signature dishes** — 4–6 cards: Beef Suya, Jollof, Ayamase, Eja Tutu, Pounded Yam & Egusi, Pepper Soup.
3. **Proof strip** — "4.3★ · 235 Google reviews" + Infatuation quote + 2 Google review quotes (Scarlett: "The suya and ayamase are unmatched elsewhere").
4. **The place** — short story paragraph, the big-screen/outdoor grill atmosphere, "good for groups" note.
5. **Menu preview** — sections with prices from Uber Eats as placeholders, marked "to confirm".
6. **Visit** — hours table, map embed, phone (tap to call), WhatsApp link, address.
7. **Footer** — delivery links (Uber Eats, Deliveroo if present), Instagram placeholder.

Design direction: dark warm palette (charcoal + burnt orange/ suya-red + gold accents), bold display type, big photography. Must look premium on a phone first.

Photos: use clearly-labelled placeholder food images for the demo and say so; the real win is swapping in 10–15 shots of their actual dishes (offer to shoot on a phone during the visit).

Also prepare a **one-page audit** (PDF or second tab): current site screenshot vs. mockup, side by side, plus the gap list above. Takes 20 minutes and makes the pitch concrete.

## 4. Tech approach (keep it simple, cheap to host)

- Static site: plain HTML + Tailwind (or Astro if you want components). No CMS for the demo.
- Hosting: Vercel or Netlify free tier; later point `tiwantiwa.co.uk` / `.london` at it (~£10/yr).
- Booking: Phase 1 link to their existing menu-world booking URL. Phase 2 offer a cleaner option (e.g. free tier of a booking tool, or phone/WhatsApp). Confirm what they actually use first.
- Menu: JSON file → rendered cards, so updates are a one-line edit. Later: a tiny admin or Google Sheet if they want to edit themselves.
- SEO basics baked in: Restaurant schema.org JSON-LD (hours, menu, geo), meta tags, OG image, sitemap, fast Lighthouse score.
- Analytics: Plausible or GA4.

## 5. Things to confirm with them (don't guess in the final build)

- Exact menu + prices, and what sells most.
- Who runs the menu-world site, what it costs them, and what booking tool is behind it.
- Instagram handle, Deliveroo/Just Eat presence.
- Correct address unit (34 / 34A / 34B).
- Owner story: who are Tiwa 'N' Tiwa, since when, where the recipes come from.
- Do they take group bookings / events / catering (good upsell section).

## 6. Suggested offer

- Build: fixed fee (e.g. £400–800 for a small restaurant site, adjust to your market).
- Care plan: £25–40/month — hosting, domain, menu updates, Google Business tidy-up.
- Sweetener: "Demo already built, pay only when you like it."

## 7. Timeline

| Day | Work |
|---|---|
| 1 | Build demo page (sections above), deploy to free URL |
| 1 | One-page audit: current vs. proposed |
| 2 | Walk in / message with the link + audit. Ask the confirm-list questions. |
| 3–7 | On yes: shoot photos, real menu, domain, booking, SEO, Google Business |
| 8 | Launch, hand over, start care plan |

## 8. Repo layout (once we start building)

```
/index.html          demo page
/assets/img/         placeholder → real photos
/data/menu.json      menu source
/pitch/audit.md      one-page audit for the owner
```
