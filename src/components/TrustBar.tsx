"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { CheckIcon } from "./Icons";

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="trust-strip border-b border-brand-gold/30" aria-label={t.trust.title}>
      <div className="container-site px-4 py-6 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-[0.65rem] font-black uppercase tracking-[0.28em] text-brand-gold">
          {t.trust.title}
        </p>
        <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3">
          {t.trust.items.map((item) => (
            <li
              key={item.label}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/40 px-3 py-3"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-bg">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span>
                <span className="block text-xs font-black uppercase tracking-wide text-white sm:text-sm">
                  {item.label}
                </span>
                <span className="text-[0.7rem] text-white/55 sm:text-xs">{item.detail}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-[0.7rem] leading-relaxed text-white/55 sm:text-xs">
          {t.trust.serving}
        </p>
      </div>
    </section>
  );
}
