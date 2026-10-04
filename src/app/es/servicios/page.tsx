import type { Metadata } from "next";
import ServicesListing from "@/components/ServicesListing";
import { serviceLanguageAlternates, servicesPath } from "@/lib/service-routes";
import { absoluteUrl } from "@/lib/site";

const PATH = servicesPath("es");

export const metadata: Metadata = {
  title: "Servicios — Llantas en S Military Trl, West Palm Beach",
  description:
    "Servicios de llantas en Los Paisas Tires Shop, 1114 S Military Trl, West Palm Beach: llantas nuevas, usadas, reparación, alineación, balanceo, instalación y servicio móvil a 10 millas. Abierto 7 días, 8 AM–7 PM. Llama al +1 561-429-4041.",
  alternates: {
    canonical: PATH,
    languages: serviceLanguageAlternates(),
  },
  openGraph: {
    title: "Servicios de llantas | Los Paisas Tires Shop, West Palm Beach",
    description:
      "Llantas nuevas y usadas, reparación, alineación, balanceo, instalación y servicio móvil en S Military Trl.",
    url: absoluteUrl(PATH),
    locale: "es_US",
    alternateLocale: "en_US",
    siteName: "Los Paisas Tires Shop",
    images: [
      {
        url: "/brand/promo-sunday.png",
        width: 1200,
        height: 900,
        alt: "Servicios de Los Paisas Tires Shop — S Military Trl, West Palm Beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de llantas | Los Paisas Tires Shop, West Palm Beach",
    description:
      "Llantas nuevas y usadas, reparación, alineación, balanceo, instalación y servicio móvil en S Military Trl.",
    images: ["/brand/promo-sunday.png"],
  },
};

export default function EsServicesIndexPage() {
  return <ServicesListing locale="es" />;
}
