"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SeoArea() {
  const { t, locale } = useLanguage();
  const blogHref = locale === "es" ? "/es/blog" : "/blog";

  return (
    <section
      id="service-area"
      className="section-pad relative border-t border-white/10 bg-black/30"
      aria-labelledby="service-area-heading"
    >
      <div className="container-site relative max-w-3xl">
        <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-brand-gold">
          {t.seoArea.eyebrow}
        </p>
        <h2
          id="service-area-heading"
          className="headline text-3xl leading-[0.95] text-white sm:text-4xl"
        >
          {t.seoArea.title}
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base">
          {t.seoArea.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/60">
          <a
            href="#services"
            className="font-bold text-brand-gold underline-offset-4 hover:underline"
          >
            {t.nav.services}
          </a>
          {" · "}
          <a
            href="#location"
            className="font-bold text-brand-gold underline-offset-4 hover:underline"
          >
            {t.nav.location}
          </a>
          {" · "}
          <Link
            href={blogHref}
            className="font-bold text-brand-gold underline-offset-4 hover:underline"
          >
            {t.nav.blog}
          </Link>
        </p>
      </div>
    </section>
  );
}
