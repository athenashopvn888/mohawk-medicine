/* Tier-specific SEO content for below-the-fold sections */

export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Cannabis Flower Scarborough | Mohawk Medicine",
    seoIntro:
      "Explore the Exotic tier at Mohawk Medicine on Eglinton Ave E in Scarborough. Check current listings, bundle options, and product details before visiting.",
    sections: [
      {
        heading: "What Is Exotic Flower?",
        body:
          "Exotic is a separate flower tier on the Mohawk Medicine site. Use this page to compare current product cards, listed weights, prices, and package details.",
      },
      {
        heading: "Exotic Pricing",
        body:
          "The Exotic tier is listed at $20 per gram. Where listed, the page also shows 3g bundle pricing at $40 and 6g bundle pricing at $60. Check current product cards for any larger-format listings.",
      },
      {
        heading: "Eglinton Ave E Shopping Notes",
        body:
          "Mohawk Medicine is located at 2655 Eglinton Ave E in Scarborough. Check the current Exotic page before visiting because strains, product details, and larger-format listings can rotate.",
      },
    ],
    faqs: [
      {
        q: "What is Exotic cannabis flower?",
        a: "Exotic is Mohawk Medicine's highest-priced flower tier, listed for shoppers comparing the premium end of the flower menu.",
      },
      {
        q: "How much does Exotic flower cost?",
        a: "The Exotic tier is listed at $20/g, with 3g and 6g bundle pricing shown where listed.",
      },
      {
        q: "How do I know what Exotic strains are listed?",
        a: "Check the current Exotic category page before visiting Eglinton Ave E.",
      },
    ],
  },

  PREMIUM: {
    seoTitle: "Premium Cannabis Flower Scarborough | Mohawk Medicine",
    seoIntro:
      "Shop the Premium flower tier at Mohawk Medicine in Scarborough. Use the current page to compare listed strains, prices, and bundle options.",
    sections: [
      {
        heading: "What Is Premium Flower?",
        body:
          "Premium sits below Exotic in the Mohawk Medicine flower ladder. It is built for shoppers who want a higher-priced flower path without starting at the Exotic tier.",
      },
      {
        heading: "Premium Pricing",
        body:
          "Premium flower is listed at $15 per gram. Where listed, the tier page shows 3g bundle pricing at $30 and 6g bundle pricing at $45.",
      },
      {
        heading: "Compare Before Visiting",
        body:
          "Use the Premium page to compare product cards, then check the current menu details before heading to 2655 Eglinton Ave E.",
      },
    ],
    faqs: [
      {
        q: "What is Premium cannabis flower?",
        a: "Premium is a higher-priced flower tier below Exotic, with current strain details shown on the Premium page.",
      },
      {
        q: "How much does Premium flower cost?",
        a: "Premium is listed at $15/g, with 3g and 6g bundle pricing shown where listed.",
      },
      {
        q: "What is the difference between Exotic and Premium?",
        a: "Exotic is the highest-priced tier. Premium sits below it for shoppers comparing a lower price point than Exotic.",
      },
    ],
  },

  "AAA+": {
    seoTitle: "AAA+ Cannabis Flower Scarborough | Mohawk Medicine",
    seoIntro:
      "Shop AAA+ cannabis flower at Mohawk Medicine on Eglinton Ave E. Check current products, per-gram pricing, and bundle options before visiting.",
    sections: [
      {
        heading: "What Is AAA+ Flower?",
        body:
          "AAA+ is a flower tier for shoppers comparing price and current strain listings without moving into Premium or Exotic pricing.",
      },
      {
        heading: "AAA+ Pricing",
        body:
          "AAA+ flower is listed at $10 per gram. Where listed, the page shows 3g bundle pricing at $20 and 6g bundle pricing at $30.",
      },
      {
        heading: "Use The Current Page",
        body:
          "Strains and product details can rotate. Use the current AAA+ page as the public reference before visiting Mohawk Medicine.",
      },
    ],
    faqs: [
      {
        q: "What is AAA+ cannabis flower?",
        a: "AAA+ is a flower tier between AA and Premium, with current product cards shown on the AAA+ page.",
      },
      {
        q: "How much does AAA+ flower cost?",
        a: "AAA+ is listed at $10/g, with 3g and 6g bundle pricing shown where listed.",
      },
      {
        q: "Is AAA+ good quality?",
        a: "Use the current product cards and staff guidance to compare the listed AAA+ options before buying.",
      },
    ],
  },

  AA: {
    seoTitle: "AA Cannabis Flower Scarborough | Mohawk Medicine",
    seoIntro:
      "Shop AA cannabis flower at Mohawk Medicine in Scarborough. AA is a value-focused flower tier with current listings shown on the category page.",
    sections: [
      {
        heading: "What Is AA Flower?",
        body:
          "AA is a value-focused tier for shoppers who want to compare lower-priced flower options before visiting Eglinton Ave E.",
      },
      {
        heading: "AA Pricing",
        body:
          "AA flower is listed at $4 per gram in the current tier configuration. Check the AA page for current product cards and any larger-format listings.",
      },
    ],
    faqs: [
      {
        q: "What is AA cannabis flower?",
        a: "AA is a value-focused flower tier with current strain listings shown on the AA page.",
      },
      {
        q: "How much does AA flower cost?",
        a: "AA is listed at $4/g in the current tier configuration.",
      },
    ],
  },

  BUDGET: {
    seoTitle: "Budget Cannabis Scarborough | Cheap Weed From $3/g",
    seoIntro:
      "Check the Budget flower tier at Mohawk Medicine in Scarborough. Budget is the lowest-priced flower path shown on the site.",
    sections: [
      {
        heading: "Budget Flower Path",
        body:
          "Budget is a value-focused flower tier on the Mohawk Medicine site. Use it to compare listed names and prices before visiting 2655 Eglinton Ave E.",
      },
      {
        heading: "Budget Pricing",
        body:
          "Budget flower is listed at $3 per gram. The current tier configuration also shows a $10 / 3g special where listed.",
      },
    ],
    faqs: [
      {
        q: "What is the cheapest flower tier at Mohawk Medicine?",
        a: "Budget is the lowest-priced flower tier shown on the site, listed at $3/g in the current tier configuration.",
      },
      {
        q: "Does Budget flower have bundle pricing?",
        a: "The current tier configuration shows a $10 / 3g special where listed.",
      },
      {
        q: "Do Budget listings change?",
        a: "Yes. Product names, formats, and listings can rotate, so check the current Budget page before visiting.",
      },
    ],
  },
};
