import type { Locale } from "@/lib/routes";

/**
 * Copy for the cheap / cheapest tires price hub (brief from Local Seo, approved by Sebastian 2026-11-19).
 * Facts only from the owner-confirmed list: used from $65, new Cosmo from $120, mounting and balancing
 * included, no hidden fees, free alignment with 4 new tires, new-tire warranty 4 months / 4,000 miles,
 * customer tires (>2) alignment $25 off, open 7 days 8 AM–7 PM, walk-ins, EN/ES, Snap (~15 min decision).
 * Never: "alignment included" in a catalog price, "$65 each", "no credit check", minute promises, oil/brakes.
 * Inline links use [label](/path).
 */
export type HubSection = { id: string; heading: string; paragraphs: string[]; bullets?: string[] };
export type HubRow = { option: string; price: string; included: string };
export type HubCopy = {
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  crumb: string;
  lead: string;
  facts: string[];
  tableHeading: string;
  tableIntro: string;
  tableCols: [string, string, string];
  rows: HubRow[];
  tableNote: string;
  sections: HubSection[];
  citiesHeading: string;
  citiesText: string[];
  cityLinks: { href: string; label: string }[];
  reviewsHeading: string;
  reviewsIntro: string;
  reviews: { author: string; date: string; quote: string; translation?: string }[];
  reviewsLink: string;
  faqHeading: string;
  faqs: { question: string; answer: string }[];
  napHeading: string;
  tireOnly: string;
  mapLabel: string;
  directionsLabel: string;
  serviceUsed: string;
  serviceNew: string;
};

const XAVIER =
  "Me atendieron super bien.Yo fui a varios lugares antes de comenzarán el proceso de cambiar mis rin del auto por nuevos al igual que las gomas y despudes de ir a mas de 5 lugares este  lugar fue el más barato y calidad exelente.Los recomiendo al 100%";

export const CHEAP_HUB: Record<Locale, HubCopy> = {
  en: {
    title: "Cheapest Tires Near Me in West Palm Beach – Used from $65",
    description:
      "Cheapest tires near me in West Palm Beach: used from $65, new Cosmo from $120. Mounting and balancing included, no hidden fees. Open 7 days incl. Sunday.",
    h1: "Cheapest Tires Near Me in West Palm Beach – Used from $65",
    eyebrow: "1114 S Military Trl · open 7 days",
    crumb: "Cheap tires",
    lead:
      "Cheapest tires near me in West Palm Beach: used tires from $65 and new Cosmo tires from $120, with mounting and balancing included and no hidden fees.",
    facts: ["Open 7 days incl. Sunday", "8 AM–7 PM", "Walk-ins", "English & Spanish"],
    tableHeading: "What “cheapest tires near me” means at Los Paisas",
    tableIntro:
      "When people search for the cheapest tires near me, they usually want two things: a low price and no surprise at the counter. Here is what each option starts at and what is already inside that price.",
    tableCols: ["Option", "From", "What's included"],
    rows: [
      {
        option: "Used tires",
        price: "from $65",
        included: "Mounting and balancing included. Each tire checked before it goes on. Sold without a warranty.",
      },
      {
        option: "New Cosmo tires",
        price: "from $120",
        included: "Mounting and balancing included. Warranty 4 months or 4,000 miles. Free alignment with 4 new tires.",
      },
      {
        option: "Your own tires",
        price: "ask at the shop",
        included: "We mount tires you bought elsewhere. Mounting more than 2 of your own tires: alignment $25 off.",
      },
    ],
    tableNote:
      "The final used-tire price depends on size and the tread that is left; you hear it before we mount anything. New sizes and prices are in the [new tire catalog](/en/catalog).",
    sections: [
      {
        id: "compare",
        heading: "Compare the full price, not just the tire",
        paragraphs: [
          "The cheapest place to get tires mounted and balanced is not always the one with the lowest number on the sign. A tire price that leaves out mounting, balancing or a fee at the end can cost more by the time you drive away. Before you pay anywhere, ask the same short list of questions and compare the total. Our guide to [how to compare cheap tire prices in West Palm Beach](/en/blog/compare-cheap-tire-prices-west-palm-beach) walks through it.",
          "At Los Paisas Tires Shop the answer is simple: when you buy the tire from us, mounting and balancing are in the price and there are no hidden fees. Used tires start from $65 and new Cosmo tires from $120.",
        ],
        bullets: [
          "Is mounting included in the tire price?",
          "Is balancing included?",
          "Is there any fee added at the end?",
          "Is there a warranty, and for how long?",
          "Are you open on Sunday if I need the car Monday?",
        ],
      },
      {
        id: "used",
        heading: "Cheap used tires near you – checked before they go on",
        paragraphs: [
          "A cheap used tire is only a good deal if it is safe for your car. Before we mount one, we look at the tread across the whole tire, the sidewalls for cuts, bubbles or cracks, and the size and load rating against your vehicle. If a used tire is the wrong way to save, we tell you, and we show you a new option or a repair instead.",
          "Used tires are sold without a warranty, which is why the check matters. Read more on our [used tires page](/en/services/used-tires) and in the [used tire inspection checklist](/en/blog/used-tire-inspection-checklist). If you want to see how used tire prices work, start with [used tire prices in West Palm Beach](/en/blog/used-tire-prices-west-palm-beach).",
        ],
      },
      {
        id: "repair",
        heading: "The cheapest tire is sometimes the one you have",
        paragraphs: [
          "If the damage is in the tread area, a patch or vulcanization may save the tire you already paid for. A patch usually takes about 15–20 minutes, depending on how busy the shop is. If the hole is in the sidewall or the tire has been driven flat, we say so and do not sell you a repair that will not hold.",
          "See what we repair on the [tire repair page](/en/services/tire-repair).",
        ],
      },
      {
        id: "open",
        heading: "Open 7 days, Sunday too – walk in",
        paragraphs: [
          "We are open Monday through Sunday, 8:00 AM to 7:00 PM. No appointment needed: walk in, or call (561) 429-4041 first with your tire size if you want us to check stock before you drive over. Same-day repairs.",
          "Approximate times, which depend on traffic in the shop: patch about 15–20 minutes, balancing about 15–20 minutes, alignment about 1 hour, a full set with alignment about 2 hours.",
        ],
      },
      {
        id: "pay",
        heading: "Pay your way",
        paragraphs: [
          "We take cards, tap-to-pay with your phone, and cash. If you need tires now and want to pay over time, ask about Snap financing: you fill out an online form and the decision usually comes in about 15 minutes.",
        ],
      },
    ],
    citiesHeading: "Drivers come from nearby",
    citiesText: [
      "Most customers drive in from West Palm Beach, Greenacres, Palm Springs, Lake Worth Beach, Lake Clarke Shores and Haverhill. There is one shop, at 1114 S Military Trl. If the car cannot be driven, our mobile tire service covers all of Palm Beach.",
    ],
    cityLinks: [
      { href: "/en/services/mobile-tire-service/greenacres", label: "Cheapest tires near Greenacres – mobile service" },
      { href: "/en/services/mobile-tire-service/lake-worth-beach", label: "Mobile tire service in Lake Worth Beach" },
      { href: "/en/services/mobile-tire-service/palm-springs", label: "Mobile tire service in Palm Springs" },
    ],
    reviewsHeading: "What customers say",
    reviewsIntro: "Real Google reviews, quoted as written.",
    reviews: [
      {
        author: "Xavier Chacon",
        date: "Sep 2026",
        quote: XAVIER,
        translation:
          "(They treated me really well. I went to several places before starting to change my car's rims for new ones, and the tires too, and after going to more than 5 places this place was the cheapest and excellent quality. I recommend them 100%.)",
      },
      {
        author: "Eric Wagner",
        date: "Apr 2026",
        quote:
          "They were very courteous and changed 4 tires out in a little over an hour. The prices were very fair. I highly recommend them you won't be sorry.",
      },
      {
        author: "E-Neal Productions",
        date: "Oct 2026",
        quote:
          "Great service and no pressure. Except for in my tires! Had a nasty cut in one of my sidewalls. Walked in and got a replacement for $70 installed. Easiest Monday morning ever 👍🏽",
      },
    ],
    reviewsLink: "See Google reviews",
    faqHeading: "FAQ – cheapest tires near me in West Palm Beach",
    faqs: [
      {
        question: "Where can I get the cheapest tires near me in West Palm Beach?",
        answer:
          "At Los Paisas Tires Shop, 1114 S Military Trl, West Palm Beach, FL 33415. Used tires start from $65 and new Cosmo tires from $120. Mounting and balancing are included and there are no hidden fees.",
      },
      {
        question: "How much do used tires cost?",
        answer: "From $65 per tire. The final price depends on the size and the remaining tread.",
      },
      { question: "Is mounting and balancing included?", answer: "Yes, when you buy the tire from us." },
      { question: "Are you open on Sunday?", answer: "Yes, 7 days a week, 8:00 AM–7:00 PM." },
      { question: "Do I need an appointment?", answer: "No, walk in. Same-day repairs." },
      {
        question: "Do used tires have a warranty?",
        answer: "No. New tires have a warranty of 4 months or 4,000 miles.",
      },
      { question: "Is alignment free?", answer: "Free with the purchase of 4 new tires." },
      {
        question: "Can I bring my own tires?",
        answer: "Yes. When we mount more than 2 of your own tires, alignment is $25 off.",
      },
      {
        question: "Can I pay over time?",
        answer:
          "Yes, with Snap financing: online form, decision in about 15 minutes. We also take cards, tap-to-pay and cash.",
      },
      { question: "Do you do oil changes or brakes?", answer: "No, we are a tire shop only." },
    ],
    napHeading: "Find the shop",
    tireOnly: "Tire shop only – oil, brakes and A/C are not our services.",
    mapLabel: "Open on Google Maps",
    directionsLabel: "Directions",
    serviceUsed: "Used tires",
    serviceNew: "New tires (Cosmo)",
  },

  es: {
    title: "Las llantas más baratas en West Palm Beach desde $65",
    description:
      "Las llantas más baratas cerca de mí en West Palm Beach: usadas desde $65, nuevas desde $120. Montaje y balanceo incluidos. Abierto 7 días, también domingo.",
    h1: "Las llantas más baratas en West Palm Beach – usadas desde $65",
    eyebrow: "1114 S Military Trl · abierto 7 días",
    crumb: "Llantas baratas",
    lead:
      "Las llantas más baratas cerca de mí: usadas desde $65 y Cosmo nuevas desde $120, con montaje y balanceo incluidos y sin cargos ocultos.",
    facts: ["Abierto 7 días, también domingo", "8 AM–7 PM", "Sin cita", "Español e inglés"],
    tableHeading: "Qué significa “las llantas más baratas” en Los Paisas",
    tableIntro:
      "Quien busca llantas baratas cerca de mí quiere dos cosas: un buen precio y ninguna sorpresa al pagar. Aquí está desde cuánto empieza cada opción y qué ya va incluido en ese precio.",
    tableCols: ["Opción", "Desde", "Qué incluye"],
    rows: [
      {
        option: "Llantas usadas",
        price: "desde $65",
        included: "Montaje y balanceo incluidos. Revisamos cada llanta antes de montarla. Se venden sin garantía.",
      },
      {
        option: "Llantas nuevas Cosmo",
        price: "desde $120",
        included: "Montaje y balanceo incluidos. Garantía de 4 meses o 4,000 millas. Alineación gratis con 4 llantas nuevas.",
      },
      {
        option: "Tus propias llantas",
        price: "pregunta en el taller",
        included: "Montamos llantas compradas en otro lugar. Si montamos más de 2 tuyas: alineación $25 más barata.",
      },
    ],
    tableNote:
      "El precio final de una llanta usada depende de la medida y del piso que le queda; te lo decimos antes de montar. Las medidas y precios de las nuevas están en el [catálogo de llantas nuevas](/catalogo).",
    sections: [
      {
        id: "compare",
        heading: "Compara el precio completo, no solo la llanta",
        paragraphs: [
          "El lugar más barato para montar y balancear llantas no siempre es el que pone el número más bajo en el letrero. Si el precio no incluye montaje, balanceo o hay un cargo al final, la llanta “barata” sale cara. Antes de pagar en cualquier taller, haz estas preguntas y compara el total. Nuestra guía para [comparar precios de llantas baratas en West Palm Beach](/blog/comparar-precios-llantas-baratas-west-palm-beach) lo explica paso a paso.",
          "En Los Paisas Tires Shop la respuesta es corta: si nos compras la llanta, el montaje y el balanceo van incluidos y no hay cargos ocultos. Usadas desde $65 y Cosmo nuevas desde $120.",
        ],
        bullets: [
          "¿El precio incluye el montaje?",
          "¿Incluye el balanceo?",
          "¿Hay algún cargo extra al final?",
          "¿Tiene garantía y de cuánto tiempo?",
          "¿Abren el domingo si necesito el carro el lunes?",
        ],
      },
      {
        id: "used",
        heading: "Llantas usadas baratas cerca de ti, revisadas antes de montar",
        paragraphs: [
          "Una llanta usada barata solo vale la pena si es segura para tu carro. Antes de montarla miramos el piso en toda la llanta, los costados (cortes, chichones o grietas) y que la medida y la carga correspondan a tu vehículo. Si una usada no es buena forma de ahorrar, te lo decimos y te mostramos una nueva o una reparación.",
          "Las usadas se venden sin garantía, por eso la revisión importa. Más detalles en [llantas usadas](/servicios/llantas-usadas) y en [qué revisamos en una llanta usada antes de montarla](/blog/revision-llantas-usadas-antes-de-montar). Si quieres saber cómo se forma el precio, lee [precio de llantas usadas en West Palm Beach](/blog/precio-llantas-usadas-west-palm-beach).",
        ],
      },
      {
        id: "gomas",
        heading: "Gomas baratas, llantas, neumáticos: como le digas, te entendemos",
        paragraphs: [
          "Hay quien dice gomas, quien dice llantas, cauchos o neumáticos. Es lo mismo y aquí te atendemos en español, sin cita, los 7 días. Si buscas gomas baratas o gomas usadas cerca de ti, escríbenos por WhatsApp o llama al (561) 429-4041 con la medida y te decimos qué tenemos.",
        ],
      },
      {
        id: "repair",
        heading: "La llanta más barata a veces es la que ya tienes",
        paragraphs: [
          "Si el daño está en el piso, un parche o la vulcanización pueden salvar la llanta que ya pagaste. Un parche toma aprox. 15–20 minutos, según el tráfico en el taller. Si el hueco está en el costado o la llanta se rodó sin aire, te lo decimos y no te vendemos una reparación que no va a aguantar.",
          "Mira lo que reparamos en [reparación de llantas](/servicios/reparacion-de-llantas).",
        ],
      },
      {
        id: "open",
        heading: "Abierto 7 días, también el domingo, sin cita",
        paragraphs: [
          "Abrimos de lunes a domingo, de 8:00 AM a 7:00 PM. No necesitas cita: llega directo o llama primero al (561) 429-4041 con tu medida si quieres que revisemos si la tenemos. Reparaciones el mismo día.",
          "Tiempos aproximados, según el tráfico en el taller: parche aprox. 15–20 minutos, balanceo aprox. 15–20 minutos, alineación aprox. 1 hora y un juego completo con alineación aprox. 2 horas.",
        ],
      },
      {
        id: "pay",
        heading: "Paga como te convenga",
        paragraphs: [
          "Aceptamos tarjeta, pago con el teléfono (NFC) y efectivo. Si necesitas las llantas ya y prefieres pagar después, pregunta por el financiamiento Snap: llenas un formulario en línea y la respuesta suele llegar en unos 15 minutos.",
        ],
      },
    ],
    citiesHeading: "Clientes que vienen de cerca",
    citiesText: [
      "La mayoría llega desde West Palm Beach, Greenacres, Palm Springs, Lake Worth Beach, Lake Clarke Shores y Haverhill. Hay un solo taller, en 1114 S Military Trl. Si el carro no puede rodar, el servicio a domicilio cubre todo Palm Beach.",
    ],
    cityLinks: [
      { href: "/servicios/servicio-movil/greenacres", label: "Las llantas más baratas cerca de Greenacres – a domicilio" },
      { href: "/servicios/servicio-movil/lake-worth-beach", label: "Servicio de llantas a domicilio en Lake Worth Beach" },
      { href: "/servicios/servicio-movil/palm-springs", label: "Servicio de llantas a domicilio en Palm Springs" },
    ],
    reviewsHeading: "Lo que dicen los clientes",
    reviewsIntro: "Opiniones reales de Google, citadas tal cual.",
    reviews: [
      { author: "Xavier Chacon", date: "sep 2026", quote: XAVIER },
      {
        author: "Yenisleydis Sible Jiménez",
        date: "sep 2026",
        quote:
          "Siempre que llego a este lugar es bien rápido la atención ,siempre te atienden con una sonrisa y hablan español",
      },
      { author: "Yosmany VigoaPlay", date: "sep 2026", quote: "Excelente servicio y muy honestos 10/10" },
    ],
    reviewsLink: "Ver opiniones en Google",
    faqHeading: "Preguntas frecuentes: las llantas más baratas en West Palm Beach",
    faqs: [
      {
        question: "¿Dónde encuentro las llantas más baratas cerca de mí?",
        answer:
          "En Los Paisas Tires Shop, 1114 S Military Trl, West Palm Beach, FL 33415. Usadas desde $65 y Cosmo nuevas desde $120. Montaje y balanceo incluidos, sin cargos ocultos.",
      },
      {
        question: "¿Cuánto cuesta una llanta usada?",
        answer: "Desde $65 por llanta. El precio final depende de la medida y del piso que le queda.",
      },
      { question: "¿El montaje y el balanceo están incluidos?", answer: "Sí, cuando nos compras la llanta." },
      { question: "¿Abren el domingo?", answer: "Sí, los 7 días de la semana, de 8:00 AM a 7:00 PM." },
      { question: "¿Necesito cita?", answer: "No, llega directo. Reparaciones el mismo día." },
      {
        question: "¿Las llantas usadas tienen garantía?",
        answer: "No. Las nuevas tienen garantía de 4 meses o 4,000 millas.",
      },
      { question: "¿La alineación es gratis?", answer: "Sí, con la compra de 4 llantas nuevas." },
      {
        question: "¿Puedo traer mis propias llantas?",
        answer: "Sí. Si montamos más de 2 llantas tuyas, la alineación sale $25 más barata.",
      },
      {
        question: "¿Puedo pagar a plazos?",
        answer:
          "Sí, con financiamiento Snap: formulario en línea y respuesta en unos 15 minutos. También aceptamos tarjeta, pago con el teléfono y efectivo.",
      },
      { question: "¿Hacen cambio de aceite o frenos?", answer: "No, somos solo taller de llantas." },
    ],
    napHeading: "Cómo llegar",
    tireOnly: "Solo llantas: aceite, frenos y A/C no son servicios nuestros.",
    mapLabel: "Abrir en Google Maps",
    directionsLabel: "Cómo llegar",
    serviceUsed: "Llantas usadas",
    serviceNew: "Llantas nuevas (Cosmo)",
  },

  pl: {
    title: "Najtańsze opony w West Palm Beach – używane od $65",
    description:
      "Najtańsze opony w West Palm Beach: używane od $65, nowe Cosmo od $120. Montaż i wyważenie w cenie, bez ukrytych opłat. Otwarte 7 dni, także w niedzielę.",
    h1: "Najtańsze opony w pobliżu w West Palm Beach – używane od $65",
    eyebrow: "1114 S Military Trl · otwarte 7 dni",
    crumb: "Tanie opony",
    lead:
      "Najtańsze opony w pobliżu w West Palm Beach: używane od $65 i nowe Cosmo od $120, z montażem i wyważeniem w cenie, bez ukrytych opłat.",
    facts: ["Otwarte 7 dni, także w niedzielę", "8 AM–7 PM", "Bez umawiania", "Angielski i hiszpański"],
    tableHeading: "Co znaczą „najtańsze opony” w Los Paisas",
    tableIntro:
      "Kto szuka najtańszych opon w okolicy, chce niskiej ceny i braku niespodzianek przy kasie. Oto od ilu zaczyna się każda opcja i co już jest w tej cenie.",
    tableCols: ["Opcja", "Od", "Co jest w cenie"],
    rows: [
      {
        option: "Opony używane",
        price: "od $65",
        included: "Montaż i wyważenie w cenie. Każdą oponę sprawdzamy przed montażem. Sprzedawane bez gwarancji.",
      },
      {
        option: "Nowe opony Cosmo",
        price: "od $120",
        included: "Montaż i wyważenie w cenie. Gwarancja 4 miesiące lub 4 000 mil. Geometria gratis przy 4 nowych oponach.",
      },
      {
        option: "Twoje własne opony",
        price: "zapytaj w warsztacie",
        included: "Montujemy opony kupione gdzie indziej. Przy montażu więcej niż 2 Twoich opon geometria $25 taniej.",
      },
    ],
    tableNote:
      "Ostateczna cena używanej opony zależy od rozmiaru i pozostałego bieżnika; podajemy ją przed montażem. Rozmiary i ceny nowych są w [katalogu nowych opon](/pl/katalog).",
    sections: [
      {
        id: "compare",
        heading: "Porównuj pełną cenę, nie samą oponę",
        paragraphs: [
          "Najtańsze miejsce na montaż i wyważenie opon to nie zawsze to z najniższą liczbą na szyldzie. Jeśli cena nie obejmuje montażu, wyważenia albo na końcu dochodzi opłata, „tania” opona wychodzi drogo. Zanim zapłacisz gdziekolwiek, zadaj te same pytania i porównaj sumę.",
          "W Los Paisas Tires Shop odpowiedź jest krótka: kupując oponę u nas, masz montaż i wyważenie w cenie, bez ukrytych opłat. Używane od $65, nowe Cosmo od $120.",
        ],
        bullets: [
          "Czy montaż jest w cenie opony?",
          "Czy wyważenie jest w cenie?",
          "Czy na końcu dochodzi jakaś opłata?",
          "Czy jest gwarancja i na jak długo?",
          "Czy jesteście otwarci w niedzielę?",
        ],
      },
      {
        id: "used",
        heading: "Tanie używane opony – sprawdzone przed montażem",
        paragraphs: [
          "Tania używana opona ma sens tylko wtedy, gdy jest bezpieczna dla Twojego auta. Przed montażem oglądamy bieżnik na całej szerokości, boki (rozcięcia, wybrzuszenia, pęknięcia) oraz rozmiar i nośność względem auta. Jeśli używana opona to zły sposób na oszczędność, mówimy to wprost.",
          "Używane opony są bez gwarancji, dlatego kontrola jest ważna. Więcej na stronie [używane opony](/pl/uslugi/uzywane-opony) i w [kontroli używanych opon przed montażem](/pl/blog/kontrola-uzywanych-opon-przed-montazem). O cenach: [ceny używanych opon w West Palm Beach](/pl/blog/ceny-uzywanych-opon-west-palm-beach).",
        ],
      },
      {
        id: "repair",
        heading: "Najtańsza opona to czasem ta, którą już masz",
        paragraphs: [
          "Jeśli uszkodzenie jest w bieżniku, łatka lub wulkanizacja mogą uratować oponę. Łatka trwa ok. 15–20 minut, zależnie od ruchu w warsztacie. Jeśli dziura jest w boku albo opona jechała bez powietrza, mówimy to i nie sprzedajemy naprawy, która nie wytrzyma.",
          "Zobacz [naprawę opon](/pl/uslugi/naprawa-opon).",
        ],
      },
      {
        id: "open",
        heading: "Otwarte 7 dni, także w niedzielę – bez umawiania",
        paragraphs: [
          "Otwarte od poniedziałku do niedzieli, 8:00 AM–7:00 PM. Bez umawiania: przyjedź albo zadzwoń najpierw pod (561) 429-4041 z rozmiarem opony. Naprawy tego samego dnia.",
          "Czasy orientacyjne, zależne od ruchu: łatka ok. 15–20 minut, wyważanie ok. 15–20 minut, geometria ok. 1 godziny, komplet z geometrią ok. 2 godzin.",
        ],
      },
      {
        id: "pay",
        heading: "Płać, jak Ci wygodnie",
        paragraphs: [
          "Przyjmujemy karty, płatność telefonem (NFC) i gotówkę. Jeśli potrzebujesz opon teraz, a wolisz płacić później, zapytaj o finansowanie Snap: formularz online, decyzja zwykle w ok. 15 minut.",
        ],
      },
    ],
    citiesHeading: "Kierowcy z okolicy",
    citiesText: [
      "Klienci przyjeżdżają z West Palm Beach, Greenacres, Palm Springs, Lake Worth Beach, Lake Clarke Shores i Haverhill. Warsztat jest jeden: 1114 S Military Trl. Gdy auto nie może jechać, serwis mobilny obsługuje cały Palm Beach.",
    ],
    cityLinks: [
      { href: "/pl/uslugi/mobilny-serwis-opon/greenacres", label: "Serwis mobilny – Greenacres" },
      { href: "/pl/uslugi/mobilny-serwis-opon/lake-worth-beach", label: "Serwis mobilny – Lake Worth Beach" },
      { href: "/pl/uslugi/mobilny-serwis-opon/palm-springs", label: "Serwis mobilny – Palm Springs" },
    ],
    reviewsHeading: "Co mówią klienci",
    reviewsIntro: "Prawdziwe opinie z Google, cytowane bez zmian.",
    reviews: [
      {
        author: "Xavier Chacon",
        date: "wrz 2026",
        quote: XAVIER,
        translation:
          "(Obsłużyli mnie super. Byłem w kilku miejscach, zanim zacząłem wymieniać felgi na nowe, a także opony, i po odwiedzeniu ponad 5 miejsc to było najtańsze i najlepszej jakości. Polecam w 100%.)",
      },
      {
        author: "Eric Wagner",
        date: "kwi 2026",
        quote:
          "They were very courteous and changed 4 tires out in a little over an hour. The prices were very fair. I highly recommend them you won't be sorry.",
      },
    ],
    reviewsLink: "Zobacz opinie w Google",
    faqHeading: "FAQ – najtańsze opony w West Palm Beach",
    faqs: [
      {
        question: "Gdzie znajdę najtańsze opony w pobliżu w West Palm Beach?",
        answer:
          "W Los Paisas Tires Shop, 1114 S Military Trl, West Palm Beach, FL 33415. Używane od $65, nowe Cosmo od $120. Montaż i wyważenie w cenie, bez ukrytych opłat.",
      },
      {
        question: "Ile kosztują używane opony?",
        answer: "Od $65 za oponę. Ostateczna cena zależy od rozmiaru i pozostałego bieżnika.",
      },
      { question: "Czy montaż i wyważenie są w cenie?", answer: "Tak, gdy kupujesz oponę u nas." },
      { question: "Czy jesteście otwarci w niedzielę?", answer: "Tak, 7 dni w tygodniu, 8:00 AM–7:00 PM." },
      { question: "Czy trzeba się umawiać?", answer: "Nie, wystarczy przyjechać. Naprawy tego samego dnia." },
      {
        question: "Czy używane opony mają gwarancję?",
        answer: "Nie. Nowe mają gwarancję 4 miesiące lub 4 000 mil.",
      },
      { question: "Czy geometria jest gratis?", answer: "Tak, przy zakupie 4 nowych opon." },
      {
        question: "Czy mogę przywieźć własne opony?",
        answer: "Tak. Przy montażu więcej niż 2 Twoich opon geometria jest $25 taniej.",
      },
      {
        question: "Czy mogę płacić w ratach?",
        answer:
          "Tak, przez Snap: formularz online, decyzja w ok. 15 minut. Przyjmujemy też karty, płatność telefonem i gotówkę.",
      },
      { question: "Czy wymieniacie olej albo hamulce?", answer: "Nie, zajmujemy się tylko oponami." },
    ],
    napHeading: "Dojazd",
    tireOnly: "Tylko opony – olej, hamulce i klimatyzacja to nie nasze usługi.",
    mapLabel: "Otwórz w Mapach Google",
    directionsLabel: "Wyznacz trasę",
    serviceUsed: "Używane opony",
    serviceNew: "Nowe opony (Cosmo)",
  },
};
