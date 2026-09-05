# Los Paisas Tires Shop — Website

Bilingual (EN/ES) marketing site for **Los Paisas Tires Shop** in West Palm Beach, FL.
Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## How to run

```bash
cd /workspace/lospaisas-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Features

- EN | ES language toggle (persisted in localStorage, default EN)
- All copy in i18n dictionaries (`src/lib/i18n.ts`)
- Sections: Hero, Trust bar, Services, Why us, Location + Google Maps, Contact, Footer NAP
- Brand colors: bg `#0D0D0D`, gold `#F4C20D`, red `#E01E1E`
- Brand promo images in `public/brand/`

## Business facts (source of truth)

- **Address:** 1114 S Military Trail, West Palm Beach, FL 33415
- **Phone / WhatsApp:** +1 561-429-4041
- **Hours:** 7 days, 8:00 AM – 7:00 PM (Sunday open)
- **Instagram:** https://instagram.com/lospaisaswpb

## Project structure

- `src/app` — App Router layout & page
- `src/components` — UI sections
- `src/contexts` — Language provider
- `src/lib` — i18n + business constants
- `public/brand` — decorative brand assets
