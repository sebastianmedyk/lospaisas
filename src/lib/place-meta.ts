import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { catalogPath, contactPath, languageAlternates, LOCALES, locationPath, OG_LOCALE } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

const OG = {
  url: "/brand/promo-sunday.jpg",
  width: 1200,
  height: 900,
} as const;

const COPY = {
  location: {
    en: {
      title: "Shop Location in West Palm Beach | Los Paisas Tires",
      description:
        "Los Paisas Tires Shop at 1114 S Military Trl, West Palm Beach, FL 33415. Open Mon–Sun 8:00 AM–7:00 PM. Mobile across Palm Beach County. Call (561) 429-4041.",
      ogAlt: "Los Paisas Tires Shop map — S Military Trl, West Palm Beach",
    },
    es: {
      title: "Ubicación del taller en West Palm Beach | Los Paisas",
      description:
        "Los Paisas Tires Shop en 1114 S Military Trl, West Palm Beach, FL 33415. Lun–dom 8:00 AM–7:00 PM. Domicilio en Palm Beach County. Llama al (561) 429-4041.",
      ogAlt: "Mapa de Los Paisas Tires Shop — S Military Trl, West Palm Beach",
    },
    pl: {
      title: "Lokalizacja warsztatu w West Palm Beach | Los Paisas Tires",
      description:
        "Los Paisas Tires Shop, 1114 S Military Trl, West Palm Beach, FL 33415. Otwarte codziennie 8 AM–7 PM. Dojazd w Palm Beach County. Zadzwoń: (561) 429-4041.",
      ogAlt: "Mapa Los Paisas Tires Shop — S Military Trl, West Palm Beach",
    },
  },
  contact: {
    en: {
      title: "Contact Los Paisas Tires Shop | West Palm Beach, FL",
      description:
        "Call (561) 429-4041, WhatsApp, or visit Los Paisas Tires Shop at 1114 S Military Trl, West Palm Beach, FL 33415. Open Mon–Sun 8:00 AM–7:00 PM.",
      ogAlt: "Contact Los Paisas Tires Shop on S Military Trl, West Palm Beach",
    },
    es: {
      title: "Contacto con Los Paisas Tires Shop | West Palm Beach",
      description:
        "Llama al (561) 429-4041, escribe por WhatsApp o visita Los Paisas Tires Shop en 1114 S Military Trl, West Palm Beach, FL 33415. Lun–dom 8:00 AM–7:00 PM.",
      ogAlt: "Contacto de Los Paisas Tires Shop en S Military Trl, West Palm Beach",
    },
    pl: {
      title: "Kontakt z Los Paisas Tires Shop | West Palm Beach, FL",
      description:
        "Zadzwoń pod (561) 429-4041, napisz na WhatsApp albo odwiedź Los Paisas Tires Shop, 1114 S Military Trl, West Palm Beach, FL 33415. Codziennie 8 AM–7 PM.",
      ogAlt: "Kontakt z Los Paisas Tires Shop przy S Military Trl, West Palm Beach",
    },
  },
} as const;

const CATALOG_COPY = {
  en: {
    title: "New Tire Catalog from $120 | Los Paisas Tires Shop, West Palm Beach",
    description:
      "Cosmo new tires R15–R18, from $120 per tire. Catalog price includes alignment and balancing. Los Paisas Tires Shop, West Palm Beach. Call or WhatsApp (561) 429-4041 to confirm stock.",
    ogAlt: "Cosmo new tire catalog at Los Paisas Tires Shop, West Palm Beach",
  },
  es: {
    title: "Catálogo de llantas nuevas desde $120 | Los Paisas Tires Shop, West Palm Beach",
    description:
      "Llantas nuevas Cosmo R15–R18, desde $120 por llanta. El precio incluye alineación y balanceo. Los Paisas Tires Shop, West Palm Beach. Llama o escribe por WhatsApp al (561) 429-4041.",
    ogAlt: "Catálogo de llantas nuevas Cosmo en Los Paisas Tires Shop, West Palm Beach",
  },
  pl: {
    title: "Katalog nowych opon od $120 | Los Paisas Tires Shop, West Palm Beach",
    description:
      "Nowe opony Cosmo R15–R18, od $120 za oponę. Cena z katalogu obejmuje geometrię i wyważanie. Los Paisas Tires Shop, West Palm Beach. Zadzwoń lub napisz na WhatsApp: (561) 429-4041.",
    ogAlt: "Katalog nowych opon Cosmo w Los Paisas Tires Shop, West Palm Beach",
  },
} as const;

export function catalogMetadata(locale: Locale): Metadata {
  const copy = CATALOG_COPY[locale];
  const path = catalogPath(locale);
  const languages = languageAlternates({ es: catalogPath("es"), en: catalogPath("en"), pl: catalogPath("pl") });
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: { canonical: path, languages },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: absoluteUrl(path),
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      siteName: "Los Paisas Tires Shop",
      images: [{ ...OG, alt: copy.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [OG.url],
    },
  };
}

export function placeMetadata(kind: "location" | "contact", locale: Locale): Metadata {
  const copy = COPY[kind][locale];
  const path = kind === "location" ? locationPath(locale) : contactPath(locale);
  const fn = kind === "location" ? locationPath : contactPath;
  const languages = languageAlternates({ es: fn("es"), en: fn("en"), pl: fn("pl") });
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: {
      canonical: path,
      languages,
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: absoluteUrl(path),
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      siteName: "Los Paisas Tires Shop",
      images: [{ ...OG, alt: copy.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [OG.url],
    },
  };
}
