export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}
export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}
export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

const localAreas = "Eglinton East, Kennedy Road, Scarborough, Golden Mile, Birchmount, Warden, and the Kennedy Station area";

const menuCards: ResourceCard[] = [
  { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed." },
  { title: "Pre-Rolls", href: "/resources/pre-roll-guide", text: "Use this when the visit is about ready-to-smoke options." },
  { title: "Value Guide", href: "/resources/value-guide", text: "Start here for Budget, AA, and AAA+ flower comparisons." },
  { title: "Native Smokes", href: "/resources/native-smokes", text: "Review cigarette, Backwoods, grabba, and pouch notes where listed." },
];

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Mohawk Medicine Resources",
    seoTitle: "Mohawk Medicine Resources | Scarborough Menu And Visit Guides",
    description:
      "Mohawk Medicine resource pages for Scarborough shoppers, with visit planning, menu categories, flower tier pricing, value shopping, pre-roll tips, and Native smokes notes.",
    eyebrow: "Scarborough Resource Hub",
    intro:
      "A practical resource hub for Mohawk Medicine shoppers near Eglinton East and Kennedy Road. Use these guides to compare menu categories, plan the visit, and check the current category pages before heading to the store.",
    cards: [
      { title: "Local Visit Guide", href: "/resources/eglinton-east-scarborough-visit-guide", text: `Plan the stop around ${localAreas}.` },
      { title: "Menu Guide", href: "/resources/menu-guide", text: "Choose the category that matches the visit." },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "Explore the five Weed flower collections." },
      { title: "Value Guide", href: "/resources/value-guide", text: "Review Budget, AA, and AAA+ options before comparing higher tiers." },
      { title: "Native Smokes Prices", href: "/resources/native-smokes", text: "Brand and price notes for cigarettes, Backwoods, grabba, and pouch listings." },
      { title: "Cannabis Dispensary vs. Weed Dispensary", href: "/resources/cannabis-dispensary-vs-weed-dispensary", text: "Learn how dispensary, cannabis dispensary, weed dispensary and cannabis store searches relate." },
    ],
    sections: [
      {
        heading: "Start With The Store Details",
        body:
          "Mohawk Medicine is listed at 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Use the store page for address, hours, and contact details, then use these guides to compare the menu category that fits the visit.",
        bullets: [
          "Store page: /weed-dispensary-toronto",
          `Nearby areas: ${localAreas}`,
          "Listed hours: Open 24 Hours",
        ],
      },
      {
        heading: "Shop By Category",
        body:
          "Flower, pre-rolls, edibles, THC vapes, concentrates, accessories, cigarettes, Backwoods, grabba, and pouches are easier to compare when each category is checked on its own current page.",
      },
    ],
  },
  {
    slug: "eglinton-east-scarborough-visit-guide",
    title: "Eglinton East And Scarborough Weed Dispensary Visit Guide",
    seoTitle: "Eglinton East And Scarborough Weed Dispensary Visit Guide | Mohawk Medicine",
    description:
      "Local visit planning for Mohawk Medicine at 2655 Eglinton Ave E, with Scarborough area context, menu shortcuts, hours, and category links.",
    eyebrow: "Visit Guide",
    intro:
      `Use this guide when visiting Mohawk Medicine from ${localAreas}. Confirm current store details and category listings before making a special trip.`,
    cards: [
      { title: "Store Page", href: "/weed-dispensary-toronto", text: "Use the main store page for address, hours, and contact details." },
      { title: "Menu Guide", href: "/resources/menu-guide", text: "Pick the category that matches the visit." },
      { title: "Value Guide", href: "/resources/value-guide", text: "Review Budget, AA, and AAA+ flower notes." },
    ],
    sections: [
      {
        heading: "Address Anchor",
        body:
          "Mohawk Medicine is listed at 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Keep that address as the anchor, then check whether the visit is about flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes.",
      },
      {
        heading: "Nearby Scarborough Areas",
        body:
          `This location is useful for shoppers around ${localAreas}. Use the current map listing or contact page for route details before visiting.`,
      },
      {
        heading: "Good First Clicks",
        body:
          "Use the store page for visit details, the menu guide for product categories, the flower guide for tier comparisons, and the Native smokes guide when cigarettes or smoke accessories are part of the same stop.",
      },
    ],
  },
  {
    slug: "menu-guide",
    title: "Mohawk Medicine Menu Guide",
    seoTitle: "Mohawk Medicine Menu Guide | Flower, Pre-Rolls, Edibles, Vapes And Cigarettes",
    description:
      "A menu guide for Mohawk Medicine, covering flower tiers, pre-rolls, edibles, THC vapes, concentrates, accessories, cigarettes, and Native smokes.",
    eyebrow: "Menu Guide",
    intro:
      "Start with the category that matches the visit. Flower shoppers can compare tiers, pre-roll shoppers can check ready-to-smoke options, and cigarette shoppers can review brand and price notes where listed.",
    cards: [
      ...menuCards,
      { title: "Store Page", href: "/weed-dispensary-toronto", text: "Return to store details, address, hours, and contact information." },
    ],
    sections: [
      {
        heading: "Choose A Category",
        body:
          "For Scarborough and Eglinton East shoppers, the simplest move is to choose the product type first: flower, pre-rolls, edibles, THC vapes, concentrates, accessories, cigarettes, or specialty items.",
        bullets: [
          "Use flower tiers when comparing Exotic, Premium, AAA+, AA, or Budget.",
          "Use the pre-roll category when the visit is about ready-to-smoke options.",
          "Use the cigarette category when brand, full/light/menthol style, Backwoods, grabba, or pouch listings matter.",
        ],
      },
      {
        heading: "Check The Current Category Page",
        body:
          "Product names, prices, pack sizes, flavours, and listings can change. Use the current category page before visiting for a specific item.",
      },
    ],
  },
  {
    slug: "weed-flower-guide",
    title: "Mohawk Medicine Weed & Flower Guide",
    seoTitle: "Weed & Cannabis Flower Guide Toronto | Mohawk Medicine",
    description:
      "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed at Mohawk Medicine, with a straightforward guide to the five flower collections.",
    eyebrow: "Mohawk Medicine · Weed & Flower",
    intro:
      "Mohawk Medicine brings together five Weed flower collections for shoppers who want to explore different parts of the selection: Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Browse the collections that interest you, compare more than one, or begin with Mohawk Medicine’s broader Toronto Weed selection.",
    cards: [
      { title: "Explore Mohawk Medicine Weed in Toronto", href: "/weed-dispensary-toronto/", text: "Begin with Mohawk Medicine’s broader Toronto Weed selection." },
      { title: "Exotic Weed", href: "/exotic-weed", text: "Explore Mohawk Medicine’s Exotic Weed flower collection and the products presented within it." },
      { title: "Premium Weed", href: "/premium-weed", text: "Browse the Premium Weed flower collection from Mohawk Medicine." },
      { title: "AAA+ Weed", href: "/aaa-weed", text: "Explore Mohawk Medicine’s AAA+ Weed flower collection." },
      { title: "AA Weed", href: "/aa-weed", text: "Browse the AA Weed flower collection from Mohawk Medicine." },
      { title: "Budget Weed", href: "/budget-weed", text: "Explore Mohawk Medicine’s Budget Weed flower collection." },
    ],
    sections: [
      {
        heading: "Explore Five Weed Flower Collections",
        body:
          "Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed are five separate flower collections to explore without ranking one above another.",
      },
      {
        heading: "Weed, Cannabis and Flower at Mohawk Medicine",
        body:
          "Shoppers may use terms such as Weed, cannabis, bud and flower when exploring a dispensary selection. Mohawk Medicine uses those terms naturally while offering five distinct flower collections to browse.",
      },
      {
        heading: "Compare the Collections That Interest You",
        body:
          "You can start with one flower collection and explore others as you browse. Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed each give you a different part of the Mohawk Medicine flower selection to look through.",
      },
    ],
  },
  {
    slug: "value-guide",
    title: "Mohawk Medicine Value Weed Guide",
    seoTitle: "Mohawk Medicine Value Weed Guide | Budget And AA Flower Near Scarborough",
    description:
      "A value shopping guide for Mohawk Medicine, covering Budget flower, AA flower, AAA+ deals, 6g tier math, and affordable menu choices.",
    eyebrow: "Value Guide",
    intro:
      "For value shopping near Eglinton East and Scarborough, start with Budget, AA, and AAA+ before comparing higher flower tiers or mixed categories.",
    cards: [
      { title: "Budget Weed", href: "/budget-weed", text: "$3/g for the lowest posted flower tier where listed." },
      { title: "AA Weed", href: "/aa-weed", text: "$4/g for a simple low-spend flower comparison." },
      { title: "AAA+ Weed", href: "/aaa-weed", text: "$10/g, 3g for $20, or 6g around $30 where listed." },
      { title: "Native Smokes Prices", href: "/resources/native-smokes", text: "Use this if cigarettes or Backwoods are part of the same stop." },
    ],
    sections: [
      {
        heading: "Start With Budget, Then Move Up",
        body:
          "If the visit is about lower-priced flower, start with Budget and AA. If the budget can stretch, AAA+ gives shoppers another posted tier to compare before moving into Premium or Exotic.",
      },
      {
        heading: "Compare Inside The Same Category",
        body:
          "Value means something different for flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes. Keep the comparison inside the category that matches the visit.",
      },
    ],
  },
  {
    slug: "pre-roll-guide",
    title: "Mohawk Medicine Pre-Roll And Quick Trip Guide",
    seoTitle: "Mohawk Medicine Pre-Roll Guide | Ready-To-Smoke Menu Tips",
    description:
      "A pre-roll guide for Mohawk Medicine, with quick-trip tips for ready-to-smoke options, flower cross-shopping, edibles, vapes, concentrates, and accessories.",
    eyebrow: "Pre-Roll Guide",
    intro:
      "Use this guide when the visit is about ready-to-smoke options, a quick stop, or a small add-on beside another category.",
    cards: [
      { title: "Pre-Rolls", href: "/items/prerolls", text: "Open the current pre-roll category." },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "Switch here if the visit turns into loose flower." },
      { title: "Menu Guide", href: "/resources/menu-guide", text: "Use this if the stop includes edibles, vapes, concentrates, or accessories." },
    ],
    sections: [
      {
        heading: "Compare Pre-Rolls By Format",
        body:
          "Pre-rolls should be compared by format, pack size, posted details, and current price. Use loose-flower tier pages only when the visit changes categories.",
      },
      {
        heading: "Useful For Quick Stops",
        body:
          `For shoppers around ${localAreas}, pre-rolls can be a quick category to check before visiting. Use the current category page for details.`,
      },
    ],
  },
  {
    slug: "native-smokes",
    title: "Mohawk Medicine Native Smokes Price Guide",
    seoTitle: "Mohawk Medicine Native Smokes Prices | Cigarettes, Backwoods And Grabba",
    description:
      "Mohawk Medicine Native smokes resource with cigarette brands and listed prices for Canadian, Putters, Canadian Goose, Nexus, Time, Backwoods, grabba, pouches, and mixed smoke items where shown.",
    eyebrow: "Native Smokes",
    intro:
      "Use this guide for Native cigarettes, Canadian brands, Backwoods, grabba, nicotine pouches, and mixed smoke item price checks at Mohawk Medicine.",
    cards: [
      { title: "$25 Cigarette Brands", href: "/items/cigarettes", text: "The cigarette category lists several Canadian, Canadian Goose, Canadian Classics, Rolled Gold, Nexus, Time, and Backwoods items at $25 where shown." },
      { title: "Backwoods And Grabba", href: "/items/cigarettes", text: "The cigarette category also lists nicotine pouches, grabba, grabba shaker, Backwoods, and 10 x Premium Mix Cigarettes where shown." },
      { title: "Native Cigarettes Guide", href: "/resources/native-smokes/native-cigarettes-guide", text: "Open the fuller brand and price breakdown." },
    ],
    sections: [
      {
        heading: "$25 Cigarette Brand List",
        body:
          "The cigarette category lists CANADIAN LIGHTS, CANADIAN FULL, CANADIAN GOOSE FULL, CANADIAN GOOSE LIGHTS, CANADIAN MENTHOL, CANADIAN CLASSICS ORIGINAL, CANADIAN CLASSICS SILVER, ROLLED GOLD LIGHTS, NEXUS FULL, NEXUS LIGHTS, TIME FULL, and NEW BACKWOODS FLAVORS at $25 where shown.",
      },
      {
        heading: "Backwoods, Grabba, Pouches, And Mix Items",
        body:
          "The category also lists nicotine pouches with Velo, Pablo, and Killa at $20; Grabba at $5; Grabba Shaker RedRose / Red Herring at $19; Backwoods Assorted Flavors at $20-$25; New Backwoods Flavors at $25; and 10 x Premium Mix Cigarettes at $3 where shown.",
      },
      {
        heading: "Confirm The Current Shelf",
        body:
          "Cigarette inventory, flavours, and brand mix can change. Use the cigarette category for the current public list, then confirm in store when one exact brand, style, pouch, grabba, or Backwoods flavour matters.",
      },
    ],
  },
  {
    slug: "native-smokes/native-cigarettes-guide",
    title: "Mohawk Medicine Native Cigarettes Brand Guide",
    seoTitle: "Mohawk Medicine Native Cigarettes Guide | Brand And Price List",
    description:
      "A detailed Native cigarettes brand guide for Mohawk Medicine, including $25 cigarette listings and smoke add-on prices where shown.",
    eyebrow: "Native Cigarettes",
    intro:
      "If the visit includes cigarettes, start with brand and price first. This guide keeps Native cigarettes, Backwoods, grabba, pouches, and mixed smoke items separate from cannabis category browsing.",
    cards: [
      { title: "Cigarette Category", href: "/items/cigarettes", text: "Open the current cigarette category." },
      { title: "Native Smokes Overview", href: "/resources/native-smokes", text: "Return to the shorter price guide." },
      { title: "Local Visit Guide", href: "/resources/eglinton-east-scarborough-visit-guide", text: "Plan the store stop around the local area." },
    ],
    sections: [
      {
        heading: "Brand Names To Check",
        body:
          "The cigarette category lists CANADIAN LIGHTS, CANADIAN FULL, CANADIAN GOOSE FULL, CANADIAN GOOSE LIGHTS, CANADIAN MENTHOL, CANADIAN CLASSICS ORIGINAL, CANADIAN CLASSICS SILVER, ROLLED GOLD LIGHTS, NEXUS FULL, NEXUS LIGHTS, TIME FULL, and NEW BACKWOODS FLAVORS at $25 where shown.",
      },
      {
        heading: "Smoke Category Add-Ons",
        body:
          "Nicotine pouches, Grabba, Grabba Shaker, Backwoods, and 10 x Premium Mix Cigarettes may also appear in the cigarette category. Confirm current details before visiting for one exact item.",
      },
      {
        heading: "Keep Cigarettes Separate From Cannabis Categories",
        body:
          "When the same visit includes flower, pre-rolls, edibles, THC vapes, concentrates, or accessories, keep cigarette items in their own category so the list stays easier to compare.",
      },
    ],
  },
  {
    slug: "cannabis-dispensary-vs-weed-dispensary",
    title: "Cannabis Dispensary vs. Weed Dispensary in Toronto: What's the Difference?",
    seoTitle: "Cannabis vs Weed Dispensary | Mohawk Medicine Toronto",
    description:
      "Cannabis dispensary vs weed dispensary: learn why Toronto shoppers use both terms and how “dispensary near me” fits into local cannabis searches.",
    eyebrow: "Dispensary Search Terminology",
    intro:
      "Toronto customers use several different phrases when trying to find a nearby cannabis business. One person may search “cannabis dispensary near me.” Another may use “weed dispensary near me.” Others shorten the search to “dispensary near me,” “cannabis near me,” or “weed near me.”",
    cards: [
      { title: "Weed Dispensary in Toronto", href: "/weed-dispensary-toronto", text: "Use the existing local page for Mohawk Medicine visit information." },
      { title: "Resource Home", href: "/resources", text: "Return to the Mohawk Medicine resource hub." },
    ],
    sections: [
      {
        heading: "Different Words, Similar Local Intent",
        body:
          "Cannabis is the broader formal term. Weed is familiar everyday language. Dispensary describes the type of local business someone is trying to locate. Cannabis store is another common description.",
        bullets: [
          "cannabis dispensary near me",
          "weed dispensary near me",
          "dispensary near me",
          "cannabis store near me",
          "cannabis near me",
          "weed near me",
        ],
      },
      {
        heading: "Why Location Still Matters",
        body:
          "The words someone types are only the beginning of a local search. Once a nearby business is identified, customers need accurate real-world information such as the correct address, business identity, hours, location, visit information and current website resources. Mohawk Medicine is located at 2655 Eglinton Ave E in Toronto. Its existing Toronto weed-dispensary page remains the primary website resource for local visit intent.",
      },
      {
        heading: "Should a Website Use Weed or Cannabis?",
        body:
          "A useful cannabis website can naturally use both. It does not need to choose only one term. The objective is to clearly establish the business as a local cannabis and dispensary entity while maintaining readable, useful content.",
      },
      {
        heading: "What is the difference between a weed dispensary and cannabis dispensary?",
        body: "The main difference is usually wording. Cannabis is the formal term; weed is common conversational terminology.",
      },
      {
        heading: "What does cannabis store near me mean?",
        body: "It indicates local intent: the user is trying to locate a nearby cannabis business.",
      },
      {
        heading: "Is “dispensary near me” related to weed-dispensary searches?",
        body: "Yes. In cannabis context, the shorter phrase can express a closely related local-search goal.",
      },
      {
        heading: "Where is Mohawk Medicine?",
        body: "Mohawk Medicine is located at 2655 Eglinton Ave E in Toronto, Ontario.",
      },
    ],
  },
  {
    slug: "resource-centre-launch",
    title: "Mohawk Medicine Resource Centre",
    seoTitle: "Mohawk Medicine Resource Centre | Local Menu Guides",
    description:
      "Mohawk Medicine resource centre with local visit planning, menu guide pages, flower tier pricing, value shopping, pre-roll tips, and Native smokes prices.",
    eyebrow: "Resource Centre",
    intro:
      "Mohawk Medicine resources help shoppers compare local visit details, flower tiers, value options, pre-rolls, and cigarette notes before visiting the Eglinton Ave E store.",
    cards: [
      { title: "Resource Home", href: "/resources", text: "Start at the main resource hub." },
      { title: "Local Visit Guide", href: "/resources/eglinton-east-scarborough-visit-guide", text: `Plan around ${localAreas}.` },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "Explore the five Weed flower collections." },
      { title: "Native Smokes Prices", href: "/resources/native-smokes", text: "Check brand and price notes where listed." },
    ],
    sections: [
      {
        heading: "Plan The Visit",
        body:
          "Start with store details, choose the category that matches the trip, then confirm current product details on the category page before visiting Mohawk Medicine.",
      },
      {
        heading: "Main Resource Pages",
        body:
          "Use the visit guide for local planning, the menu guide for categories, the flower guide for tier comparisons, the value guide for Budget and AA, and the Native smokes guide for cigarettes and related smoke items.",
      },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  return RESOURCE_PAGES.find((page) => page.slug === slug);
}
