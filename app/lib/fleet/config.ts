import type { Nap, ResolvedBanner, ResolvedPage } from "./types.ts";
import { FULL_NAME_NAP } from "../fullNameNap.ts";
import { STORE_NAP } from "../nap.ts";

/**
 * The only store-specific fleet file. Other stores replace this module
 * and leave the rest of app/lib/fleet and app/components/fleet as-is.
 */
export const FLEET_STORE_CODE = "MEB01";
export const FLEET_STORE_NAME = "Mohawk Medicine";
export const FLEET_AREA = "Scarborough";
export const FLEET_DOMAIN = "mohawkmedicine.com";
export const FLEET_DOMAINS = ["mohawkmedicine.com", "www.mohawkmedicine.com"] as const;
export const FLEET_ORIGIN = "https://mohawkmedicine.com";

/** Public blob origin. Objects live at /{storeCode}/manifest.json and /{storeCode}/articles/. */
export const FLEET_BLOB_ORIGIN = "https://dhaah0upvlpukv56.public.blob.vercel-storage.com";

export const FLEET_COLORS = {
  banner: "#111827",
  bannerText: "#ffffff",
} as const;

/** Digits or formatted numbers. An article containing any of these is dropped. */
export const FLEET_BLOCKED_PHONES: readonly string[] = [];

export const FLEET_ARTICLES_PATH = "/articles";

/** Page and spot names for the six TV2 category cards. Spot is the card name. */
export const TV2_PAGE = "TV2";
export const TV2_CARDS = [
  "PREROLLS_ADDONS",
  "VAPES",
  "EDIBLES",
  "CONCENTRATES",
  "CIGARETTES",
  "MAGIC",
] as const;

export const TV_PAGE = "TV";
export const TV_FULLSCREEN_SPOTS = [
  "Fullscreen promo 1",
  "Fullscreen promo 2",
  "Fullscreen promo 3",
] as const;

/** Fort York Cannabis takeover defaults: 5s on screen, once a minute, 5s first preview, 650ms slide. */
export const TV_PROMO_SHOW_SECONDS = 5;
export const TV_PROMO_EVERY_MINUTES = 1;
export const TV_PROMO_INITIAL_DELAY_MS = 5_000;
export const TV_PROMO_SLIDE_MS = 650;

export function defaultManifestUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/manifest.json`;
}

export function articlesIndexUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/index.json`;
}

export function articleBodyUrl(slug: string, storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/${encodeURIComponent(slug)}.json`;
}

export const CODED_NAP: Nap = {
  name: FLEET_STORE_NAME,
  street: STORE_NAP.streetAddress,
  city: STORE_NAP.city,
  province: STORE_NAP.addressRegion,
  postalCode: STORE_NAP.postalCode,
  cityLine: `${STORE_NAP.addressLocality}, ${STORE_NAP.addressRegion} ${STORE_NAP.postalCode}`,
  area: STORE_NAP.borough,
  intersection: FULL_NAME_NAP.intersection,
  areaLine: STORE_NAP.neighborhoodLabel,
  phoneDisplay: STORE_NAP.phoneDisplay,
  phoneTel: STORE_NAP.phoneIntl,
  hours: STORE_NAP.hours,
  mapsSearchUrl: STORE_NAP.hasMap,
  mapsEmbedUrl: STORE_NAP.mapEmbedUrl,
  lat: String(STORE_NAP.latitude),
  lng: String(STORE_NAP.longitude),
  schemaName: FULL_NAME_NAP.fullName,
  website: STORE_NAP.website,
};

export const CODED_BANNERS: ResolvedBanner[] = [
  {
    id: "weed",
    page: "Home",
    spot: "Top banner",
    href: "/exotic-weed",
    categoryName: "Exotic Weed",
    hidden: false,
    render: "image",
    image: "/banners/core-top-weed-tier.webp",
    codedImage: "/banners/core-top-weed-tier.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — Exotic, Premium and AAA+ top weed tiers`,
    title: `${FLEET_STORE_NAME} top weed tiers — Exotic, Premium and AAA+`,
    textBar: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
    caption: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
  },
  {
    id: "vapes",
    page: "Home",
    spot: "Promo banner 2",
    href: "/items/vapes",
    categoryName: "Nicotine Vapes",
    hidden: false,
    render: "image",
    image: "/banners/core-vapes-nicotine-thc.webp",
    codedImage: "/banners/core-vapes-nicotine-thc.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — nicotine and THC vapes`,
    title: `${FLEET_STORE_NAME} nicotine and THC vapes`,
    textBar: "Nicotine + THC vapes",
    caption: "Nicotine + THC vapes",
  },
  {
    id: "cigarettes",
    page: "Home",
    spot: "Promo banner 3",
    href: "/items/cigarettes",
    categoryName: "Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/native-cigarette-offer-20260822.webp",
    codedImage: "/banners/native-cigarette-offer-20260822.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — 2 packs for $5 mix and match and $25 carton cigarette offer`,
    title: `${FLEET_STORE_NAME} cigarette offer — 2 packs $5 mix and match, $25 carton`,
    textBar: "2 PACKS $5 / $25 CARTON",
    caption: "2 PACKS $5 / $25 CARTON",
  },
  {
    id: "premium-cigarettes",
    page: "Home",
    spot: "Promo banner 4",
    href: "/items/cigarettes",
    categoryName: "Premium Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-premium-bb-marlboro-belmont.webp",
    codedImage: "/banners/core-premium-bb-marlboro-belmont.webp",
    alt: `${FLEET_STORE_NAME} in ${FLEET_AREA} — BB Full Flavor and Lights, Marlboro and Belmont premium cigarettes`,
    title: `${FLEET_STORE_NAME} premium cigarettes — BB, Marlboro and Belmont`,
    textBar: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
    caption: "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack",
  },
];

export const CODED_PAGES: Record<string, ResolvedPage> = {
  Home: {
    description: "Mohawk Medicine is a 24-hour cannabis dispensary on Eglinton Ave E in Scarborough with menu categories, local store details, walk-in shopping info, and adult 19+ details. Open 24/7.",
    metaTitle: "",
    metaDescription: "Mohawk Medicine is a 24-hour cannabis dispensary on Eglinton Ave E in Scarborough with menu categories, local store details, walk-in shopping info, and adult 19+ details. Open 24/7.",
  },
  Contact: {
    description: "Visit Mohawk Craft Dispensary (Mohawk Medicine) at 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Call +1 (437) 524-9335. Open 24 Hours a day, 7 days a week. Walk-ins welcome.",
    metaTitle: "Contact Us - Mohawk Medicine | 2655 Eglinton Ave E, Toronto",
    metaDescription: "Visit Mohawk Craft Dispensary (Mohawk Medicine) at 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Call +1 (437) 524-9335. Open 24 Hours a day, 7 days a week. Walk-ins welcome.",
  },
};
