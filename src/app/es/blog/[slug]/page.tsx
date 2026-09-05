import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/BlogArticle";
import { getPost, getPostSlugs, blogPath } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs("es").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug, "es");
  if (!post) return { title: "Artículo no encontrado" };

  const url = absoluteUrl(blogPath("es", post.slug));
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: blogPath("es", post.slug),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url,
      locale: "es_US",
    },
  };
}

export default async function EsBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug, "es");
  if (!post) notFound();
  return <BlogArticle post={post} />;
}
