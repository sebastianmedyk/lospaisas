import type { Metadata } from "next";
import { translations } from "@/lib/i18n";
import { pl } from "@/lib/i18n-pl";
import { getPost } from "@/lib/blog";
import {
  BLOG_SLUGS,
  blogPath,
  homePath,
  languageAlternates,
  LOCALES,
  OG_LOCALE,
  servicesPath,
  type Locale,
  type LocalePaths,
} from "@/lib/routes";
import { absoluteUrl, SITE_URL } from "@/lib/site";

const SITE_NAME = "Los Paisas Tires Shop";
const OG_IMG = { url: "/brand/promo-sunday.jpg", width: 1200, height: 900 } as const;
const HOME_META = { es: translations.es.meta, en: translations.en.meta, pl: pl.meta };

const others = (l: Locale) => LOCALES.filter((x) => x !== l).map((x) => OG_LOCALE[x]);

function pageMeta(input: {
  locale: Locale;
  paths: LocalePaths;
  title: string;
  absolute?: boolean;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogAlt: string;
  type?: "website" | "article";
  publishedTime?: string;
  keywords?: readonly string[];
}): Metadata {
  const path = input.paths[input.locale];
  const ogTitle = input.ogTitle ?? input.title;
  const ogDescription = input.ogDescription ?? input.description;
  return {
    title: input.absolute ? { absolute: input.title } : input.title,
    description: input.description,
    ...(input.keywords?.length ? { keywords: [...input.keywords] } : {}),
    alternates: { canonical: path, languages: languageAlternates(input.paths) },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: input.type ?? "website",
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      url: absoluteUrl(path),
      locale: OG_LOCALE[input.locale],
      alternateLocale: others(input.locale),
      siteName: SITE_NAME,
      images: [{ ...OG_IMG, alt: input.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMG.url],
    },
  };
}

const all = (fn: (l: Locale) => string): LocalePaths => ({ es: fn("es"), en: fn("en"), pl: fn("pl") });

/** Defaults for a locale's root layout. */
export function baseMetadata(locale: Locale): Metadata {
  const m = HOME_META[locale];
  const ogAlt = {
    es: "Los Paisas Tires Shop — abierto el domingo en S Military Trl, West Palm Beach",
    en: "Los Paisas Tires Shop — open Sunday on S Military Trl, West Palm Beach",
    pl: "Los Paisas Tires Shop — otwarte w niedzielę przy S Military Trl, West Palm Beach",
  }[locale];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: m.title, template: "%s | Los Paisas" },
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      type: "website",
      locale: OG_LOCALE[locale],
      alternateLocale: others(locale),
      siteName: SITE_NAME,
      url: absoluteUrl(homePath(locale)),
      images: [{ ...OG_IMG, alt: ogAlt }],
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: [OG_IMG.url] },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    manifest: "/manifest.webmanifest",
    category: "automotive",
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const m = HOME_META[locale];
  return pageMeta({
    locale,
    paths: all(homePath),
    title: m.title,
    absolute: true,
    description: m.description,
    keywords: m.keywords,
    ogAlt: {
      es: "Los Paisas Tires Shop — abierto el domingo en S Military Trl, West Palm Beach",
      en: "Los Paisas Tires Shop — open Sunday on S Military Trl, West Palm Beach",
      pl: "Los Paisas Tires Shop — otwarte w niedzielę przy S Military Trl, West Palm Beach",
    }[locale],
  });
}

const SERVICES_COPY = {
  es: {
    title: "Servicios de llantas en West Palm Beach",
    description:
      "Llantas nuevas y usadas, reparación, alineación, balanceo, instalación y servicio móvil a 10 millas de 1114 S Military Trl. Abierto 7 días, 8 AM–7 PM.",
    og: "Servicios de llantas | Los Paisas Tires Shop, West Palm Beach",
    ogDescription: "Llantas nuevas y usadas, reparación, alineación, balanceo, instalación y servicio móvil en S Military Trl.",
    alt: "Servicios de Los Paisas Tires Shop — S Military Trl, West Palm Beach",
  },
  en: {
    title: "Tire Services on S Military Trl, West Palm Beach",
    description:
      "New and used tires, repair, alignment, balancing, installation and mobile service within 10 miles of 1114 S Military Trl. Open 7 days, 8 AM–7 PM.",
    og: "Tire Services | Los Paisas Tires Shop, West Palm Beach",
    ogDescription: "New tires, used tires, repair, alignment, balancing, install, and mobile service on S Military Trl.",
    alt: "Los Paisas Tires Shop services — S Military Trl, West Palm Beach",
  },
  pl: {
    title: "Usługi oponiarskie w West Palm Beach",
    description:
      "Nowe i używane opony, naprawa, geometria, wyważanie, montaż i serwis mobilny do 10 mil od 1114 S Military Trl. Otwarte 7 dni, 8 AM–7 PM.",
    og: "Usługi oponiarskie | Los Paisas Tires Shop, West Palm Beach",
    ogDescription: "Nowe i używane opony, naprawa, geometria, wyważanie, montaż i serwis mobilny przy S Military Trl.",
    alt: "Usługi Los Paisas Tires Shop — S Military Trl, West Palm Beach",
  },
};

export function servicesIndexMetadata(locale: Locale): Metadata {
  const c = SERVICES_COPY[locale];
  return pageMeta({ locale, paths: all(servicesPath), title: c.title, description: c.description, ogTitle: c.og, ogDescription: c.ogDescription, ogAlt: c.alt });
}

const BLOG_COPY = {
  es: {
    title: "Blog: consejos de llantas en West Palm Beach",
    description:
      "Guías de Los Paisas Tires Shop en S Military Trl: llantas usadas, ponchaduras en domingo, balanceo sin sorpresas y más para West Palm Beach.",
    og: "Blog Los Paisas Tires Shop | West Palm Beach",
    ogDescription: "Consejos prácticos de llantas para Military Trl y Palm Beach County.",
    alt: "Blog Los Paisas Tires Shop — consejos de llantas West Palm Beach",
  },
  en: {
    title: "Blog — Tire Tips for West Palm Beach",
    description:
      "Tire guides from Los Paisas Tires Shop on S Military Trl: used tires, Sunday flat repair, balancing with no hidden fees and more for West Palm Beach.",
    og: "Los Paisas Tires Shop Blog | West Palm Beach",
    ogDescription: "Practical tire tips for Military Trl and Palm Beach County drivers.",
    alt: "Los Paisas Tires Shop blog — West Palm Beach tire tips",
  },
  pl: {
    title: "Blog — porady o oponach w West Palm Beach",
    description:
      "Poradniki Los Paisas Tires Shop z S Military Trl: używane opony, guma w niedzielę, wyważanie bez ukrytych opłat i więcej dla West Palm Beach.",
    og: "Blog Los Paisas Tires Shop | West Palm Beach",
    ogDescription: "Praktyczne porady o oponach dla kierowców z Military Trl i Palm Beach County.",
    alt: "Blog Los Paisas Tires Shop — porady o oponach, West Palm Beach",
  },
};

export function blogIndexMetadata(locale: Locale): Metadata {
  const c = BLOG_COPY[locale];
  return pageMeta({ locale, paths: all((l) => blogPath(l)), title: c.title, description: c.description, ogTitle: c.og, ogDescription: c.ogDescription, ogAlt: c.alt });
}

export function blogPostMetadata(locale: Locale, slug: string): Metadata {
  const post = getPost(slug, locale);
  if (!post) return {};
  const slugs = BLOG_SLUGS.find((s) => s[locale] === slug);
  const paths = slugs ? all((l) => blogPath(l, slugs[l])) : all((l) => blogPath(l));
  return pageMeta({
    locale,
    paths,
    title: post.title,
    absolute: post.absoluteTitle,
    description: post.description,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.date,
    ogAlt: "Los Paisas Tires Shop — S Military Trl, West Palm Beach",
  });
}
