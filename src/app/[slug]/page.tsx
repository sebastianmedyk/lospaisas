import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalPageView from "@/components/LocalPageView";
import { getAllLocalPages, getLocalPage, localPageMetadata } from "@/lib/local-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllLocalPages()
    .filter((page) => page.locale === "en" && page.kind === "service" && page.path !== "/mobile-tire-service")
    .map((page) => ({ slug: page.path.slice(1) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocalPage(`/${slug}`);
  if (!page || page.locale !== "en") return {};
  return localPageMetadata(page);
}

export default async function EnglishServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getLocalPage(`/${slug}`);
  if (!page || page.locale !== "en" || page.kind !== "service" || page.path === "/mobile-tire-service") {
    notFound();
  }
  return <LocalPageView page={page} />;
}
