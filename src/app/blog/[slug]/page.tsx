import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/BlogArticle";
import { getPost, getPostSlugs, blogPath } from "@/lib/blog";
import { blogLanguageAlternates } from "@/lib/blog-routes";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const OG_IMAGE = {
  url: "/brand/promo-sunday.png",
  width: 1200,
  height: 900,
  alt: "Los Paisas Tires Shop — S Military Trail, West Palm Beach",
} as const;

export function generateStaticParams() {
  return getPostSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug, "en");
  if (!post) return { title: "Post not found" };

  const url = absoluteUrl(blogPath("en", post.slug));
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: blogPath("en", post.slug),
      languages: blogLanguageAlternates("en", post.slug),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url,
      locale: "en_US",
      alternateLocale: "es_US",
      siteName: "Los Paisas Tires Shop",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [OG_IMAGE.url],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug, "en");
  if (!post) notFound();
  return <BlogArticle post={post} />;
}
