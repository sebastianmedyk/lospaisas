import { BUSINESS } from "@/lib/constants";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export const AREA_SERVED = [
  "West Palm Beach",
  "Greenacres",
  "Palm Springs",
  "Lake Worth Beach",
  "Palm Beach County",
] as const;

/** Verified Google Maps / GBP pin for 1114 S Military Trl */
export const GEO = {
  latitude: BUSINESS.geo.latitude,
  longitude: BUSINESS.geo.longitude,
} as const;

export const SERVICE_OFFERS = [
  {
    name: "New & Used Tires",
    description:
      "Quality new and used tires for every budget at Los Paisas Tires Shop, 1114 S Military Trl, West Palm Beach, FL 33415.",
  },
  {
    name: "Wheel Alignment",
    description:
      "Precision wheel alignment (geometría) for safer handling and even tire wear on the S Military Trl corridor in West Palm Beach.",
  },
  {
    name: "Tire Balancing",
    description:
      "Wheel balancing with transparent pricing and no hidden fees at Los Paisas Tires Shop in West Palm Beach.",
  },
  {
    name: "Tire Repair & Vulcanization",
    description:
      "Professional tire repair and vulcanization to get West Palm Beach and Palm Beach County drivers back on the road safely.",
  },
  {
    name: "Install Customer Tires",
    description:
      "Mount and install tires you already purchased — careful install by the Los Paisas Tires Shop team on S Military Trl.",
  },
  {
    name: "Mobile Tire Service Within 10 Miles",
    description:
      "Mobile tire service within 10 miles of 1114 S Military Trl, covering West Palm Beach, Greenacres, Palm Springs, Lake Worth Beach, and nearby.",
  },
] as const;

function postalAddress() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  };
}

function openingHoursSpec() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ] as const;
  return days.map((dayOfWeek) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek,
    opens: "08:00",
    closes: "19:00",
  }));
}

function organizationPublisher() {
  return {
    "@type": "Organization" as const,
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject" as const,
      url: absoluteUrl("/brand/promo-trust.png"),
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["TireShop", "AutomotiveBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    description:
      "Los Paisas Tires Shop at 1114 S Military Trl, West Palm Beach, FL 33415 — new & used tires, alignment, balancing with no hidden fees, tire repair & vulcanization, customer tire install, and mobile service within 10 miles. Open 7 days, 8:00 AM–7:00 PM including Sunday. Call +1 561-429-4041.",
    image: [
      absoluteUrl("/brand/promo-sunday.png"),
      absoluteUrl("/brand/promo-trust.png"),
      absoluteUrl("/brand/promo-balanceo.png"),
    ],
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: openingHoursSpec(),
    sameAs: [
      BUSINESS.instagram,
      BUSINESS.facebook,
      BUSINESS.tiktok,
      BUSINESS.mapsUrl,
      BUSINESS.mapsPlaceUrl,
      BUSINESS.mapsCidUrl,
    ],
    areaServed: [
      ...AREA_SERVED.map((name) => ({
        "@type": "City",
        name,
      })),
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        geoRadius: "16093",
      },
    ],
    hasMap: BUSINESS.mapsPlaceUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.ratingValue,
      reviewCount: BUSINESS.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    knowsLanguage: ["en", "es"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tire services at Los Paisas Tires Shop",
      itemListElement: SERVICE_OFFERS.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: AREA_SERVED.map((name) => ({
            "@type": "City",
            name,
          })),
        },
      })),
    },
    makesOffer: SERVICE_OFFERS.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": `${SITE_URL}/#business` },
      },
    })),
  };
}

/** Standalone Service schemas for homepage injection */
export function serviceJsonLdList() {
  return SERVICE_OFFERS.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "TireShop",
      "@id": `${SITE_URL}/#business`,
      name: BUSINESS.name,
      telephone: BUSINESS.phoneE164,
      address: postalAddress(),
    },
    areaServed: AREA_SERVED.map((name) => ({
      "@type": "City",
      name,
    })),
    url: absoluteUrl("/#services"),
  }));
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    inLanguage: ["en-US", "es-US"],
    description:
      "Official website for Los Paisas Tires Shop — new & used tires, alignment, balancing, repair & vulcanization on S Military Trl, West Palm Beach, FL.",
    publisher: organizationPublisher(),
    about: { "@id": `${SITE_URL}/#business` },
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
    image: [absoluteUrl("/brand/promo-sunday.png")],
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: SITE_URL,
    },
    publisher: organizationPublisher(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** HowTo: flat tire on Sunday in West Palm Beach — EN, homepage / GEO citation */
export function flatTireSundayHowToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "What to do if you get a flat tire on Sunday in West Palm Beach",
    description:
      "Step-by-step guide to get a flat tire fixed on Sunday at Los Paisas Tires Shop, 1114 S Military Trl, West Palm Beach, FL 33415 — open 8:00 AM–7:00 PM every day including Sunday.",
    totalTime: "PT30M",
    inLanguage: "en-US",
    supply: [
      {
        "@type": "HowToSupply",
        name: "Your vehicle with a flat or damaged tire",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Phone or WhatsApp to reach Los Paisas Tires Shop",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Call or WhatsApp the shop",
        text: "Call or WhatsApp Los Paisas Tires Shop at +1 561-429-4041. Confirm you need tire repair, vulcanization, a new or used tire, or an install — and whether you can drive in or need mobile service within 10 miles.",
        url: absoluteUrl("/#contact"),
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Come in or request mobile service",
        text: "Drive to 1114 S Military Trl, West Palm Beach, FL 33415 if the vehicle is safe to move. If not, ask about mobile tire service within 10 miles of the shop covering West Palm Beach and nearby Palm Beach County cities.",
        url: absoluteUrl("/#location"),
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Get repair, vulcanization, or a replacement tire",
        text: "The Los Paisas Tires Shop team inspects the tire and repairs or vulcanizes when possible, or mounts a new or used tire, installs customer-owned tires, and balances as needed with no hidden fees. Open Sunday 8:00 AM–7:00 PM — same hours as every other day.",
        url: absoluteUrl("/#services"),
      },
    ],
  };
}
