import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoStrip from "@/components/InfoStrip";
import Services from "@/components/Services";
import Reviews, { type ReviewsLayout } from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import MobileBar from "@/components/MobileBar";
import type { ServiceLayout } from "@/components/ServiceCards";
import type { ReactNode } from "react";

/** Home page skeleton for the /preview/* design variants (EN only). Hero, service layout and review layout differ per variant. */
export default function HomeVariant({
  hero,
  services,
  reviews,
}: {
  hero: ReactNode;
  services: ServiceLayout;
  reviews: ReviewsLayout;
}) {
  return (
    <>
      <Header />
      <main id="main-content" lang="en">
        {hero}
        <InfoStrip />
        <Services layout={services} />
        <Reviews locale="en" layout={reviews} />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
