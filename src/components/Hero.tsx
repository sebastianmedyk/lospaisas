"use client";

import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,194,13,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(224,30,30,0.12),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(13,13,13,0.85))]" />

      <div className="container-site relative grid items-center gap-10 section-pad lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold">
              {t.hero.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {t.hero.sundayHighlight}
            </span>
          </div>

          <h1 className="headline text-4xl text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {t.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BUSINESS.phoneTel} className="btn-gold">
              <PhoneIcon className="h-4 w-4" />
              {t.hero.ctaCall}
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.hero.ctaWhatsApp}
            </a>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MapPinIcon className="h-4 w-4" />
              {t.hero.ctaDirections}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-2xl bg-brand-gold/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-brand-gold/30 shadow-[0_0_60px_rgba(244,194,13,0.15)]">
            <Image
              src="/brand/promo-sunday.png"
              alt="Los Paisas Tires Shop — open Sunday"
              width={800}
              height={1000}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
