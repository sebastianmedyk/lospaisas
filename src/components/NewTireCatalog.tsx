import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";
import { CATALOG_PHOTOS } from "@/lib/photos";
import {
  NEW_TIRES,
  NEW_TIRE_MAX_PRICE,
  NEW_TIRE_MIN_PRICE,
  RIM_SIZES,
  tiresByRim,
} from "@/lib/new-tire-catalog";

const WHATSAPP_URL = "https://wa.me/15614294041";

const COPY: Record<
  Locale,
  {
    heading: string;
    lead: string;
    promo: string;
    disclaimer: string;
    whatsapp: string;
    cols: { size: string; type: string; brand: string; price: string };
    rimLabel: (rim: string) => string;
    photosNote: string;
  }
> = {
  en: {
    heading: "New tire prices: Cosmo catalog",
    lead: `${NEW_TIRES.length} new Cosmo sizes, R15 to R18, from $${NEW_TIRE_MIN_PRICE} to $${NEW_TIRE_MAX_PRICE} per tire in USD.`,
    promo: "Catalog price includes alignment and balancing.",
    disclaimer: `Prices subject to change without notice. Call or WhatsApp ${BUSINESS.phoneDisplay} to confirm your size is in stock before you come.`,
    whatsapp: "WhatsApp for availability",
    cols: { size: "Size", type: "Type", brand: "Brand", price: "Price (USD)" },
    rimLabel: (rim) => `${rim} rim`,
    photosNote: "Catalog illustrations of Cosmo tires; the same image is used for several sizes.",
  },
  es: {
    heading: "Precios de llantas nuevas: catálogo Cosmo",
    lead: `${NEW_TIRES.length} medidas nuevas Cosmo, de R15 a R18, desde $${NEW_TIRE_MIN_PRICE} hasta $${NEW_TIRE_MAX_PRICE} por llanta en USD.`,
    promo: "Precio incluye alineación y balanceo.",
    disclaimer: `Precios sujetos a cambio sin previo aviso. Llama o escribe por WhatsApp al ${BUSINESS.phoneDisplay} para confirmar que tu medida está disponible antes de venir.`,
    whatsapp: "WhatsApp para disponibilidad",
    cols: { size: "Medida", type: "Tipo", brand: "Marca", price: "Precio (USD)" },
    rimLabel: (rim) => `Rin ${rim}`,
    photosNote: "Ilustraciones del catálogo de llantas Cosmo; la misma imagen se usa para varias medidas.",
  },
  pl: {
    heading: "Ceny nowych opon: katalog Cosmo",
    lead: `${NEW_TIRES.length} rozmiarów nowych opon Cosmo, od R15 do R18, od $${NEW_TIRE_MIN_PRICE} do $${NEW_TIRE_MAX_PRICE} za oponę (USD).`,
    promo: "Cena z katalogu obejmuje geometrię i wyważanie.",
    disclaimer: `Ceny mogą się zmienić bez uprzedzenia. Zadzwoń lub napisz na WhatsApp ${BUSINESS.phoneDisplay}, żeby potwierdzić dostępność rozmiaru przed przyjazdem.`,
    whatsapp: "WhatsApp — dostępność",
    cols: { size: "Rozmiar", type: "Typ", brand: "Marka", price: "Cena (USD)" },
    rimLabel: (rim) => `Felga ${rim}`,
    photosNote: "Ilustracje z katalogu opon Cosmo; to samo zdjęcie służy kilku rozmiarom.",
  },
};

export default function NewTireCatalog({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const photos = Object.values(CATALOG_PHOTOS);
  return (
    <section id="new-tire-prices" className="section-pad-after-hero border-b border-white/15" aria-labelledby="new-tire-prices-h">
      <div className="container-site max-w-3xl">
        <SectionHeading id="new-tire-prices-h" title={c.heading} />
        <p className="mt-5 text-base leading-relaxed text-white/80">{c.lead}</p>
        <p className="mt-4 border-l-4 border-brand-gold bg-brand-gold/10 px-4 py-3 font-bold text-white">{c.promo}</p>

        <div className="mt-8 space-y-8">
          {RIM_SIZES.map((rim) => (
            <div key={rim}>
              <h3 className="headline text-2xl font-bold text-brand-gold">{c.rimLabel(rim)}</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full min-w-[22rem] border-collapse text-left text-white/85">
                  <thead>
                    <tr className="border-b border-white/25 text-xs uppercase tracking-[0.14em] text-white/60">
                      <th scope="col" className="py-2 pr-4">{c.cols.size}</th>
                      <th scope="col" className="py-2 pr-4">{c.cols.type}</th>
                      <th scope="col" className="py-2 pr-4">{c.cols.brand}</th>
                      <th scope="col" className="py-2 text-right">{c.cols.price}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tiresByRim(rim).map((t) => (
                      <tr key={t.ref} className="border-b border-white/10">
                        <th scope="row" className="py-2 pr-4 font-semibold text-white">{t.size}</th>
                        <td className="py-2 pr-4">
                          {t.badge ? (
                            <span className="bg-brand-red px-2 py-0.5 text-xs font-bold text-white">{t.badge}</span>
                          ) : null}
                        </td>
                        <td className="py-2 pr-4">{t.brand}</td>
                        <td className="py-2 text-right font-bold text-brand-gold">${t.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-white/70">{c.disclaimer}</p>
        <p className="mt-4 flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.14em]">
          <a href={BUSINESS.phoneTel} className="text-brand-gold hover:underline">{BUSINESS.phoneDisplay}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
            {c.whatsapp}
          </a>
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {photos.map((p) => (
            <figure key={p.src} className="overflow-hidden border border-white/15 bg-white">
              <Image
                src={p.src}
                alt={p.alt[locale]}
                width={p.width}
                height={p.height}
                sizes="(max-width: 640px) 50vw, 180px"
                loading="lazy"
                className="aspect-square h-auto w-full object-contain"
              />
            </figure>
          ))}
        </div>
        <p className="mt-2 text-xs text-white/50">{c.photosNote}</p>
      </div>
    </section>
  );
}
