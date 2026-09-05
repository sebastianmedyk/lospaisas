export type BlogLocale = "en" | "es";

export function blogPath(locale: BlogLocale, slug?: string): string {
  const base = locale === "es" ? "/es/blog" : "/blog";
  return slug ? `${base}/${slug}` : base;
}

/** Pair EN <-> ES article slugs for language switching on blog pages. */
const SLUG_ALTERNATES: Record<string, string> = {
  "used-tires-west-palm-beach": "llantas-usadas-west-palm-beach",
  "llantas-usadas-west-palm-beach": "used-tires-west-palm-beach",
  "flat-tire-sunday-military-trail": "llanta-ponchada-domingo-military-trail",
  "llanta-ponchada-domingo-military-trail": "flat-tire-sunday-military-trail",
  "wheel-balancing-no-hidden-fees": "balanceo-sin-sorpresas",
  "balanceo-sin-sorpresas": "wheel-balancing-no-hidden-fees",
  "why-drivers-trust-los-paisas-west-palm-beach":
    "por-que-confiar-en-los-paisas-west-palm-beach",
  "por-que-confiar-en-los-paisas-west-palm-beach":
    "why-drivers-trust-los-paisas-west-palm-beach",
  "wheel-alignment-military-trail-west-palm-beach":
    "alineacion-geometria-military-trail-west-palm-beach",
  "alineacion-geometria-military-trail-west-palm-beach":
    "wheel-alignment-military-trail-west-palm-beach",
  "tire-repair-vulcanization-west-palm-beach":
    "reparacion-vulcanizacion-llantas-west-palm-beach",
  "reparacion-vulcanizacion-llantas-west-palm-beach":
    "tire-repair-vulcanization-west-palm-beach",
  "install-customer-tires-west-palm-beach":
    "instalacion-llantas-del-cliente-west-palm-beach",
  "instalacion-llantas-del-cliente-west-palm-beach":
    "install-customer-tires-west-palm-beach",
  "mobile-tire-service-west-palm-beach":
    "servicio-movil-llantas-west-palm-beach",
  "servicio-movil-llantas-west-palm-beach":
    "mobile-tire-service-west-palm-beach",
  "new-tires-west-palm-beach-military-trail":
    "llantas-nuevas-west-palm-beach-military-trail",
  "llantas-nuevas-west-palm-beach-military-trail":
    "new-tires-west-palm-beach-military-trail",
};

/** Path to switch to when changing UI language while on a blog route. */
export function getAlternateBlogPath(
  pathname: string,
  nextLocale: BlogLocale
): string | null {
  const isEsBlog = pathname === "/es/blog" || pathname.startsWith("/es/blog/");
  const isEnBlog =
    (pathname === "/blog" || pathname.startsWith("/blog/")) && !isEsBlog;
  if (!isEsBlog && !isEnBlog) return null;

  if (pathname === "/blog" || pathname === "/es/blog") {
    return blogPath(nextLocale);
  }

  const parts = pathname.split("/").filter(Boolean);
  const slug = isEsBlog ? parts[2] : parts[1];
  if (!slug) return blogPath(nextLocale);

  const altSlug = SLUG_ALTERNATES[slug];
  if (!altSlug) return blogPath(nextLocale);
  return blogPath(nextLocale, altSlug);
}

/** hreflang map for blog listing or a paired article. */
export function blogLanguageAlternates(
  locale: BlogLocale,
  slug?: string
): Record<string, string> {
  if (!slug) {
    return {
      en: "/blog",
      es: "/es/blog",
      "x-default": "/blog",
    };
  }

  const altSlug = SLUG_ALTERNATES[slug];
  if (!altSlug) {
    return {
      en: "/blog",
      es: "/es/blog",
      "x-default": "/blog",
    };
  }

  const enSlug = locale === "en" ? slug : altSlug;
  const esSlug = locale === "es" ? slug : altSlug;

  return {
    en: blogPath("en", enSlug),
    es: blogPath("es", esSlug),
    "x-default": blogPath("en", enSlug),
  };
}
