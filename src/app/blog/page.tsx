import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Tire Tips for West Palm Beach",
  description:
    "Local tire guides from Los Paisas Tires Shop on S Military Trail: used tires, Sunday flat repair, wheel balancing with no hidden fees, and more for West Palm Beach drivers.",
  alternates: {
    canonical: "/blog",
    languages: {
      en: "/blog",
      es: "/es/blog",
    },
  },
  openGraph: {
    title: "Los Paisas Tires Shop Blog | West Palm Beach",
    description:
      "Practical tire tips for Military Trail and Palm Beach County drivers.",
    url: absoluteUrl("/blog"),
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts("en");
  return <BlogListing locale="en" posts={posts} />;
}
