"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckIcon } from "./Icons";

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section-pad border-y border-white/10 bg-black/30">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-2xl bg-brand-red/10 blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/brand/promo-trust.png"
              alt="Los Paisas Tires Shop — trusted tire experts"
              width={800}
              height={1000}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="headline text-3xl text-white sm:text-4xl lg:text-5xl">
            {t.whyUs.title}
          </h2>
          <p className="mt-4 text-white/70">{t.whyUs.subtitle}</p>

          <ul className="mt-8 space-y-4">
            {t.whyUs.points.map((point) => (
              <li
                key={point.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-bg">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="headline block text-base text-white">
                    {point.title}
                  </span>
                  <span className="mt-1 block text-sm text-white/65">
                    {point.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
