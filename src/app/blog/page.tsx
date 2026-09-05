import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";
import { getAllPosts } from "@/lib/blog";
import { blogLanguageAlternates } from "@/lib/blog-routes";
import { absoluteUrl } from "@/lib/site";

const OG_IMAGE = {
  url: "/brand/promo-sunday.png",
  width: 1200,
  height: 900,
  alt: "Los Paisas Tires Shop blog — West Palm Beach tire tips",
} as const;

export const metadata: Metadata = {
  title: "Blog — Tire Tips for West Palm Beach",
  description:
    "Local tire guides from Los Paisas Tires Shop on S Military Trail: used tires, Sunday flat repair, wheel balancing with no hidden fees, and more for West Palm Beach drivers.",
  alternates: {
    canonical: "/blog",
    languages: blogLanguageAlternates("en"),
  },
  openGraph: {
    title: "Los Paisas Tires Shop Blog | West Palm Beach",
    description:
      "Practical tire tips for Military Trail and Palm Beach County drivers.",
    url: absoluteUrl("/blog"),
    locale: "en_US",
    alternateLocale: "es_US",
    siteName: "Los Paisas Tires Shop",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Paisas Tires Shop Blog | West Palm Beach",
    description:
      "Practical tire tips for Military Trail and Palm Beach County drivers.",
    images: [OG_IMAGE.url],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts("en");
  return <BlogListing locale="en" posts={posts} />;
}
