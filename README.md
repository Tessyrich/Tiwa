# Tiwa 'N' Tiwa — website

Demo website for Tiwa 'N' Tiwa, a Nigerian (Yoruba) restaurant at 34 Peckham High Street, London SE15 5DP.
Built as a pitch: a modern, light, mobile-first site to replace the current third-party template page.

## Stack

- [Astro 5](https://astro.build) — static output, zero JS by default
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- Fonts: Fraunces (display) + Inter (text) from Google Fonts
- No CMS yet. Content lives in `src/data/menu.json` and `src/data/site.json`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview
```

## Deploy

Static output, so any host works. Fastest path:

```bash
npx vercel          # or: npx netlify deploy --prod --dir=dist
```

Set `site` in `astro.config.mjs` to the final domain before launch so canonical URLs and the schema.org data are right.

## Project layout

```
src/
  data/site.json      name, address, phone, hours, booking + delivery links
  data/menu.json      menu sections and items (prices flagged indicative)
  layouts/Base.astro  <head>, SEO meta, Restaurant JSON-LD, header/footer
  components/         Header, Footer, MenuList (dotted-leader menu lists)
  pages/index.astro   home
  pages/menu.astro    full menu
  pages/credits.astro photo attributions
public/img/           photography (see credits page for licences)
```

## Before this goes live for the client

- [ ] Replace the AI-generated placeholder photography with the restaurant's own dishes and room (15 shots)
- [ ] Confirm menu items and prices with the owner
- [ ] Confirm booking provider and swap `bookingUrl` if needed
- [ ] Add Instagram handle and Deliveroo / Just Eat links if they exist
- [ ] Confirm address unit (34 vs 34A) and the "ours and ours" name meaning
- [ ] Buy domain, point at host, update `site` in `astro.config.mjs`
- [ ] Wire the footer newsletter form to a real list (Mailchimp or similar), currently a demo stub
