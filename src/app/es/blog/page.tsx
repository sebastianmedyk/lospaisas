import type { Metadata } from "next";
import BlogListing from "@/components/BlogListing";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Consejos de llantas en West Palm Beach",
  description:
    "Guías locales de Los Paisas Tires Shop en S Military Trail: llantas usadas, ponchaduras en domingo, balanceo sin sorpresas y más para conductores de West Palm Beach.",
  alternates: {
    canonical: "/es/blog",
    languages: {
      en: "/blog",
      es: "/es/blog",
    },
  },
  openGraph: {
    title: "Blog Los Paisas Tires Shop | West Palm Beach",
    description:
      "Consejos prácticos de llantas para Military Trail y Palm Beach County.",
    url: absoluteUrl("/es/blog"),
    locale: "es_US",
  },
};

export default function EsBlogIndexPage() {
  const posts = getAllPosts("es");
  return <BlogListing locale="es" posts={posts} />;
}
