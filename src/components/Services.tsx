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
    <section id="services" className="section-pad">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="headline text-3xl text-white sm:text-4xl lg:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-white/70">{t.services.subtitle}</p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = ICONS[index] ?? TireIcon;
            return (
              <li key={service.title} className="card-dark group">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-brand-gold/30 bg-brand-gold/10 text-brand-gold transition group-hover:bg-brand-gold group-hover:text-brand-bg">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="headline text-lg text-white sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
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
