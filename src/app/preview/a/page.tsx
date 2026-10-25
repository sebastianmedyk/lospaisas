import HomeVariant from "@/components/HomeVariant";
import HeroSplit from "@/components/HeroSplit";

/** Variant A: type-led split hero, numbered service list, one big review. */
export default function PreviewA() {
  return <HomeVariant hero={<HeroSplit />} services="list" reviews="featured" />;
}
