import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import {
  contactLanguageAlternates,
  contactPath,
  locationLanguageAlternates,
  locationPath,
} from "@/lib/place-routes";
import { absoluteUrl } from "@/lib/site";

const OG = {
  url: "/brand/promo-sunday.png",
  width: 1200,
  height: 900,
} as const;

const COPY = {
  location: {
    en: {
      title: "Shop Location in West Palm Beach | Los Paisas Tires",
      description:
        "Los Paisas Tires Shop at 1114 S Military Trl, West Palm Beach, FL 33415. Open Mon–Sun 8:00 AM–7:00 PM. Mobile within 10 miles of the shop. Call +1 561-429-4041.",
      ogAlt: "Los Paisas Tires Shop map — S Military Trl, West Palm Beach",
    },
    es: {
      title: "Ubicación del taller en West Palm Beach | Los Paisas",
      description:
        "Los Paisas Tires Shop en 1114 S Military Trl, West Palm Beach, FL 33415. Lun–dom 8:00 AM–7:00 PM. Domicilio a 10 millas del taller. Llama al +1 561-429-4041.",
      ogAlt: "Mapa de Los Paisas Tires Shop — S Military Trl, West Palm Beach",
    },
  },
  contact: {
    en: {
      title: "Contact Los Paisas Tires Shop | West Palm Beach, FL",
      description:
        "Call +1 561-429-4041, WhatsApp, or visit Los Paisas Tires Shop at 1114 S Military Trl, West Palm Beach, FL 33415. Open Mon–Sun 8:00 AM–7:00 PM.",
      ogAlt: "Contact Los Paisas Tires Shop on S Military Trl, West Palm Beach",
    },
    es: {
      title: "Contacto con Los Paisas Tires Shop | West Palm Beach",
      description:
        "Llama al +1 561-429-4041, escribe por WhatsApp o visita Los Paisas Tires Shop en 1114 S Military Trl, West Palm Beach, FL 33415. Lun–dom 8:00 AM–7:00 PM.",
      ogAlt: "Contacto de Los Paisas Tires Shop en S Military Trl, West Palm Beach",
    },
  },
} as const;

export function placeMetadata(kind: "location" | "contact", locale: Locale): Metadata {
  const copy = COPY[kind][locale];
  const path = kind === "location" ? locationPath(locale) : contactPath(locale);
  const languages =
    kind === "location" ? locationLanguageAlternates() : contactLanguageAlternates();
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
      locale: locale === "es" ? "es_US" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_US",
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
