"use client";

import { useState } from "react";
import Image from "next/image";
import { CATALOG_PHOTOS } from "@/lib/photos";
import { NEW_TIRES, RIM_SIZES, type RimSize } from "@/lib/new-tire-catalog";

type Props = {
  labels: {
    filterLabel: string;
    all: string;
    perTire: string;
    /** Alt template with a {size} placeholder (strings only: props cross the server/client boundary). */
    altTemplate: string;
    /** Count template with an {n} placeholder. */
    countTemplate: string;
  };
};

type Filter = "all" | RimSize;

export default function CatalogGrid({ labels }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const tires = filter === "all" ? NEW_TIRES : NEW_TIRES.filter((t) => t.rim === filter);
  const options: { value: Filter; label: string }[] = [
    { value: "all", label: labels.all },
    ...RIM_SIZES.map((r) => ({ value: r as Filter, label: r })),
  ];

  return (
    <div>
      <div role="group" aria-label={labels.filterLabel} className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = filter === o.value;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(o.value)}
              className={`min-h-[44px] border px-4 text-sm font-bold uppercase tracking-[0.14em] transition ${
                active
                  ? "border-brand-gold bg-brand-gold text-black"
                  : "border-white/25 bg-transparent text-white hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-white/60" aria-live="polite">
        {labels.countTemplate.replace("{n}", String(tires.length))}
      </p>

      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tires.map((t, i) => {
          const photo = CATALOG_PHOTOS[t.image];
          return (
            <li key={t.ref} className="flex flex-col overflow-hidden border border-white/15 bg-black">
              <div className="relative bg-white">
                <Image
                  src={photo.src}
                  alt={labels.altTemplate.replace("{size}", t.size)}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={i < 4 ? "eager" : "lazy"}
                  className="aspect-square h-auto w-full object-contain"
                />
                {t.badge ? (
                  <span className="absolute left-2 top-2 bg-brand-red px-2 py-0.5 text-xs font-bold text-white">
                    {t.badge}
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col gap-1 p-3">
                <p className="text-base font-bold text-white">{t.size}</p>
                <p className="text-sm text-white/60">{t.brand}</p>
                <p className="mt-auto pt-2 text-xl font-bold text-brand-gold">
                  ${t.price} <span className="text-xs font-normal text-white/60">{labels.perTire}</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
