"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import {
  getDictionary,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";
import { localeFromPath } from "@/lib/routes";

type LanguageContextValue = {
  locale: Locale;
  /** Kept for API compatibility; the URL decides the language (root = ES, /en = EN, /pl = PL). */
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export { localeFromPath };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((_next: Locale) => {
    /* language follows the URL; LanguageToggle navigates */
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: getDictionary(locale) }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      <div lang={locale}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
