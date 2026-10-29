import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/components/HomePage";
import ServicesListing from "@/components/ServicesListing";
import LocalPageView from "@/components/LocalPageView";
import PlacePage from "@/components/PlacePage";
import BlogListing from "@/components/BlogListing";
import BlogArticle from "@/components/BlogArticle";
import RootDocument from "@/components/RootDocument";
import { getAllPosts, getPost, getPostSlugs } from "@/lib/blog";
import { getLocalPage, localPageMetadata, localParams } from "@/lib/local-pages";
import { placeMetadata } from "@/lib/place-meta";
import { baseMetadata, blogIndexMetadata, blogPostMetadata, homeMetadata, servicesIndexMetadata } from "@/lib/page-meta";
import { servicesPath, type Locale } from "@/lib/routes";

/*
 * Each locale has its own tiny route files under app/(es), app/(en)/en and
 * app/(pl)/pl. They all delegate here so the three trees stay identical.
 */

type SlugProps = { params: Promise<{ slug: string }> };
type CityProps = { params: Promise<{ slug: string; city: string }> };

export function localeLayout(locale: Locale) {
  return {
    metadata: baseMetadata(locale),
    Layout: function LocaleLayout({ children }: { children: React.ReactNode }) {
      return <RootDocument locale={locale}>{children}</RootDocument>;
    },
  };
}

export function homeRoute(locale: Locale) {
  return { metadata: homeMetadata(locale), Page: () => <HomePage locale={locale} /> };
}

export function servicesIndexRoute(locale: Locale) {
  return { metadata: servicesIndexMetadata(locale), Page: () => <ServicesListing locale={locale} /> };
}

function findService(locale: Locale, slug: string) {
  const page = getLocalPage(`${servicesPath(locale)}/${slug}`);
  return page && page.locale === locale && page.kind === "service" ? page : null;
}

function findCity(locale: Locale, slug: string, city: string) {
  const page = getLocalPage(`${servicesPath(locale)}/${slug}/${city}`);
  return page && page.locale === locale && page.kind === "city" ? page : null;
}

export function serviceRoute(locale: Locale) {
  return {
    generateStaticParams: () => localParams(locale, "service"),
    generateMetadata: async ({ params }: SlugProps): Promise<Metadata> => {
      const page = findService(locale, (await params).slug);
      return page ? localPageMetadata(page) : {};
    },
    Page: async function ServicePage({ params }: SlugProps) {
      const page = findService(locale, (await params).slug);
      if (!page) notFound();
      return <LocalPageView page={page} />;
    },
  };
}

export function cityRoute(locale: Locale) {
  return {
    generateStaticParams: () => localParams(locale, "city"),
    generateMetadata: async ({ params }: CityProps): Promise<Metadata> => {
      const { slug, city } = await params;
      const page = findCity(locale, slug, city);
      return page ? localPageMetadata(page) : {};
    },
    Page: async function CityPage({ params }: CityProps) {
      const { slug, city } = await params;
      const page = findCity(locale, slug, city);
      if (!page) notFound();
      return <LocalPageView page={page} />;
    },
  };
}

export function placeRoute(locale: Locale, kind: "location" | "contact") {
  return { metadata: placeMetadata(kind, locale), Page: () => <PlacePage locale={locale} kind={kind} /> };
}

export function blogIndexRoute(locale: Locale) {
  return {
    metadata: blogIndexMetadata(locale),
    Page: () => <BlogListing locale={locale} posts={getAllPosts(locale)} />,
  };
}

export function blogPostRoute(locale: Locale) {
  return {
    generateStaticParams: () => getPostSlugs(locale).map((slug) => ({ slug })),
    generateMetadata: async ({ params }: SlugProps): Promise<Metadata> => blogPostMetadata(locale, (await params).slug),
    Page: async function BlogPostPage({ params }: SlugProps) {
      const post = getPost((await params).slug, locale);
      if (!post) notFound();
      return <BlogArticle post={post} />;
    },
  };
}
