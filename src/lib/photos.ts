import type { Locale } from "@/lib/i18n";

/** Real shop photos (from the shop's own videos). Alt text describes only what is visible. */
export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
};

const P = (file: string, width: number, height: number, en: string, es: string): Photo => ({
  src: `/photos/${file}`,
  width,
  height,
  alt: { en, es },
});

export const PHOTOS = {
  storefront: P("tire-shop-west-palm-beach-los-paisas-storefront-01.webp", 1920, 1080,
    "Los Paisas Tires Shop storefront with the Tire Shop sign and Open sign",
    "Fachada de Los Paisas Tires Shop con el letrero Tire Shop y el letrero Open"),
  poleSign: P("new-used-tires-sign-west-palm-beach-los-paisas-02.webp", 1920, 1080,
    "Roadside pole sign reading Tires New & Used in front of the shop",
    "Letrero en poste que dice Tires New & Used frente al taller"),
  exterior: P("tire-shop-near-me-west-palm-beach-los-paisas-exterior-03.webp", 1440, 2560,
    "Front of the shop and its parking lot under a blue sky",
    "Frente del taller y su estacionamiento bajo un cielo azul"),
  parking: P("los-paisas-tires-shop-parking-west-palm-beach-04.webp", 1440, 1931,
    "Customer car parked beside the shop entrance",
    "Carro de un cliente estacionado junto a la entrada del taller"),
  truck1: P("mobile-tire-service-truck-west-palm-beach-los-paisas-06.webp", 1440, 1926,
    "White box truck parked in the shop lot",
    "Camión blanco de caja estacionado en el lote del taller"),
  truck2: P("tire-delivery-truck-west-palm-beach-los-paisas-07.webp", 1440, 1926,
    "Side view of the white box truck in the lot",
    "Vista lateral del camión blanco de caja en el lote"),
  balancer1: P("wheel-balancing-west-palm-beach-los-paisas-08.webp", 1440, 2560,
    "Wheel mounted on the balancing machine with its digital display",
    "Rueda montada en la máquina de balanceo con su pantalla digital"),
  balancer2: P("tire-balancing-machine-west-palm-beach-los-paisas-09.webp", 1440, 2560,
    "Technician setting the balancing machine for a mounted wheel",
    "Técnico ajustando la máquina de balanceo con una rueda montada"),
  repair1: P("flat-tire-repair-west-palm-beach-los-paisas-10.webp", 1440, 2560,
    "Technician checking the inside of a tire in front of the tire rack",
    "Técnico revisando el interior de una llanta frente al estante de llantas"),
  repair2: P("tire-patch-plug-repair-west-palm-beach-los-paisas-11.webp", 1440, 2560,
    "Technician working a repair from the inside of a tire",
    "Técnico haciendo una reparación desde el interior de una llanta"),
  newTread: P("new-tires-west-palm-beach-los-paisas-tread-12.webp", 1440, 2560,
    "Close-up of a tire tread with deep grooves",
    "Primer plano de la banda de rodadura de una llanta con surcos profundos"),
  usedTread: P("used-tires-west-palm-beach-los-paisas-tread-check-13.webp", 1440, 2560,
    "Close-up of a tire tread being checked",
    "Primer plano de la banda de una llanta durante la revisión"),
  install: P("tire-installation-west-palm-beach-los-paisas-14.webp", 1440, 2560,
    "Technician crouched at the front wheel of a silver car with an air hose",
    "Técnico agachado junto a la rueda delantera de un carro plateado con una manguera de aire"),
  usedBay: P("used-tires-west-palm-beach-los-paisas-shop-bay-15.webp", 1440, 2560,
    "Tire being rolled across the shop bay floor",
    "Llanta rodando por el piso del área de trabajo del taller"),
  office: P("tire-shop-office-west-palm-beach-los-paisas-16.webp", 1440, 1926,
    "Team member in a Los Paisas Tires Shop shirt in the shop office",
    "Empleado con camiseta de Los Paisas Tires Shop en la oficina del taller"),
} as const;

/** Photos per service page, keyed by the EN path (ES pages use page.enPath). */
export const SERVICE_PHOTOS: Record<string, Photo[]> = {
  "/services/mobile-tire-service": [PHOTOS.truck1, PHOTOS.truck2],
  "/services/tire-balancing": [PHOTOS.balancer1, PHOTOS.balancer2],
  "/services/new-tires": [PHOTOS.newTread],
  "/services/tire-installation": [PHOTOS.install],
  "/services/tire-repair": [PHOTOS.repair1, PHOTOS.repair2],
  "/services/used-tires": [PHOTOS.usedTread, PHOTOS.usedBay],
};
