"use client";

import Link from "next/link";
import Image from "next/image";
import { PHOTOS } from "@/lib/photos";
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

        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
          {(
            [
              [1, PHOTOS.usedBay],
              [0, PHOTOS.newTread],
              [4, PHOTOS.repair1],
              [6, PHOTOS.truck1],
            ] as const
          ).map(([index, photo]) => (
            <li key={photo.src}>
              <Link
                href={serviceHref(locale, index)}
                className={`group block border border-white/15 bg-black transition hover:border-brand-gold/50 ${focus}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt[locale]}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 768px) 50vw, 240px"
                  loading="lazy"
                  className="aspect-[3/4] h-auto w-full object-cover opacity-90 transition group-hover:opacity-100"
                />
                <span className="block border-t border-white/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/85 group-hover:text-brand-gold">
                  {t.services.items[index].title}
                </span>
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
