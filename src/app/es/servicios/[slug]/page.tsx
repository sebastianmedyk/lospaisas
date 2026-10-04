import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalPageView from "@/components/LocalPageView";
import { getAllLocalPages, getLocalPage, localPageMetadata } from "@/lib/local-pages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllLocalPages()
    .filter((page) => page.locale === "es" && page.kind === "service")
    .map((page) => ({ slug: page.path.split("/").pop() as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocalPage(`/es/servicios/${slug}`);
  if (!page || page.locale !== "es" || page.kind !== "service") return {};
  return localPageMetadata(page);
}

export default async function SpanishServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getLocalPage(`/es/servicios/${slug}`);
  if (!page || page.locale !== "es" || page.kind !== "service") notFound();
  return <LocalPageView page={page} />;
}
