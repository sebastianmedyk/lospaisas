import type { MetadataRoute } from "next";
import { getAllPosts, postModifiedDate } from "@/lib/blog";
import { getAllLocalPages } from "@/lib/local-pages";
import { blogPath, homePath, languageAlternates, LOCALES, PAGE_GROUPS, servicesPath, type Locale } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";

const abs = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

/** One entry per page per language (es, en, pl), each with the full hreflang set (es = x-default). */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const localPages = getAllLocalPages();

  // Only real content dates: posts use `updated`/`date`, listings their newest post,
  // service/city pages their `updated` field. Others omit lastModified rather than fake "now".
  const lastModified = (path: string, locale: Locale): Date | undefined => {
    const post = posts.find((p) => p.locale === locale && blogPath(locale, p.slug) === path);
    if (post) return new Date(postModifiedDate(post));
    if (path === blogPath(locale)) {
      const dates = posts.filter((p) => p.locale === locale).map(postModifiedDate).sort();
      return dates.length ? new Date(dates[dates.length - 1]) : undefined;
    }
    const page = localPages.find((p) => p.path === path);
    return page?.updated ? new Date(page.updated) : undefined;
  };

  const priority = (group: (typeof PAGE_GROUPS)[number]): number => {
    if (group.es === homePath("es")) return 1;
    if (group.es === servicesPath("es")) return 0.9;
    if (group.es.startsWith(`${servicesPath("es")}/`)) return group.es.split("/").length > 3 ? 0.6 : 0.85;
    if (group.es.startsWith(`${blogPath("es")}/`)) return 0.7;
    return 0.8;
  };

  return PAGE_GROUPS.flatMap((group) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(group)).map(([k, v]) => [k, abs(v)]),
    );
    return LOCALES.map((locale) => {
      const modified = lastModified(group[locale], locale);
      return {
        url: abs(group[locale]),
        ...(modified ? { lastModified: modified } : {}),
        changeFrequency: group.es === "/" || group.es === blogPath("es") ? ("weekly" as const) : ("monthly" as const),
        priority: priority(group),
        alternates: { languages },
      };
    });
  });
}
