"use client";

import Image from "next/image";
import { BUSINESS, USED_TIRE_PRICE_FROM } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPinIcon, PhoneIcon, StarIcon } from "./Icons";
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
          <a
            href={BUSINESS.reviewsListUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up inline-flex items-center gap-2.5 border border-white/20 bg-black/55 px-3.5 py-2 backdrop-blur-sm transition hover:border-brand-gold/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label={`${t.hero.statRatingLabel} ${BUSINESS.ratingValue}, ${BUSINESS.reviewCount} ${t.hero.statReviewsLabel}`}
          >
            <span className="flex gap-0.5 text-brand-gold" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-sm font-extrabold tracking-wide text-white">
              {BUSINESS.ratingValue}★
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Google · {BUSINESS.reviewCount} {t.hero.statReviewsLabel.toLowerCase()}
            </span>
          </a>

          <h1
            className="fade-up headline mt-5 text-[2.9rem] font-bold leading-[0.88] tracking-tight text-white sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block">{t.hero.titleLine1}</span>
            <span className="mt-1 block text-brand-gold">{t.hero.titleLine2}</span>
          </h1>

          <p
            className="fade-up headline mt-4 text-2xl font-bold tracking-wide text-white sm:text-3xl"
            style={{ animationDelay: "120ms" }}
          >
            <span className="border-b-2 border-brand-red pb-0.5">
              {es ? "Llantas usadas desde" : "Used Tires from"} ${USED_TIRE_PRICE_FROM}
            </span>
          </p>

          <div
            className="fade-up mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:max-w-xl"
            style={{ animationDelay: "160ms" }}
          >
            <a
              href={BUSINESS.phoneTel}
              className="btn-gold !border-brand-gold !bg-brand-gold !py-4 !text-base !text-brand-bg hover:!bg-white min-h-[56px]"
            >
              <PhoneIcon className="h-5 w-5" />
              {t.hero.ctaCall}
            </a>
            <a
              href={BUSINESS.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !border-white/40 !bg-black/40 !py-4 !text-base !text-white min-h-[56px]"
            >
              <MapPinIcon className="h-5 w-5" />
              {t.hero.ctaDirections}
            </a>
          </div>
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
