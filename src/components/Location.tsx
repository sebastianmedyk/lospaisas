"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./Icons";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="section-pad">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="headline text-3xl text-white sm:text-4xl lg:text-5xl">
            {t.location.title}
          </h2>
          <p className="mt-4 text-white/70">{t.location.subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="card-dark">
              <div className="mb-2 flex items-center gap-2 text-brand-gold">
                <MapPinIcon className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {t.location.addressLabel}
                </span>
              </div>
              <p className="text-lg font-semibold text-white">
                {t.location.address}
              </p>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-brand-gold underline-offset-4 hover:underline"
              >
                {t.location.directions}
              </a>
            </div>

            <div className="card-dark">
              <div className="mb-2 flex items-center gap-2 text-brand-gold">
                <ClockIcon className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {t.location.hoursLabel}
                </span>
              </div>
              <p className="text-lg font-semibold text-white">
                {t.location.hoursValue}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 rounded-md bg-brand-red/15 px-3 py-1.5 text-sm font-bold text-brand-red">
                {t.location.sundayNote}
              </p>
            </div>

            <div className="card-dark">
              <div className="mb-2 flex items-center gap-2 text-brand-gold">
                <PhoneIcon className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">
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

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl">
            <iframe
              title={t.location.mapTitle}
              src={BUSINESS.mapsEmbed}
              className="h-[360px] w-full border-0 sm:h-full sm:min-h-[420px]"
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
