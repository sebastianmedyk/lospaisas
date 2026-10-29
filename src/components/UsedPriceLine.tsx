"use client";

import { pick } from "@/lib/routes";
import { USED_TIRE_PRICE_FROM } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

/** "Used Tires from $[CENA]". The one price line; value comes from USED_TIRE_PRICE_FROM. */
export default function UsedPriceLine({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  return (
    <p className={`headline font-bold tracking-wide text-white ${className}`}>
      <span className="border-b-2 border-brand-red pb-0.5">
        {pick(locale, { es: "Llantas usadas desde", en: "Used Tires from", pl: "Używane opony od" })} ${USED_TIRE_PRICE_FROM || pick(locale, { es: "[PRECIO]", en: "[CENA]", pl: "[CENA]" })}
      </span>
    </p>
  );
}
