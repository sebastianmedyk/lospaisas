import type { Metadata } from "next";
import PlacePage from "@/components/PlacePage";
import { placeMetadata } from "@/lib/place-meta";

export const metadata: Metadata = placeMetadata("location", "en");

export default function LocationPage() {
  return <PlacePage locale="en" kind="location" />;
}
