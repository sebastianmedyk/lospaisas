"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n";
import { getAlternateBlogPath } from "@/lib/blog-routes";

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname() || "/";
  const router = useRouter();

  const options: Locale[] = ["en", "es"];

  function switchTo(code: Locale) {
    setLocale(code);
    const nextPath = getAlternateBlogPath(pathname, code);
    if (nextPath && nextPath !== pathname) {
      router.push(nextPath);
    }
  }

  return (
    <div
      className="inline-flex rounded-full border border-white/15 bg-white/[0.04] p-0.5"
      role="group"
      aria-label={t.a11y.language}
    >
      {options.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchTo(code)}
            className={`min-w-[2.5rem] rounded-full px-2.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg ${
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
