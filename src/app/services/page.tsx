import type { Metadata } from "next";
import ServicesListing from "@/components/ServicesListing";
import { serviceLanguageAlternates, servicesPath } from "@/lib/service-routes";
import { absoluteUrl } from "@/lib/site";

const PATH = servicesPath("en");

export const metadata: Metadata = {
  title: "Services — Tires on S Military Trl, West Palm Beach",
  description:
    "Tire services at Los Paisas Tires Shop, 1114 S Military Trl, West Palm Beach: new tires, used tires, repair, alignment, balancing, install, and mobile service within 10 miles. Open 7 days, 8 AM–7 PM. Call +1 561-429-4041.",
  alternates: {
    canonical: PATH,
    languages: serviceLanguageAlternates(),
  },
  openGraph: {
    title: "Tire Services | Los Paisas Tires Shop, West Palm Beach",
    description:
      "New tires, used tires, repair, alignment, balancing, install, and mobile service on S Military Trl.",
    url: absoluteUrl(PATH),
    locale: "en_US",
    alternateLocale: "es_US",
    siteName: "Los Paisas Tires Shop",
    images: [
      {
        url: "/brand/promo-sunday.png",
        width: 1200,
        height: 900,
        alt: "Los Paisas Tires Shop services — S Military Trl, West Palm Beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tire Services | Los Paisas Tires Shop, West Palm Beach",
    description:
      "New tires, used tires, repair, alignment, balancing, install, and mobile service on S Military Trl.",
    images: ["/brand/promo-sunday.png"],
  },
};

export default function ServicesIndexPage() {
  return <ServicesListing locale="en" />;
}
