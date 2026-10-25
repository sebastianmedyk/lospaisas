import HomeVariant from "@/components/HomeVariant";
import Hero from "@/components/Hero";

/** Variant B: full-bleed photo hero, bento service mosaic, swipeable reviews. */
export default function PreviewB() {
  return <HomeVariant hero={<Hero />} services="bento" reviews="scroll" />;
}
