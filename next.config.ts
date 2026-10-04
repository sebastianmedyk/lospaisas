import type { NextConfig } from "next";

/** Old flat service URLs -> nested section URLs. statusCode 301, not 308. */
const LEGACY_REDIRECTS: { source: string; destination: string }[] = [
  { source: "/new-tires", destination: "/services/new-tires" },
  { source: "/used-tires", destination: "/services/used-tires" },
  { source: "/tire-repair", destination: "/services/tire-repair" },
  { source: "/wheel-alignment", destination: "/services/wheel-alignment" },
  { source: "/tire-balancing", destination: "/services/tire-balancing" },
  { source: "/tire-installation", destination: "/services/tire-installation" },
  { source: "/mobile-tire-service", destination: "/services/mobile-tire-service" },
  {
    source: "/mobile-tire-service/:city",
    destination: "/services/mobile-tire-service/:city",
  },
  { source: "/es/llantas-nuevas", destination: "/es/servicios/llantas-nuevas" },
  { source: "/es/llantas-usadas", destination: "/es/servicios/llantas-usadas" },
  { source: "/es/reparacion-de-llantas", destination: "/es/servicios/reparacion-de-llantas" },
  { source: "/es/alineacion", destination: "/es/servicios/alineacion" },
  { source: "/es/balanceo", destination: "/es/servicios/balanceo" },
  { source: "/es/instalacion-de-llantas", destination: "/es/servicios/instalacion-de-llantas" },
  { source: "/es/servicio-movil", destination: "/es/servicios/servicio-movil" },
  {
    source: "/es/servicio-movil/:city",
    destination: "/es/servicios/servicio-movil/:city",
  },
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return LEGACY_REDIRECTS.map((item) => ({
      source: item.source,
      destination: item.destination,
      statusCode: 301,
    }));
  },
};

export default nextConfig;
