import type { MetadataRoute } from "next";
import { getAllPosts, blogPath } from "@/lib/blog";
import { blogLanguageAlternates } from "@/lib/blog-routes";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
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
      lastModified: now,
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
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const langs = blogLanguageAlternates(post.locale, post.slug);
    return {
      url: `${SITE_URL}${blogPath(post.locale, post.slug)}`,
      lastModified: new Date(post.date),
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

  return [...staticRoutes, ...postRoutes];
}
