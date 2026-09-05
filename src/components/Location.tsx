"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./Icons";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="section-pad relative">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-brand-gold">
            {t.nav.location}
          </p>
          <h2 className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl">
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
              <p className="text-lg font-semibold text-white">
                {t.location.address}
              </p>
              <p className="mt-2 text-sm text-white/55">{t.location.servingNote}</p>
              <a
                href={BUSINESS.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-4 w-full sm:w-auto"
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
              <p className="text-lg font-semibold text-white">
                {t.location.hoursValue}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 border border-brand-red/40 bg-brand-red/15 px-3 py-1.5 text-sm font-black text-brand-red">
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
                {t.location.phone}
              </a>
            </div>
          </div>

          <div className="overflow-hidden border border-white/10 border-l-[3px] border-l-brand-gold bg-black/40 shadow-[6px_6px_0_0_rgba(224,30,30,0.25)]">
            <iframe
              title={t.location.mapTitle}
              src={BUSINESS.mapsEmbed}
              className="h-[280px] w-full min-h-[280px] border-0 sm:h-full sm:min-h-[420px] lg:min-h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
