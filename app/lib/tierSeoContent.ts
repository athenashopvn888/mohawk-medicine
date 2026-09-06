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
    metadataTitle: "Exotic Weed & Cannabis Flower Toronto | Mohawk Medicine",
    h1: "Exotic Weed & Cannabis Flower in Toronto",
    seoTitle: "Exotic Weed & Cannabis Flower in Scarborough",
    seoIntro:
      "Mohawk Medicine keeps Exotic as its own cannabis flower category for adults 19+ exploring weed and flower in Scarborough. The Exotic tier stands on its own within the broader Mohawk Medicine flower lineup and remains separate from Premium, AAA+, AA and Budget.",
    sections: [
      {
        heading: "Explore Exotic Weed & Flower",
        body:
          "Use the Exotic section when that specific flower category is what you want to explore. Mohawk Medicine keeps each tier distinct so shoppers can move through the flower lineup without mixing every category together.",
      },
      {
        heading: "Exotic Within the Mohawk Medicine Flower Lineup",
        body:
          "Exotic is one of five named flower categories at Mohawk Medicine alongside Premium, AAA+, AA and Budget. The tier label identifies the section only and does not make a claim about current products, stock, potency or availability.",
      },
    ],
    faqs: [
      {
        q: "What is Exotic weed at Mohawk Medicine?",
        a: "Exotic is one of Mohawk Medicine's separate cannabis flower categories.",
      },
      {
        q: "Is Exotic separate from Premium flower?",
        a: "Yes. Exotic and Premium are separate named flower tiers at Mohawk Medicine.",
      },
      {
        q: "Does the Exotic section confirm what is currently available?",
        a: "No. The Exotic label identifies the flower category only and does not confirm current stock or availability.",
      },
    ],
  },

  PREMIUM: {
    metadataTitle: "Premium Weed & Cannabis Flower Toronto | Mohawk Medicine",
    h1: "Premium Weed & Cannabis Flower in Toronto",
    seoTitle: "Premium Weed & Cannabis Flower in Scarborough",
    seoIntro:
      "Premium has its own place in the Mohawk Medicine flower lineup for adults 19+ exploring weed and cannabis flower around Scarborough and Eglinton East. It remains a separate category from Exotic, AAA+, AA and Budget.",
    sections: [
      {
        heading: "Browse Premium Weed & Flower",
        body:
          "The Premium section gives shoppers a focused flower category without combining it with the rest of the Mohawk Medicine tier lineup.",
      },
      {
        heading: "Premium as a Separate Flower Category",
        body:
          "Mohawk Medicine presents Premium alongside Exotic, AAA+, AA and Budget as distinct named tiers. The Premium label describes the category and does not imply current availability, potency or product characteristics.",
      },
    ],
    faqs: [
      {
        q: "What is Premium weed at Mohawk Medicine?",
        a: "Premium is one of Mohawk Medicine's separate cannabis flower categories.",
      },
      {
        q: "Is Premium the same as Exotic?",
        a: "No. Premium and Exotic are separate named flower tiers.",
      },
      {
        q: "Does Premium mean a particular product is currently available?",
        a: "No. Premium is the tier name only and does not confirm current product availability.",
      },
    ],
  },

  "AAA+": {
    metadataTitle: "AAA+ Weed & Cannabis Flower Toronto | Mohawk Medicine",
    h1: "AAA+ Weed & Cannabis Flower in Toronto",
    seoTitle: "AAA+ Weed & Cannabis Flower in Scarborough",
    seoIntro:
      "AAA+ is a distinct Mohawk Medicine flower category for adults 19+ who want to focus on that part of the weed and cannabis flower lineup. It sits alongside Exotic, Premium, AA and Budget without changing the broader role of the Mohawk Medicine Weed owner page.",
    sections: [
      {
        heading: "Explore AAA+ Weed & Flower",
        body:
          "The AAA+ section keeps this flower category separate so shoppers can explore it without moving through every Mohawk Medicine tier at once.",
      },
      {
        heading: "AAA+ in the Mohawk Medicine Tier Lineup",
        body:
          "AAA+ is one of the five named flower categories used by Mohawk Medicine. The label identifies the tier only and does not establish potency, quality, availability or current product details.",
      },
    ],
    faqs: [
      {
        q: "What is the AAA+ weed tier at Mohawk Medicine?",
        a: "AAA+ is one of Mohawk Medicine's separate cannabis flower categories.",
      },
      {
        q: "Is AAA+ different from AA?",
        a: "Yes. AAA+ and AA are separate named flower tiers.",
      },
      {
        q: "Does AAA+ make a potency or availability claim?",
        a: "No. AAA+ is the category label only.",
      },
    ],
  },

  AA: {
    metadataTitle: "AA Weed & Cannabis Flower Toronto | Mohawk Medicine",
    h1: "AA Weed & Cannabis Flower in Toronto",
    seoTitle: "AA Weed & Cannabis Flower in Scarborough",
    seoIntro:
      "AA is its own Mohawk Medicine flower category for adults 19+ exploring weed and cannabis flower in Scarborough. The section remains distinct from Budget, AAA+, Premium and Exotic.",
    sections: [
      {
        heading: "Browse AA Weed & Flower",
        body:
          "Use the AA section when you want to stay focused on that specific Mohawk Medicine flower category.",
      },
      {
        heading: "AA as a Defined Flower Tier",
        body:
          "AA is presented as one of five named tiers in the Mohawk Medicine flower lineup. The category label does not imply price, potency, current stock or product availability.",
      },
    ],
    faqs: [
      {
        q: "What does AA weed mean at Mohawk Medicine?",
        a: "AA is one of Mohawk Medicine's separate cannabis flower categories.",
      },
      {
        q: "Is AA separate from Budget?",
        a: "Yes. AA and Budget are separate named flower tiers.",
      },
      {
        q: "Does AA imply a current price or availability?",
        a: "No. AA is the tier label only.",
      },
    ],
  },

  BUDGET: {
    metadataTitle: "Budget Weed & Cannabis Flower Toronto | Mohawk Medicine",
    h1: "Budget Weed & Cannabis Flower in Toronto",
    seoTitle: "Budget Weed & Cannabis Flower in Scarborough",
    seoIntro:
      "Budget is a separate Mohawk Medicine flower category for adults 19+ exploring weed and cannabis flower in Scarborough. The Budget label identifies the tier without making a current price, promotion, stock or availability claim.",
    sections: [
      {
        heading: "Explore Budget Weed & Flower",
        body:
          "The Budget section gives Mohawk Medicine shoppers a dedicated flower category that stays separate from AA, AAA+, Premium and Exotic.",
      },
      {
        heading: "Budget Is the Category Name",
        body:
          "Budget describes the flower tier only. It does not establish a current deal, discount, price, promotion or product availability.",
      },
    ],
    faqs: [
      {
        q: "What is Budget weed at Mohawk Medicine?",
        a: "Budget is one of Mohawk Medicine's separate cannabis flower categories.",
      },
      {
        q: "Does Budget mean there is a current sale or promotion?",
        a: "No. Budget is the category name only.",
      },
      {
        q: "Can Budget be compared with the other flower tiers?",
        a: "Yes. Budget is separate from AA, AAA+, Premium and Exotic.",
      },
    ],
  },
};


const MEB01_TIER_EDUCATION = {
  "EXOTIC": {
    "heading": "What “Exotic Weed” Means on the Mohawk Medicine Menu",
    "body": "Exotic is broad cannabis culture and retail language. It can point toward unusual genetics, distinctive aroma, rarity, strong bag appeal or high-end positioning. It is not a regulated government grade and it does not guarantee one THC range. At Mohawk Medicine, Exotic Weed is a protected flower owner. Use the collection to narrow the browse, then read the actual product information inside the current listing. If an adult calls a product exotic, the useful follow-up is to ask what they mean: cultivar; aroma; appearance; trichomes; rarity; presentation. The word is a starting point, not the whole grade."
  },
  "PREMIUM": {
    "heading": "Premium Weed Is Positioning, Not One Formula",
    "body": "Premium usually means a product or collection is positioned above a standard or value starting point. In cannabis, that positioning may reflect a mix of: producer; genetics; aroma; trim; cure; freshness; presentation. There is no universal rule saying Premium Weed must have one exact THC percentage, bud size or growing method. At Mohawk Medicine, Premium Weed remains the protected owner for the current Premium collection. Use the resource guides to understand the quality language and the current Premium page to understand the current products."
  },
  "AAA+": {
    "heading": "What AAA+ Weed Means as a Mohawk Medicine Tier",
    "body": "AAA and AAA+ are familiar Canadian cannabis retail shorthand. They are not one regulated national grading system. AAA+ generally suggests positioning above a basic AAA label, but there is no universal formula requiring one potency, aroma or visual score. At Mohawk Medicine, AAA+ Weed is the established protected owner. Use the tier to narrow the flower menu, then compare the actual product information."
  },
  "AA": {
    "heading": "AA Weed as a Browsing Category",
    "body": "AA is familiar cannabis grade shorthand. It is not a government laboratory grade. At Mohawk Medicine, AA Weed is a protected flower owner. The label helps narrow the browse. It does not promise: one THC range; one aroma; one bud size; one cultivation method. Use the current AA page for current products and the Resource Centre for broader grade language."
  },
  "BUDGET": {
    "heading": "Budget Weed Means Value Positioning",
    "body": "Budget is a value-oriented browsing term. It should not be used as shorthand for: unsafe; automatically weak; automatically stale; automatically low quality. Mohawk Medicine's Budget Weed page is the protected owner for adults who want to begin with value. The products inside it still have their own labels, cultivars, producers and current menu details. Price positioning and quality overlap imperfectly. Use the current listing for today's price. Use the Resource Centre for the quality language."
  }
};
for (const [key, section] of Object.entries(MEB01_TIER_EDUCATION)) TIER_SEO[key].sections.push(section);
