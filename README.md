# Los Paisas Tires Shop — Website

Bilingual (EN/ES) marketing site for **Los Paisas Tires Shop** in West Palm Beach, FL.
Built with Next.js (App Router), TypeScript, Tailwind CSS, and Bun.

Optimized for **local SEO** and **Generative Engine Optimization (GEO)** so ChatGPT, Gemini, Perplexity, and Google AI Overviews can cite accurate NAP, hours, and services.

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

## Site URL / SEO (required for production)

`metadataBase`, sitemap, robots, JSON-LD `@id` / `url`, and absolute image URLs use:

```bash
NEXT_PUBLIC_SITE_URL=https://www.your-real-domain.com
```

**Must be the real production domain** for sitemap and schema to be correct. If unset, the app defaults to `https://www.lospaisastires.com` (placeholder — change when the real domain is ready).

### Generated / public SEO & GEO routes

| Path | Purpose |
|------|---------|
| `/sitemap.xml` | Home + `/blog` + `/es/blog` + all articles |
| `/robots.txt` | Allow `*` + explicit Allow for GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot, anthropic-ai, Bytespider, Applebot-Extended |
| `/llms.txt` | Machine-readable business summary for AI crawlers (NAP, hours, services, citation one-liners EN+ES) |
| `/manifest.webmanifest` | PWA-ish name, theme colors, icon |

Do **not** block AI crawlers.

## SEO / GEO checklist

### Traditional local SEO

- [x] Exact NAP in footer, location, FAQ, KeyFacts, schema
- [x] `LocalBusiness` JSON-LD as `TireShop` + `AutomotiveBusiness` + `LocalBusiness` (SSR via `JsonLd` in layout)
- [x] `openingHoursSpecification` 7 days 08:00–19:00 including Sunday
- [x] `aggregateRating` 4.4 / 276 (from GBP — do not invent reviews)
- [x] `sameAs` Instagram, Facebook, TikTok, Google Maps short URL
- [x] `areaServed` + `hasMap` + geo coordinates
- [x] FAQPage JSON-LD (EN answers SSR) + visible FAQ UI EN/ES
- [x] Article + BreadcrumbList JSON-LD on blog listing and posts
- [x] Sitemap + robots + canonical / hreflang on blog
- [x] Homepage `alternates.languages` en + es; OG/Twitter; `robots` index/follow + `googleBot`; `themeColor`; `metadataBase`
- [x] Services only: tires / alignment / balancing / repair / install / mobile 10 mi — **no** oil/brakes/A/C

### Generative Engine Optimization (GEO)

- [x] `public/llms.txt` with who/NAP/hours/services/area/key URLs + citation one-liners EN+ES
- [x] AI bots explicitly allowed in `robots.ts`
- [x] Homepage **KeyFacts** section: answer-first H2/H3 blocks, plain-text NAP & service bullets, “About this business”
- [x] FAQ answers self-contained with business name + city + phone
- [x] `hasOfferCatalog` / `makesOffer` + homepage Service JSON-LD
- [x] WebSite schema with publisher Organization
- [x] HowTo JSON-LD: “What to do if you get a flat tire on Sunday in West Palm Beach”
- [x] Quotable inverted-pyramid copy (neutral, fact-dense)

Skipped: `ai-plugin.json` (llms.txt is preferred; plugin not required).

## Features

- EN | ES language toggle (localStorage; default EN)
- Copy in `src/lib/i18n.ts`
- Sections: Hero, Trust bar, Services, Why us, Location + map, **KeyFacts**, Service-area SEO copy, FAQ, Contact, Footer NAP
- Blog: `/blog` + `/blog/[slug]` (EN) and `/es/blog` + `/es/blog/[slug]` (ES)
- Brand colors: bg `#0D0D0D`, gold `#F4C20D`, red `#E01E1E`
- Promo graphics use `object-contain` / intrinsic ratio (full graphic, no cropped headlines)
- Floating call button + language toggle preserved

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

Body in Markdown. Prefer an **answer-first first paragraph** with NAP when relevant. Optional **Key takeaways** list helps AI citation.
```

3. Rules:
   - `locale: en` → appears at `/blog` and `/blog/<slug>`
   - `locale: es` → appears at `/es/blog` and `/es/blog/<slug>`
   - `slug` must be unique within that locale
4. Rebuild or refresh the dev server. The sitemap picks up new posts automatically.

## Business facts (source of truth)

- **Name:** Los Paisas Tires Shop
- **Address:** 1114 S Military Trail, West Palm Beach, FL 33415
- **Phone / WhatsApp:** +1 561-429-4041 / `tel:+15614294041`
- **Hours:** 7 days, 8:00 AM – 7:00 PM (Sunday open)
- **Instagram / TikTok:** @tireshop_lospaisas
- **Facebook:** Tire Shop Los Paisas
- **Maps:** https://maps.app.goo.gl/cSra4sX7rxDgGtMV9
- **Catalogue:** https://catalogo-tireshoplospaisas.netlify.app/
- **GBP rating:** 4.4 stars, 276 reviews
- **Services only:** new & used tires, alignment, balancing (no hidden fees), tire repair/vulcanization, install customer tires, mobile within 10 miles
- **Not offered:** oil change, brakes, A/C

## Project structure

- `src/app` — App Router (layout, home, blog, sitemap, robots)
- `src/components` — UI sections + blog chrome + `KeyFacts` + `JsonLd`
- `src/contexts` — Language provider
- `src/lib` — i18n, business constants, blog loader, SEO helpers (`seo.ts`)
- `content/blog` — Markdown articles
- `public/brand` — decorative brand assets
- `public/llms.txt` — AI / GEO summary
- `public/manifest.webmanifest` — theme / install metadata
