import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HomeIntro from "@/components/HomeIntro";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InfoStrip from "@/components/InfoStrip";
import MobileBar from "@/components/MobileBar";
import type { Locale } from "@/lib/i18n";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Header />
      <main id="main-content" lang={locale}>
        <Hero />
        <InfoStrip />
        <Services />
        <Reviews locale={locale} />
        <HomeIntro locale={locale} />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
