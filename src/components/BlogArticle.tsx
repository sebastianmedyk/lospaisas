import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { blogPath } from "@/lib/blog";
import { getDictionary } from "@/lib/i18n";
import JsonLd from "@/components/JsonLd";
import BlogShell, { BlogBackLinks } from "@/components/BlogShell";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

type Props = {
  post: BlogPost;
};

export default function BlogArticle({ post }: Props) {
  const t = getDictionary(post.locale);
  const url = absoluteUrl(blogPath(post.locale, post.slug));
  const listingUrl = absoluteUrl(blogPath(post.locale));

  return (
    <BlogShell locale={post.locale}>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          date: post.date,
          url,
          locale: post.locale,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t.nav.home, url: absoluteUrl("/") },
          { name: t.nav.blog, url: listingUrl },
          { name: post.title, url },
        ])}
      />
      <article className="section-pad" aria-labelledby="article-heading">
        <div className="container-site max-w-3xl">
          <BlogBackLinks
            locale={post.locale}
            homeLabel={t.nav.home}
            blogLabel={t.nav.blog}
            breadcrumbLabel={t.a11y.breadcrumb}
          />

          <header className="mb-8 border-b border-white/10 pb-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-brand-gold/40 bg-brand-gold/10 px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-wider text-brand-gold">
                {post.locale.toUpperCase()}
              </span>
              <p className="text-[0.7rem] uppercase tracking-wide text-white/45">
                {t.blog.lastUpdated}:{" "}
                <time dateTime={post.date} className="text-white/60">
                  {post.date}
                </time>
              </p>
            </div>
            <h1
              id="article-heading"
              className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
            >
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              {post.description}
            </p>
          </header>

          <div
            className="blog-prose max-w-none text-white/80"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-8">
            <Link
              href={blogPath(post.locale)}
              className="btn-outline py-2.5 text-xs"
            >
              {t.blog.backToBlog}
            </Link>
            <Link href="/" className="btn-gold py-2.5 text-xs">
              {t.blog.backHome}
            </Link>
            <Link href="/#services" className="btn-outline py-2.5 text-xs">
              {t.nav.services}
            </Link>
            <Link href="/#location" className="btn-outline py-2.5 text-xs">
              {t.nav.location}
            </Link>
          </div>
        </div>
      </article>
    </BlogShell>
  );
}
