"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { cheapHubPath, pick, servicesPath } from "@/lib/routes";
import SectionHeading from "./SectionHeading";
import ServiceCards, { type ServiceLayout } from "./ServiceCards";

export default function Services({ layout = "default" }: { layout?: ServiceLayout }) {
  const { t, locale } = useLanguage();
  const button = (
    <Link
      href={servicesPath(locale)}
      className="btn-gold min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
    >
      {t.services.all}
    </Link>
  );
  const heading = (
    <SectionHeading id="services-heading" label={t.nav.services} title={t.services.title} />
  );

  return (
    <section
      id="services"
      className="section-pad relative border-b border-white/15"
      aria-labelledby="services-heading"
    >
      <div className="container-site relative">
        {layout === "list" ? (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                {heading}
                <p className="mt-8">{button}</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ServiceCards layout="list" />
              <Link
                href={cheapHubPath(locale)}
                className="group mt-6 flex items-center justify-between gap-4 border border-brand-gold/50 p-5 transition hover:border-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <span>
                  <span className="headline block text-s2 font-bold text-white group-hover:text-brand-gold sm:text-s3">
                    {pick(locale, {
                      en: "Cheapest tires near me",
                      es: "Las llantas más baratas",
                      pl: "Najtańsze opony w pobliżu",
                    })}
                  </span>
                  <span className="mt-1 block text-sm text-white/70">
                    {pick(locale, {
                      en: "Used from $65, new Cosmo from $120. Mounting and balancing included.",
                      es: "Usadas desde $65, Cosmo nuevas desde $120. Montaje y balanceo incluidos.",
                      pl: "Używane od $65, nowe Cosmo od $120. Montaż i wyważenie w cenie.",
                    })}
                  </span>
                </span>
                <span aria-hidden className="text-2xl text-brand-gold">→</span>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {heading}
            <div className="mt-10">
              <ServiceCards layout={layout} />
            </div>
            <p className="mt-10">{button}</p>
          </>
        )}
      </div>
    </section>
  );
}
