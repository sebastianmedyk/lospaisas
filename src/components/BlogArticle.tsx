import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { blogPath, postModifiedDate } from "@/lib/blog";
import { getDictionary } from "@/lib/i18n";
import JsonLd from "@/components/JsonLd";
import BlogShell from "@/components/BlogShell";
import PageHero from "@/components/PageHero";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { homePath, locationPath, servicesPath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

type Props = {
  post: BlogPost;
};

export default function BlogArticle({ post }: Props) {
  const t = getDictionary(post.locale);
  const url = absoluteUrl(blogPath(post.locale, post.slug));
  const listingUrl = absoluteUrl(blogPath(post.locale));
  const modified = postModifiedDate(post);

  return (
    <BlogShell locale={post.locale}>
      <JsonLd
        data={articleJsonLd({
          title: post.h1 || post.title,
          description: post.description,
          date: post.date,
          dateModified: modified,
          url,
          locale: post.locale,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: t.nav.home, url: absoluteUrl(homePath(post.locale)) },
          { name: t.nav.blog, url: listingUrl },
          { name: post.title, url },
        ])}
      />
      <PageHero
  locale={post.locale}
        crumbs={[
          { name: t.nav.home, href: homePath(post.locale) },
          { name: t.nav.blog, href: blogPath(post.locale) },
        ]}
        breadcrumbLabel={t.a11y.breadcrumb}
        title={post.h1 || post.title}
        titleId="article-heading"
        intro={<p>{post.description}</p>}
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-none border border-brand-gold/30 bg-transparent px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-wider text-brand-gold">
              {post.locale.toUpperCase()}
            </span>
            <p className="text-[0.7rem] uppercase tracking-wide text-white/55">
              {t.blog.lastUpdated}:{" "}
              <time dateTime={modified} className="text-white/70">
                {modified}
              </time>
            </p>
          </div>
        }
      />
      <article className="section-pad" aria-labelledby="article-heading">
        <div className="container-site max-w-3xl">
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
            <Link href={homePath(post.locale)} className="btn-gold py-2.5 text-xs">
              {t.blog.backHome}
            </Link>
            <Link href={servicesPath(post.locale)} className="btn-outline py-2.5 text-xs">
              {t.nav.services}
            </Link>
            <Link href={locationPath(post.locale)} className="btn-outline py-2.5 text-xs">
              {t.nav.location}
            </Link>
          </div>
        </div>
      </article>
    </BlogShell>
  );
}
