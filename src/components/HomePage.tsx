import Header from "@/components/Header";
import HeroSplit from "@/components/HeroSplit";
import Services from "@/components/Services";
import HomeIntro from "@/components/HomeIntro";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InfoStrip from "@/components/InfoStrip";
import MobileBar from "@/components/MobileBar";
import { HTML_LANG, type Locale } from "@/lib/routes";

/** Homepage for every locale: split hero, numbered service list, one featured review (former design variant A). */
export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Header />
      <main id="main-content" lang={HTML_LANG[locale]}>
        <HeroSplit />
        <InfoStrip />
        <Services layout="list" />
        <Reviews locale={locale} layout="featured" />
        <HomeIntro locale={locale} />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
