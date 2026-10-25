"use client";

import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { HERO_LITE } from "@/lib/photos";
import { useLanguage } from "@/contexts/LanguageContext";
import RatingBadge from "./RatingBadge";
import CtaButtons from "./CtaButtons";
import UsedPriceLine from "./UsedPriceLine";

/** Variant A hero: type-led split. Big stacked headline on black, tall real photo offset to the right. */
export default function HeroSplit() {
  const { t, locale } = useLanguage();
  const es = locale === "es";
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/15 bg-brand-bg">
      <div className="container-site grid gap-10 px-4 pb-12 pt-10 sm:px-6 md:grid-cols-12 md:pb-0 md:pt-16 lg:px-8">
        <div className="md:col-span-7 md:pb-20 lg:pb-28">
          <RatingBadge className="fade-up" />
          <h1
            className="fade-up headline mt-6 text-s5 font-bold tracking-tight text-white sm:text-s6 lg:text-s7"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block">{t.hero.titleLine1}</span>
            <span className="mt-2 block text-brand-gold">{t.hero.titleLine2}</span>
          </h1>
          <UsedPriceLine className="fade-up mt-6 text-s2" />
          <CtaButtons size="lg" className="fade-up mt-8" />
          <p className="fade-up mt-5 text-sm font-semibold text-white/80">
            {es ? "Abiertos hoy" : "Open today"} · {BUSINESS.hoursShort} · {BUSINESS.address}
          </p>
        </div>

        <div className="relative md:col-span-5 md:-mb-px">
          <div className="absolute -left-3 top-8 hidden h-40 w-3 bg-brand-red md:block" aria-hidden />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden border border-white/15 md:mx-0 md:aspect-auto md:h-full md:min-h-[560px] md:max-w-none">
            <Image
              src={HERO_LITE.exterior.src}
              alt={HERO_LITE.exterior.alt[locale]}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-bg/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
