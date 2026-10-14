import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { translations } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

const t = translations.es.meta;

export const metadata: Metadata = {
  title: { absolute: t.title },
  description: t.description,
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es", "x-default": "/" },
  },
  openGraph: {
    title: t.title,
    description: t.description,
    type: "website",
    url: absoluteUrl("/es"),
    locale: "es_US",
    alternateLocale: "en_US",
    siteName: "Los Paisas Tires Shop",
    images: [{ url: "/brand/promo-sunday.jpg", width: 1200, height: 900, alt: "Los Paisas Tires Shop — abierto el domingo en S Military Trl, West Palm Beach" }],
  },
};

export default function Page() {
  return <HomePage locale="es" />;
}
