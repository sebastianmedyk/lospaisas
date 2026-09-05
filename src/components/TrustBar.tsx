"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckIcon, StarIcon } from "./Icons";

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section
      className="border-b border-brand-gold/25 bg-[#111]"
      aria-label={t.trust.title}
    >
      <div className="container-site px-4 py-5 sm:px-6 lg:px-8">
        {/* Compact rating + hours + area — near hero */}
        <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-gold/35 bg-brand-gold/10 px-3.5 py-2 text-sm font-bold text-brand-gold transition hover:bg-brand-gold/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
          >
            <StarIcon className="h-4 w-4 fill-brand-gold text-brand-gold" />
            <span>
              {BUSINESS.ratingValue}
              <span className="mx-1.5 text-white/35">·</span>
              {BUSINESS.reviewCount} {t.trust.reviewsLabel}
            </span>
          </a>
          <p className="text-sm text-white/70">
            <span className="font-bold text-white">{t.trust.hoursLabel}</span>
            <span className="mx-1.5 text-white/35">·</span>
            {t.trust.hoursValue}
          </p>
          <p className="max-w-md text-center text-xs text-white/50 sm:text-left">
            {t.trust.serving}
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3">
          {t.trust.items.map((item) => (
            <li
              key={item.label}
              className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-bg">
                <CheckIcon className="h-3 w-3" />
              </span>
              <span>
                <span className="block text-[0.7rem] font-black uppercase tracking-wide text-white sm:text-xs">
                  {item.label}
                </span>
                <span className="text-[0.65rem] text-white/55 sm:text-[0.7rem]">
                  {item.detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
