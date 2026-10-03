"use client";

import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "./Icons";

export default function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();
  const blogHref = locale === "es" ? "/es/blog" : "/blog";

  const socialClass =
    "cut-tr inline-flex items-center justify-center rounded-none border border-white/15 bg-[#141414] p-2.5 text-white/85 transition hover:border-brand-gold/50 hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg";

  return (
    <footer className="border-t border-white/15 bg-brand-bg">
      <div className="container-site px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="headline text-xl text-white">
              {BUSINESS.name}
            </p>
            <span className="accent-rule" aria-hidden />
            <p className="mt-3 max-w-sm text-sm text-white/70">
              {t.footer.tagline}
            </p>
            <address className="mt-4 not-italic text-sm text-white/85">
              <p>{BUSINESS.address}</p>
              <p className="mt-1">
                <a
                  href={BUSINESS.phoneTel}
                  className="font-semibold text-brand-gold hover:brightness-110"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
            </address>
            <nav className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.16em] text-white/70">
              <Link href="/#services" className="hover:text-brand-gold">
                {t.nav.services}
              </Link>
              <Link href="/#location" className="hover:text-brand-gold">
                {t.nav.location}
              </Link>
              <Link href="/#faq" className="hover:text-brand-gold">
                {t.nav.faq}
              </Link>
              <Link href={blogHref} className="hover:text-brand-gold">
                {t.nav.blog}
              </Link>
            </nav>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                aria-label={t.a11y.instagram}
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                aria-label={t.a11y.facebook}
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                aria-label={t.a11y.tiktok}
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                aria-label={t.a11y.whatsapp}
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.phoneTel}
                className={socialClass}
                aria-label={t.a11y.call}
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
            </div>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-white/80 transition hover:text-brand-gold"
            >
              {BUSINESS.instagramHandle}
            </a>
            <p className="text-xs text-white/55">
              © {year} {BUSINESS.name}. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
