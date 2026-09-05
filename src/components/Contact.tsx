"use client";

import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-pad border-t border-white/10 bg-black/40">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="headline text-3xl text-white sm:text-4xl lg:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-lg text-white/70">{t.contact.subtitle}</p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-brand-gold">
            {t.contact.hours}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:max-w-md">
            <a href={BUSINESS.phoneTel} className="btn-gold w-full">
              <PhoneIcon className="h-4 w-4" />
              {t.contact.call}
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.contact.whatsapp}
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full"
            >
              <InstagramIcon className="h-4 w-4" />
              {t.contact.instagram}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 rounded-2xl bg-brand-gold/10 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-brand-gold/25">
            <Image
              src="/brand/promo-balanceo.png"
              alt="Los Paisas Tires Shop — tire balancing"
              width={800}
              height={1000}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
