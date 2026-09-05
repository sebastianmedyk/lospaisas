import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";
import { getAllPosts } from "@/lib/blog";
import { blogLanguageAlternates } from "@/lib/blog-routes";
import { absoluteUrl } from "@/lib/site";

const OG_IMAGE = {
  url: "/brand/promo-sunday.png",
  width: 1200,
  height: 900,
  alt: "Blog Los Paisas Tires Shop — consejos de llantas West Palm Beach",
} as const;

export const metadata: Metadata = {
  title: "Blog — Consejos de llantas en West Palm Beach",
  description:
    "Guías locales de Los Paisas Tires Shop en S Military Trl: llantas usadas, ponchaduras en domingo, balanceo sin sorpresas y más para conductores de West Palm Beach.",
  alternates: {
    canonical: "/es/blog",
    languages: blogLanguageAlternates("es"),
  },
  openGraph: {
    title: "Blog Los Paisas Tires Shop | West Palm Beach",
    description:
      "Consejos prácticos de llantas para Military Trl y Palm Beach County.",
    url: absoluteUrl("/es/blog"),
    locale: "es_US",
    alternateLocale: "en_US",
    siteName: "Los Paisas Tires Shop",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Los Paisas Tires Shop | West Palm Beach",
    description:
      "Consejos prácticos de llantas para Military Trl y Palm Beach County.",
    images: [OG_IMAGE.url],
  },
};

export default function EsBlogIndexPage() {
  const posts = getAllPosts("es");
  return <BlogListing locale="es" posts={posts} />;
}
