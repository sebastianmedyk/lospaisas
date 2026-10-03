import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalPageView from "@/components/LocalPageView";
import { getLocalPage, localPageMetadata } from "@/lib/local-pages";

export function generateMetadata(): Metadata {
  const page = getLocalPage("/mobile-tire-service");
  if (!page) return {};
  return localPageMetadata(page);
}

export default function MobileTireServicePage() {
  const page = getLocalPage("/mobile-tire-service");
  if (!page) notFound();
  return <LocalPageView page={page} />;
}
