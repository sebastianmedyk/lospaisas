import HomeVariant from "@/components/HomeVariant";
import HeroDuo from "@/components/HeroDuo";

/** Variant C: New vs Used as the hero, text index of services, staggered reviews. */
export default function PreviewC() {
  return <HomeVariant hero={<HeroDuo />} services="index" reviews="columns" />;
}
