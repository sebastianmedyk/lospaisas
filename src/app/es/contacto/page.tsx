import type { Metadata } from "next";
import PlacePage from "@/components/PlacePage";
import { placeMetadata } from "@/lib/place-meta";

export const metadata: Metadata = placeMetadata("contact", "es");

export default function ContactoPage() {
  return <PlacePage locale="es" kind="contact" />;
}
