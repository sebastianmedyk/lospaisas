import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

export type LocalLink = { href: string; label: string };

export type LocalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  nap?: boolean;
};

export type LocalFaq = { question: string; answer: string };

export type LocalPage = {
  path: string;
  enPath: string;
  esPath: string;
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
};

const DIR = path.join(process.cwd(), "content", "pages");

export function getAllLocalPages(): LocalPage[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(fs.readFileSync(path.join(DIR, file), "utf8")) as LocalPage)
    .sort((a, b) => a.path.localeCompare(b.path));
}

export function getLocalPage(urlPath: string): LocalPage | undefined {
  return getAllLocalPages().find((page) => page.path === urlPath);
}

export function localPageMetadata(page: LocalPage): Metadata {
  const url = absoluteUrl(page.path);
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: {
      canonical: page.path,
      languages: {
        en: page.enPath,
        es: page.esPath,
        "x-default": page.enPath,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      url,
      locale: page.locale === "es" ? "es_US" : "en_US",
      alternateLocale: page.locale === "es" ? "en_US" : "es_US",
      siteName: "Los Paisas Tires Shop",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
