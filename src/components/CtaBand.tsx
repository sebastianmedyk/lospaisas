"use client";

import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import CtaButtons from "./CtaButtons";
import Reveal from "./Reveal";

/** Closing call-to-action, last section above the footer on every page. */
export default function CtaBand() {
  const { t, locale } = useLanguage();
  const es = locale === "es";
  return (
    <section
      className="section-pad border-t-2 border-brand-gold bg-[#141414]"
      aria-label={es ? "Contacto rápido" : "Quick contact"}
    >
      <Reveal className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="headline text-4xl font-bold leading-[0.92] text-white sm:text-5xl">
              {es ? "¿Necesitas llantas hoy?" : "Need tires today?"}
            </p>
            <p className="mt-3 text-white/70">
              <a href={BUSINESS.phoneTel} className="font-extrabold text-brand-gold hover:underline">
                {BUSINESS.phoneDisplay}
              </a>{" "}
              · {t.location.hoursNap} · {BUSINESS.address}
            </p>
          </div>
          <CtaButtons size="lg" whatsapp />
        </div>
      </Reveal>
    </section>
  );
}
