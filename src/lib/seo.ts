import { BUSINESS } from "@/lib/constants";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export const AREA_SERVED = [
  "West Palm Beach",
  "Greenacres",
  "Palm Springs",
  "Lake Worth Beach",
  "Palm Beach County",
] as const;

/** Approximate shop coordinates near 1114 S Military Trail, WPB */
export const GEO = {
  latitude: 26.6785,
  longitude: -80.1128,
} as const;

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    image: [
      absoluteUrl("/brand/promo-sunday.png"),
      absoluteUrl("/brand/promo-trust.png"),
      absoluteUrl("/brand/promo-balanceo.png"),
    ],
    url: SITE_URL,
    telephone: "+15614294041",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1114 S Military Trail",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      postalCode: "33415",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    sameAs: [BUSINESS.instagram],
    areaServed: AREA_SERVED.map((name) => ({
      "@type": "City",
      name,
    })),
    hasMap: BUSINESS.mapsUrl,
  };
}

export type FaqItem = { question: string; answer: string };

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  date: string;
  url: string;
  locale: "en" | "es";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    dateModified: input.date,
    inLanguage: input.locale === "es" ? "es-US" : "en-US",
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/brand/promo-trust.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
  };
}
