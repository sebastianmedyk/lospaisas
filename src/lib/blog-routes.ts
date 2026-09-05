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
