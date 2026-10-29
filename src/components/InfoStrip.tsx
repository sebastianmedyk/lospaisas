"use client";

import { pick } from "@/lib/routes";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckIcon } from "./Icons";

export default function InfoStrip() {
  const { locale } = useLanguage();
  const items = pick(locale, {
    es: ["Sin cita, pasa cuando quieras", "Hablamos español", "Hablamos inglés", "Abierto 7 días"],
    en: ["Walk-ins welcome", "We speak Spanish", "We speak English", "Open 7 days"],
    pl: ["Bez umawiania", "Mówimy po hiszpańsku", "Mówimy po angielsku", "Otwarte 7 dni"],
  });

  return (
    <section
      className="border-b border-brand-red/60 bg-brand-gold text-brand-bg"
      aria-label={pick(locale, { es: "Datos del taller", en: "Shop highlights", pl: "Najważniejsze informacje" })}
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
