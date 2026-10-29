import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { BUSINESS } from "@/lib/constants";
import { contactPath, locationPath, pick, serviceHref, servicesPath } from "@/lib/routes";

/* serviceHref indexes: 0 new, 1 used, 2 alignment, 3 balancing, 4 repair, 5 install, 6 mobile */
const linkCls =
  "font-semibold text-brand-gold underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold";

export default function HomeIntro({ locale }: { locale: Locale }) {
  const L = (i: number) => serviceHref(locale, i);

  return (
    <section
      id="about"
      aria-labelledby="intro-heading"
      className="section-pad relative border-b border-white/15"
    >
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <p className="section-label mb-3">{pick(locale, { es: "El taller", en: "The shop", pl: "Warsztat" })}</p>
          <h2
            id="intro-heading"
            className="headline text-4xl font-bold leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {pick(locale, {
              es: "Un taller solo de llantas en S Military Trl",
              en: "A tire-only shop on S Military Trl",
              pl: "Warsztat tylko od opon przy S Military Trl",
            })}
          </h2>
          <span className="accent-rule" aria-hidden />

          {locale === "es" ? (
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/80">
              <p>
                Los Paisas Tires Shop está en {BUSINESS.address}, sobre el corredor de Military Trail.
                Nos dedicamos solo a llantas: vender, montar, reparar y alinear. No hacemos cambios de
                aceite, frenos ni aire acondicionado, así que cuando entras sabes exactamente de qué
                vamos a hablar. El equipo atiende en español y en inglés.
              </p>
              <h3 className="headline pt-2 text-2xl text-white">Llantas usadas y nuevas</h3>
              <p>
                Muchos clientes llegan buscando{" "}
                <Link href={L(1)} className={linkCls}>llantas usadas en West Palm Beach</Link>{" "}
                porque necesitan resolver hoy sin gastar en un juego completo nuevo. Revisamos cada
                llanta usada antes de ofrecerla y te decimos con claridad qué tiene. Si tu caso pide algo
                nuevo, por ejemplo por el uso diario en carretera o porque prefieres un juego parejo,
                también trabajamos{" "}
                <Link href={L(0)} className={linkCls}>llantas nuevas para tu vehículo</Link>. Te
                explicamos las dos opciones y la decisión es tuya.
              </p>
              <h3 className="headline pt-2 text-2xl text-white">Reparación, balanceo y alineación</h3>
              <p>
                Si traes una ponchadura, primero miramos si la llanta se puede{" "}
                <Link href={L(4)} className={linkCls}>reparar o vulcanizar</Link> de forma segura antes
                de hablar de reemplazo. Hacemos{" "}
                <Link href={L(3)} className={linkCls}>balanceo</Link> con el trabajo acordado antes de
                empezar, sin cargos ocultos, y{" "}
                <Link href={L(2)} className={linkCls}>alineación</Link> cuando el carro se va hacia un
                lado o las llantas se gastan disparejas. ¿Ya compraste tus llantas en otro lugar?
                También las{" "}
                <Link href={L(5)} className={linkCls}>montamos e instalamos</Link>.
              </p>
              <h3 className="headline pt-2 text-2xl text-white">Abiertos los 7 días y servicio móvil</h3>
              <p>
                Abrimos de lunes a domingo, de 8 AM a 7 PM, también el domingo, cuando muchos talleres
                están cerrados. Si el carro no se puede mover, ofrecemos{" "}
                <Link href={L(6)} className={linkCls}>servicio móvil de llantas</Link> dentro de unas
                10 millas del taller, lo que cubre West Palm Beach y ciudades vecinas como Greenacres,
                Palm Springs y Lake Worth Beach. Llama antes al{" "}
                <a href={BUSINESS.phoneTel} className={linkCls}>{BUSINESS.phoneDisplay}</a> o escríbenos
                por WhatsApp y dinos la medida de la llanta (está en el costado) para tener todo listo.
              </p>
              <p>
                Mira todos los <Link href={servicesPath("es")} className={linkCls}>servicios</Link>,
                la <Link href={locationPath("es")} className={linkCls}>ubicación del taller</Link> o
                la página de <Link href={contactPath("es")} className={linkCls}>contacto</Link>.
              </p>
              {/* TODO(Sebastian): "Sobre nosotros" — año de apertura, dueño/equipo, formas de pago confirmadas. No inventar. */}
            </div>
          ) : locale === "pl" ? (
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/80">
              <p>
                Los Paisas Tires Shop mieści się pod adresem {BUSINESS.address}, przy Military Trail.
                Zajmujemy się wyłącznie oponami: sprzedajemy, montujemy, naprawiamy i ustawiamy
                geometrię. Nie wymieniamy oleju, nie robimy hamulców ani klimatyzacji, więc kiedy
                podjeżdżasz, wiesz dokładnie, o czym będziemy rozmawiać. Zespół mówi po hiszpańsku
                i po angielsku.
              </p>
              <h3 className="headline pt-2 text-2xl text-white">Używane i nowe opony</h3>
              <p>
                Wielu kierowców przyjeżdża do nas po{" "}
                <Link href={L(1)} className={linkCls}>używane opony w West Palm Beach</Link>, bo muszą
                wrócić na drogę jeszcze dziś, nie płacąc za cały nowy komplet. Każdą używaną oponę
                sprawdzamy, zanim ją zaproponujemy, i mówimy wprost, w jakim jest stanie. Gdy lepszym
                wyborem jest nowa opona, na przykład przy codziennych dojazdach autostradą albo gdy
                chcesz równy komplet, oferujemy też{" "}
                <Link href={L(0)} className={linkCls}>nowe opony dobrane do Twojego auta</Link>.
                Omawiamy obie opcje, a decyzja należy do Ciebie.
              </p>
              <h3 className="headline pt-2 text-2xl text-white">Naprawa, wyważanie i geometria</h3>
              <p>
                Przy złapanej gumie najpierw sprawdzamy, czy oponę da się bezpiecznie{" "}
                <Link href={L(4)} className={linkCls}>naprawić lub zwulkanizować</Link>, zanim w ogóle
                padnie słowo o wymianie. Robimy{" "}
                <Link href={L(3)} className={linkCls}>wyważanie kół</Link> z zakresem pracy ustalonym
                przed rozpoczęciem, bez ukrytych opłat, oraz{" "}
                <Link href={L(2)} className={linkCls}>ustawianie geometrii</Link>, gdy auto ściąga na
                bok albo opony zużywają się nierówno. Kupiłeś opony gdzie indziej? Też je{" "}
                <Link href={L(5)} className={linkCls}>zamontujemy</Link>.
              </p>
              <h3 className="headline pt-2 text-2xl text-white">Otwarte 7 dni w tygodniu i serwis mobilny</h3>
              <p>
                Jesteśmy otwarci od poniedziałku do niedzieli, 8 AM–7 PM, także w niedzielę, kiedy
                wiele warsztatów jest zamkniętych. Jeśli auto nie nadaje się do jazdy, oferujemy{" "}
                <Link href={L(6)} className={linkCls}>mobilny serwis opon</Link> w promieniu około
                10 mil od warsztatu, co obejmuje West Palm Beach i sąsiednie miasta, takie jak
                Greenacres, Palm Springs i Lake Worth Beach. Zadzwoń pod{" "}
                <a href={BUSINESS.phoneTel} className={linkCls}>{BUSINESS.phoneDisplay}</a> albo napisz
                najpierw na WhatsApp i podaj rozmiar opony z jej boku, żebyśmy mieli gotową właściwą
                oponę.
              </p>
              <p>
                Zobacz wszystkie <Link href={servicesPath("pl")} className={linkCls}>usługi</Link>,{" "}
                <Link href={locationPath("pl")} className={linkCls}>lokalizację warsztatu</Link> albo
                stronę <Link href={contactPath("pl")} className={linkCls}>kontaktu</Link>.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/80">
              <p>
                Los Paisas Tires Shop sits at {BUSINESS.address}, on the Military Trail corridor. We
                work on tires and nothing else: selling, mounting, repairing and aligning. No oil
                changes, no brakes, no A/C, so when you pull in you know exactly what the conversation
                is about. The team speaks English and Spanish.
              </p>
              <h3 className="headline pt-2 text-2xl text-white">Used tires and new tires</h3>
              <p>
                A lot of drivers come to us for{" "}
                <Link href={L(1)} className={linkCls}>used tires in West Palm Beach</Link> because they
                need to get back on the road today without paying for a full new set. Every used tire
                is checked before we offer it, and we tell you plainly what you are getting. When a new
                tire makes more sense, say for a daily highway commute or when you want a matched set,
                we also handle{" "}
                <Link href={L(0)} className={linkCls}>new tires matched to your vehicle</Link>. We walk
                you through both options and you make the call.
              </p>
              <h3 className="headline pt-2 text-2xl text-white">Repair, balancing and alignment</h3>
              <p>
                With a flat, we first check whether the tire can be safely{" "}
                <Link href={L(4)} className={linkCls}>repaired or vulcanized</Link> before anyone talks
                about replacing it. We do{" "}
                <Link href={L(3)} className={linkCls}>tire balancing</Link> with the work agreed before
                we start, no hidden fees, and{" "}
                <Link href={L(2)} className={linkCls}>wheel alignment</Link> when the car pulls to one
                side or the tires wear unevenly. Bought your tires somewhere else? We{" "}
                <Link href={L(5)} className={linkCls}>mount and install customer tires</Link> too.
              </p>
              <h3 className="headline pt-2 text-2xl text-white">Open 7 days, plus mobile service</h3>
              <p>
                We are open Monday through Sunday, 8 AM to 7 PM, Sunday included, when a lot of shops
                are closed. If the car can&apos;t be driven, we offer{" "}
                <Link href={L(6)} className={linkCls}>mobile tire service</Link> within about 10 miles
                of the shop, which covers West Palm Beach and neighbors like Greenacres, Palm Springs
                and Lake Worth Beach. Call{" "}
                <a href={BUSINESS.phoneTel} className={linkCls}>{BUSINESS.phoneDisplay}</a> or send a
                WhatsApp first, and tell us the tire size printed on the sidewall so we can have the
                right tire ready.
              </p>
              <p>
                See all <Link href={servicesPath("en")} className={linkCls}>services</Link>, the{" "}
                <Link href={locationPath("en")} className={linkCls}>shop location</Link>, or the{" "}
                <Link href={contactPath("en")} className={linkCls}>contact page</Link>.
              </p>
              {/* TODO(Sebastian): "About us" — year opened, owner/team, confirmed payment methods. Do not invent. */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
