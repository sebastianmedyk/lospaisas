import type { Locale } from "@/lib/i18n";

/** EN path -> ES path. Safe to import from client components. */
const PAIRS: Record<string, string> = {
  "/new-tires": "/es/llantas-nuevas",
  "/used-tires": "/es/llantas-usadas",
  "/tire-repair": "/es/reparacion-de-llantas",
  "/wheel-alignment": "/es/alineacion",
  "/tire-balancing": "/es/balanceo",
  "/tire-installation": "/es/instalacion-de-llantas",
  "/mobile-tire-service": "/es/servicio-movil",
  "/mobile-tire-service/greenacres": "/es/servicio-movil/greenacres",
  "/mobile-tire-service/lake-worth-beach": "/es/servicio-movil/lake-worth-beach",
  "/mobile-tire-service/palm-springs": "/es/servicio-movil/palm-springs",
};

const REVERSE: Record<string, string> = Object.fromEntries(
  Object.entries(PAIRS).map(([en, es]) => [es, en]),
);

export function getAlternateLocalPath(pathname: string, next: Locale): string | null {
  if (next === "es") return PAIRS[pathname] ?? null;
  return REVERSE[pathname] ?? null;
}
