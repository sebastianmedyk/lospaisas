import Header from "@/components/Header";
import HeroSplit from "@/components/HeroSplit";
import Services from "@/components/Services";
import HomeIntro from "@/components/HomeIntro";
import Channels from "@/components/Channels";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InfoStrip from "@/components/InfoStrip";
import MobileBar from "@/components/MobileBar";
import Faq from "@/components/Faq";
import KeyFacts from "@/components/KeyFacts";
import JsonLd from "@/components/JsonLd";
import { getDictionary } from "@/lib/i18n";
import {
  faqPageJsonLd,
  flatTireSundayHowToJsonLd,
} from "@/lib/seo";
import { HTML_LANG, type Locale } from "@/lib/routes";

/** Homepage for every locale: split hero, numbered service list, FAQ + KeyFacts for AI citation. */
export default function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <JsonLd data={faqPageJsonLd(t.faq.items)} />
      {locale === "en" ? <JsonLd data={flatTireSundayHowToJsonLd()} /> : null}
      <Header />
      <main id="main-content" lang={HTML_LANG[locale]}>
        <HeroSplit />
        <InfoStrip />
        <Services layout="list" />
        <Channels locale={locale} />
        <Reviews locale={locale} layout="featured" />
        <KeyFacts />
        <HomeIntro locale={locale} />
        <Faq />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
