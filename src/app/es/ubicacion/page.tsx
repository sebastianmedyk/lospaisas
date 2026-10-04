import type { Metadata } from "next";
import PlacePage from "@/components/PlacePage";
import { placeMetadata } from "@/lib/place-meta";

export const metadata: Metadata = placeMetadata("location", "es");

export default function UbicacionPage() {
  return <PlacePage locale="es" kind="location" />;
}
