"use client";

import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import RatingBadge from "./RatingBadge";
import CtaButtons from "./CtaButtons";
import UsedPriceLine from "./UsedPriceLine";
import { PHOTOS } from "@/lib/photos";

export default function Hero() {
  const { t, locale } = useLanguage();
  const es = locale === "es";

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[calc(100svh-4.5rem-4.5rem)] items-end overflow-hidden border-b border-white/15 bg-brand-bg md:min-h-[640px] md:items-center"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Image
          src={PHOTOS.storefront.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/70 to-brand-bg/30 md:bg-gradient-to-r md:from-brand-bg md:via-brand-bg/75 md:to-brand-bg/10" />
      </div>

      <div className="container-site w-full px-4 pb-10 pt-24 sm:px-6 md:py-20 lg:px-8">
        <div className="max-w-2xl">
          <RatingBadge className="fade-up" />

          <h1
            className="fade-up headline mt-5 text-[2.9rem] font-bold leading-[0.88] tracking-tight text-white sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block">{t.hero.titleLine1}</span>
            <span className="mt-1 block text-brand-gold">{t.hero.titleLine2}</span>
          </h1>

          <UsedPriceLine className="fade-up mt-4 text-2xl sm:text-3xl" />

          <CtaButtons size="lg" className="fade-up mt-8 sm:max-w-xl" />
          <p
            className="fade-up mt-4 flex items-center gap-2 text-sm font-semibold text-white/80"
            style={{ animationDelay: "240ms" }}
          >
            <span className="inline-block h-2 w-2 animate-pulse bg-brand-red" aria-hidden />
            {es ? "Abiertos hoy" : "Open today"} · {BUSINESS.hoursShort} · {BUSINESS.phoneDisplay}
          </p>
        </div>
      </div>
    </section>
  );
}
