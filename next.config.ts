import type { NextConfig } from "next";
import { BLOG_SLUGS, SERVICE_SLUGS } from "./src/lib/routes";

/*
 * URL scheme (2026-10): ES at the root, EN under /en, PL under /pl.
 * Every old URL 301s straight to its final target (no chains).
 * Not redirectable: the old EN home "/" and EN blog index "/blog" are now the ES pages.
 */
const EN_SERVICE = SERVICE_SLUGS.map((s) => s.en);
const ES_SERVICE = SERVICE_SLUGS.map((s) => s.es);
const MOBILE = { en: "mobile-tire-service", es: "servicio-movil" };

const REDIRECTS: { source: string; destination: string }[] = [
  // Old EN root pages -> /en
  { source: "/services", destination: "/en/services" },
  { source: "/services/:path*", destination: "/en/services/:path*" },
  { source: "/location", destination: "/en/location" },
  { source: "/contact", destination: "/en/contact" },
  ...BLOG_SLUGS.map((s) => ({ source: `/blog/${s.en}`, destination: `/en/blog/${s.en}` })),
  // Old ES /es pages -> root
  { source: "/es", destination: "/" },
  { source: "/es/servicios", destination: "/servicios" },
  { source: "/es/servicios/:path*", destination: "/servicios/:path*" },
  { source: "/es/ubicacion", destination: "/ubicacion" },
  { source: "/es/contacto", destination: "/contacto" },
  { source: "/es/blog", destination: "/blog" },
  { source: "/es/blog/:slug", destination: "/blog/:slug" },
  // Legacy flat service URLs -> final targets
  ...EN_SERVICE.map((slug) => ({ source: `/${slug}`, destination: `/en/services/${slug}` })),
  { source: `/${MOBILE.en}/:city`, destination: `/en/services/${MOBILE.en}/:city` },
  ...ES_SERVICE.map((slug) => ({ source: `/es/${slug}`, destination: `/servicios/${slug}` })),
  { source: `/es/${MOBILE.es}/:city`, destination: `/servicios/${MOBILE.es}/:city` },
  // Former design previews
  { source: "/preview/:path*", destination: "/" },
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return REDIRECTS.map((item) => ({ ...item, statusCode: 301 }));
  },
};

export default nextConfig;

// Enables Cloudflare bindings in `next dev` (OpenNext adapter).
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
