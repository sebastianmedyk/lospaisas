# Los Paisas Tires Shop: design system

Source of truth for how the site looks. Tokens live in `tailwind.config.ts` and `src/app/globals.css`; components in `src/components`. Change a value there first, then update this file.

Principles: the look comes from the shop sign (black, yellow, red). Photos are real. Type is big and plain. Less text above the fold. One clear action: call or get directions.

## 1. Color

| Token | Value | Tailwind | Use |
|---|---|---|---|
| Base | `#0D0D0D` | `bg-brand-bg` | Page background. Always. |
| Surface | `#141414` | `bg-[#141414]` | Cards, bands. |
| Yellow | `#F4C20D` | `brand-gold` | Primary action, accents, headline highlight. |
| Red | `#E01E1E` | `brand-red` | "Used" tag, alerts, open-now dot, rules. Fills and large text only. |
| Red (text) | `#FF5A5A` | `brand-red-text` | Red text below 24px on black. A lighter tint of the brand red. |
| White | `#FFFFFF` | `text-white` | Headings and body text on black. Small accents only. Never a page or section background. |

White body text is `white/80` or `white/70`; secondary text never goes below `white/60`.

### Contrast (WCAG 2.1, computed from the hex values)

AA needs 4.5:1 for normal text, 3:1 for large text (24px, or 18.66px bold) and UI components.

| Foreground on background | Ratio | Verdict |
|---|---|---|
| Yellow on base `#0D0D0D` | 11.63 | AA and AAA |
| White on base | 19.44 | AA and AAA |
| `white/80` (#CFCFCF) on base | 12.48 | AA and AAA |
| `white/60` (#9E9E9E) on base | 7.25 | AA and AAA |
| `white/50` (#868686) on base | 5.34 | AA, minimum allowed for secondary text |
| Base on yellow (button text) | 11.63 | AA and AAA |
| Yellow on surface `#141414` | 11.03 | AA and AAA |
| White on red (Used tag) | 4.80 | AA |
| Red `#E01E1E` on base | 4.05 | Large text and UI only. Fails for small text. |
| Red `#E01E1E` on surface | 3.84 | Large text and UI only |
| Red text `#FF5A5A` on base | 6.35 | AA |
| White on yellow | 1.67 | Fail. Never use. |
| Yellow on red | 2.87 | Fail. Never use. |

Rules that follow: small red text uses `brand-red-text`; red as a fill carries white text; yellow fills carry black text; never put white text on yellow.

## 2. Typography

- Headings: **Barlow Condensed**, loaded weights 200 and 700, uppercase (`.headline`). Use 700 (`font-bold`) for headings; 200 is for large decorative text only.
- Body: **DM Sans**, 300 to 800. Body copy is 400, never 300 below 18px.
- Line height: body 1.6, long reading text 1.7, UI and small text 1.5. Headings 0.9 to 1.05.
- Scale: ratio 1.25 from 16px. Tailwind classes `text-s0` to `text-s7`.

| Class | rem | px | Use |
|---|---|---|---|
| `text-s0` | 1 | 16 | Body |
| `text-s1` | 1.25 | 20 | Lead paragraph, card title |
| `text-s2` | 1.5625 | 25 | H3 |
| `text-s3` | 1.953 | 31 | H2 mobile |
| `text-s4` | 2.441 | 39 | H2 desktop, H1 mobile |
| `text-s5` | 3.052 | 49 | H1 tablet |
| `text-s6` | 3.815 | 61 | H1 desktop |
| `text-s7` | 4.768 | 76 | Hero H1, large screens |

Small caps labels (`.section-label`, 10 to 12px, tracked uppercase) are decoration for a heading, never the only carrier of meaning.

One `<h1>` per page. Heading levels do not skip.

## 3. Spacing, radius, shadow

- Grid: 8px. Use Tailwind steps 2, 4, 6, 8, 10, 12, 16 (8 to 64px). 4px only inside tight UI.
- Section spacing (`.section-pad`): 56px mobile, 80px tablet, 96px desktop, 128px wide desktop.
- Container: `.container-site`, max 1152px, side gutter 16px mobile, 24px tablet, 32px desktop.
- Radius: 0. The shape language is the sign: square edges with 8px corner cuts (`cut-sm`) on buttons, 12px (`cut-md`) on cards. Avoid rounded pills.
- Shadows: none by default. The look is flat, edges are 1px `white/15` borders. `clip-path` cuts off box-shadows, so do not add them to cut elements. The mobile bar uses a 2px yellow top border instead of a shadow.
- Imagery: WebP only, from `public/photos`. `images.unoptimized` is on, so the file you ship is the file users download: hero photos use the lighter `HERO_LITE` copies (640/800px, under 100 KB). `object-cover`, dark gradient over text. Hero photo is the only `priority` image.

## 4. Interaction states

| Element | Default | Hover | Focus-visible | Active / disabled |
|---|---|---|---|---|
| Primary button (`.btn-gold`, hero Call) | Yellow fill, black text | Fill goes white, text black | 2px yellow ring, 2px offset | Brightness 95% |
| Secondary button (`.btn-outline`) | 1px `white/20` border, white text | Yellow fill, black text | Same ring | Same |
| Quiet button (`.btn-quiet`) | Border `white/15`, `white/70` text | `white/4` fill, white text | Same ring | Same |
| Text link | Yellow, underline on hover, 4px offset | Underline | Same ring | |
| Card link | 1px `white/15` border | Border yellow at 60%, image scale 105% | Same ring | |

- Every button and standalone link is at least 44 x 44px (`min-h-[44px]`, `min-w-[44px]`). Inline links inside a sentence are exempt.
- A global `:focus-visible` rule gives a 2px yellow outline to anything without its own ring. Never remove outlines.
- Motion: fade-up on load (0.7s), photo zoom on hero (2.2s), reveal on scroll (0.7s). All are off under `prefers-reduced-motion: reduce` (global rule in `globals.css`). Nothing animates layout.

## 5. Components

All in `src/components`. Pages are made only from these. If a page needs a new block, add it here first.

### Hero (`Hero.tsx`, inner pages: `PageHero.tsx`)
Full-bleed shop photo, dark gradient. Order: Google rating pill, H1, "Used Tires from $[CENA]" line, Call + Directions, open-today line. No founding year. The price comes from `USED_TIRE_PRICE_FROM` in `src/lib/constants.ts` and shows `$[CENA]` (EN) or `$[PRECIO]` (ES) until set. Inner pages use `PageHero`: breadcrumb, label, H1, intro, optional CTAs on a dimmed photo.

### InfoStrip (`InfoStrip.tsx`)
Yellow band under the hero: walk-ins welcome, Spanish, Creole, open 7 days. Black text on yellow. Two columns on mobile, one row from `md`.

### ServiceCards (`ServiceCards.tsx`)
New and Used as two large photo cards (New: yellow tag; Used: red tag with white text), then five service cards with a photo and a yellow top rule. Real photos only. Never a worn tire for Used. Layouts: `default`, `list`, `bento`, `index`.

### Reviews (`Reviews.tsx`)
Quotes from `src/lib/reviews.ts` only (6 EN on EN pages, 6 ES on ES pages). Stars in yellow, "Google review" in `brand-red-text`. No review schema. Layouts: `grid`, `featured`, `scroll`, `columns`.

### CTA (`CtaBand.tsx`, `CtaButtons.tsx`)
`CtaBand` closes every inner page: headline, phone, hours, address, Call + Directions + WhatsApp. `CtaButtons` is the shared button row (Call yellow fill, Directions outline, WhatsApp quiet).

### MobileBar (`MobileBar.tsx`)
Fixed to the bottom under 768px: Call (yellow), Directions, WhatsApp. 56px tall, respects the iOS safe area. `body` gets bottom padding so it never covers content.

## 6. Content rules

- NAP is exact: `1114 S Military Trl, West Palm Beach, FL 33415`, `(561) 429-4041`.
- No founding year anywhere. Prices only as the `$[CENA]` placeholder until the owner supplies one.
- Meta, JSON-LD and `reviews.ts` are not touched by design work.
- Preview routes `/preview/a|b|c` are EN only, `noindex`, and not in the sitemap. They are for choosing a direction and can be deleted.

## 7. Checklist for a new page

1. One H1, headings in order.
2. Starts with `PageHero` (or `Hero` on home), ends with `CtaBand`, inside `BlogShell`.
3. Phone CTA visible without scrolling on desktop (header) and mobile (MobileBar).
4. Real photo with descriptive `alt`, or `alt=""` if purely decorative.
5. No horizontal scroll at 360, 390, 768, 1024, 1440px.
6. Small text passes the contrast table above.
