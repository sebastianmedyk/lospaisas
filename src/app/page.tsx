import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
