import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import type { Locale } from "@/lib/routes";

export type BlogLocale = Locale;

export type BlogPostMeta = {
  title: string;
  description: string;
  date: string;
  /** Date of the last substantial content update (YYYY-MM-DD). Falls back to `date`. */
  updated?: string;
  locale: BlogLocale;
  slug: string;
  keywords?: string[];
  /** Visible H1 when it must differ from the search title. */
  h1?: string;
  /** When true, `title` is the full <title> and must not use the layout template. */
  absoluteTitle?: boolean;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  html: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Scheduled publishing: a post whose `date` is after "today" (shop time zone,
 * America/New_York) is treated as a draft. It is not rendered (404), not listed,
 * and not in sitemaps. The site is static, so it goes live on the first build
 * on/after its date (see scripts/republish.sh). `BLOG_TODAY=YYYY-MM-DD` overrides for testing.
 */
export function blogToday(): string {
  const override = process.env.BLOG_TODAY;
  if (override && /^\d{4}-\d{2}-\d{2}$/.test(override)) return override;
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function isPublished(post: Pick<BlogPostMeta, "date">): boolean {
  return post.date <= blogToday();
}

function isLocale(value: unknown): value is BlogLocale {
  return value === "en" || value === "es" || value === "pl";
}

function parsePost(filePath: string): BlogPost | null {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const title = typeof data.title === "string" ? data.title : "";
  const description =
    typeof data.description === "string" ? data.description : "";
  const date = typeof data.date === "string" ? data.date : "";
  const updated =
    typeof data.updated === "string" && data.updated.trim()
      ? data.updated.trim()
      : undefined;
  const slug = typeof data.slug === "string" ? data.slug : "";
  const locale = data.locale;

  if (!title || !description || !date || !slug || !isLocale(locale)) {
    return null;
  }

  const keywords = Array.isArray(data.keywords)
    ? data.keywords.filter((k): k is string => typeof k === "string")
    : undefined;
  const h1 = typeof data.h1 === "string" && data.h1.trim() ? data.h1.trim() : undefined;
  const absoluteTitle = data.absoluteTitle === true;

  const html = marked.parse(content.trim(), { async: false }) as string;

  return {
    title,
    description,
    date,
    updated,
    locale,
    slug,
    keywords,
    h1,
    absoluteTitle,
    content,
    html,
  };
}

export function getAllPosts(locale?: BlogLocale): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"));

  const posts = files
    .map((file) => parsePost(path.join(BLOG_DIR, file)))
    .filter((p): p is BlogPost => p !== null)
    .filter(isPublished)
    .filter((p) => (locale ? p.locale === locale : true))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts.map((post) => ({
    title: post.title,
    description: post.description,
    date: post.date,
    updated: post.updated,
    locale: post.locale,
    slug: post.slug,
    keywords: post.keywords,
    h1: post.h1,
    absoluteTitle: post.absoluteTitle,
  }));
}

export function getPost(slug: string, locale: BlogLocale): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const post = parsePost(path.join(BLOG_DIR, file));
    if (post && post.slug === slug && post.locale === locale && isPublished(post)) {
      return post;
    }
  }
  return null;
}

export function getPostSlugs(locale: BlogLocale): string[] {
  return getAllPosts(locale).map((p) => p.slug);
}

/** Last real content change for a post: `updated` when set, otherwise `date`. */
export function postModifiedDate(post: Pick<BlogPostMeta, "date" | "updated">): string {
  return post.updated || post.date;
}

export { blogPath } from "@/lib/routes";
