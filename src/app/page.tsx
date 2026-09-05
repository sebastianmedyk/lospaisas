import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Location from "@/components/Location";
import KeyFacts from "@/components/KeyFacts";
import SeoArea from "@/components/SeoArea";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import JsonLd from "@/components/JsonLd";
import {
  flatTireSundayHowToJsonLd,
  serviceJsonLdList,
} from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={flatTireSundayHowToJsonLd()} />
      {serviceJsonLdList().map((schema) => (
        <JsonLd key={String(schema.name)} data={schema} />
      ))}
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Location />
        <KeyFacts />
        <SeoArea />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
