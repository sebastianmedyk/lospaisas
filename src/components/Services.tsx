"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesPath } from "@/lib/routes";
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
