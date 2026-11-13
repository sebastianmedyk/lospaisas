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

export type BlogFaqItem = { question: string; answer: string };

export type BlogPost = BlogPostMeta & {
  content: string;
  html: string;
  /** Q&As from the post's visible FAQ section; set only when frontmatter has `faqSchema: true`. */
  faq?: BlogFaqItem[];
};

const FAQ_HEADING = /faq|question|pregunta|pytani/i;

function plainText(markdown: string): string {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Reads the visible FAQ already in the post body: an H2 whose text matches
 * FAQ_HEADING, with each H3 as a question and the paragraphs under it as the answer.
 * Used for FAQPage JSON-LD, so the schema always mirrors what readers see.
 */
function extractFaq(content: string): BlogFaqItem[] {
  const items: BlogFaqItem[] = [];
  let inFaq = false;
  let current: BlogFaqItem | null = null;
  for (const token of marked.lexer(content)) {
    if (token.type === "heading") {
      if (token.depth <= 2) {
        inFaq = token.depth === 2 && FAQ_HEADING.test(token.text);
        current = null;
      } else if (inFaq && token.depth === 3) {
        current = { question: plainText(token.text), answer: "" };
        items.push(current);
      } else {
        current = null;
      }
    } else if (inFaq && current && token.type === "paragraph") {
      current.answer = [current.answer, plainText(token.text)].filter(Boolean).join(" ");
    }
  }
  return items.filter((item) => item.question && item.answer);
}

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
  const faq = data.faqSchema === true ? extractFaq(content) : undefined;

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
    faq,
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

const STOP = new Set(["west","palm","beach","military","trail","tires","tire","llantas","llanta","opony","opon","opona","oponie","los","paisas","shop","near","with","para","como","your","the","and","por","del","las","que","jak","czy","przy","check","cheap","county","guide","before","what","your","from","after","revisar","sprawdz","sprawd","cerca","okolicy","taller","warsztat","serwis","service","servicio"]);

export function topicTokens(p: Pick<BlogPostMeta, "title" | "slug" | "keywords">): Set<string> {
  const text = [p.title, p.slug.replace(/-/g, " "), ...(p.keywords ?? [])].join(" ").toLowerCase();
  return new Set(
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length > 3 && !STOP.has(w))
      .map((w) => w.slice(0, 5)),
  );
}

/**
 * Related articles: same language, live only (date-gated at build), ranked by topic overlap
 * (title, slug, keywords). Shared words are weighted by rarity (IDF). Falls back to newest posts when nothing overlaps.
 */
export function getRelatedPosts(post: BlogPost, count = 3): BlogPostMeta[] {
  const pool = getAllPosts(post.locale);
  const tokens = new Map(pool.map((p) => [p.slug, topicTokens(p)]));
  const df = new Map<string, number>();
  tokens.forEach((t) => t.forEach((w) => df.set(w, (df.get(w) ?? 0) + 1)));
  const mine = topicTokens(post);
  const n = pool.length + 1;
  return pool
    .filter((p) => p.slug !== post.slug)
    .map((p, i) => {
      let score = 0;
      tokens.get(p.slug)!.forEach((w) => {
        if (mine.has(w)) score += Math.log(n / (df.get(w) ?? 1));
      });
      return { p, score: score - i * 0.001 };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((x) => x.p);
}

/** Locales whose version of this blog post is live (for hreflang and the language switcher). */
export function liveLocalesForPost(slugs: Record<Locale, string> | undefined, locale: Locale): Locale[] {
  if (!slugs) return [locale];
  return (["es", "en", "pl"] as Locale[]).filter((l) => getPost(slugs[l], l));
}
