import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalPageView from "@/components/LocalPageView";
import { getAllLocalPages, getLocalPage, localPageMetadata } from "@/lib/local-pages";

type Props = { params: Promise<{ slug: string; city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllLocalPages()
    .filter((page) => page.locale === "es" && page.kind === "city")
    .map((page) => {
      const parts = page.path.split("/").filter(Boolean);
      return { slug: parts[2], city: parts[3] };
    });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city } = await params;
  const page = getLocalPage(`/es/servicios/${slug}/${city}`);
  if (!page || page.locale !== "es" || page.kind !== "city") return {};
  return localPageMetadata(page);
}

export default async function SpanishCityPage({ params }: Props) {
  const { slug, city } = await params;
  const page = getLocalPage(`/es/servicios/${slug}/${city}`);
  if (!page || page.locale !== "es" || page.kind !== "city") notFound();
  return <LocalPageView page={page} />;
}
