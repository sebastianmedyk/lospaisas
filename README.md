# Los Paisas Tires Shop — Website

Bilingual (EN/ES) marketing site for **Los Paisas Tires Shop** in West Palm Beach, FL.
Built with Next.js (App Router), TypeScript, Tailwind CSS, and Bun.

## How to run

```bash
cd /workspace/lospaisas-site
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
bun run build
bun start
```

## Site URL / SEO

`metadataBase`, sitemap, and robots use:

```bash
NEXT_PUBLIC_SITE_URL=https://www.lospaisastires.com
```

If unset, the app defaults to `https://www.lospaisastires.com` (placeholder domain — change when the real domain is ready).

Generated routes:

- `/sitemap.xml` — home + `/blog` + `/es/blog` + all articles
- `/robots.txt`

Homepage includes **LocalBusiness / AutomotiveBusiness** JSON-LD and **FAQPage** JSON-LD (English answers in SSR). Blog articles include **Article** JSON-LD.

## Features

- EN | ES language toggle (localStorage; default EN)
- Copy in `src/lib/i18n.ts`
- Sections: Hero, Trust bar, Services, Why us, Location + map, Service-area SEO copy, FAQ, Contact, Footer NAP
- Blog: `/blog` + `/blog/[slug]` (EN) and `/es/blog` + `/es/blog/[slug]` (ES)
- Brand colors: bg `#0D0D0D`, gold `#F4C20D`, red `#E01E1E`
- Promo graphics use `object-contain` / intrinsic ratio (full graphic, no cropped headlines)

## How to add a blog post

1. Create a Markdown file in `content/blog/` (any filename ending in `.md`).
2. Add frontmatter:

```yaml
---
title: "Your title"
description: "Meta description for SEO (1–2 sentences)."
date: "2026-09-05"
locale: en   # or es
slug: your-url-slug
keywords:
  - optional keyword one
  - optional keyword two
---

## Heading

Body in Markdown. Links, lists, and **bold** work.
```

3. Rules:
   - `locale: en` → appears at `/blog` and `/blog/<slug>`
   - `locale: es` → appears at `/es/blog` and `/es/blog/<slug>`
   - `slug` must be unique within that locale
4. Rebuild or refresh the dev server. The sitemap picks up new posts automatically.

## Business facts (source of truth)

- **Address:** 1114 S Military Trail, West Palm Beach, FL 33415
- **Phone / WhatsApp:** +1 561-429-4041
- **Hours:** 7 days, 8:00 AM – 7:00 PM (Sunday open)
- **Instagram:** https://instagram.com/lospaisaswpb
- **Services only:** new & used tires, alignment, balancing (no hidden fees), tire repair/vulcanization, install customer tires, mobile within 10 miles
- **Not offered:** oil change, brakes, A/C

## Project structure

- `src/app` — App Router (layout, home, blog, sitemap, robots)
- `src/components` — UI sections + blog chrome
- `src/contexts` — Language provider
- `src/lib` — i18n, business constants, blog loader, SEO helpers
- `content/blog` — Markdown articles
- `public/brand` — decorative brand assets
