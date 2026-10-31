"use client";

import { pick } from "@/lib/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckIcon } from "./Icons";

export default function InfoStrip({ variant = "bold" }: { variant?: "bold" | "subtle" }) {
  const { locale } = useLanguage();
  const items = pick(locale, {
    es: ["Sin cita, pasa cuando quieras", "Hablamos español", "Hablamos inglés", "Abierto 7 días"],
    en: ["Walk-ins welcome", "We speak Spanish", "We speak English", "Open 7 days"],
    pl: ["Bez umawiania", "Mówimy po hiszpańsku", "Mówimy po angielsku", "Otwarte 7 dni"],
  });

  const ariaLabel = pick(locale, { es: "Datos del taller", en: "Shop highlights", pl: "Najważniejsze informacje" });

  if (variant === "subtle") {
    return (
      <section className="border-b border-brand-gold/40 bg-[#0b0b0b] text-white/75" aria-label={ariaLabel}>
        <ul className="container-site flex flex-wrap items-center gap-x-6 gap-y-1.5 px-4 py-2.5 sm:px-6 lg:px-8">
          {items.map((label) => (
            <li
              key={label}
              className="flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em]"
            >
              <CheckIcon className="h-3 w-3 shrink-0 text-brand-gold" />
              {label}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section
      className="border-b border-brand-red/60 bg-brand-gold text-brand-bg"
      aria-label={ariaLabel}
    >
      <ul className="container-site grid grid-cols-2 gap-x-4 gap-y-2 px-4 py-3.5 sm:px-6 md:flex md:justify-between lg:px-8">
        {items.map((label) => (
          <li
            key={label}
            className="flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.12em] sm:text-xs"
          >
            <CheckIcon className="h-3.5 w-3.5 shrink-0" />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
