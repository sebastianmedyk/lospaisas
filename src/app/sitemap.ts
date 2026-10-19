import type { MetadataRoute } from "next";
import { getAllPosts, blogPath, postModifiedDate } from "@/lib/blog";
import { blogLanguageAlternates } from "@/lib/blog-routes";
import { getAllLocalPages } from "@/lib/local-pages";
import {
  contactLanguageAlternates,
  contactPath,
  locationLanguageAlternates,
  locationPath,
} from "@/lib/place-routes";
import { serviceLanguageAlternates, servicesPath } from "@/lib/service-routes";
import { SITE_URL } from "@/lib/site";

function placeEntry(
  path: string,
  languages: Record<string, string>,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: 0.8,
    alternates: {
      languages: {
        en: `${SITE_URL}${languages.en}`,
        es: `${SITE_URL}${languages.es}`,
        "x-default": `${SITE_URL}${languages["x-default"]}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  // Only real content dates: posts use `updated`/`date`; listings use their newest post.
  // Pages without a tracked content date omit lastModified instead of faking "now".
  const newestPostDate = (locale?: "en" | "es") => {
    const dates = posts
      .filter((p) => (locale ? p.locale === locale : true))
      .map((p) => postModifiedDate(p))
      .sort();
    return dates.length ? new Date(dates[dates.length - 1]) : undefined;
  };

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: SITE_URL,
          es: `${SITE_URL}/es`,
          "x-default": SITE_URL,
        },
      },
    },
    {
      url: `${SITE_URL}/es`,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: SITE_URL,
          es: `${SITE_URL}/es`,
          "x-default": SITE_URL,
        },
      },
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: newestPostDate("en"),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/blog`,
          es: `${SITE_URL}/es/blog`,
          "x-default": `${SITE_URL}/blog`,
        },
      },
    },
    {
      url: `${SITE_URL}/es/blog`,
      lastModified: newestPostDate("es"),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/blog`,
          es: `${SITE_URL}/es/blog`,
          "x-default": `${SITE_URL}/blog`,
        },
      },
    },
    {
      url: `${SITE_URL}${servicesPath("en")}`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}${serviceLanguageAlternates().en}`,
          es: `${SITE_URL}${serviceLanguageAlternates().es}`,
          "x-default": `${SITE_URL}${serviceLanguageAlternates()["x-default"]}`,
        },
      },
    },
    {
      url: `${SITE_URL}${servicesPath("es")}`,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}${serviceLanguageAlternates().en}`,
          es: `${SITE_URL}${serviceLanguageAlternates().es}`,
          "x-default": `${SITE_URL}${serviceLanguageAlternates()["x-default"]}`,
        },
      },
    },
    placeEntry(locationPath("en"), locationLanguageAlternates()),
    placeEntry(locationPath("es"), locationLanguageAlternates()),
    placeEntry(contactPath("en"), contactLanguageAlternates()),
    placeEntry(contactPath("es"), contactLanguageAlternates()),
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const langs = blogLanguageAlternates(post.locale, post.slug);
    return {
      url: `${SITE_URL}${blogPath(post.locale, post.slug)}`,
      lastModified: new Date(postModifiedDate(post)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE_URL}${langs.en}`,
          es: `${SITE_URL}${langs.es}`,
          "x-default": `${SITE_URL}${langs["x-default"]}`,
        },
      },
    };
  });

  const localRoutes: MetadataRoute.Sitemap = getAllLocalPages().map((page) => ({
    url: `${SITE_URL}${page.path}`,
    ...(page.updated ? { lastModified: new Date(page.updated) } : {}),
    changeFrequency: "monthly" as const,
    priority: page.kind === "city" ? 0.6 : 0.85,
    alternates: {
      languages: {
        en: `${SITE_URL}${page.enPath}`,
        es: `${SITE_URL}${page.esPath}`,
        "x-default": `${SITE_URL}${page.enPath}`,
      },
    },
  }));

  return [...staticRoutes, ...localRoutes, ...postRoutes];
}
