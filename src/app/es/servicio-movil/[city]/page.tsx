import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalPageView from "@/components/LocalPageView";
import { getAllLocalPages, getLocalPage, localPageMetadata } from "@/lib/local-pages";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return getAllLocalPages()
    .filter((page) => page.locale === "es" && page.kind === "city")
    .map((page) => ({ city: page.path.split("/").pop() as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const page = getLocalPage(`/es/servicio-movil/${city}`);
  if (!page) return {};
  return localPageMetadata(page);
}

export default async function SpanishCityPage({ params }: Props) {
  const { city } = await params;
  const page = getLocalPage(`/es/servicio-movil/${city}`);
  if (!page) notFound();
  return <LocalPageView page={page} />;
}
