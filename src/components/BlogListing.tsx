import { homePath } from "@/lib/routes";
import Link from "next/link";
import type { BlogLocale, BlogPostMeta } from "@/lib/blog";
import { blogPath } from "@/lib/blog";
import { getDictionary } from "@/lib/i18n";
import BlogShell from "@/components/BlogShell";
import PageHero from "@/components/PageHero";
import LangSwitch from "@/components/LangSwitch";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

type Props = {
  locale: BlogLocale;
  posts: BlogPostMeta[];
};

export default function BlogListing({ locale, posts }: Props) {
  const t = getDictionary(locale);
  const listingUrl = absoluteUrl(blogPath(locale));

  return (
    <BlogShell locale={locale}>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t.nav.home, url: absoluteUrl(homePath(locale)) },
          { name: t.nav.blog, url: listingUrl },
        ])}
      />
      <PageHero
        crumbs={[{ name: t.nav.home, href: homePath(locale) }, { name: t.nav.blog }]}
        breadcrumbLabel={t.a11y.breadcrumb}
        eyebrow={t.nav.blog}
        title={t.blog.title}
        titleId="blog-listing-heading"
        intro={<p>{t.blog.subtitle}</p>}
        extra={<LangSwitch locale={locale} hrefs={{ es: blogPath("es"), en: blogPath("en"), pl: blogPath("pl") }} />}
      />
      <section className="section-pad" aria-labelledby="blog-listing-heading">
        <div className="container-site">
          {posts.length === 0 ? (
            <p className="mt-10 text-white/55">{t.blog.empty}</p>
          ) : (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {posts.map((post) => (
                <li key={`${post.locale}-${post.slug}`} className="card-dark !p-0 border-t-2 !border-t-brand-gold">
                  <Link
                    href={blogPath(post.locale, post.slug)}
                    className="block p-5 transition hover:bg-white/[0.04]"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-none border border-brand-gold/30 bg-transparent px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-wider text-brand-gold">
                        {post.locale.toUpperCase()}
                      </span>
                      <p className="text-[0.7rem] uppercase tracking-wide text-white/60">
                        {t.blog.lastUpdated}:{" "}
                        <time dateTime={post.date} className="text-white/55">
                          {post.date}
                        </time>
                      </p>
                    </div>
                    <h2 className="headline text-2xl font-bold leading-tight text-white">
                      {post.h1 || post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-block text-xs font-black uppercase tracking-wider text-brand-gold">
                      {t.blog.readMore} →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </BlogShell>
  );
}
