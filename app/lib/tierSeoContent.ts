/* Tier-specific SEO content for below-the-fold sections */

export interface TierSeoData {
  metadataTitle: string;
  h1: string;
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    metadataTitle: "Exotic Weed Scarborough | Eglinton East Flower | Mohawk Medicine",
    h1: "Exotic Weed in Scarborough on Eglinton East",
    seoTitle: "Exotic Flower at the 24-Hour Eglinton East Shop",
    seoIntro:
      "Exotic Weed is its own flower collection at Mohawk Medicine, the 24-hour walk-in shop at 2655 Eglinton Ave E in Scarborough. Adults 19+ can browse this tier on its live /exotic-weed page, then walk in on Eglinton East without an appointment. Exotic stays separate from Premium, AAA+, AA, and Budget.",
    sections: [
      {
        heading: "Browse Exotic Weed on Eglinton Ave E",
        body:
          "Use this Exotic Weed page when that named flower collection is the reason for the Scarborough stop. The shop is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, near Brimley Rd. Check the current cards here, then use the homepage, 24-hour walk-in guide, or Mohawk Craft visit FAQ if you need arrival or brand details.",
      },
      {
        heading: "Exotic Stays Its Own Flower Collection",
        body:
          "Exotic is one of five named flower categories at this Eglinton East storefront. The label identifies the collection only. It does not confirm current stock, potency, rarity, or a regulated grade. Compare Premium, AAA+, AA, and Budget on their own *-weed pages.",
      },
    ],
    faqs: [
      {
        q: "Where do I browse Exotic weed for this Scarborough shop?",
        a: "This /exotic-weed page is the Exotic flower collection for Mohawk Medicine at 2655 Eglinton Ave E in Scarborough. Use it to compare current Exotic listings before a walk-in on Eglinton East.",
      },
      {
        q: "Is Exotic weed at Mohawk Medicine the same as Premium?",
        a: "No. Exotic and Premium are separate named flower collections. Premium has its own /premium-weed page.",
      },
      {
        q: "Can I walk in after midnight for Exotic flower on Eglinton East?",
        a: "The store lists Open 24 Hours / 7 Days a Week. Adults 19+ with valid government photo ID can walk in at any hour. Use the 24-hour Scarborough walk-in guide for arrival details.",
      },
      {
        q: "Does Exotic weed confirm what is in stock today?",
        a: "No. Exotic is the collection name only. Read the current product cards on this page and confirm details in store.",
      },
    ],
  },

  PREMIUM: {
    metadataTitle: "Premium Weed Scarborough | Near Brimley on Eglinton East",
    h1: "Premium Weed in Scarborough near Brimley",
    seoTitle: "Premium Flower for the Scarborough Walk-In Counter",
    seoIntro:
      "Premium Weed is a separate flower collection at the Scarborough walk-in shop near Brimley Rd. Mohawk Medicine lists this tier on /premium-weed for adults 19+ comparing flower at 2655 Eglinton Ave E. Premium is not Exotic, AAA+, AA, or Budget.",
    sections: [
      {
        heading: "Compare Premium Weed Before You Walk In",
        body:
          "Start here when Premium is the flower collection you want to compare. The storefront sits on Eglinton Avenue East in Scarborough at 2655 Eglinton Ave E, near Brimley Rd. Listed store name is Mohawk Craft Dispensary. This website uses Mohawk Medicine as the site brand for the same shop.",
      },
      {
        heading: "Premium Is Positioning, Not a Shared Grade",
        body:
          "Premium sits beside the other named flower collections so shoppers can stay on one path. The Premium label does not set a required THC range, bud size, or current availability. Use /exotic-weed, /aaa-weed, /aa-weed, and /budget-weed when you want a different collection.",
      },
    ],
    faqs: [
      {
        q: "What is Premium weed at the Eglinton East counter?",
        a: "Premium is one named flower collection at Mohawk Medicine, 2655 Eglinton Ave E in Scarborough near Brimley Rd. This /premium-weed page is the Premium browse path.",
      },
      {
        q: "How is Premium different from AAA+ at this shop?",
        a: "Premium and AAA+ are separate named collections. AAA+ has its own /aaa-weed page. Neither label is a government grade.",
      },
      {
        q: "Do I need an appointment to compare Premium flower in Scarborough?",
        a: "No. Adults 19+ can walk in at 2655 Eglinton Ave E. Bring valid government photo ID. Call +1 (437) 524-9335 if you want to confirm the stop.",
      },
      {
        q: "Does Premium mean a product is available right now?",
        a: "No. Premium names the collection. Current cards on this page are the browse list; staff can confirm what is on the counter.",
      },
    ],
  },

  "AAA+": {
    metadataTitle: "AAA+ Weed Scarborough | 24-Hour Eglinton East Dispensary",
    h1: "AAA+ Weed at Mohawk Medicine on Eglinton East",
    seoTitle: "AAA+ Flower on the Scarborough 24-Hour Menu",
    seoIntro:
      "AAA+ Weed is a distinct flower collection at Mohawk Medicine on Eglinton East. Adults 19+ use this /aaa-weed page to browse AAA+ listings for the 24-hour Scarborough shop at 2655 Eglinton Ave E. AAA+ stays separate from Exotic, Premium, AA, and Budget.",
    sections: [
      {
        heading: "AAA+ Weed for a Scarborough Walk-In",
        body:
          "This page is the AAA+ flower path for the shop at 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Use it when you want that collection only. For late-night arrival, open the 24-hour walk-in guide. For Mohawk Craft Dispensary / Mohawk Medicine name questions, open the brand visit FAQ.",
      },
      {
        heading: "AAA+ Is Retail Shorthand, Not a Lab Grade",
        body:
          "AAA+ is familiar Canadian retail shorthand. It is not a regulated national grade and it does not lock one potency or aroma score. Compare AA on /aa-weed and the other named collections on their own *-weed URLs.",
      },
    ],
    faqs: [
      {
        q: "What does AAA+ weed mean at this Scarborough dispensary?",
        a: "AAA+ is a named flower collection at Mohawk Medicine on Eglinton East. Use this /aaa-weed page to browse that collection for the shop at 2655 Eglinton Ave E.",
      },
      {
        q: "Is AAA+ the same as AA weed on this site?",
        a: "No. AAA+ and AA are separate named collections. AA lives at /aa-weed.",
      },
      {
        q: "Is the AAA+ page the right stop for a 24-hour Scarborough flower visit?",
        a: "Use this page to browse AAA+ flower. Use the 24-hour walk-in guide for open-now arrival on Eglinton East, and the dispensary near me FAQ if you need the Scarborough pin.",
      },
      {
        q: "Does AAA+ make a potency or availability claim?",
        a: "No. AAA+ is the collection label only. Read the current cards and confirm details in store.",
      },
    ],
  },

  AA: {
    metadataTitle: "AA Weed Scarborough | 2655 Eglinton Ave E Flower Menu",
    h1: "AA Weed in Scarborough at 2655 Eglinton Ave E",
    seoTitle: "AA Flower for the Eglinton East Storefront",
    seoIntro:
      "AA Weed is its own flower collection for the walk-in shop at 2655 Eglinton Ave E in Scarborough. Adults 19+ can browse /aa-weed, then visit the same Eglinton East door. AA is not Budget, AAA+, Premium, or Exotic.",
    sections: [
      {
        heading: "Stay on the AA Weed Path",
        body:
          "Use this AA page when you want that named collection at the Scarborough storefront. The postal address is 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Scarborough is the borough; Eglinton East is the corridor. Map that pin rather than a generic downtown result.",
      },
      {
        heading: "AA Helps Narrow the Browse",
        body:
          "AA is retail grade shorthand, not a laboratory certificate. It does not promise one price, THC range, or bud size. Budget flower has a separate /budget-weed page. Higher named collections stay on /aaa-weed, /premium-weed, and /exotic-weed.",
      },
    ],
    faqs: [
      {
        q: "Where is AA weed listed for this Eglinton East shop?",
        a: "This /aa-weed page lists the AA flower collection for Mohawk Medicine at 2655 Eglinton Ave E in Scarborough.",
      },
      {
        q: "Is AA weed the same as Budget weed here?",
        a: "No. AA and Budget are separate named collections. Budget is at /budget-weed.",
      },
      {
        q: "Should I use a Toronto pin or a Scarborough pin for AA flower?",
        a: "Use 2655 Eglinton Ave E in Scarborough. Toronto appears on the postal line because Scarborough is a Toronto borough. The dispensary near me FAQ explains that pin.",
      },
      {
        q: "Does AA imply a current price or pack size?",
        a: "No. AA is the collection name. Current listed prices are on the product cards and can change.",
      },
    ],
  },

  BUDGET: {
    metadataTitle: "Budget Weed Scarborough | Eglinton East Value Flower",
    h1: "Budget Weed in Scarborough on Eglinton East",
    seoTitle: "Value Flower Path at the Scarborough Walk-In Shop",
    seoIntro:
      "Budget Weed is the value-oriented flower collection at Mohawk Medicine on Eglinton East. Adults 19+ can browse /budget-weed for the 24-hour Scarborough shop at 2655 Eglinton Ave E. Budget names the collection. It is not a sale banner, and it is not AA, AAA+, Premium, or Exotic.",
    sections: [
      {
        heading: "Start Value Shopping on Eglinton East",
        body:
          "This Budget Weed page is the value flower path for the walk-in shop at 2655 Eglinton Ave E in Scarborough. Call +1 (437) 524-9335 if you want to confirm the stop. For cheap-weed context, the Scarborough value guide is a separate page from this live /budget-weed collection.",
      },
      {
        heading: "Budget Names the Collection, Not a Discount",
        body:
          "Budget is a browsing term for the value-oriented flower section. It does not mean unsafe, automatically weak, or a live promotion. Each listing still has its own name, producer, and current price. Use /aa-weed when you want the AA collection instead.",
      },
    ],
    faqs: [
      {
        q: "What is Budget weed at Mohawk Medicine in Scarborough?",
        a: "Budget is the value-oriented flower collection at 2655 Eglinton Ave E. This /budget-weed page is the live Budget browse path for the Eglinton East shop.",
      },
      {
        q: "Does Budget weed mean there is a current sale?",
        a: "No. Budget is the collection name. Sale or bundle labels appear only where a current card or tier deal is listed.",
      },
      {
        q: "How do I get to Budget flower from a near-me search?",
        a: "If you searched dispensary near me in Scarborough, use the near-me FAQ for the Eglinton East pin, then return here for the Budget collection. The shop is at 2655 Eglinton Ave E.",
      },
      {
        q: "Is Budget separate from AA and the other flower pages?",
        a: "Yes. Budget, AA, AAA+, Premium, and Exotic each keep their own *-weed URL so the browse paths stay distinct.",
      },
    ],
  },
};


const MEB01_TIER_EDUCATION = {
  "EXOTIC": {
    "heading": "What “Exotic Weed” Means on the Mohawk Medicine Menu",
    "body": "Exotic is broad cannabis culture and retail language. It can point toward unusual genetics, distinctive aroma, rarity, strong bag appeal or high-end positioning. It is not a regulated government grade and it does not guarantee one THC range. At Mohawk Medicine, Exotic Weed is a separate flower collection. Use the collection to narrow the browse, then read the actual product information inside the current listing. If an adult calls a product exotic, the useful follow-up is to ask what they mean: cultivar; aroma; appearance; trichomes; rarity; presentation. The word is a starting point, not the whole grade."
  },
  "PREMIUM": {
    "heading": "Premium Weed Is Positioning, Not One Formula",
    "body": "Premium usually means a product or collection is positioned above a standard or value starting point. In cannabis, that positioning may reflect a mix of: producer; genetics; aroma; trim; cure; freshness; presentation. There is no universal rule saying Premium Weed must have one exact THC percentage, bud size or growing method. At Mohawk Medicine, Premium Weed is a separate flower collection. Use the resource guides to understand the quality language and the current Premium page to understand the current products."
  },
  "AAA+": {
    "heading": "What AAA+ Weed Means as a Mohawk Medicine Tier",
    "body": "AAA and AAA+ are familiar Canadian cannabis retail shorthand. They are not one regulated national grading system. AAA+ generally suggests positioning above a basic AAA label, but there is no universal formula requiring one potency, aroma or visual score. At Mohawk Medicine, AAA+ Weed is a separate AAA+ flower collection. Use the tier to narrow the flower menu, then compare the actual product information."
  },
  "AA": {
    "heading": "AA Weed as a Browsing Category",
    "body": "AA is familiar cannabis grade shorthand. It is not a government laboratory grade. At Mohawk Medicine, AA Weed is a separate flower collection. The label helps narrow the browse. It does not promise: one THC range; one aroma; one bud size; one cultivation method. Use the current AA page for current products and the Resource Centre for broader grade language."
  },
  "BUDGET": {
    "heading": "Budget Weed Means Value Positioning",
    "body": "Budget is a value-oriented browsing term. It should not be used as shorthand for: unsafe; automatically weak; automatically stale; automatically low quality. Mohawk Medicine's Budget Weed collection is the value-oriented flower section for adults who want to begin with value. The products inside it still have their own labels, cultivars, producers and current menu details. Price positioning and quality overlap imperfectly. Use the current listing for today's price. Use the Resource Centre for the quality language."
  }
};
for (const [key, section] of Object.entries(MEB01_TIER_EDUCATION)) TIER_SEO[key].sections.push(section);
