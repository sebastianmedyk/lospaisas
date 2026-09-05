import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Providers from "@/components/Providers";
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
  title: "Los Paisas Tires Shop | New & Used Tires in West Palm Beach, FL",
  description:
    "Los Paisas Tires Shop — new & used tires, alignment, balancing, repair & vulcanization, and mobile service within 10 miles. Open 7 days, 8 AM–7 PM. Call or WhatsApp +1 561-429-4041.",
  metadataBase: new URL("https://lospaisastires.local"),
  openGraph: {
    title: "Los Paisas Tires Shop | West Palm Beach, FL",
    description:
      "New & used tires, alignment, balancing, repair & vulcanization. Open 7 days including Sunday. Call +1 561-429-4041.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_US",
    siteName: "Los Paisas Tires Shop",
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Paisas Tires Shop",
    description:
      "New & used tires in West Palm Beach. Open 7 days, 8 AM–7 PM.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
