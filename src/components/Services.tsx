"use client";

import type { ComponentType, SVGProps } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  AlignIcon,
  BalanceIcon,
  InstallIcon,
  TireIcon,
  TruckIcon,
  WrenchIcon,
} from "./Icons";

const ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  TireIcon,
  AlignIcon,
  BalanceIcon,
  WrenchIcon,
  InstallIcon,
  TruckIcon,
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-pad relative" aria-labelledby="services-heading">
      <div className="container-site relative">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-3 text-[0.65rem] font-black uppercase tracking-[0.25em] text-brand-gold">
            {t.nav.services}
          </p>
          <h2
            id="services-heading"
            className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
          >
            {t.services.title}
          </h2>
          <p className="mt-3 text-white/70">{t.services.subtitle}</p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {t.services.items.map((service, index) => {
            const Icon = ICONS[index] ?? TireIcon;
            return (
              <li key={service.title} className="card-dark group !p-5">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-gold/40 bg-brand-gold/10 text-brand-gold transition group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-brand-bg">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="headline text-base text-white sm:text-lg">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-white/60">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
