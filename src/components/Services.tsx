"use client";

import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
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

const focus =
  "rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg";

function ServiceCardTitle({
  locale,
  index,
  title,
}: {
  locale: "en" | "es";
  index: number;
  title: string;
}) {
  if (index === 0) {
    if (locale === "es") {
      return (
        <>
          {"Llantas "}
          <Link href="/es/llantas-nuevas" className={`hover:text-brand-gold ${focus}`}>
            Nuevas
          </Link>
          {" y "}
          <Link href="/es/llantas-usadas" className={`hover:text-brand-gold ${focus}`}>
            Usadas
          </Link>
        </>
      );
    }
    return (
      <>
        <Link href="/new-tires" className={`hover:text-brand-gold ${focus}`}>
          New
        </Link>
        {" & "}
        <Link href="/used-tires" className={`hover:text-brand-gold ${focus}`}>
          Used
        </Link>
        {" Tires"}
      </>
    );
  }

  const hrefs =
    locale === "es"
      ? [
          "/es/alineacion",
          "/es/balanceo",
          "/es/reparacion-de-llantas",
          "/es/instalacion-de-llantas",
          "/es/servicio-movil",
        ]
      : [
          "/wheel-alignment",
          "/tire-balancing",
          "/tire-repair",
          "/tire-installation",
          "/mobile-tire-service",
        ];
  const href = hrefs[index - 1];
  return (
    <Link href={href} className={`hover:text-brand-gold ${focus}`}>
      {title}
    </Link>
  );
}

export default function Services() {
  const { t, locale } = useLanguage();

  return (
    <section id="services" className="section-pad relative border-b border-white/15" aria-labelledby="services-heading">
      <div className="container-site relative">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="section-label mb-3">
            {t.nav.services}
          </p>
          <h2
            id="services-heading"
            className="headline text-3xl leading-[0.95] text-white sm:text-4xl lg:text-5xl"
          >
            {t.services.title}
          </h2>
          <span className="accent-rule accent-rule-center" aria-hidden />
          <p className="mt-3 text-white/80">{t.services.subtitle}</p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {t.services.items.map((service, index) => {
            const Icon = ICONS[index] ?? TireIcon;
            return (
              <li key={service.title} className="card-dark group !p-5">
                <span className="cut-tr mb-3 inline-flex h-10 w-10 items-center justify-center rounded-none border border-brand-gold/40 bg-transparent text-brand-gold transition group-hover:bg-brand-gold group-hover:text-brand-bg">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="headline text-base text-white sm:text-lg">
                  <ServiceCardTitle locale={locale} index={index} title={service.title} />
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-white/70">
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
