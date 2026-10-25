"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { CheckIcon } from "./Icons";

export default function InfoStrip() {
  const { locale } = useLanguage();
  const es = locale === "es";
  const items = es
    ? ["Sin cita, pasa cuando quieras", "Hablamos español", "Nou pale Kreyòl", "Abierto 7 días"]
    : ["Walk-ins welcome", "We speak Spanish", "We speak Creole (Kreyòl)", "Open 7 days"];

  return (
    <section
      className="border-b border-brand-red/60 bg-brand-gold text-brand-bg"
      aria-label={es ? "Datos del taller" : "Shop highlights"}
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
