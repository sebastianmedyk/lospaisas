import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalPageView from "@/components/LocalPageView";
import { getAllLocalPages, getLocalPage, localPageMetadata } from "@/lib/local-pages";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return getAllLocalPages()
    .filter((page) => page.locale === "en" && page.kind === "city")
    .map((page) => ({ city: page.path.split("/").pop() as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const page = getLocalPage(`/mobile-tire-service/${city}`);
  if (!page) return {};
  return localPageMetadata(page);
}

export default async function EnglishCityPage({ params }: Props) {
  const { city } = await params;
  const page = getLocalPage(`/mobile-tire-service/${city}`);
  if (!page) notFound();
  return <LocalPageView page={page} />;
}
