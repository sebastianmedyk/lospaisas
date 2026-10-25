"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import CtaBand from "@/components/CtaBand";
import { useLanguage } from "@/contexts/LanguageContext";
import type { BlogLocale } from "@/lib/blog";

type BlogShellProps = {
  children: React.ReactNode;
  /** Forces UI language to match the blog route (en|/es/blog). */
  locale?: BlogLocale;
};

function BlogLocaleSync({ locale }: { locale: BlogLocale }) {
  const { locale: current, setLocale } = useLanguage();
  useEffect(() => {
    if (current !== locale) setLocale(locale);
  }, [locale, current, setLocale]);
  return null;
}

/** Shared chrome for every inner page: header, content, CTA band, footer, mobile action bar. */
export default function BlogShell({ children, locale }: BlogShellProps) {
  return (
    <>
      {locale ? <BlogLocaleSync locale={locale} /> : null}
      <Header />
      <main id="main-content" className="min-h-[60vh]">{children}</main>
      <CtaBand />
      <Footer />
      <MobileBar />
    </>
  );
}
