"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import PromoPanel from "./PromoPanel";

export default function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 hero-bleed">
      <div className="speed-stripes pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-red to-brand-gold"
        aria-hidden
      />

      <div className="container-site relative grid items-center gap-10 section-pad lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="border border-brand-gold/50 bg-brand-gold/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-gold">
              {t.hero.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-brand-red px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.2em] text-white shadow-[2px_2px_0_0_#F4C20D]">
              {t.hero.sundayHighlight}
            </span>
          </div>

          <h1 className="headline text-[2.5rem] leading-[0.92] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {t.hero.title}
          </h1>

          <p className="mt-5 max-w-xl border-l-2 border-brand-gold/60 pl-4 text-base leading-relaxed text-white/75 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={BUSINESS.phoneTel} className="btn-gold w-full sm:w-auto">
              <PhoneIcon className="h-4 w-4" />
              {t.hero.ctaCall}
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.hero.ctaWhatsApp}
            </a>
            <a
              href={BUSINESS.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              <MapPinIcon className="h-4 w-4" />
              {t.hero.ctaDirections}
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
