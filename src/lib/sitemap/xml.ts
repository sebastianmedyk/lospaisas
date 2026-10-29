import { SITE_URL } from "@/lib/site";
import { sitemapEntries, type SitemapEntry, type SitemapSection } from "./entries";

export const SITEMAP_SECTIONS: SitemapSection[] = ["pages", "services", "blog"];

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const day = (d: Date) => d.toISOString().slice(0, 10);

const HEAD = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n`;

function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

const latest = (entries: SitemapEntry[]) =>
  entries.map((e) => e.lastModified).filter((d): d is Date => !!d).sort((a, b) => +b - +a)[0];

/** Sitemap index (Yoast-style) listing one child sitemap per section. */
export function sitemapIndexResponse(): Response {
  const all = sitemapEntries();
  const items = SITEMAP_SECTIONS.map((section) => {
    const mod = latest(all.filter((e) => e.section === section));
    return [
      "  <sitemap>",
      `    <loc>${SITE_URL}/sitemap-${section}.xml</loc>`,
      ...(mod ? [`    <lastmod>${day(mod)}</lastmod>`] : []),
      "  </sitemap>",
    ].join("\n");
  });
  return xmlResponse(
    `${HEAD}<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.join("\n")}\n</sitemapindex>\n`,
  );
}

/** Child sitemap for one section, with hreflang alternates. */
export function sitemapSectionResponse(section: SitemapSection): Response {
  const items = sitemapEntries()
    .filter((e) => e.section === section)
    .map((e) =>
      [
        "  <url>",
        `    <loc>${esc(e.url)}</loc>`,
        ...(e.lastModified ? [`    <lastmod>${day(e.lastModified)}</lastmod>`] : []),
        `    <changefreq>${e.changeFrequency}</changefreq>`,
        `    <priority>${e.priority}</priority>`,
        ...Object.entries(e.languages).map(
          ([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${esc(href)}" />`,
        ),
        "  </url>",
      ].join("\n"),
    );
  return xmlResponse(
    `${HEAD}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${items.join("\n")}\n</urlset>\n`,
  );
}
