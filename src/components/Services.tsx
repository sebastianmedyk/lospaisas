"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesPath } from "@/lib/service-routes";
import SectionHeading from "./SectionHeading";
import ServiceCards from "./ServiceCards";

export default function Services() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="services"
      className="section-pad relative border-b border-white/15"
      aria-labelledby="services-heading"
    >
      <div className="container-site relative">
        <SectionHeading id="services-heading" label={t.nav.services} title={t.services.title} />
        <div className="mt-10">
          <ServiceCards />
        </div>
        <p className="mt-10">
          <Link
            href={servicesPath(locale)}
            className="btn-gold min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            {t.services.all}
          </Link>
        </p>
      </div>
    </section>
  );
}
