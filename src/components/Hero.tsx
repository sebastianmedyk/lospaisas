"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import PromoPanel from "./PromoPanel";

export default function Hero() {
  const { t, locale } = useLanguage();

  const stats = [
    {
      value: `${BUSINESS.ratingValue}★`,
      label: t.hero.statRatingLabel,
      href: BUSINESS.mapsUrl,
    },
    {
      value: BUSINESS.reviewCount,
      label: t.hero.statReviewsLabel,
      href: BUSINESS.mapsUrl,
    },
    {
      value: t.hero.statOpenValue,
      label: t.hero.statOpenLabel,
    },
    {
      value: t.hero.statHoursValue,
      label: t.hero.statHoursLabel,
    },
    {
      value: t.hero.statMobileValue,
      label: t.hero.statMobileLabel,
    },
  ] as const;

  return (
    <section id="top" className="relative overflow-hidden border-b border-white/15 hero-bleed">
      {/* Thin gold angled accent rules */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-1 w-24 origin-left -skew-x-[18deg] bg-brand-gold sm:w-32"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"
        aria-hidden
      />

      <div className="container-site relative grid items-start gap-8 section-pad-sm lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-12">
        {/* Left — copy + CTAs */}
        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="cut-sm inline-flex items-center gap-2 rounded-none border border-brand-gold bg-brand-gold/15 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-brand-gold">
              <span
                className="h-1.5 w-1.5 shrink-0 bg-brand-red"
                aria-hidden
              />
              {t.hero.badge}
            </span>
            <span className="cut-sm inline-flex items-center gap-1.5 rounded-none bg-brand-red px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white">
              {t.hero.sundayHighlight}
            </span>
          </div>

          <h1 className="headline max-w-[14ch] text-[2.35rem] leading-[0.92] tracking-wide text-white sm:max-w-none sm:text-5xl lg:text-[3.35rem] xl:text-6xl">
            <span className="block">{t.hero.titleLine1}</span>
            <span className="block text-brand-gold">{t.hero.titleLine2}</span>
          </h1>
          <span className="accent-rule accent-rule-lg" aria-hidden />

          <p className="mt-4 max-w-xl text-base leading-snug text-white/80 sm:text-lg">
            {t.hero.subtitle}
          </p>

          {/* Primary: Call · Secondary: Directions · WhatsApp quieter */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={BUSINESS.phoneTel} className="btn-gold min-h-[48px] w-full sm:w-auto">
              <PhoneIcon className="h-4 w-4" />
              {t.hero.ctaCall}
            </a>
            <a
              href={BUSINESS.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline min-h-[48px] w-full sm:w-auto"
            >
              <MapPinIcon className="h-4 w-4" />
              {t.hero.ctaDirections}
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quiet min-h-[44px] w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4 opacity-80" />
              {t.hero.ctaWhatsApp}
            </a>
          </div>

          {/* Micro engagement — proof we’re here now */}
          <p className="mt-4 text-sm font-medium tracking-wide text-white/70">
            <span className="text-brand-gold">{t.hero.engagementHours}</span>
            <span className="mx-2 text-white/35" aria-hidden>
              ·
            </span>
            <a
              href={BUSINESS.phoneTel}
              className="text-white/85 underline-offset-2 transition hover:text-brand-gold hover:underline focus:outline-none focus-visible:text-brand-gold"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </p>
        </div>

        {/* Right — stats rail + controlled promo */}
        <div className="flex min-w-0 flex-col gap-4 lg:pt-1">
          <div
            className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
            aria-label={t.hero.statsAria}
          >
            {stats.map((stat) => {
              const inner = (
                <>
                  <span className="headline block text-2xl leading-none tracking-wider text-brand-gold sm:text-[1.65rem]">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/65">
                    {stat.label}
                  </span>
                </>
              );

              const className =
                "stat-panel cut-sm block rounded-none border border-white/20 bg-[#141414] px-3.5 py-3.5 transition hover:border-brand-gold/55";

              if ("href" in stat && stat.href) {
                return (
                  <a
                    key={stat.label}
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${className} focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg`}
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <div key={stat.label} className={className}>
                  {inner}
                </div>
              );
            })}
          </div>

          <PromoPanel
            imageSrc={`/brand/locale/sunday-${locale}.png`}
            alt={t.promo.sunday}
            className="promo-hero-frame"
            priority
          />
        </div>
      </div>
    </section>
  );
}
