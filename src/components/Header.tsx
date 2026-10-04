"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesPath } from "@/lib/service-routes";
import LanguageToggle from "./LanguageToggle";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const blogHref = locale === "es" ? "/es/blog" : "/blog";
  const servicesHref = servicesPath(locale);

  const links = [
    { href: servicesHref, label: t.nav.services },
    { href: "/#location", label: t.nav.location },
    { href: "/#contact", label: t.nav.contact },
    { href: blogHref, label: t.nav.blog },
  ];

  const focusRing =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg";

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-brand-bg/98 backdrop-blur-md">
      <a href="#main-content" className="skip-to-content">
        {t.a11y.skipToContent}
      </a>
      <div className="container-site flex items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`group flex min-w-0 items-center gap-2.5 rounded-none ${focusRing}`}
        >
          <span className="cut-tr relative flex h-10 w-10 shrink-0 items-center justify-center rounded-none border border-brand-gold/40 bg-brand-bg text-xs font-extrabold uppercase tracking-wide text-brand-gold">
            LP
            <span className="absolute bottom-0 right-0 h-1.5 w-1.5 bg-brand-red" aria-hidden />
          </span>
          <span className="headline text-sm leading-none text-white sm:text-base">
            Los Paisas
            <span className="mt-0.5 block text-[0.6rem] font-bold tracking-[0.28em] text-brand-gold sm:text-[0.65rem]">
              TIRES SHOP
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label={t.a11y.primaryNav}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b border-transparent px-2.5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/80 transition hover:border-brand-gold/80 hover:text-brand-gold ${focusRing}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle />
          {/* Desktop only — mobile uses FloatingCallButton, avoid competing bars */}
          <a
            href={BUSINESS.phoneTel}
            className={`cut-sm hidden items-center gap-1.5 rounded-none border border-brand-gold/50 bg-transparent px-3 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-brand-gold transition hover:bg-brand-gold hover:text-brand-bg md:inline-flex ${focusRing}`}
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {t.nav.call}
          </a>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-1.5 rounded-none border border-white/15 px-3 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-white/75 transition hover:border-white/30 hover:text-white lg:inline-flex ${focusRing}`}
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            {t.nav.whatsapp}
          </a>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-none border border-white/15 text-white xl:hidden ${focusRing}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t.a11y.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{t.a11y.menu}</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className={`block h-px w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="rounded-none border-t border-white/15 bg-brand-bg px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-1" aria-label={t.a11y.mobileNav}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-none border-l border-transparent px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-white/90 hover:border-brand-gold hover:bg-[#141414] hover:text-brand-gold ${focusRing}`}
              >
                {link.label}
              </Link>
            ))}
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
