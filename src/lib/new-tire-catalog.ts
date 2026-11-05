/**
 * New-tire catalog — single source of truth for prices on the site.
 * Source: https://catalogo-tireshoplospaisas.netlify.app (fetched 2026-11-05). Do not hand-copy this list elsewhere.
 * Catalog promo: "Precio incluye alineación y balanceo" (price includes alignment and balancing).
 * Catalog footer: "Precios sujetos a cambio sin previo aviso" (prices subject to change without notice).
 */
export type RimSize = "R15" | "R16" | "R17" | "R18";
export type CatalogImageKey = "cosmo01" | "cosmo02" | "cosmo03" | "cosmo04" | "cosmo05" | "cosmo06" | "cosmo07";

export type NewTire = {
  size: string;
  sizeCore: string;
  rim: RimSize;
  badge: "C" | "LT" | null;
  brand: "Cosmo";
  price: number;
  ref: string;
  image: CatalogImageKey;
};

export const NEW_TIRE_CATALOG_SOURCE = "https://catalogo-tireshoplospaisas.netlify.app";
export const NEW_TIRE_CATALOG_FETCHED = "2026-11-05";
export const RIM_SIZES: readonly RimSize[] = ["R15", "R16", "R17", "R18"];

export const NEW_TIRES: readonly NewTire[] = [
  { size: "195/65 R15", sizeCore: "195/65 R15", rim: "R15", badge: null, brand: "Cosmo", price: 120, ref: "195-6515", image: "cosmo01" },
  { size: "205/65 R15", sizeCore: "205/65 R15", rim: "R15", badge: null, brand: "Cosmo", price: 120, ref: "205-6515", image: "cosmo01" },
  { size: "205/55 R16", sizeCore: "205/55 R16", rim: "R16", badge: null, brand: "Cosmo", price: 120, ref: "205-5516", image: "cosmo02" },
  { size: "205/60 R16", sizeCore: "205/60 R16", rim: "R16", badge: null, brand: "Cosmo", price: 130, ref: "205-6016", image: "cosmo01" },
  { size: "205/65 R16", sizeCore: "205/65 R16", rim: "R16", badge: null, brand: "Cosmo", price: 155, ref: "205-6516", image: "cosmo01" },
  { size: "205/65 R16 C", sizeCore: "205/65 R16", rim: "R16", badge: "C", brand: "Cosmo", price: 130, ref: "205-6516C", image: "cosmo03" },
  { size: "215/55 R16", sizeCore: "215/55 R16", rim: "R16", badge: null, brand: "Cosmo", price: 135, ref: "215-5516", image: "cosmo01" },
  { size: "215/60 R16", sizeCore: "215/60 R16", rim: "R16", badge: null, brand: "Cosmo", price: 135, ref: "215-6016", image: "cosmo01" },
  { size: "215/65 R16", sizeCore: "215/65 R16", rim: "R16", badge: null, brand: "Cosmo", price: 135, ref: "215-6516", image: "cosmo04" },
  { size: "225/60 R16", sizeCore: "225/60 R16", rim: "R16", badge: null, brand: "Cosmo", price: 135, ref: "225-6016", image: "cosmo01" },
  { size: "235/65 R16", sizeCore: "235/65 R16", rim: "R16", badge: null, brand: "Cosmo", price: 180, ref: "235-6516", image: "cosmo03" },
  { size: "245/75 R16 LT", sizeCore: "245/75 R16", rim: "R16", badge: "LT", brand: "Cosmo", price: 180, ref: "245-7516LT", image: "cosmo05" },
  { size: "215/45 R17", sizeCore: "215/45 R17", rim: "R17", badge: null, brand: "Cosmo", price: 135, ref: "215-4517", image: "cosmo01" },
  { size: "215/55 R17", sizeCore: "215/55 R17", rim: "R17", badge: null, brand: "Cosmo", price: 135, ref: "215-5517", image: "cosmo02" },
  { size: "225/45 R17", sizeCore: "225/45 R17", rim: "R17", badge: null, brand: "Cosmo", price: 135, ref: "225-4517", image: "cosmo02" },
  { size: "225/50 R17", sizeCore: "225/50 R17", rim: "R17", badge: null, brand: "Cosmo", price: 140, ref: "225-5017", image: "cosmo01" },
  { size: "225/55 R17", sizeCore: "225/55 R17", rim: "R17", badge: null, brand: "Cosmo", price: 135, ref: "225-5517", image: "cosmo02" },
  { size: "225/60 R17", sizeCore: "225/60 R17", rim: "R17", badge: null, brand: "Cosmo", price: 140, ref: "225-6017", image: "cosmo05" },
  { size: "225/65 R17", sizeCore: "225/65 R17", rim: "R17", badge: null, brand: "Cosmo", price: 150, ref: "225-6517", image: "cosmo06" },
  { size: "235/65 R17", sizeCore: "235/65 R17", rim: "R17", badge: null, brand: "Cosmo", price: 160, ref: "235-6517", image: "cosmo06" },
  { size: "265/70 R17", sizeCore: "265/70 R17", rim: "R17", badge: null, brand: "Cosmo", price: 180, ref: "265-7017", image: "cosmo05" },
  { size: "265/70 R17 LT", sizeCore: "265/70 R17", rim: "R17", badge: "LT", brand: "Cosmo", price: 190, ref: "265-7017LT", image: "cosmo06" },
  { size: "225/40 R18", sizeCore: "225/40 R18", rim: "R18", badge: null, brand: "Cosmo", price: 140, ref: "225-4018", image: "cosmo02" },
  { size: "225/45 R18", sizeCore: "225/45 R18", rim: "R18", badge: null, brand: "Cosmo", price: 150, ref: "225-4518", image: "cosmo07" },
  { size: "235/45 R18", sizeCore: "235/45 R18", rim: "R18", badge: null, brand: "Cosmo", price: 150, ref: "235-4518", image: "cosmo02" },
  { size: "235/50 R18", sizeCore: "235/50 R18", rim: "R18", badge: null, brand: "Cosmo", price: 150, ref: "235-5018", image: "cosmo02" },
];

export const NEW_TIRE_MIN_PRICE = Math.min(...NEW_TIRES.map((t) => t.price));
export const NEW_TIRE_MAX_PRICE = Math.max(...NEW_TIRES.map((t) => t.price));

export function tiresByRim(rim: RimSize): NewTire[] {
  return NEW_TIRES.filter((t) => t.rim === rim);
}

export const NEW_TIRES_EN_PATH = "/en/services/new-tires";
