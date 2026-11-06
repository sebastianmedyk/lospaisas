import { Barlow_Condensed, DM_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import { localBusinessJsonLd, webSiteJsonLd } from "@/lib/seo";
import { HTML_LANG, type Locale } from "@/lib/routes";
import "@/app/globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin", "latin-ext"],
  // Only weights used in UI (body 300, text 400/600/700/800). Dropping unused 500 cuts a render-blocking font file.
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
});

const displayFont = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  // .headline defaults to font-extralight (200); many headings override with font-bold (700).
  weight: ["200", "700"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["Impact", "Arial Black", "sans-serif"],
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
    { media: "(prefers-color-scheme: light)", color: "#F4C20D" },
  ],
  colorScheme: "dark",
} as const;

/** <html>/<body> shell shared by the ES, EN and PL root layouts. */
export default function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={HTML_LANG[locale]} className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
