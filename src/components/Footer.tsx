"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { InstagramIcon } from "./Icons";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
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
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-brand-gold"
            >
              <InstagramIcon className="h-5 w-5" />
              @lospaisaswpb
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
