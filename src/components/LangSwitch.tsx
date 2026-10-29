import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { LOCALES, type LocalePaths } from "@/lib/routes";

const LABEL: Record<Locale, string> = { es: "Español", en: "English", pl: "Polski" };

/** Español / English / Polski pills pointing at the same page in each language. */
export default function LangSwitch({ locale, hrefs }: { locale: Locale; hrefs: LocalePaths }) {
  const cls = (active: boolean) =>
    `inline-flex min-h-[44px] items-center rounded-none border px-4 ${
      active
        ? "border-brand-gold/60 text-brand-gold"
        : "border-white/20 text-white/60 hover:border-brand-gold/50 hover:text-brand-gold"
    }`;
  return (
    <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide">
      {LOCALES.map((l) => (
        <Link key={l} href={hrefs[l]} hrefLang={l} className={cls(locale === l)}>
          {LABEL[l]}
        </Link>
      ))}
    </div>
  );
}
