import Link from "next/link";
import type { Locale } from "@/lib/i18n";

/** English / Español pills pointing at the same page in the other language. */
export default function LangSwitch({
  locale,
  enHref,
  esHref,
}: {
  locale: Locale;
  enHref: string;
  esHref: string;
}) {
  const cls = (active: boolean) =>
    `inline-flex min-h-[44px] items-center rounded-none border px-4 ${
      active
        ? "border-brand-gold/60 text-brand-gold"
        : "border-white/20 text-white/60 hover:border-brand-gold/50 hover:text-brand-gold"
    }`;
  return (
    <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide">
      <Link href={enHref} className={cls(locale === "en")}>
        English
      </Link>
      <Link href={esHref} className={cls(locale === "es")}>
        Español
      </Link>
    </div>
  );
}
