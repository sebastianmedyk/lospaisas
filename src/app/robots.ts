import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Allow all crawlers including major AI / generative-engine bots (do not block). */
const AI_BOTS = [
  "Googlebot",
  "Bingbot",
  "Applebot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "Bytespider",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
