import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type BlogLocale = "en" | "es";

export type BlogPostMeta = {
  title: string;
  description: string;
  date: string;
  locale: BlogLocale;
  slug: string;
  keywords?: string[];
};

export type BlogPost = BlogPostMeta & {
  content: string;
  html: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function isLocale(value: unknown): value is BlogLocale {
  return value === "en" || value === "es";
}

function parsePost(filePath: string): BlogPost | null {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const title = typeof data.title === "string" ? data.title : "";
  const description =
    typeof data.description === "string" ? data.description : "";
  const date = typeof data.date === "string" ? data.date : "";
  const slug = typeof data.slug === "string" ? data.slug : "";
  const locale = data.locale;

  if (!title || !description || !date || !slug || !isLocale(locale)) {
    return null;
  }

  const keywords = Array.isArray(data.keywords)
    ? data.keywords.filter((k): k is string => typeof k === "string")
    : undefined;

  const html = marked.parse(content.trim(), { async: false }) as string;

  return {
    title,
    description,
    date,
    locale,
    slug,
    keywords,
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
    .filter((p) => (locale ? p.locale === locale : true))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts.map(({ content: _c, html: _h, ...meta }) => meta);
}

export function getPost(slug: string, locale: BlogLocale): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const post = parsePost(path.join(BLOG_DIR, file));
    if (post && post.slug === slug && post.locale === locale) {
      return post;
    }
  }
  return null;
}

export function getPostSlugs(locale: BlogLocale): string[] {
  return getAllPosts(locale).map((p) => p.slug);
}

export { blogPath } from "@/lib/blog-routes";
