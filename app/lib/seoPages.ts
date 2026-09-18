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
        heading: "Mohawk Medicine's Scarborough Store Page",
        body:
          "Use this page for Scarborough store information for Mohawk Medicine at 2655 Eglinton Ave E. Use the Toronto store page for broader visit information, the Eglinton East page for that local context, and the current category pages to compare menu sections before visiting.",
      },
      {
        heading: "How To Find The Scarborough Shop",
        body:
          "The storefront is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, in Scarborough near Brimley Rd. Use that exact address when you map the trip. Call +1 (437) 524-9335 if you want to confirm the stop before you head out. The listed store name is Mohawk Craft Dispensary; this website uses Mohawk Medicine as the site brand for the same shop.",
      },
      {
        heading: "Walk In On Eglinton Ave E",
        body:
          "No appointment is needed. Adults 19+ with valid government photo ID can walk in at any hour. Check the current category page before visiting so you know which flower tier or format you want to compare in store.",
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
        q: "Where can I find Mohawk Medicine's Scarborough store information?",
        a: "Use this page for Mohawk Medicine store information connected to 2655 Eglinton Ave E in Scarborough.",
      },
      {
        q: "What product categories are shown on the site?",
        a: "The site includes flower tiers, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, and specialty categories.",
      },
      {
        q: "What phone number should I use for the Scarborough shop?",
        a: "Call +1 (437) 524-9335. The website homepage is https://mohawkmedicine.com/.",
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
      {
        heading: "Value Shopping On Eglinton Ave E",
        body:
          "The Budget, AA, and other flower pages are for the same 24-hour shop at 2655 Eglinton Ave E in Scarborough. Call +1 (437) 524-9335 if you want to confirm the stop before visiting.",
      },
    ],
    faqs: [
      {
        q: "What is the lowest-priced flower tier listed?",
        a: "The Budget tier is a value-focused flower path on the site. Check the Budget page for current listings and prices.",
      },
      {
        q: "Does Mohawk Medicine show bundle pricing?",
        a: "Yes, where bundle pricing is listed, the matching tier page shows the current bundle label, total amount, and price.",
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
      "Mohawk Medicine lists cigarette options at 2655 Eglinton Ave E in Scarborough. Check the current cigarette category for brands, prices, and listings before visiting.",
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
          "Brand mix, flavours, carton options, and prices can rotate. Use the cigarette category to see what is listed, then confirm exact details with staff when needed.",
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
        a: "Yes. The site includes a cigarette category with listed brands and prices where listed.",
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
    slug: "nicotine-vapes-scarborough",
    title: "Nicotine Vapes Scarborough | Mohawk Medicine",
    metaDescription:
      "Browse nicotine vape devices, flavours, formats, and listed menu prices at Mohawk Medicine, 2655 Eglinton Ave E in Scarborough. Open 24 hours.",
    h1: "Nicotine Vapes Scarborough",
    icon: "NV",
    heroTagline: "Nicotine vapes on Eglinton Avenue East.",
    sections: [
      {
        heading: "Nicotine Vape Menu",
        body: "Browse nicotine vape devices, formats, and listed prices at Mohawk Medicine.",
      },
      {
        heading: "Separate From THC Vapes",
        body: "Nicotine vapes and THC vapes have separate menu categories, making each lineup easier to browse.",
      },
      {
        heading: "Open 24 Hours",
        body: "Mohawk Medicine is at 2655 Eglinton Ave E in Scarborough and lists open 24 hours.",
      },
    ],
    faqs: [
      {
        q: "Does Mohawk Medicine list nicotine vapes?",
        a: "Yes. Use the nicotine vape menu for the devices and prices listed.",
      },
      {
        q: "Where are THC vapes?",
        a: "THC vapes have a separate menu category on the site.",
      },
      {
        q: "Where is Mohawk Medicine?",
        a: "The store is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2.",
      },
    ],
  },

  {
    slug: "weed-store-near-eglinton-east",
    title: "Weed Store Near Eglinton East | Brimley Rd | Mohawk Medicine",
    metaDescription:
      "Mohawk Medicine is a 24-hour weed store on Eglinton Ave E in Scarborough, near Brimley Rd, with flower tiers, edibles, vapes, concentrates, cigarettes, and walk-in details.",
    h1: "Weed Store Near Eglinton East and Brimley",
    icon: "EG",
    heroTagline: "A Scarborough cannabis stop on Eglinton Ave E, near Brimley Rd.",
    banner: "/banners/23_Mohawk_Welcome_Banner.webp",
    sections: [
      {
        heading: "Eglinton Ave E Store Details",
        body:
          "Mohawk Medicine is the 24-hour walk-in shop at 2655 Eglinton Ave E in Scarborough. The useful landmark for this corridor is Brimley Rd. Use that exact address when you map the trip rather than a generic Toronto pin. The listed store name is Mohawk Craft Dispensary. This website uses Mohawk Medicine as the site brand for the same storefront.",
      },
      {
        heading: "Arrive Along Eglinton East Toward Brimley",
        body:
          "If you are moving along Eglinton Avenue East toward Brimley Road, this is the Scarborough door to use: 2655 Eglinton Ave E, Toronto, ON M1K 2S2. The shop sits in a retail plaza on that stretch. Call +1 (437) 524-9335 if you want to confirm the stop before a special trip. The store lists Open 24 Hours / 7 Days a Week.",
      },
      {
        heading: "Start With A Category",
        body:
          "Use the category that matches the visit: Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, Budget Weed, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, or specialty items. Flower collections keep their live *-weed URLs.",
      },
      {
        heading: "Walk-In Facts For This Corridor",
        body:
          "No appointment is needed. Adults 19+ with valid government photo ID can walk in at any hour. Keep this page for Eglinton East / Brimley corridor context. Use the 24-hour walk-in guide for open-now arrival, the near-me FAQ for Scarborough pin questions, and the Mohawk Craft visit FAQ for listed-name questions.",
      },
    ],
    faqs: [
      {
        q: "Is Mohawk Medicine on Eglinton East near Brimley?",
        a: "Yes. The walk-in shop is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, in Scarborough near Brimley Rd.",
      },
      {
        q: "What landmark should I use for this Eglinton East dispensary?",
        a: "Use Brimley Rd with 2655 Eglinton Ave E. That is the corridor landmark for this storefront.",
      },
      {
        q: "What should I check before visiting the Eglinton East shop?",
        a: "Check the current category page for listed product names, prices, and package details. Bring valid 19+ government photo ID.",
      },
      {
        q: "What is the phone number for the Eglinton East shop?",
        a: "Call +1 (437) 524-9335. The website homepage is https://mohawkmedicine.com/.",
      },
      {
        q: "Which page should I use for a late-night walk-in on Eglinton East?",
        a: "Use the 24-hour Scarborough walk-in guide for open-now arrival. This page stays the Eglinton East / Brimley corridor page.",
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
};

export function getLegacySeoRedirect(slug: string): string | undefined {
  return LEGACY_SEO_REDIRECTS[slug];
}
