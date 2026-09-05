import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import { localBusinessJsonLd, faqPageJsonLd } from "@/lib/seo";
import { translations } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Los Paisas Tires Shop | New & Used Tires on S Military Trail, West Palm Beach, FL",
    template: "%s | Los Paisas Tires Shop",
  },
  description:
    "Los Paisas Tires Shop at 1114 S Military Trail, West Palm Beach — new & used tires, alignment, balancing, repair & vulcanization. Serving West Palm Beach, Greenacres, Palm Springs, Lake Worth Beach & Palm Beach County. Mobile within 10 miles. Open 7 days, 8 AM–7 PM. Call or WhatsApp +1 561-429-4041.",
  keywords: [
    "tire shop West Palm Beach",
    "used tires Military Trail",
    "tire shop near me West Palm Beach",
    "wheel balancing West Palm Beach",
    "tire repair Sunday open",
    "Los Paisas Tires",
    "llantas West Palm Beach",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Los Paisas Tires Shop | S Military Trail, West Palm Beach, FL",
    description:
      "New & used tires, alignment, balancing, repair & vulcanization on Military Trail. Serving West Palm Beach & Palm Beach County. Open 7 days including Sunday. Call +1 561-429-4041.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_US",
    siteName: "Los Paisas Tires Shop",
    url: SITE_URL,
    images: [
      {
        url: "/brand/promo-sunday.png",
        width: 1200,
        height: 900,
        alt: "Los Paisas Tires Shop — open Sunday on S Military Trail, West Palm Beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Paisas Tires Shop | West Palm Beach",
    description:
      "New & used tires on S Military Trail, West Palm Beach. Open 7 days, 8 AM–7 PM. Mobile within 10 miles.",
    images: ["/brand/promo-sunday.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** EN FAQ answers for SSR FAQPage JSON-LD (ES stays in client i18n UI). */
const enFaqs = translations.en.faq.items.map((item) => ({
  question: item.question,
  answer: item.answer,
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="font-body antialiased">
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={faqPageJsonLd(enFaqs)} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
