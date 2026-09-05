"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { BUSINESS } from "@/lib/constants";

export default function KeyFacts() {
  const { t, locale } = useLanguage();
  const blogHref = locale === "es" ? "/es/blog" : "/blog";
  const kf = t.keyFacts;

  return (
    <section
      id="key-facts"
      className="section-pad relative border-t border-white/10 bg-black/25"
      aria-labelledby="key-facts-heading"
    >
      <div className="container-site relative max-w-3xl">
        <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-brand-gold">
          {kf.eyebrow}
        </p>
        <h2
          id="key-facts-heading"
          className="headline text-3xl leading-[0.95] text-white sm:text-4xl"
        >
          {kf.title}
        </h2>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <h3 className="headline text-lg text-brand-gold sm:text-xl">
            {kf.aboutHeading}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
            {kf.about}
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {kf.blocks.map((block) => (
            <article
              key={block.question}
              className="border-l-2 border-brand-gold/50 pl-4"
            >
              <h3 className="text-base font-bold text-white sm:text-lg">
                {block.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
                {block.answer}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="headline text-base text-brand-gold">
              {kf.servicesHeading}
            </h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-white/75">
              {kf.servicesBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="headline text-base text-brand-gold">
              {kf.napHeading}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-white/75">
              <li>{BUSINESS.name}</li>
              <li>{BUSINESS.address}</li>
              <li>{BUSINESS.phoneDisplay}</li>
              <li>
                {locale === "es"
                  ? `Abierto 7 días · ${BUSINESS.hours} (incluyendo domingo)`
                  : `Open 7 days · ${BUSINESS.hours} (including Sunday)`}
              </li>
            </ul>
          </div>
        </div>

        <nav
          className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm"
          aria-label={kf.linksLabel}
        >
          <span className="w-full text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/45 sm:w-auto sm:mr-1">
            {kf.linksLabel}
          </span>
          <a
            href="#services"
            className="font-bold text-brand-gold underline-offset-4 hover:underline"
          >
            {t.nav.services}
          </a>
          <span className="text-white/30" aria-hidden>
            ·
          </span>
          <a
            href="#location"
            className="font-bold text-brand-gold underline-offset-4 hover:underline"
          >
            {t.nav.location}
          </a>
          <span className="text-white/30" aria-hidden>
            ·
          </span>
          <a
            href="#contact"
            className="font-bold text-brand-gold underline-offset-4 hover:underline"
          >
            {t.nav.contact}
          </a>
          <span className="text-white/30" aria-hidden>
            ·
          </span>
          <a
            href="#faq"
            className="font-bold text-brand-gold underline-offset-4 hover:underline"
          >
            {t.nav.faq}
          </a>
          <span className="text-white/30" aria-hidden>
            ·
          </span>
          <Link
            href={blogHref}
            className="font-bold text-brand-gold underline-offset-4 hover:underline"
          >
            {t.nav.blog}
          </Link>
        </nav>
      </div>
    </section>
  );
}
