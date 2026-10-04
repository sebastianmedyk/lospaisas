import type { Metadata } from "next";
import PlacePage from "@/components/PlacePage";
import { placeMetadata } from "@/lib/place-meta";

export const metadata: Metadata = placeMetadata("contact", "en");

export default function ContactPage() {
  return <PlacePage locale="en" kind="contact" />;
}
