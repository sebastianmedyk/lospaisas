import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { rich } from "@/components/RichText";
import type { Locale } from "@/lib/i18n";

type Extra = {
  heading: string;
  paragraphs: string[];
  linksHeading: string;
  links: { href: string; label: string }[];
};

/**
 * Answer-first block for the location and contact pages. English only for now (AI-visibility plan,
 * 2026-11): "tire shop near me / open Sunday" copy plus internal links into the services and hubs.
 * Facts only from the owner-confirmed list (see lib/cheap-hub.ts).
 */
const EXTRA: Partial<Record<"location" | "contact", Partial<Record<Locale, Extra>>>> = {
  location: {
    en: {
      heading: "Tire shop on Military Trail, open Sunday",
      paragraphs: [
        "Looking for a tire shop near Military Trail in West Palm Beach? Los Paisas Tires Shop is at 1114 S Military Trl, West Palm Beach, FL 33415, and it is open Monday through Sunday, 8:00 AM to 7:00 PM. Sunday is a normal workday here. Walk in with no appointment, or call (561) 429-4041 with your tire size.",
        "Used tires start from $65 and new Cosmo tires from $120, with mounting and balancing included when you buy the tire from us and no hidden fees. Alignment is free when you buy 4 new tires. We are a tire shop only: no oil changes or brakes. Drivers also come from Greenacres, Palm Springs and Lake Worth Beach, and the [mobile tire service](/en/services/mobile-tire-service) covers Palm Beach County.",
      ],
      linksHeading: "What we do at this address",
      links: [
        { href: "/en/services/used-tires", label: "Used tires from $65" },
        { href: "/en/services/new-tires", label: "New Cosmo tires from $120" },
        { href: "/en/cheap-tires-west-palm-beach", label: "Cheapest tires near me: compare your options" },
        { href: "/en/catalog", label: "New tire catalog with prices" },
        { href: "/en/services/tire-repair", label: "Tire repair and vulcanization" },
        { href: "/en/services/wheel-alignment", label: "Wheel alignment, free with 4 new tires" },
        { href: "/en/services/tire-balancing", label: "Tire balancing, no hidden fees" },
        { href: "/en/services/tire-installation", label: "Install tires you bought elsewhere" },
        { href: "/en/blog/flat-tire-sunday-military-trail", label: "Flat tire on Sunday on Military Trl" },
        { href: "/en/services", label: "All tire services" },
      ],
    },
  },
  contact: {
    en: {
      heading: "Before you call: prices and answers",
      paragraphs: [
        "Most calls are about price, stock and hours. Used tires start from $65 and new Cosmo tires from $120, mounting and balancing included when you buy the tire from us. We are open 7 days a week, 8:00 AM to 7:00 PM, Sunday too, and no appointment is needed. Have your tire size ready (it is printed on the sidewall) and we can check stock before you drive over.",
      ],
      linksHeading: "Quick links",
      links: [
        { href: "/en/cheap-tires-west-palm-beach", label: "Cheapest tires near me: used from $65" },
        { href: "/en/services/used-tires", label: "Used tires from $65" },
        { href: "/en/catalog", label: "New tire catalog with prices" },
        { href: "/en/blog/how-to-read-tire-size-on-sidewall", label: "How to read your tire size" },
        { href: "/en/services", label: "All tire services" },
      ],
    },
  },
};

export default function PlaceExtra({ kind, locale }: { kind: "location" | "contact"; locale: Locale }) {
  const extra = EXTRA[kind]?.[locale];
  if (!extra) return null;
  const id = `place-extra-${kind}`;
  return (
    <section className="section-pad border-t border-white/15" aria-labelledby={id}>
      <div className="container-site max-w-3xl">
        <SectionHeading id={id} title={extra.heading} />
        <div className="mt-6 space-y-4 leading-relaxed text-white/80">
          {extra.paragraphs.map((p, i) => (
            <p key={i}>{rich(p)}</p>
          ))}
        </div>
        <h3 className="headline mt-8 text-2xl font-bold text-white">{extra.linksHeading}</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {extra.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="card-dark block text-white hover:text-brand-gold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
