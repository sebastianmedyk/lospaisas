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
    "inline-flex items-center justify-center rounded-lg border border-white/15 p-2.5 text-white/80 transition hover:border-brand-gold hover:text-brand-gold";

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="h-1 w-full bg-gradient-to-r from-brand-gold via-brand-red to-brand-gold" aria-hidden />
      <div className="container-site px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="headline text-xl text-white">
              {t.footer.napName}
            </p>
            <p className="mt-2 max-w-sm text-sm text-white/55">
              {t.footer.tagline}
            </p>
            <address className="mt-4 not-italic text-sm text-white/75">
              <p>{t.footer.napAddress}</p>
              <p className="mt-1">
                <a
                  href={BUSINESS.phoneTel}
                  className="hover:text-brand-gold"
                >
                  {t.footer.napPhone}
                </a>
              </p>
            </address>
            <nav className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wider text-white/55">
              <a href="/#services" className="hover:text-brand-gold">
                {t.nav.services}
              </a>
              <a href="/#location" className="hover:text-brand-gold">
                {t.nav.location}
              </a>
              <a href="/#faq" className="hover:text-brand-gold">
                FAQ
              </a>
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
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.phoneTel}
                className={socialClass}
                aria-label="Call"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
            </div>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-white/70 transition hover:text-brand-gold"
            >
              {BUSINESS.instagramHandle}
            </a>
            <p className="text-xs text-white/40">
              © {year} {t.footer.napName}. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
