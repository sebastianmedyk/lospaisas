"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceHref, servicesPath } from "@/lib/service-routes";

const focus =
  "rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg";

export default function Services() {
  const { t, locale } = useLanguage();
  const indexHref = servicesPath(locale);

  return (
    <section
      id="services"
      className="section-pad relative border-b border-white/15"
      aria-labelledby="services-heading"
    >
      <div className="container-site relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-3">{t.nav.services}</p>
          <h2
            id="services-heading"
            className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
          >
            {t.services.title}
          </h2>
          <span className="accent-rule accent-rule-center" aria-hidden />
          <p className="mt-3 text-white/80">{t.services.teaser}</p>
        </div>

        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {t.services.items.map((service, index) => (
            <li key={service.title}>
              <Link
                href={serviceHref(locale, index)}
                className={`inline-block border border-white/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/80 transition hover:border-brand-gold/50 hover:text-brand-gold ${focus}`}
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center">
          <Link href={indexHref} className={`btn-gold min-h-[48px] ${focus}`}>
            {t.services.all}
          </Link>
        </p>
      </div>
    </section>
  );
}
