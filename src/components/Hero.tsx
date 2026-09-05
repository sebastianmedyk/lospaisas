"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import PromoPanel from "./PromoPanel";

export default function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 hero-bleed">
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-gold via-brand-red to-brand-gold"
        aria-hidden
      />

      <div className="container-site relative grid items-center gap-8 section-pad-sm lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-gold">
              {t.hero.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white">
              {t.hero.sundayHighlight}
            </span>
          </div>

          <h1 className="headline text-[2.15rem] leading-[0.95] text-white sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-snug text-white/75 sm:text-lg">
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
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <PromoPanel
            imageSrc={`/brand/locale/sunday-${locale}.png`}
            alt={t.promo.sunday}
            priority
          />
        </div>
      </div>
    </section>
  );
}
