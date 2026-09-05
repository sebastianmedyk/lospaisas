"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const options: Locale[] = ["en", "es"];

  return (
    <div
      className="inline-flex rounded-md border border-white/15 bg-black/40 p-0.5"
      role="group"
      aria-label="Language"
    >
      {options.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`min-w-[2.5rem] rounded px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
              active
                ? "bg-brand-gold text-brand-bg"
                : "text-white/70 hover:text-white"
            }`}
            aria-pressed={active}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
