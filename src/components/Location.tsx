"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./Icons";

export default function Location() {
  const { t } = useLanguage();
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <section id="location" aria-labelledby="location-heading" className="section-pad relative">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-brand-gold">
            {t.nav.location}
          </p>
          <h2
            id="location-heading"
            className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
          >
            {t.location.title}
          </h2>
          <p className="mt-4 text-white/70">{t.location.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-3">
            <div className="card-dark">
              <div className="mb-2 flex items-center gap-2 text-brand-gold">
                <MapPinIcon className="h-5 w-5" />
                <span className="text-[0.65rem] font-black uppercase tracking-[0.2em]">
                  {t.location.addressLabel}
                </span>
              </div>
              <p className="text-lg font-semibold text-white">{BUSINESS.address}</p>
              <p className="mt-2 text-sm text-white/55">{t.location.servingNote}</p>
              <a
                href={BUSINESS.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-4 w-full min-h-[48px] sm:w-auto"
              >
                <MapPinIcon className="h-4 w-4" />
                {t.location.getDirections}
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-bold uppercase tracking-wide text-brand-gold underline-offset-4 hover:underline"
              >
                {t.location.directions}
              </a>
            </div>

            <div className="card-dark">
              <div className="mb-2 flex items-center gap-2 text-brand-gold">
                <ClockIcon className="h-5 w-5" />
                <span className="text-[0.65rem] font-black uppercase tracking-[0.2em]">
                  {t.location.hoursLabel}
                </span>
              </div>
              <p className="text-lg font-semibold text-white">{t.location.hoursValue}</p>
              <p className="mt-2 inline-flex items-center gap-2 rounded-xl border border-brand-red/40 bg-brand-red/15 px-3 py-1.5 text-sm font-black text-brand-red">
                {t.location.sundayNote}
              </p>
            </div>

            <div className="card-dark">
              <div className="mb-2 flex items-center gap-2 text-brand-gold">
                <PhoneIcon className="h-5 w-5" />
                <span className="text-[0.65rem] font-black uppercase tracking-[0.2em]">
                  {t.location.phoneLabel}
                </span>
              </div>
              <a
                href={BUSINESS.phoneTel}
                className="text-lg font-semibold text-white hover:text-brand-gold"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Static preview first — iframe only on demand (perf) */}
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
            {!mapOpen ? (
              <div className="flex min-h-[240px] flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] px-6 py-10 sm:min-h-[320px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold">
                  <MapPinIcon className="h-7 w-7" />
                </div>
                <p className="max-w-xs text-center text-sm text-white/70">
                  {t.location.mapPreviewLabel}
                </p>
                <p className="text-center text-xs font-semibold text-white/45">
                  {BUSINESS.streetAddress}, {BUSINESS.addressLocality}
                </p>
                <div className="flex w-full max-w-sm flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setMapOpen(true)}
                    className="btn-outline min-h-[44px] flex-1 text-xs"
                  >
                    {t.location.mapShow}
                  </button>
                  <a
                    href={BUSINESS.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold min-h-[44px] flex-1 text-xs"
                  >
                    {t.location.getDirections}
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative">
                <iframe
                  title={t.location.mapTitle}
                  src={BUSINESS.mapsEmbed}
                  className="h-[280px] w-full min-h-[280px] border-0 sm:h-[360px] sm:min-h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <button
                  type="button"
                  onClick={() => setMapOpen(false)}
                  className="absolute right-3 top-3 rounded-lg border border-white/20 bg-black/80 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-wide text-white backdrop-blur hover:border-brand-gold hover:text-brand-gold"
                >
                  {t.location.mapHide}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
