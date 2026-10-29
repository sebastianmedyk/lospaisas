import type { Locale } from "@/lib/i18n";

/** Real shop photos (from the shop's own videos). Alt text describes only what is visible. */
export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
};

const P = (file: string, width: number, height: number, en: string, es: string, pl: string): Photo => ({
  src: `/photos/${file}`,
  width,
  height,
  alt: { en, es, pl },
});

export const PHOTOS = {
  storefront: P("tire-shop-west-palm-beach-los-paisas-storefront-01.webp", 1920, 1080,
    "Los Paisas Tires Shop storefront with the Tire Shop sign and Open sign",
    "Fachada de Los Paisas Tires Shop con el letrero Tire Shop y el letrero Open",
    "Fasada Los Paisas Tires Shop z szyldem Tire Shop i napisem Open"),
  poleSign: P("new-used-tires-sign-west-palm-beach-los-paisas-02.webp", 1920, 1080,
    "Roadside pole sign reading Tires New & Used in front of the shop",
    "Letrero en poste que dice Tires New & Used frente al taller",
    "Szyld na słupie z napisem Tires New & Used przed warsztatem"),
  exterior: P("tire-shop-near-me-west-palm-beach-los-paisas-exterior-03.webp", 1440, 2560,
    "Front of the shop and its parking lot under a blue sky",
    "Frente del taller y su estacionamiento bajo un cielo azul",
    "Front warsztatu i parking pod błękitnym niebem"),
  parking: P("los-paisas-tires-shop-parking-west-palm-beach-04.webp", 1440, 1931,
    "Customer car parked beside the shop entrance",
    "Carro de un cliente estacionado junto a la entrada del taller",
    "Samochód klienta zaparkowany przy wejściu do warsztatu"),
  truck1: P("mobile-tire-service-truck-west-palm-beach-los-paisas-06.webp", 1440, 1926,
    "White box truck parked in the shop lot",
    "Camión blanco de caja estacionado en el lote del taller",
    "Biała ciężarówka z zabudową na parkingu warsztatu"),
  truck2: P("tire-delivery-truck-west-palm-beach-los-paisas-07.webp", 1440, 1926,
    "Side view of the white box truck in the lot",
    "Vista lateral del camión blanco de caja en el lote",
    "Widok z boku na białą ciężarówkę na parkingu"),
  balancer1: P("wheel-balancing-west-palm-beach-los-paisas-08.webp", 1440, 2560,
    "Wheel mounted on the balancing machine with its digital display",
    "Rueda montada en la máquina de balanceo con su pantalla digital",
    "Koło zamocowane na wyważarce z cyfrowym wyświetlaczem"),
  balancer2: P("tire-balancing-machine-west-palm-beach-los-paisas-09.webp", 1440, 2560,
    "Technician setting the balancing machine for a mounted wheel",
    "Técnico ajustando la máquina de balanceo con una rueda montada",
    "Mechanik ustawia wyważarkę z zamocowanym kołem"),
  repair1: P("flat-tire-repair-west-palm-beach-los-paisas-10.webp", 1440, 2560,
    "Technician checking the inside of a tire in front of the tire rack",
    "Técnico revisando el interior de una llanta frente al estante de llantas",
    "Mechanik sprawdza wnętrze opony przed regałem z oponami"),
  repair2: P("tire-patch-plug-repair-west-palm-beach-los-paisas-11.webp", 1440, 2560,
    "Technician working a repair from the inside of a tire",
    "Técnico haciendo una reparación desde el interior de una llanta",
    "Mechanik naprawia oponę od środka"),
  newTiresRack: P("new-tires-rack-west-palm-beach-los-paisas.webp", 1600, 1200,
    "Shelves of new tires with manufacturer stickers on the tread, sorted by size, and a Los Paisas technician in the shop",
    "Estantes de llantas nuevas con etiquetas del fabricante en la banda de rodadura, ordenadas por medida, y un técnico de Los Paisas en el taller",
    "Regały z nowymi oponami z naklejkami producenta na bieżniku, ułożonymi według rozmiaru, i mechanik Los Paisas w warsztacie"),
  newTread: P("new-tires-west-palm-beach-los-paisas-tread-12.webp", 1440, 2560,
    "Close-up of a tire tread with a nail stuck in it",
    "Primer plano de la banda de rodadura de una llanta con un clavo",
    "Zbliżenie bieżnika opony z wbitym gwoździem"),
  install: P("tire-installation-west-palm-beach-los-paisas-14.webp", 1440, 2560,
    "Technician crouched at the front wheel of a silver car with an air hose",
    "Técnico agachado junto a la rueda delantera de un carro plateado con una manguera de aire",
    "Mechanik kuca przy przednim kole srebrnego auta z wężem do powietrza"),
  office: P("tire-shop-office-west-palm-beach-los-paisas-16.webp", 1440, 1926,
    "Team member in a Los Paisas Tires Shop shirt in the shop office",
    "Empleado con camiseta de Los Paisas Tires Shop en la oficina del taller",
    "Pracownik w koszulce Los Paisas Tires Shop w biurze warsztatu"),
} as const;

/** Lighter copies (640/800px wide WebP) for above-the-fold hero use. `images.unoptimized` is on, so file weight is what ships. */
export const HERO_LITE = {
  exterior: { ...PHOTOS.exterior, src: "/photos/tire-shop-near-me-west-palm-beach-los-paisas-exterior-03-640.webp", width: 640, height: 1138 },
  newTiresRack: { ...PHOTOS.newTiresRack, src: "/photos/new-tires-rack-west-palm-beach-los-paisas-800.webp", width: 800, height: 600 },
} as const;

/** Photos per service page, keyed by the EN path (every locale uses page.paths.en). */
export const SERVICE_PHOTOS: Record<string, Photo[]> = {
  "/en/services/mobile-tire-service": [PHOTOS.truck1, PHOTOS.truck2],
  "/en/services/tire-balancing": [PHOTOS.balancer1, PHOTOS.balancer2],
  "/en/services/new-tires": [PHOTOS.newTiresRack],
  "/en/services/tire-installation": [PHOTOS.install],
  "/en/services/tire-repair": [PHOTOS.repair1, PHOTOS.repair2, PHOTOS.newTread],
  // used-tires: no photo yet. #13 shows a worn-out tire and #15 a single loose tire,
  // neither shows used tires for sale. TODO(Sebastian): photo of the used-tire rack/stack.
};
