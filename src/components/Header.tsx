"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#why-us", label: t.nav.whyUs },
    { href: "#location", label: t.nav.location },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/95 backdrop-blur-md">
      <div className="container-site flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-gold text-xs font-black italic text-brand-gold">
            LP
          </span>
          <span className="headline text-sm leading-tight text-white sm:text-base">
            Los Paisas
            <span className="block text-[0.65rem] font-semibold not-italic tracking-widest text-brand-gold sm:text-xs">
              Tires Shop
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-white/75 transition hover:text-brand-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <a
            href={BUSINESS.phoneTel}
            className="hidden items-center gap-1.5 rounded-md border border-white/15 px-3 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:border-brand-gold hover:text-brand-gold sm:inline-flex"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {t.nav.call}
          </a>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md bg-[#25D366] px-3 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:brightness-110 sm:inline-flex"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            {t.nav.whatsapp}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-white/10 bg-brand-bg px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wider text-white/85 hover:bg-white/5 hover:text-brand-gold"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <a href={BUSINESS.phoneTel} className="btn-outline flex-1 py-2.5 text-xs">
                <PhoneIcon className="h-3.5 w-3.5" />
                {t.nav.call}
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-1 py-2.5 text-xs"
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
