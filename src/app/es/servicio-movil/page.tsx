import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalPageView from "@/components/LocalPageView";
import { getLocalPage, localPageMetadata } from "@/lib/local-pages";

export function generateMetadata(): Metadata {
  const page = getLocalPage("/es/servicio-movil");
  if (!page) return {};
  return localPageMetadata(page);
}

export default function ServicioMovilPage() {
  const page = getLocalPage("/es/servicio-movil");
  if (!page) notFound();
  return <LocalPageView page={page} />;
}
