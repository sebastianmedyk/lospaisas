import { sitemapSectionResponse } from "@/lib/sitemap/xml";

export const dynamic = "force-static";

export function GET() {
  return sitemapSectionResponse("blog");
}
