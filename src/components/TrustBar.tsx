"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { CheckIcon } from "./Icons";

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-white/10 bg-black/40" aria-label={t.trust.title}>
      <div className="container-site px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
          {t.trust.title}
        </p>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {t.trust.items.map((item) => (
            <li
              key={item.label}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase tracking-wide text-white">
                  {item.label}
                </span>
                <span className="text-xs text-white/60">{item.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
