import Link from "next/link";
import type { BlogLocale, BlogPostMeta } from "@/lib/blog";
import { blogPath } from "@/lib/blog";
import { getDictionary } from "@/lib/i18n";
import BlogShell, { BlogBackLinks } from "@/components/BlogShell";
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
          { name: t.nav.home, url: absoluteUrl("/") },
          { name: t.nav.blog, url: listingUrl },
        ])}
      />
      <section className="section-pad" aria-labelledby="blog-listing-heading">
        <div className="container-site">
          <BlogBackLinks
            locale={locale}
            homeLabel={t.nav.home}
            blogLabel={t.nav.blog}
          />
          <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-brand-gold">
            {t.nav.blog}
          </p>
          <h1
            id="blog-listing-heading"
            className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
          >
            {t.blog.title}
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">{t.blog.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide">
            <Link
              href="/blog"
              className={`border px-3 py-1.5 ${
                locale === "en"
                  ? "border-brand-gold bg-brand-gold/15 text-brand-gold"
                  : "border-white/20 text-white/60 hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              English
            </Link>
            <Link
              href="/es/blog"
              className={`border px-3 py-1.5 ${
                locale === "es"
                  ? "border-brand-gold bg-brand-gold/15 text-brand-gold"
                  : "border-white/20 text-white/60 hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              Español
            </Link>
          </div>

          {posts.length === 0 ? (
            <p className="mt-10 text-white/55">{t.blog.empty}</p>
          ) : (
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {posts.map((post) => (
                <li key={`${post.locale}-${post.slug}`} className="card-dark !p-0">
                  <Link
                    href={blogPath(post.locale, post.slug)}
                    className="block p-5 transition hover:bg-white/[0.04]"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="border border-brand-gold/40 bg-brand-gold/10 px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-wider text-brand-gold">
                        {post.locale.toUpperCase()}
                      </span>
                      <time
                        dateTime={post.date}
                        className="text-[0.7rem] uppercase tracking-wide text-white/45"
                      >
                        {post.date}
                      </time>
                    </div>
                    <h2 className="headline text-lg text-white sm:text-xl">
                      {post.title}
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
