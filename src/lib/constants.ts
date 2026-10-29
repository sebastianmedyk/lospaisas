export const BUSINESS = {
  name: "Los Paisas Tires Shop",
  /** Exact street form shown in the GBP / Google Maps address field (checked 2026-10-14) */
  streetAddress: "1114 S Military Trl",
  addressLocality: "West Palm Beach",
  addressRegion: "FL",
  postalCode: "33415",
  addressCountry: "US",
  address: "1114 S Military Trl, West Palm Beach, FL 33415",
  phoneDisplay: "(561) 429-4041",
  phoneTel: "tel:+15614294041",
  phoneE164: "+15614294041",
  sms: "sms:+15614294041",
  whatsapp: "https://wa.me/15614294041",
  instagram: "https://www.instagram.com/tireshop_lospaisas",
  instagramHandle: "@tireshop_lospaisas",
  facebook: "https://www.facebook.com/LosPaisasWPB",
  tiktok: "https://www.tiktok.com/@paisastireswpb",
  /** Short Maps link + place URL (GBP) */
  mapsUrl: "https://maps.app.goo.gl/cSra4sX7rxDgGtMV9",
  mapsPlaceUrl:
    "https://www.google.com/maps/place/Los+Paisas+Tires+Shop/@26.6607391,-80.1121155,17z/data=!3m1!4b1!4m6!3m5!1s0x88d929e3db9abe3d:0x48ba9589c50abcd3!8m2!3d26.6607391!4d-80.1121155!16s%2Fg%2F11s1wsxt08",
  mapsCidUrl: "https://www.google.com/maps?cid=5240665535347866835",
  /** Google place ID (verified 2026-10-14 from the Maps listing, CID 5240665535347866835) */
  placeId: "ChIJPb6a2-Mp2YgR07wKxYmVukg",
  /** Opens the Google "write a review" dialog for this listing */
  reviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJPb6a2-Mp2YgR07wKxYmVukg",
  /** Google reviews list for this listing */
  reviewsListUrl:
    "https://search.google.com/local/reviews?placeid=ChIJPb6a2-Mp2YgR07wKxYmVukg",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1114+S+Military+Trl,+West+Palm+Beach,+FL+33415",
  /** Embed of the business listing itself (name + place), not a bare address */
  mapsEmbed:
    "https://www.google.com/maps?q=Los+Paisas+Tires+Shop,+1114+S+Military+Trl,+West+Palm+Beach,+FL+33415&cid=5240665535347866835&z=16&output=embed",
  appleMaps:
    "https://maps.apple.com/?address=1114+S+Military+Trl,+West+Palm+Beach,+FL+33415",
  catalogue: "https://catalogo-tireshoplospaisas.netlify.app/",
  /** GBP still lists Carrd; official site is this Next app */
  gbpListedWebsite: "https://tireshoplospaisas.carrd.co/",
  hours: "8:00 AM – 7:00 PM",
  hoursShort: "8 AM – 7 PM",
  /** Verified GBP / Google Maps pin */
  geo: {
    latitude: 26.6607391,
    longitude: -80.1121155,
  },
  /** As shown on Google Maps 2026-10-14; update by hand, never in schema */
  ratingValue: "4.4",
  reviewCount: "282",
} as const;

/** Real shop photos, used first in the TireShop schema `image`. */
export const SHOP_PHOTOS: string[] = [
  "/photos/tire-shop-west-palm-beach-los-paisas-storefront-01.webp",
  "/photos/new-used-tires-sign-west-palm-beach-los-paisas-02.webp",
  "/photos/tire-shop-near-me-west-palm-beach-los-paisas-exterior-03.webp",
  "/photos/wheel-balancing-west-palm-beach-los-paisas-08.webp",
  "/photos/flat-tire-repair-west-palm-beach-los-paisas-10.webp",
  "/photos/tire-installation-west-palm-beach-los-paisas-14.webp",
  "/photos/mobile-tire-service-truck-west-palm-beach-los-paisas-06.webp",
];

/** Starting price shown in the homepage hero. Replace the placeholder here (e.g. "49"), nowhere else. */
export const USED_TIRE_PRICE_FROM = "65"; // np. "49"; puste = placeholder

export const LOGO_PATH = "/brand/logo.png";

