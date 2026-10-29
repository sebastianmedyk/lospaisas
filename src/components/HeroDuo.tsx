"use client";

import Image from "next/image";
import Link from "next/link";
import { HERO_LITE, PHOTOS } from "@/lib/photos";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceHref } from "@/lib/service-routes";
import RatingBadge from "./RatingBadge";
import CtaButtons from "./CtaButtons";
import UsedPriceLine from "./UsedPriceLine";

/** Variant C hero: the choice IS the hero. Headline strip on top, then New and Used as two big doors. */
export default function HeroDuo() {
  const { t, locale } = useLanguage();
  const es = locale === "es";
  const doors = [
    { index: 0, photo: HERO_LITE.newTiresRack, tag: es ? "Nuevas" : "New", tagCls: "bg-brand-gold text-brand-bg", pos: "object-center" },
    { index: 1, photo: PHOTOS.poleSign, tag: es ? "Usadas" : "Used", tagCls: "bg-brand-red text-white", pos: "object-center" },
  ];
  return (
    <section id="top" className="border-b border-white/15 bg-brand-bg">
      <div className="container-site flex flex-col gap-6 px-4 pb-8 pt-10 sm:px-6 md:flex-row md:items-end md:justify-between md:pb-10 md:pt-14 lg:px-8">
        <div className="max-w-3xl">
          <RatingBadge className="fade-up" />
          <h1
            className="fade-up headline mt-5 text-s4 font-bold tracking-tight text-white sm:text-s5 lg:text-s6"
            style={{ animationDelay: "80ms" }}
          >
            {t.hero.titleLine1} <span className="text-brand-gold">{t.hero.titleLine2}</span>
          </h1>
        </div>
        <div className="fade-up shrink-0 md:text-right">
          <UsedPriceLine className="mb-4 text-s1" />
          <CtaButtons size="lg" className="md:justify-end" />
        </div>
      </div>

      <ul className="grid md:grid-cols-[1.25fr_1fr]">
        {doors.map(({ index, photo, tag, tagCls, pos }) => (
          <li key={index} className="border-t border-white/15 md:border-l first:md:border-l-0">
            <Link
              href={serviceHref(locale, index)}
              className="group relative block h-[320px] overflow-hidden bg-black sm:h-[400px] md:h-[480px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt[locale]}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 55vw"
                className={`object-cover ${pos} opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <span className={`inline-block px-3 py-1 text-xs font-extrabold uppercase tracking-[0.25em] ${tagCls}`}>
                  {tag}
                </span>
                <span className="headline mt-3 block text-s5 font-bold text-white sm:text-s6">
                  {t.services.items[index].title}
                </span>
                <span className="mt-2 block max-w-xs text-white/80">{t.services.items[index].description}</span>
                <span className="mt-3 inline-block text-sm font-extrabold uppercase tracking-[0.18em] text-brand-gold transition group-hover:translate-x-1">
                  {t.services.view} →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
