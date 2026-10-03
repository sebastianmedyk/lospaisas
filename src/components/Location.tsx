"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./Icons";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" aria-labelledby="location-heading" className="section-pad relative border-b border-white/15">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="section-label mb-3">
            {t.nav.location}
          </p>
          <h2
            id="location-heading"
            className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
          >
            {t.location.title}
          </h2>
          <span className="accent-rule accent-rule-center" aria-hidden />
          <p className="mt-4 text-white/70">{t.location.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-3">
            <div className="card-dark">
              <div className="mb-2 flex items-center gap-2 text-brand-gold">
                <MapPinIcon className="h-5 w-5" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em]">
                  {t.location.addressLabel}
                </span>
              </div>
              <p className="text-lg font-semibold text-white">{BUSINESS.address}</p>
              <p className="mt-2 text-sm text-white/55">{t.location.servingNote}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
                <a
                  href={BUSINESS.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full min-h-[48px] sm:w-auto"
                >
                  <MapPinIcon className="h-4 w-4" />
                  {t.location.getDirections}
                </a>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-sm font-bold uppercase tracking-wide text-brand-gold underline-offset-4 hover:underline"
                >
                  {t.location.directions}
                </a>
              </div>
            </div>

            <div className="card-dark">
              <div className="mb-2 flex items-center gap-2 text-brand-gold">
                <ClockIcon className="h-5 w-5" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em]">
                  {t.location.hoursLabel}
                </span>
              </div>
              <p className="text-lg font-semibold text-white">{t.location.hoursValue}</p>
              <p className="cut-sm mt-2 inline-flex items-center gap-2 rounded-none border border-brand-red/40 bg-transparent px-3 py-1.5 text-sm font-bold text-brand-red">
                {t.location.sundayNote}
              </p>
            </div>

            <div className="card-dark">
              <div className="mb-2 flex items-center gap-2 text-brand-gold">
                <PhoneIcon className="h-5 w-5" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em]">
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

          <div className="cut-md overflow-hidden rounded-none border border-white/15 bg-black/40">
            <iframe
              title={t.location.mapTitle}
              src={BUSINESS.mapsEmbed}
              className="h-[280px] w-full min-h-[280px] border-0 sm:h-[360px] sm:min-h-[360px]"
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
