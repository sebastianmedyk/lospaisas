"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { CheckIcon } from "./Icons";
import PromoPanel from "./PromoPanel";

export default function WhyUs() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="why-us"
      className="section-pad relative overflow-hidden border-y border-white/10 bg-black/40"
      aria-labelledby="why-us-heading"
    >
      <div className="container-site relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative order-2 lg:order-1">
          <PromoPanel
            imageSrc={`/brand/locale/trust-${locale}.png`}
            alt={t.promo.trust}
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-brand-gold">
            Los Paisas
          </p>
          <h2
            id="why-us-heading"
            className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
          >
            {t.whyUs.title}
          </h2>
          <p className="mt-4 text-white/70">{t.whyUs.subtitle}</p>

          <ul className="mt-8 space-y-3">
            {t.whyUs.points.map((point) => (
              <li key={point.title} className="card-dark flex gap-4 !p-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-gold text-brand-bg">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="headline block text-base text-white">
                    {point.title}
                  </span>
                  <span className="mt-1 block text-sm text-white/65">
                    {point.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
