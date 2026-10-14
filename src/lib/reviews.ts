/**
 * Real Google review quotes approved by Sebastian (2026-10-14).
 * Text is verbatim from Google: do NOT correct typos, spacing or emoji.
 * Each locale renders only its own list. No Review/AggregateRating schema.
 */
export type ReviewQuote = {
  quote: string;
  author: string;
  locale: "en" | "es";
  stars: 1 | 2 | 3 | 4 | 5;
  /** Month + year as shown */
  date: string;
};

export const REVIEW_QUOTES: ReviewQuote[] = [
  { locale: "en", author: "E-Neal Productions", stars: 5, date: "Oct 2026", quote: "Great service and no pressure. Except for in my tires! Had a nasty cut in one of my sidewalls. Walked in and got a replacement for $70 installed. Easiest Monday morning ever 👍🏽" },
  { locale: "en", author: "A Fryer", stars: 5, date: "Mar 2026", quote: "Everyone here was very friendly and honest, I really appreciate honesty when getting my car serviced. They repaired my tire fast and got me back on the road; I will certainly be sure to come back when it's time to buy new ones!" },
  { locale: "en", author: "Eric Wagner", stars: 5, date: "Apr 2026", quote: "They were very courteous and changed 4 tires out in a little over an hour. The prices were very fair. I highly recommend them you won't be sorry." },
  { locale: "en", author: "Aimee G (Sweetthang)", stars: 5, date: "Sep 2026", quote: "Very friendly and kind employees. Reasonable prices. Overall great service" },
  { locale: "en", author: "Reynard", stars: 5, date: "Jan 2026", quote: "Jose was very helpful. Great communication skills, was very knowledgeable about the products and services they have to offer. Very welcoming environment." },
  { locale: "en", author: "Camilo quiroga", stars: 4, date: "Oct 2026", quote: "Good price and fast install !" },
  { locale: "es", author: "Yenisleydis Sible Jiménez", stars: 5, date: "sep 2026", quote: "Siempre que llego a este lugar es bien rápido la atención ,siempre te atienden con una sonrisa y hablan español" },
  { locale: "es", author: "Xavier Chacon", stars: 5, date: "sep 2026", quote: "Me atendieron super bien.Yo fui a varios lugares antes de comenzarán el proceso de cambiar mis rin del auto por nuevos al igual que las gomas y despudes de ir a mas de 5 lugares este  lugar fue el más barato y calidad exelente.Los recomiendo al 100%" },
  { locale: "es", author: "Eli Fleites", stars: 5, date: "feb 2026", quote: "Esta compañía la recomiendo son profesionales en su trabajo,excelente servicio al cliente,y servicios rápidos" },
  { locale: "es", author: "Yosmany VigoaPlay", stars: 5, date: "sep 2026", quote: "Excelente servicio y muy honestos 10/10" },
  { locale: "es", author: "Edwin Iglesias", stars: 5, date: "may 2026", quote: "Excelente servicio y disponibilidad 👍👍👍" },
  { locale: "es", author: "Luis Toruno", stars: 5, date: "dic 2025", quote: "Excelente atención" },
];
