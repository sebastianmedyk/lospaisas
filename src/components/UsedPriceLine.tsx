"use client";

import { USED_TIRE_PRICE_FROM } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

/** "Used Tires from $[CENA]". The one price line; value comes from USED_TIRE_PRICE_FROM. */
export default function UsedPriceLine({ className = "" }: { className?: string }) {
  const { locale } = useLanguage();
  const es = locale === "es";
  return (
    <p className={`headline font-bold tracking-wide text-white ${className}`}>
      <span className="border-b-2 border-brand-red pb-0.5">
        {es ? "Llantas usadas desde" : "Used Tires from"} ${USED_TIRE_PRICE_FROM || (es ? "[PRECIO]" : "[CENA]")}
      </span>
    </p>
  );
}
