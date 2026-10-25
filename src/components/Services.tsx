"use client";

import Link from "next/link";
import Image from "next/image";
import { PHOTOS, type Photo } from "@/lib/photos";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceHref, servicesPath } from "@/lib/service-routes";
import Reveal from "./Reveal";

const focus =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg";

/* i18n service indexes: 0 new, 1 used, 2 alignment, 3 balancing, 4 repair, 5 install, 6 mobile */
const CARDS: [number, Photo][] = [
  [4, PHOTOS.repair1],
  [3, PHOTOS.balancer1],
  [2, PHOTOS.balancer2],
  [5, PHOTOS.install],
  [6, PHOTOS.truck1],
];

export default function Services() {
  const { t, locale } = useLanguage();
  const es = locale === "es";
  const items = t.services.items;

  const split: { index: number; photo: Photo; tag: string; accent: string }[] = [
    { index: 0, photo: PHOTOS.newTread, tag: es ? "Nuevas" : "New", accent: "bg-brand-gold text-brand-bg" },
    { index: 1, photo: PHOTOS.poleSign, tag: es ? "Usadas" : "Used", accent: "bg-brand-red text-white" },
  ];

  return (
    <section
      id="services"
      className="section-pad relative border-b border-white/15"
      aria-labelledby="services-heading"
    >
      <div className="container-site relative">
        <Reveal>
          <p className="section-label mb-3">{t.nav.services}</p>
          <h2
            id="services-heading"
            className="headline text-5xl font-bold leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {t.services.title}
          </h2>
          <span className="accent-rule accent-rule-lg" aria-hidden />
        </Reveal>

        {/* New vs Used */}
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {split.map(({ index, photo, tag, accent }, i) => (
            <li key={index}>
              <Reveal delay={i * 120}>
                <Link
                  href={serviceHref(locale, index)}
                  className={`group relative block aspect-[4/3] overflow-hidden border border-white/15 bg-black sm:aspect-[16/10] ${focus}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    loading="lazy"
                    className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className={`inline-block px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.25em] ${accent}`}>
                      {tag}
                    </span>
                    <h3 className="headline mt-3 text-4xl font-bold leading-none text-white sm:text-5xl">
                      {items[index].title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-white/80">{items[index].description}</p>
                    <span className="mt-3 inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-brand-gold transition group-hover:translate-x-1">
                      {t.services.view} →
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Other services */}
        <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {CARDS.map(([index, photo], i) => (
            <li key={index}>
              <Reveal delay={i * 70}>
                <Link
                  href={serviceHref(locale, index)}
                  className={`group block border border-white/15 bg-[#141414] transition hover:border-brand-gold/60 ${focus}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <Image
                      src={photo.src}
                      alt={photo.alt[locale]}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      loading="lazy"
                      className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                  <div className="border-t-2 border-brand-gold px-3 py-3">
                    <h3 className="headline text-xl font-bold leading-tight text-white group-hover:text-brand-gold">
                      {items[index].title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link href={servicesPath(locale)} className={`btn-gold min-h-[48px] ${focus}`}>
            {t.services.all}
          </Link>
        </p>
      </div>
    </section>
  );
}
