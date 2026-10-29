import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { groupForPath, languageAlternates, OG_LOCALE, LOCALES, type LocalePaths } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

export type LocalLink = { href: string; label: string };

export type LocalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  nap?: boolean;
};

export type LocalFaq = { question: string; answer: string };

/** Shape stored in content/pages/*.json (the language siblings come from lib/routes). */
export type LocalPageFile = Omit<LocalPage, "paths">;

export type LocalPage = {
  path: string;
  /** Same page in every language, derived from lib/routes. */
  paths: LocalePaths;
  locale: Locale;
  kind: "service" | "city";
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  sections: LocalSection[];
  faqHeading: string;
  faqs: LocalFaq[];
  moreHeading: string;
  serviceName: string;
  areaServed: string[];
  links: LocalLink[];
  parentPath?: string;
  parentLabel?: string;
  /** Optional meta keywords for this page only. */
  keywords?: string[];
  /** Date of the last real content update (YYYY-MM-DD), used for the sitemap. */
  updated?: string;
};

const DIR = path.join(process.cwd(), "content", "pages");

export function getAllLocalPages(): LocalPage[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const data = JSON.parse(fs.readFileSync(path.join(DIR, file), "utf8")) as LocalPageFile;
      const paths = groupForPath(data.path);
      if (!paths) throw new Error(`content/pages/${file}: ${data.path} is not in lib/routes PAGE_GROUPS`);
      return { ...data, paths };
    })
    .sort((a, b) => a.path.localeCompare(b.path));
}

export function getLocalPage(urlPath: string): LocalPage | undefined {
  return getAllLocalPages().find((page) => page.path === urlPath);
}

/** Static params for a locale's service ([slug]) or city ([slug]/[city]) route. */
export function localParams(locale: Locale, kind: LocalPage["kind"]) {
  return getAllLocalPages()
    .filter((page) => page.locale === locale && page.kind === kind)
    .map((page) => {
      const parts = page.path.split("/").filter(Boolean);
      return kind === "city"
        ? { slug: parts[parts.length - 2], city: parts[parts.length - 1] }
        : { slug: parts[parts.length - 1] };
    });
}

export function localPageMetadata(page: LocalPage): Metadata {
  const url = absoluteUrl(page.path);
  return {
    title: { absolute: page.title },
    description: page.description,
    ...(page.keywords?.length ? { keywords: page.keywords } : {}),
    alternates: {
      canonical: page.path,
      languages: languageAlternates(page.paths),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      url,
      locale: OG_LOCALE[page.locale],
      alternateLocale: LOCALES.filter((l) => l !== page.locale).map((l) => OG_LOCALE[l]),
      siteName: "Los Paisas Tires Shop",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
