/* -- Product & Item Types -- */
export interface FlowerProduct {
  sku: string;
  name: string;
  slug: string;
  tier: string;
  type: "indica" | "sativa" | "hybrid";
  isHot: boolean;
  isSale: boolean;
  thc: string;
  price3g: PricePoint | null;
  price5g: PricePoint | null;
  price14g: PricePoint | null;
  price28g: PricePoint | null;
  image: string;
}
export interface PricePoint {
  regular: number;
  sale: number | null;
}
export interface ItemProduct {
  sku: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  thc: string;
  mg: string;
  price: string;
  image: string;
  promoImage: string | null;
}

/* ── Data imports (static fallback) ── */
import flowersJson from "./flowers.json";
import itemsJson from "./items.json";

export const allFlowers: FlowerProduct[] = flowersJson as FlowerProduct[];
export const allItems: ItemProduct[] = itemsJson as ItemProduct[];

/* ── Live stock fetch from Apps Script ── */
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || "";

interface LiveStockResponse {
  flowers: FlowerProduct[];
  items: ItemProduct[];
  storeCode?: string;
  stockDate?: string;
}

/**
 * Fetch live stock-filtered products from Apps Script endpoint.
 * Used at build time (getStaticProps / generateStaticParams).
 * Falls back to static JSON if endpoint not configured.
 */
export async function fetchLiveProducts(): Promise<{
  flowers: FlowerProduct[];
  items: ItemProduct[];
  isLive: boolean;
  stockDate: string | null;
}> {
  if (!APPS_SCRIPT_URL) {
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }

  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?store=MEB01`, {
      next: { revalidate: 300 }, // Cache for 5 min during build
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: LiveStockResponse = await res.json();
    return {
      flowers: data.flowers || allFlowers,
      items: data.items || allItems,
      isLive: true,
      stockDate: data.stockDate || null,
    };
  } catch (err) {
    console.warn("[products] Live fetch failed, using static data:", err);
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }
}

export const TIER_CONFIG: Record<
  string,
  {
    name: string; slug: string; color: string; icon: string; tagline: string; banner: string;
    unitPrice: number; /* $/g */
    deal3g: { label: string; total: string; price: number } | null; /* 3g bundle pricing */
    deal6g: { label: string; total: string; price: number } | null; /* 6g bundle pricing (top 3 only) */
  }
> = {
  EXOTIC: {
    name: "Exotic Weed",
    slug: "exotic-weed",
    color: "#f59e0b",
    icon: "\uD83D\uDD25",
    tagline: "Explore the current Exotic Weed flower menu",
    banner: "/banners/EXOTIC.webp",
    unitPrice: 20,
    deal3g: { label: "3g bundle", total: "3G", price: 40 },
    deal6g: { label: "6g bundle", total: "6G", price: 60 },
  },
  PREMIUM: {
    name: "Premium Weed",
    slug: "premium-weed",
    color: "#a78bfa",
    icon: "\uD83D\uDC8E",
    tagline: "Explore the current Premium Weed flower menu",
    banner: "/banners/PREMIUM.webp",
    unitPrice: 15,
    deal3g: { label: "3g bundle", total: "3G", price: 30 },
    deal6g: { label: "6g bundle", total: "6G", price: 45 },
  },
  "AAA+": {
    name: "AAA+ Weed",
    slug: "aaa-weed",
    color: "#22d3ee",
    icon: "\u26A1",
    tagline: "Explore the current AAA+ Weed flower menu",
    banner: "/banners/02_Mohawk_AAA_Plus.webp",
    unitPrice: 10,
    deal3g: { label: "3g bundle", total: "3G", price: 20 },
    deal6g: { label: "6g bundle", total: "6G", price: 30 },
  },
  AA: {
    name: "AA Weed",
    slug: "aa-weed",
    color: "#34d399",
    icon: "\u2726",
    tagline: "Explore the current AA Weed flower menu",
    banner: "/banners/01_Mohawk_AA.webp",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
  },
  BUDGET: {
    name: "Budget Weed",
    slug: "budget-weed",
    color: "#94a3b8",
    icon: "\uD83D\uDCB0",
    tagline: "Shreds & value OZs \u00B7 From $40/oz",
    banner: "/banners/05_Mohawk_Budget.webp",
    unitPrice: 3,
    deal3g: { label: "$10 / 3g Special", total: "3G", price: 10 },
    deal6g: null,
  },
};

/* Item category config */
export interface CategoryInfo {
  name: string; slug: string; color: string; icon: string; banner?: string;
  seoTitle: string; seoIntro: string; seoDescription: string;
  faqs: { q: string; a: string }[];
}

export const CATEGORY_CONFIG: Record<string, CategoryInfo> = {
  EDIBLES: {
    banner: "/banners/EDIBLES.webp",
    name: "Edibles", slug: "edibles", color: "#f97316", icon: "ED",
    seoTitle: "Cannabis Edibles Scarborough - Gummies, Chocolates & Drinks",
    seoIntro: "Browse the cannabis edibles category at Mohawk Medicine on Eglinton Ave E in Scarborough. Check the current page for listed gummies, chocolates, drinks, and other edible formats.",
    seoDescription: "Browse the Mohawk Medicine edibles category for listed gummies, chocolates, beverages, and baked goods before visiting 2655 Eglinton Ave E. Product mix and pricing can change.",
    faqs: [
      { q: "What cannabis edibles do you carry?", a: "The edibles category may include gummies, chocolates, beverages, capsules, and baked goods. Check the current page for listed products." },
      { q: "Where can I find item details?", a: "Check the current menu and product package for item-specific details." },
      { q: "Can I buy edibles at Mohawk Medicine?", a: "Visit 2655 Eglinton Ave E and check the current edibles page before visiting. The store lists Open 24 Hours." },
    ],
  },
  "VAPE PENS": {
    banner: "/banners/NIC%20VAPE.webp",
    name: "Nic Vape", slug: "vapes", color: "#8b5cf6", icon: "NV",
    seoTitle: "Nicotine Vape Menu Scarborough | Mohawk Medicine",
    seoIntro: "Browse nicotine vape devices, formats, and listed menu prices at Mohawk Medicine on Eglinton Avenue East.",
    seoDescription: "The nicotine vape menu at Mohawk Medicine keeps listed devices, formats, and prices together for Scarborough shoppers. THC vapes have a separate category. Visit 2655 Eglinton Ave E.",
    faqs: [
      { q: "Is this the nicotine vape menu?", a: "Yes. This category is the nicotine vape menu for Mohawk Medicine." },
      { q: "Where are THC vapes?", a: "THC vapes are listed in a separate THC vape category on the site." },
    ],
  },
  "VAPE DISPOSABLE": {
    banner: "/banners/22_Mohawk_THC_Vape.webp",
    name: "THC Vape", slug: "vape-disposables", color: "#a78bfa", icon: "V",
    seoTitle: "THC Vape Menu Scarborough | Mohawk Medicine",
    seoIntro: "Browse THC vape products and listed menu prices at Mohawk Medicine in Scarborough.",
    seoDescription: "The THC vape category at Mohawk Medicine keeps the listed cannabis vape products together for Scarborough shoppers. Nicotine vapes have a separate category. Visit 2655 Eglinton Ave E.",
    faqs: [
      { q: "Is this the THC vape menu?", a: "Yes. This category is the THC vape menu for Mohawk Medicine." },
      { q: "Where are nicotine vapes?", a: "Nicotine vapes are listed in a separate nicotine vape category on the site." },
    ],
  },
  CONCENTRATES: {
    banner: "/banners/07_Mohawk_Concentrate.webp",
    name: "Concentrates", slug: "concentrates", color: "#f59e0b", icon: "C",
    seoTitle: "Cannabis Concentrates Scarborough - Shatter, Wax, Hash & Live Resin",
    seoIntro: "Cannabis concentrate listings at Mohawk Medicine in Scarborough. Check the current page for shatter, wax, hash, live resin, diamonds, and related formats.",
    seoDescription: "Mohawk Medicine keeps a concentrates category for Scarborough shoppers checking hash, kief, shatter, wax, live resin, THC diamonds, and related formats. Product mix can rotate, so check the current page before visiting 2655 Eglinton Ave E.",
    faqs: [
      { q: "What types of concentrates do you carry?", a: "The concentrates page may list shatter, wax, budder, live resin, rosin, hash, kief, THC diamonds, and related formats." },
      { q: "How are concentrate formats listed?", a: "Check the current category and product package for format-specific details." },
    ],
  },
  PREROLLS: {
    banner: "/banners/21_Mohawk_Pre_Rolls.webp", name: "Pre-Rolls", slug: "prerolls", color: "#22c55e", icon: "PR",
    seoTitle: "Pre-Rolls Scarborough - Cannabis Joints",
    seoIntro: "Pre-roll listings at Mohawk Medicine in Scarborough. Check the current page for singles, multi-packs, infused pre-rolls, and related formats.",
    seoDescription: "Mohawk Medicine keeps a pre-roll category for Scarborough shoppers checking singles, multi-packs, infused pre-rolls, and related formats before visiting 2655 Eglinton Ave E. Product mix and pricing can change.",
    faqs: [
      { q: "What pre-rolls do you carry?", a: "The pre-roll page may list singles, 3-packs, multi-packs, and infused pre-rolls. Check the current page for listed products." },
      { q: "Do pre-roll listings change?", a: "Yes. Strain names, pack sizes, and prices can rotate." },
    ],
  },
  "ADD ONS": {
    banner: "/banners/03_Mohawk_Accessories.webp",
    name: "Accessories", slug: "add-ons", color: "#34d399", icon: "+",
    seoTitle: "Cannabis Accessories Scarborough - Grinders, Papers, Lighters & More",
    seoIntro: "Essential cannabis accessories at Mohawk Medicine, Mohawk. Grinders, rolling papers, lighters, trays, and more.",
    seoDescription: "Mohawk Medicine keeps an accessories category for Scarborough shoppers checking grinders, rolling papers, lighters, trays, storage containers, and related items. Product mix can change, so check the current page before visiting 2655 Eglinton Ave E.",
    faqs: [
      { q: "What accessories do you sell?", a: "The accessories page may list grinders, rolling papers, filter tips, lighters, rolling trays, storage jars, and related items." },
    ],
  },
  "MAGIC & OTHERS": {
    name: "Magic Stuff", slug: "magic", color: "#64748b", icon: "*",
    seoTitle: "Magic Stuff - Specialty Items",
    seoIntro: "Browse current menu for listed specialty products. Listings may vary by store.",
    seoDescription: "Current specialty items are listed when they are carried on the menu. Product listings may vary by store and by day. Check the live menu for current selection.",
    faqs: [
      { q: "What specialty items are listed?", a: "Selection varies by store and by day. Check the current menu for listed specialty products." },
      { q: "Do listings vary by location?", a: "Yes. Specialty item listings may vary by store, so please check the current menu for this location." },
    ],
  },
  CIGARETTES: {
    banner: "/banners/native-cigarette-offer-20260822.webp",
    name: "Cigarettes", slug: "cigarettes", color: "#78716c", icon: "CG",
    seoTitle: "Cigarette Menu Scarborough | Mohawk Medicine",
    seoIntro: "Browse cigarette brands, pack styles, and listed menu prices at Mohawk Medicine on Eglinton Avenue East.",
    seoDescription: "The cigarette menu at Mohawk Medicine shows the brands, styles, and prices listed for the Scarborough store at 2655 Eglinton Ave E. The store lists open 24 hours.",
    faqs: [
      { q: "Does Mohawk Medicine list cigarettes?", a: "Yes. This category shows the cigarette products and menu prices listed for the Scarborough store." },
      { q: "What cigarette brands are listed?", a: "The selection may include Canadian, Canadian Goose, Canadian Classics, Nexus, Time and other Native cigarette brands in full, light and menthol styles." },
      { q: "Where is the store?", a: "Mohawk Medicine is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2." },
    ],
  },
};

/* Helper functions */
export function getFlowersByTier(tier: string): FlowerProduct[] {
  return allFlowers.filter(
    (f) => f.tier.toUpperCase() === tier.toUpperCase()
  );
}

export function getFlowerBySlug(slug: string): FlowerProduct | undefined {
  return allFlowers.find((f) => f.slug === slug);
}

export function getItemsByCategory(category: string): ItemProduct[] {
  return allItems.filter(
    (i) => i.category.toUpperCase() === category.toUpperCase()
  );
}

export function getTierFromSlug(
  slug: string
): { key: string; config: (typeof TIER_CONFIG)[string] } | undefined {
  const entry = Object.entries(TIER_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getCategoryFromSlug(
  slug: string
): { key: string; config: (typeof CATEGORY_CONFIG)[string] } | undefined {
  const entry = Object.entries(CATEGORY_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getLowestPrice(flower: FlowerProduct): number | null {
  const prices = [flower.price3g, flower.price5g, flower.price14g, flower.price28g]
    .filter((p): p is PricePoint => p !== null)
    .map((p) => p.sale ?? p.regular);
  return prices.length ? Math.min(...prices) : null;
}

export function formatPrice(p: PricePoint | null): string {
  if (!p) return "—";
  if (p.sale !== null) return `$${p.sale}`;
  return `$${p.regular}`;
}
