import type { Locale } from "@/lib/routes";
import { BUSINESS } from "@/lib/constants";
import { pick } from "@/lib/routes";
import SectionHeading from "./SectionHeading";
import { FacebookIcon, InstagramIcon, PhoneIcon, SmsIcon, TikTokIcon, WhatsAppIcon } from "./Icons";

/** Homepage "More channels": social profiles + WhatsApp, SMS and call (links from lib/constants). */
export default function Channels({ locale }: { locale: Locale }) {
  const newTab = pick(locale, { es: "(se abre en una pestaña nueva)", en: "(opens in a new tab)", pl: "(otwiera się w nowej karcie)" });
  const items = [
    { name: "Facebook", detail: "LosPaisasWPB", href: BUSINESS.facebook, Icon: FacebookIcon, external: true },
    { name: "Instagram", detail: BUSINESS.instagramHandle, href: BUSINESS.instagram, Icon: InstagramIcon, external: true },
    { name: "TikTok", detail: "@paisastireswpb", href: BUSINESS.tiktok, Icon: TikTokIcon, external: true },
    { name: "WhatsApp", detail: BUSINESS.phoneDisplay, href: BUSINESS.whatsapp, Icon: WhatsAppIcon, external: true },
    { name: pick(locale, { es: "SMS", en: "Text (SMS)", pl: "SMS" }), detail: BUSINESS.phoneDisplay, href: BUSINESS.sms, Icon: SmsIcon, external: false },
    { name: pick(locale, { es: "Llamar", en: "Call", pl: "Zadzwoń" }), detail: BUSINESS.phoneDisplay, href: BUSINESS.phoneTel, Icon: PhoneIcon, external: false },
  ];
  return (
    <section id="channels" aria-labelledby="channels-heading" className="section-pad relative border-b border-white/15">
      <div className="container-site">
        <SectionHeading
          id="channels-heading"
          label={pick(locale, { es: "Más canales", en: "More channels", pl: "Więcej kanałów" })}
          title={pick(locale, { es: "Síguenos o escríbenos", en: "Follow us or message us", pl: "Obserwuj nas lub napisz" })}
        />
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(({ name, detail, href, Icon, external }) => (
            <li key={href}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={`${name}: ${detail}${external ? ` ${newTab}` : ""}`}
                className="group flex h-full min-h-[44px] flex-col items-start gap-3 border border-white/15 bg-[#141414] p-4 transition hover:border-brand-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
              >
                <span className="flex h-10 w-10 items-center justify-center bg-brand-gold text-black transition group-hover:bg-brand-red group-hover:text-white" aria-hidden>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="block font-bold text-white">{name}</span>
                <span className="block break-all text-sm text-white/60">{detail}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
