import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import {
  localBusinessJsonLd,
  webSiteJsonLd,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
});

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
  fallback: ["Impact", "Arial Black", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
    { media: "(prefers-color-scheme: light)", color: "#F4C20D" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Los Paisas Tires Shop | New & Used Tires on S Military Trl, West Palm Beach, FL",
    template: "%s | Los Paisas Tires Shop",
  },
  description:
    "Los Paisas Tires Shop at 1114 S Military Trl, West Palm Beach — new & used tires, alignment, balancing, repair & vulcanization. Serving West Palm Beach, Greenacres, Palm Springs, Lake Worth Beach & Palm Beach County. Mobile within 10 miles. Open 7 days, 8 AM–7 PM. Call or WhatsApp +1 561-429-4041.",
  keywords: [
    "tire shop West Palm Beach",
    "used tires Military Trl",
    "tire shop near me West Palm Beach",
    "wheel balancing West Palm Beach",
    "tire repair Sunday open",
    "Los Paisas Tires",
    "llantas West Palm Beach",
    "mobile tire service West Palm Beach",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Los Paisas Tires Shop | S Military Trl, West Palm Beach, FL",
    description:
      "New & used tires, alignment, balancing, repair & vulcanization on Military Trl. Serving West Palm Beach & Palm Beach County. Open 7 days including Sunday. Call +1 561-429-4041.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_US",
    siteName: "Los Paisas Tires Shop",
    url: SITE_URL,
    images: [
      {
        url: "/brand/promo-sunday.jpg",
        width: 1200,
        height: 900,
        alt: "Los Paisas Tires Shop — open Sunday on S Military Trl, West Palm Beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Paisas Tires Shop | West Palm Beach",
    description:
      "New & used tires on S Military Trl, West Palm Beach. Open 7 days, 8 AM–7 PM. Mobile within 10 miles.",
    images: ["/brand/promo-sunday.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  category: "automotive",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
