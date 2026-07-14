/* Local information pages for Mohawk Medicine / Scarborough */

export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "scarborough-weed-dispensary",
    title: "Scarborough Weed Dispensary | Mohawk Medicine | Eglinton Ave E",
    metaDescription:
      "Mohawk Medicine is a 24-hour Scarborough weed dispensary at 2655 Eglinton Ave E with flower tiers, edibles, vapes, concentrates, cigarettes, accessories, and local store details.",
    h1: "Scarborough Weed Dispensary",
    icon: "MM",
    heroTagline: "Mohawk Medicine on Eglinton Ave E in Scarborough.",
    banner: "/banners/23_Mohawk_Welcome_Banner.webp",
    sections: [
      {
        heading: "Mohawk Medicine On Eglinton Ave E",
        body:
          "Mohawk Medicine is located at 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Shoppers can review flower tiers, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, and local visit details before visiting.",
      },
      {
        heading: "Scarborough Menu Categories",
        body:
          "Flower shoppers can start with Exotic, Premium, AAA+, AA, or Budget. Format-first shoppers can jump to edibles, pre-rolls, vapes, concentrates, cigarettes, accessories, or specialty categories without sorting through every flower page.",
      },
      {
        heading: "Open 24 Hours",
        body:
          "Mohawk Medicine lists Open 24 Hours for adult shoppers. Bring valid 19+ government ID, check the current category page before visiting, and use the contact or FAQ pages for store basics.",
      },
      {
        heading: "Eglinton East And Kennedy Area",
        body:
          "The store identity is tied to Eglinton Ave E in Scarborough, with nearby-area language focused on Eglinton East, Kennedy Road, Brimley Road, Golden Mile, Birchmount, Warden, and surrounding Toronto routes.",
      },
    ],
    faqs: [
      {
        q: "Where is Mohawk Medicine located?",
        a: "Mohawk Medicine is located at 2655 Eglinton Ave E, Toronto, ON M1K 2S2.",
      },
      {
        q: "What are the hours for Mohawk Medicine?",
        a: "The store lists Open 24 Hours. Bring valid 19+ government ID when visiting.",
      },
      {
        q: "What product categories are shown on the site?",
        a: "The site includes flower tiers, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, and specialty categories.",
      },
    ],
  },

  {
    slug: "cheap-weed-scarborough",
    title: "Cheap Weed Scarborough | Mohawk Medicine Budget Flower",
    metaDescription:
      "Looking for cheap weed in Scarborough? Mohawk Medicine has Budget, AA, AAA+, Premium, and Exotic flower paths at 2655 Eglinton Ave E. Open 24 Hours.",
    h1: "Cheap Weed Scarborough",
    icon: "$",
    heroTagline: "Budget flower paths and clear tier shopping on Eglinton Ave E.",
    banner: "/banners/05_Mohawk_Budget.webp",
    sections: [
      {
        heading: "Budget Starts With The Tier Page",
        body:
          "Mohawk Medicine keeps value shopping organized through the Budget, AA, AAA+, Premium, and Exotic flower pages. Start with the tier that matches the visit, then check current listings and prices before heading to Eglinton Ave E.",
      },
      {
        heading: "Bundle Pricing Where Listed",
        body:
          "Some flower tiers show 3g or 6g bundle pricing, and the tier page carries the current total. Use the page price shown at the time of browsing rather than relying on old screenshots or older copy.",
      },
      {
        heading: "Current Listings Matter",
        body:
          "Brands, strains, and value options can rotate. The budget page is useful as a starting point, while product detail pages and staff can confirm current product details.",
      },
    ],
    faqs: [
      {
        q: "What is the lowest-priced flower tier listed?",
        a: "The Budget tier is the lowest-priced flower path shown on the site. Check the Budget page for current listings and prices.",
      },
      {
        q: "Does Mohawk Medicine show bundle pricing?",
        a: "Yes, where bundle pricing is available, the matching tier page shows the current bundle label, total amount, and price.",
      },
      {
        q: "Where should I start for value flower?",
        a: "Start with Budget or AA, then compare the current product cards on those pages.",
      },
    ],
  },

  {
    slug: "native-cigarettes-scarborough",
    title: "Native Cigarettes Scarborough | Mohawk Medicine",
    metaDescription:
      "Mohawk Medicine lists cigarette options at 2655 Eglinton Ave E in Scarborough. Check the current cigarette category for brands, prices, and availability before visiting.",
    h1: "Native Cigarettes Scarborough",
    icon: "CG",
    heroTagline: "Cigarette category details for Mohawk Medicine shoppers.",
    banner: "/banners/24_Mohawk_Edibles_Concentrates_More.webp",
    sections: [
      {
        heading: "Cigarette Category At Mohawk Medicine",
        body:
          "Mohawk Medicine has a cigarette category for shoppers checking listed brands, pack options, and prices before visiting 2655 Eglinton Ave E.",
      },
      {
        heading: "Check The Current Brand Mix",
        body:
          "Brand mix, flavours, carton options, and prices can rotate. Use the cigarette category as the current public reference, then confirm details with staff when needed.",
      },
      {
        heading: "One Store, Separate Categories",
        body:
          "Cigarettes sit beside the cannabis categories, but shoppers should still use the matching page for the product type they need: flower, edibles, vapes, concentrates, accessories, or cigarettes.",
      },
    ],
    faqs: [
      {
        q: "Does Mohawk Medicine list cigarettes?",
        a: "Yes. The site includes a cigarette category with listed brands and prices where available.",
      },
      {
        q: "Do cigarette brands and prices change?",
        a: "Yes. Brand mix, flavours, carton options, and prices can rotate, so check the current cigarette category before visiting.",
      },
      {
        q: "Where is the store?",
        a: "Mohawk Medicine is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2.",
      },
    ],
  },

  {
    slug: "weed-store-near-eglinton-east",
    title: "Weed Store Near Eglinton East | Mohawk Medicine",
    metaDescription:
      "Mohawk Medicine is a 24-hour weed store on Eglinton Ave E in Scarborough with flower, edibles, vapes, concentrates, cigarettes, accessories, and local store details.",
    h1: "Weed Store Near Eglinton East",
    icon: "EG",
    heroTagline: "A Scarborough cannabis stop tied to Eglinton Ave E.",
    banner: "/banners/23_Mohawk_Welcome_Banner.webp",
    sections: [
      {
        heading: "Eglinton Ave E Store Details",
        body:
          "Mohawk Medicine is located at 2655 Eglinton Ave E in Toronto's Scarborough area. The site keeps store details and menu categories close together so shoppers can plan the visit without relying on stale city pages.",
      },
      {
        heading: "Start With A Category",
        body:
          "Use the category that matches the visit: flower tier, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, or specialty items.",
      },
      {
        heading: "Built For Nearby Scarborough Shoppers",
        body:
          "This page keeps the local focus around Eglinton East, Kennedy Road, Brimley Road, Golden Mile, Birchmount, Warden, and nearby Scarborough routes.",
      },
    ],
    faqs: [
      {
        q: "Is Mohawk Medicine near Eglinton East?",
        a: "The store is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, in the Scarborough area.",
      },
      {
        q: "What should I check before visiting?",
        a: "Check the current category page for product names, pricing, and availability details before visiting.",
      },
      {
        q: "Do older local info routes still work?",
        a: "Older local info routes now point to the Eglinton East local page so the public copy stays focused on Mohawk Medicine's actual area.",
      },
    ],
  },

  {
    slug: "dispensary-near-me-scarborough",
    title: "Cannabis Dispensary Near Me Scarborough | Mohawk Medicine",
    metaDescription:
      "Find Mohawk Medicine at 2655 Eglinton Ave E in Scarborough. Open 24 Hours with flower tiers, edibles, vapes, concentrates, cigarettes, accessories, and local store details.",
    h1: "Cannabis Dispensary Near Me In Scarborough",
    icon: "NEAR",
    heroTagline: "A 24-hour Eglinton Ave E dispensary path for nearby Toronto shoppers.",
    banner: "/banners/23_Mohawk_Welcome_Banner.webp",
    sections: [
      {
        heading: "Find The Eglinton Ave E Shop",
        body:
          "Mohawk Medicine is located at 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Nearby shoppers can use the menu to pick a flower tier or format category before visiting.",
      },
      {
        heading: "Categories For Repeat Visits",
        body:
          "The site is organized for fast scanning: Exotic, Premium, AAA+, AA, Budget, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, and specialty categories.",
      },
      {
        heading: "Local Resource Pages",
        body:
          "The Resource hub adds guides for Eglinton Ave E visits, Scarborough menu planning, flower tiers, value shopping, pre-rolls, and native smokes.",
      },
    ],
    faqs: [
      {
        q: "What is the address?",
        a: "2655 Eglinton Ave E, Toronto, ON M1K 2S2.",
      },
      {
        q: "Is Mohawk Medicine walk-in friendly?",
        a: "The site presents Mohawk Medicine as a 24-hour Scarborough dispensary. Bring valid 19+ ID and check the current menu before visiting.",
      },
      {
        q: "Where are the Resource pages?",
        a: "Use /resources for Mohawk Medicine guides covering visits, flower tiers, value shopping, pre-rolls, cigarettes, and menu planning.",
      },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

const LEGACY_SEO_REDIRECTS: Record<string, string> = {
  "york-weed-dispensary": "scarborough-weed-dispensary",
  "cheap-weed-york": "cheap-weed-scarborough",
  "native-cigarettes-york": "native-cigarettes-scarborough",
  "weed-store-near-mississauga": "weed-store-near-eglinton-east",
  "dispensary-near-me-york": "dispensary-near-me-scarborough",
};

export function getLegacySeoRedirect(slug: string): string | undefined {
  return LEGACY_SEO_REDIRECTS[slug];
}
