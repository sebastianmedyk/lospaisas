"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const blogHref = locale === "es" ? "/es/blog" : "/blog";

  const links = [
    { href: "/#services", label: t.nav.services },
    { href: "/#why-us", label: t.nav.whyUs },
    { href: "/#location", label: t.nav.location },
    { href: "/#contact", label: t.nav.contact },
    { href: blogHref, label: t.nav.blog, internal: true },
  ];

  const focusRing =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/95 backdrop-blur-md">
      <a href="#main-content" className="skip-to-content">
        {t.a11y.skipToContent}
      </a>
      <div className="h-0.5 w-full bg-gradient-to-r from-brand-gold via-brand-red to-brand-gold" aria-hidden />
      <div className="container-site flex items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`group flex min-w-0 items-center gap-2.5 rounded-lg ${focusRing}`}
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-gold/70 bg-black text-xs font-black italic text-brand-gold">
            LP
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-sm bg-brand-red" aria-hidden />
          </span>
          <span className="headline text-sm leading-none text-white sm:text-base">
            Los Paisas
            <span className="mt-0.5 block text-[0.6rem] font-bold not-italic tracking-[0.22em] text-brand-gold sm:text-[0.65rem]">
              TIRES SHOP
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label={t.a11y.primaryNav}>
          {links.map((link) =>
            link.internal ? (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 border-transparent px-2.5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:border-brand-gold hover:text-brand-gold ${focusRing}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`border-b-2 border-transparent px-2.5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:border-brand-gold hover:text-brand-gold ${focusRing}`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle />
          {/* Desktop only — mobile uses FloatingCallButton, avoid competing bars */}
          <a
            href={BUSINESS.phoneTel}
            className={`hidden items-center gap-1.5 rounded-lg bg-brand-gold px-3 py-2 text-[0.65rem] font-black uppercase tracking-wide text-brand-bg transition hover:bg-[#ffd84d] md:inline-flex ${focusRing}`}
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {t.nav.call}
          </a>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-1.5 rounded-lg border border-white/20 px-3 py-2 text-[0.65rem] font-black uppercase tracking-wide text-white/80 transition hover:border-brand-gold/50 hover:text-brand-gold lg:inline-flex ${focusRing}`}
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            {t.nav.whatsapp}
          </a>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white xl:hidden ${focusRing}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t.a11y.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{t.a11y.menu}</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="rounded-b-xl border-t border-white/10 bg-brand-bg px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-1" aria-label={t.a11y.mobileNav}>
            {links.map((link) =>
              link.internal ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg border-l-2 border-transparent px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-white/85 hover:border-brand-gold hover:bg-white/5 hover:text-brand-gold ${focusRing}`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg border-l-2 border-transparent px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-white/85 hover:border-brand-gold hover:bg-white/5 hover:text-brand-gold ${focusRing}`}
                >
                  {link.label}
                </a>
              )
            )}
            <div className="mt-3 flex flex-col gap-2">
              <a href={BUSINESS.phoneTel} className="btn-gold flex-1 min-h-[48px] py-2.5 text-xs">
                <PhoneIcon className="h-3.5 w-3.5" />
                {t.nav.call}
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quiet flex-1 min-h-[44px] py-2.5 text-xs"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                {t.nav.whatsapp}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
