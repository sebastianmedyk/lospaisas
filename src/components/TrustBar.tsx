"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { CheckIcon } from "./Icons";

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section
      className="trust-strip border-b border-brand-gold/40 bg-[#101010]"
      aria-label={t.trust.title}
    >
      <div className="container-site px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <ul className="grid grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/15 lg:grid-cols-4">
          {t.trust.items.map((item) => (
            <li
              key={item.label}
              className="flex items-start gap-2.5 bg-[#101010] px-3.5 py-3.5 sm:px-4 sm:py-4"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-brand-gold text-brand-bg">
                <CheckIcon className="h-3 w-3" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white sm:text-xs">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-[0.65rem] leading-snug text-white/60 sm:text-[0.7rem]">
                  {item.detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
