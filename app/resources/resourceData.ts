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
export type ResourceBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "list"; items: string[] };
export interface ResourceFaq {
  question: string;
  answer: string;
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
  blocks?: ResourceBlock[];
  faqs?: ResourceFaq[];
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
      "Mohawk Medicine resource pages for Scarborough shoppers, with visit planning, menu categories, Weed flower education, value browsing, pre-roll tips, and commercial-tobacco guides.",
    eyebrow: "Scarborough Resource Hub",
    intro:
      "A practical resource hub for Mohawk Medicine shoppers near Eglinton East and Kennedy Road. Use these guides to compare menu categories, plan the visit, and check the current category pages before heading to the store.",
    cards: [
      { title: "Local Visit Guide", href: "/resources/eglinton-east-scarborough-visit-guide", text: `Plan the stop around ${localAreas}.` },
      { title: "Menu Guide", href: "/resources/menu-guide", text: "Choose the category that matches the visit." },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "Explore the five Weed flower collections." },
      { title: "Value Guide", href: "/resources/value-guide", text: "Review Budget, AA, and AAA+ options before comparing higher tiers." },
      { title: "Native Smokes Guide", href: "/resources/native-smokes", text: "Learn commercial tobacco terminology without relying on old prices or stock." },
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
      { title: "Cannabis 101", href: "/resources/cannabis-101", text: "Start with cannabis formats, labels, genetics and common terminology." },
      { title: "Weed & Flower Quality Guide", href: "/resources/weed-flower-guide", text: "Understand the five protected Weed collections and the quality language behind them." },
      { title: "First Visit to Mohawk Medicine", href: "/resources/eglinton-east-scarborough-visit-guide", text: "Plan a visit using the current Eglinton East and Scarborough store information." },
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
      "Mohawk Medicine's Resource Centre connects Scarborough visit planning with practical cannabis education, Weed flower guides, value browsing, pre-roll information and separate commercial-tobacco resources. Use the guides for stable context and the current category pages for details that can change.",
    cards: [
      { title: "Resource Home", href: "/resources", text: "Start with the full Mohawk Medicine resource hub." },
      { title: "Local Visit Guide", href: "/resources/eglinton-east-scarborough-visit-guide", text: "Plan a first or repeat visit using the current Eglinton East / Scarborough store information." },
      { title: "Weed Flower Guide", href: "/resources/weed-flower-guide", text: "Understand the five protected Weed collections and the quality language behind them." },
      { title: "Native Smokes Guide", href: "/resources/native-smokes", text: "Learn commercial tobacco terminology without relying on old prices or stock." },
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


const MEB01_RESOURCE_OVERRIDES: Record<string, Partial<ResourcePage>> = {
  "cannabis-dispensary-vs-weed-dispensary": {
    "title": "Cannabis Dispensary vs Weed Dispensary: Different Words, Same Local Question",
    "seoTitle": "Cannabis vs Weed Dispensary in Scarborough | Mohawk Medicine",
    "description": "Learn why adults use cannabis dispensary, weed dispensary, cannabis store and dispensary near me for closely related local searches around Scarborough.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Adults do not all use the same word when they are trying to find a local cannabis business.",
    "cards": [
      {
        "title": "Mohawk Medicine in Toronto",
        "href": "/weed-dispensary-toronto",
        "text": "Continue with Mohawk Medicine in Toronto."
      },
      {
        "title": "First Visit to Mohawk Medicine",
        "href": "/resources/eglinton-east-scarborough-visit-guide",
        "text": "Continue with First Visit to Mohawk Medicine."
      },
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Mohawk Medicine Resources",
        "href": "/resources",
        "text": "Continue with Mohawk Medicine Resources."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Adults do not all use the same word when they are trying to find a local cannabis business."
      },
      {
        "type": "p",
        "text": "Some say cannabis dispensary."
      },
      {
        "type": "p",
        "text": "Some say weed dispensary."
      },
      {
        "type": "p",
        "text": "Some say cannabis store."
      },
      {
        "type": "p",
        "text": "Some simply type dispensary near me."
      },
      {
        "type": "p",
        "text": "Those phrases are not identical, but they can point toward the same practical goal: find the right local business, confirm the store details, then decide whether the menu has the category you want."
      },
      {
        "type": "h2",
        "text": "Cannabis Is the Formal Word"
      },
      {
        "type": "p",
        "text": "“Cannabis” is the formal term used in Canadian law, regulated product information and most health guidance."
      },
      {
        "type": "p",
        "text": "That makes it the cleanest word when the topic is legal product information, labels, regulations or formal education."
      },
      {
        "type": "h2",
        "text": "Weed Is Everyday Language"
      },
      {
        "type": "p",
        "text": "“Weed” is ordinary conversational language."
      },
      {
        "type": "p",
        "text": "Adults use it because it is familiar and direct."
      },
      {
        "type": "p",
        "text": "A useful local site does not need to pretend people never say weed. It should use normal language while keeping the business identity and product information accurate."
      },
      {
        "type": "h2",
        "text": "Dispensary and Store Can Describe the Same Local Goal"
      },
      {
        "type": "p",
        "text": "In everyday retail language, “dispensary” and “cannabis store” can describe the same kind of local destination."
      },
      {
        "type": "p",
        "text": "The useful difference is not the vocabulary lesson."
      },
      {
        "type": "p",
        "text": "The useful difference is what happens after the search."
      },
      {
        "type": "p",
        "text": "A shopper needs to confirm:"
      },
      {
        "type": "p",
        "text": "the exact business;"
      },
      {
        "type": "p",
        "text": "the real address;"
      },
      {
        "type": "p",
        "text": "current listed hours;"
      },
      {
        "type": "p",
        "text": "contact information;"
      },
      {
        "type": "p",
        "text": "the right menu/category page."
      },
      {
        "type": "p",
        "text": "For Mohawk Medicine, the protected local owner is /weed-dispensary-toronto."
      },
      {
        "type": "p",
        "text": "This resource explains terminology. The local owner handles the visit."
      },
      {
        "type": "h2",
        "text": "What “Near Me” Adds"
      },
      {
        "type": "p",
        "text": "“Near me” adds location intent."
      },
      {
        "type": "p",
        "text": "It does not create a new kind of business."
      },
      {
        "type": "p",
        "text": "Someone searching “weed dispensary near me” or “cannabis dispensary near me” is usually trying to answer a local question quickly."
      },
      {
        "type": "p",
        "text": "For Mohawk Medicine, the useful answer is the real Eglinton Ave E store identity and the current public store information, not a page stuffed with repeated near-me phrases."
      },
      {
        "type": "h2",
        "text": "One Business, Several Ways to Say It"
      },
      {
        "type": "p",
        "text": "The same adult might use different language on different days:"
      },
      {
        "type": "p",
        "text": "weed store;"
      },
      {
        "type": "p",
        "text": "cannabis store;"
      },
      {
        "type": "p",
        "text": "weed dispensary;"
      },
      {
        "type": "p",
        "text": "cannabis dispensary;"
      },
      {
        "type": "p",
        "text": "dispensary;"
      },
      {
        "type": "p",
        "text": "local cannabis shop."
      },
      {
        "type": "p",
        "text": "That flexibility is normal."
      },
      {
        "type": "p",
        "text": "The exact public business identity should stay the same."
      },
      {
        "type": "p",
        "text": "The supporting content should do the translating."
      },
      {
        "type": "h2",
        "text": "Why Accurate Local Information Matters More Than the Search Phrase"
      },
      {
        "type": "p",
        "text": "Once someone identifies Mohawk Medicine, the useful questions become practical:"
      },
      {
        "type": "p",
        "text": "Is this the right Mohawk Medicine?"
      },
      {
        "type": "p",
        "text": "Is this the Eglinton Ave E location?"
      },
      {
        "type": "p",
        "text": "What are the current listed hours?"
      },
      {
        "type": "p",
        "text": "Which resource explains the category I am looking at?"
      },
      {
        "type": "p",
        "text": "Which live page shows the current product details?"
      },
      {
        "type": "p",
        "text": "That is where the website becomes helpful."
      },
      {
        "type": "h2",
        "text": "Do Not Change the Business Name to Match Every Phrase"
      },
      {
        "type": "p",
        "text": "A business should not rename itself every time shoppers use a different search phrase."
      },
      {
        "type": "p",
        "text": "Mohawk Medicine stays Mohawk Medicine."
      },
      {
        "type": "p",
        "text": "The site can naturally explain cannabis, weed, dispensary and store terminology without turning the public name into a keyword list."
      }
    ],
    "faqs": [
      {
        "question": "Is a weed dispensary different from a cannabis dispensary?",
        "answer": "Usually the difference is wording. Cannabis is the formal term; weed is common everyday language."
      },
      {
        "question": "What does “dispensary near me” mean?",
        "answer": "It expresses local intent: the person is trying to find a nearby dispensary."
      },
      {
        "question": "Is a cannabis store the same thing as a cannabis dispensary?",
        "answer": "In normal retail conversation, the phrases can describe the same kind of adult-use cannabis business."
      },
      {
        "question": "Should Mohawk Medicine change its business name to match search phrases?",
        "answer": "No. The exact public business identity should remain accurate."
      },
      {
        "question": "Where should I check current Mohawk Medicine visit details?",
        "answer": "Use the protected local store page for current store information."
      }
    ]
  },
  "eglinton-east-scarborough-visit-guide": {
    "title": "First Visit to Mohawk Medicine: Eglinton East & Scarborough Guide",
    "seoTitle": "First Cannabis Store Visit in Scarborough | Mohawk Medicine",
    "description": "Planning a first Mohawk Medicine visit? Learn what adults 19+ can expect, what to bring and how to read the menu before heading to Eglinton Ave E.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "A first cannabis-store visit should not feel like homework.",
    "cards": [
      {
        "title": "Mohawk Medicine in Toronto",
        "href": "/weed-dispensary-toronto",
        "text": "Continue with Mohawk Medicine in Toronto."
      },
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Weed & Flower Quality Guide."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      },
      {
        "title": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary",
        "text": "Continue with Weed Slang Explained."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "A first cannabis-store visit should not feel like homework."
      },
      {
        "type": "p",
        "text": "Mohawk Medicine is listed at 2655 Eglinton Ave E, Toronto, ON M1K 2S2."
      },
      {
        "type": "p",
        "text": "Adults 19+ can make the visit easier by doing three things before leaving:"
      },
      {
        "type": "p",
        "text": "check the current store details;"
      },
      {
        "type": "p",
        "text": "choose the category that matches the visit;"
      },
      {
        "type": "p",
        "text": "know one or two menu terms you actually care about."
      },
      {
        "type": "p",
        "text": "That is enough."
      },
      {
        "type": "h2",
        "text": "Start With the Store Page"
      },
      {
        "type": "p",
        "text": "Use the protected local owner for current visit information."
      },
      {
        "type": "p",
        "text": "That page should remain the practical source for:"
      },
      {
        "type": "p",
        "text": "exact store identity;"
      },
      {
        "type": "p",
        "text": "address;"
      },
      {
        "type": "p",
        "text": "listed hours;"
      },
      {
        "type": "p",
        "text": "contact details;"
      },
      {
        "type": "p",
        "text": "current visit information."
      },
      {
        "type": "p",
        "text": "This resource explains how to approach the menu."
      },
      {
        "type": "p",
        "text": "It should not become a duplicate local owner."
      },
      {
        "type": "h2",
        "text": "Bring Valid 19+ Identification"
      },
      {
        "type": "p",
        "text": "Ontario's legal age for recreational cannabis is 19."
      },
      {
        "type": "p",
        "text": "Adults should be prepared to show valid identification."
      },
      {
        "type": "p",
        "text": "Choose the Category Before the Product If the visit is about flower"
      },
      {
        "type": "p",
        "text": "Start with one of the five Weed owners:"
      },
      {
        "type": "p",
        "text": "Exotic Weed;"
      },
      {
        "type": "p",
        "text": "Premium Weed;"
      },
      {
        "type": "p",
        "text": "AAA+ Weed;"
      },
      {
        "type": "p",
        "text": "AA Weed;"
      },
      {
        "type": "p",
        "text": "Budget Weed."
      },
      {
        "type": "p",
        "text": "Do not try to compare the entire flower menu at once."
      },
      {
        "type": "p",
        "text": "Pick the shelf first."
      },
      {
        "type": "h2",
        "text": "If the visit is about pre-rolls"
      },
      {
        "type": "p",
        "text": "Use the current pre-roll category."
      },
      {
        "type": "p",
        "text": "A pre-roll decision is different from a loose-flower decision."
      },
      {
        "type": "h2",
        "text": "If the visit is about edibles, THC vapes or concentrates"
      },
      {
        "type": "p",
        "text": "Use the matching category."
      },
      {
        "type": "p",
        "text": "The format changes the label information and the comparison."
      },
      {
        "type": "h2",
        "text": "If the visit includes cigarettes"
      },
      {
        "type": "p",
        "text": "Keep commercial tobacco in its own lane."
      },
      {
        "type": "p",
        "text": "Cannabis and cigarettes are different product categories and should not be blended into one shopping decision."
      },
      {
        "type": "h2",
        "text": "You Do Not Need to Know Every Strain Name"
      },
      {
        "type": "p",
        "text": "Adults sometimes feel like they need to know a long list of cultivar names before walking into a cannabis store."
      },
      {
        "type": "p",
        "text": "They do not."
      },
      {
        "type": "p",
        "text": "A normal first question can be:"
      },
      {
        "type": "h2",
        "text": "“What does this tier mean?”"
      },
      {
        "type": "h2",
        "text": "“What should I read on this label?”"
      },
      {
        "type": "h2",
        "text": "“What does gas mean in this description?”"
      },
      {
        "type": "h2",
        "text": "“What is the difference between this format and that one?”"
      },
      {
        "type": "p",
        "text": "That is enough to make the menu easier."
      },
      {
        "type": "h2",
        "text": "Flower Tiers Are the Store Map"
      },
      {
        "type": "p",
        "text": "Mohawk Medicine's five Weed owners create a clean way to browse flower."
      },
      {
        "type": "p",
        "text": "They are store categories."
      },
      {
        "type": "p",
        "text": "They are not one regulated national grading table."
      },
      {
        "type": "p",
        "text": "Use the tier to narrow the list."
      },
      {
        "type": "p",
        "text": "Then use the actual product information to understand the item."
      },
      {
        "type": "h2",
        "text": "THC Is One Part of the Comparison"
      },
      {
        "type": "p",
        "text": "THC matters."
      },
      {
        "type": "p",
        "text": "It should not automatically become the entire decision."
      },
      {
        "type": "p",
        "text": "Flower can also differ in:"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "trichome appearance;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "structure;"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "producer;"
      },
      {
        "type": "p",
        "text": "cultivar."
      },
      {
        "type": "p",
        "text": "A higher number does not answer all of those questions."
      },
      {
        "type": "h2",
        "text": "Translate the Slang Instead of Memorizing It"
      },
      {
        "type": "p",
        "text": "If someone says:"
      },
      {
        "type": "h2",
        "text": "“That is loud.”"
      },
      {
        "type": "p",
        "text": "they may be talking about aroma intensity."
      },
      {
        "type": "p",
        "text": "If someone says:"
      },
      {
        "type": "h2",
        "text": "“That is frosty.”"
      },
      {
        "type": "p",
        "text": "they are probably talking about visible trichomes."
      },
      {
        "type": "p",
        "text": "If someone says:"
      },
      {
        "type": "h2",
        "text": "“That is top shelf.”"
      },
      {
        "type": "p",
        "text": "ask what characteristic is making them say that."
      },
      {
        "type": "p",
        "text": "Slang gets useful when the nickname becomes a real observation."
      },
      {
        "type": "h2",
        "text": "Use the Current Category Page for Anything That Can Change"
      },
      {
        "type": "p",
        "text": "Product names, prices, strains, flavours, package details and availability can rotate."
      },
      {
        "type": "p",
        "text": "This visit guide should remain useful even when those details change."
      },
      {
        "type": "p",
        "text": "Current information belongs on the current listing."
      },
      {
        "type": "h2",
        "text": "Keep the First Visit Simple"
      },
      {
        "type": "p",
        "text": "The Mohawk Medicine first-visit formula:"
      },
      {
        "type": "p",
        "text": "check the store page;"
      },
      {
        "type": "p",
        "text": "bring valid ID;"
      },
      {
        "type": "p",
        "text": "choose one product lane;"
      },
      {
        "type": "p",
        "text": "read the actual product information;"
      },
      {
        "type": "p",
        "text": "ask one clear question if needed."
      },
      {
        "type": "p",
        "text": "No performance required."
      }
    ],
    "faqs": [
      {
        "question": "How old do I need to be to visit Mohawk Medicine for recreational cannabis?",
        "answer": "Adults must be 19+ in Ontario."
      },
      {
        "question": "Do I need to know which strain I want before visiting?",
        "answer": "No. Starting with format and the current menu is enough."
      },
      {
        "question": "Are the Weed tiers official grades?",
        "answer": "No. They are store browsing owners, not one universal government grading system."
      },
      {
        "question": "Should I choose the product with the highest THC?",
        "answer": "Not automatically. THC matters, but it does not describe every characteristic."
      },
      {
        "question": "Where should I check current visit and product information?",
        "answer": "Use the current local store page for visit details and current category/product pages for changing menu details."
      }
    ]
  },
  "weed-flower-guide": {
    "title": "Mohawk Medicine Weed & Flower Quality Guide",
    "seoTitle": "Weed & Cannabis Flower Quality Guide | Mohawk Medicine",
    "description": "Understand Mohawk Medicine's Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed plus the quality language behind them.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Mohawk Medicine already has five clear Weed flower owners.",
    "cards": [
      {
        "title": "Exotic Weed",
        "href": "/exotic-weed",
        "text": "Continue with Exotic Weed."
      },
      {
        "title": "Premium Weed",
        "href": "/premium-weed",
        "text": "Continue with Premium Weed."
      },
      {
        "title": "AAA+ Weed",
        "href": "/aaa-weed",
        "text": "Continue with AAA+ Weed."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "Continue with AA Weed."
      },
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "Continue with Budget Weed."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      },
      {
        "title": "Top Shelf, Mids & Quads",
        "href": "/resources/flower-guides/top-shelf-mids-quads",
        "text": "Continue with Top Shelf, Mids & Quads."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      },
      {
        "title": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal",
        "text": "Continue with Bag Appeal."
      },
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
        "text": "Continue with Gas, Loud & Terpy."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      },
      {
        "title": "Smalls vs Big Buds",
        "href": "/resources/flower-guides/smalls-vs-big-buds",
        "text": "Continue with Smalls vs Big Buds."
      },
      {
        "title": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
        "text": "Continue with BC Grown / Indoor / Hydro / Outdoor."
      },
      {
        "title": "Craft vs Commercial Cannabis",
        "href": "/resources/flower-guides/craft-vs-commercial-cannabis",
        "text": "Continue with Craft vs Commercial Cannabis."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Mohawk Medicine already has five clear Weed flower owners."
      },
      {
        "type": "p",
        "text": "This page should remain the main education hub that explains what those tiers can and cannot tell a shopper."
      },
      {
        "type": "h2",
        "text": "Five Weed Collections, Five Starting Points"
      },
      {
        "type": "p",
        "text": "The protected flower owners are:"
      },
      {
        "type": "p",
        "text": "Exotic Weed;"
      },
      {
        "type": "p",
        "text": "Premium Weed;"
      },
      {
        "type": "p",
        "text": "AAA+ Weed;"
      },
      {
        "type": "p",
        "text": "AA Weed;"
      },
      {
        "type": "p",
        "text": "Budget Weed."
      },
      {
        "type": "p",
        "text": "Use the collection to narrow the browse."
      },
      {
        "type": "p",
        "text": "Then use the current product information to understand the item."
      },
      {
        "type": "p",
        "text": "The tier is the shelf sign."
      },
      {
        "type": "p",
        "text": "It is not the lab report."
      },
      {
        "type": "h2",
        "text": "Quality Is More Than the Tier Name"
      },
      {
        "type": "p",
        "text": "Adults may judge flower using several different characteristics:"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "bud structure;"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "cultivar;"
      },
      {
        "type": "p",
        "text": "producer;"
      },
      {
        "type": "p",
        "text": "value;"
      },
      {
        "type": "p",
        "text": "personal preference."
      },
      {
        "type": "p",
        "text": "That is why two products in the same broad tier can still present differently."
      },
      {
        "type": "h2",
        "text": "Genetics and Cultivar"
      },
      {
        "type": "p",
        "text": "Genetics influence the plant's potential traits."
      },
      {
        "type": "p",
        "text": "The cultivar name helps identify the product."
      },
      {
        "type": "p",
        "text": "It does not guarantee that every producer or batch with a familiar name will be identical."
      },
      {
        "type": "h2",
        "text": "Growing Environment"
      },
      {
        "type": "p",
        "text": "Indoor, outdoor, greenhouse and hydroponic describe different parts of cultivation."
      },
      {
        "type": "p",
        "text": "None of those terms automatically guarantees a particular quality result."
      },
      {
        "type": "p",
        "text": "The finished flower still depends on genetics, plant health, harvest timing and post-harvest handling."
      },
      {
        "type": "h2",
        "text": "Drying and Curing"
      },
      {
        "type": "p",
        "text": "Drying reduces moisture after harvest."
      },
      {
        "type": "p",
        "text": "Curing is part of controlled post-harvest conditioning."
      },
      {
        "type": "p",
        "text": "Poor handling can change aroma, texture and how the flower stores."
      },
      {
        "type": "p",
        "text": "Quality does not stop when the plant is cut."
      },
      {
        "type": "h2",
        "text": "Trichomes"
      },
      {
        "type": "p",
        "text": "Trichomes are resin-producing structures on the plant."
      },
      {
        "type": "p",
        "text": "Visible coverage can create the frosty look people like."
      },
      {
        "type": "p",
        "text": "Frost is a visual clue."
      },
      {
        "type": "p",
        "text": "It is not an exact THC meter."
      },
      {
        "type": "h2",
        "text": "Trim and Bud Structure"
      },
      {
        "type": "p",
        "text": "Shape, density and trim affect bag appeal."
      },
      {
        "type": "p",
        "text": "Those clues are useful."
      },
      {
        "type": "p",
        "text": "They do not tell you the whole chemistry or freshness story."
      },
      {
        "type": "h2",
        "text": "Aroma"
      },
      {
        "type": "p",
        "text": "People describe cannabis aroma with normal words:"
      },
      {
        "type": "p",
        "text": "gas;"
      },
      {
        "type": "p",
        "text": "skunk;"
      },
      {
        "type": "p",
        "text": "citrus;"
      },
      {
        "type": "p",
        "text": "fruit;"
      },
      {
        "type": "p",
        "text": "earth;"
      },
      {
        "type": "p",
        "text": "pine;"
      },
      {
        "type": "p",
        "text": "sweet;"
      },
      {
        "type": "p",
        "text": "floral."
      },
      {
        "type": "p",
        "text": "Aroma is real sensory information."
      },
      {
        "type": "p",
        "text": "The slang itself is not an official grade."
      },
      {
        "type": "h2",
        "text": "Freshness and Storage"
      },
      {
        "type": "p",
        "text": "Heat, light, oxygen, time and handling can influence the finished product after packaging."
      },
      {
        "type": "p",
        "text": "Good cultivation can still lose some desirable characteristics through poor storage."
      },
      {
        "type": "h2",
        "text": "THC Is Not the Tier"
      },
      {
        "type": "p",
        "text": "THC is important regulated information."
      },
      {
        "type": "p",
        "text": "It is not a complete grading system."
      },
      {
        "type": "p",
        "text": "Do not turn Mohawk Medicine's five Weed owners into five THC brackets."
      },
      {
        "type": "p",
        "text": "A higher-sounding tier does not guarantee one THC range."
      },
      {
        "type": "p",
        "text": "A higher THC number does not automatically move a product into a higher tier."
      },
      {
        "type": "h2",
        "text": "Top Shelf, Mids and Quads Are a Different Language Layer"
      },
      {
        "type": "p",
        "text": "Top shelf generally means premium positioning."
      },
      {
        "type": "p",
        "text": "Mids means someone considers a product middle-of-the-road."
      },
      {
        "type": "p",
        "text": "Quads is common Canadian slang for AAAA."
      },
      {
        "type": "p",
        "text": "Those terms overlap with retail grade language, but they do not come from one regulated national scorecard."
      },
      {
        "type": "h2",
        "text": "Budget Is a Value Owner, Not an Insult"
      },
      {
        "type": "p",
        "text": "Budget Weed is a real browsing intent."
      },
      {
        "type": "p",
        "text": "The word does not automatically mean unsafe, weak, stale or poor quality."
      },
      {
        "type": "p",
        "text": "It means the collection is positioned around value."
      },
      {
        "type": "p",
        "text": "The actual product still has its own label and current listing."
      },
      {
        "type": "p",
        "text": "Use This Hub to Go Deeper Quality"
      },
      {
        "type": "p",
        "text": "What Does Good Weed Mean?"
      },
      {
        "type": "h2",
        "text": "Top Shelf vs Mids vs Quads"
      },
      {
        "type": "h2",
        "text": "THC vs Weed Quality"
      },
      {
        "type": "h2",
        "text": "Appearance"
      },
      {
        "type": "h2",
        "text": "Bag Appeal"
      },
      {
        "type": "h2",
        "text": "Frosty Weed & Trichomes"
      },
      {
        "type": "h2",
        "text": "Smalls vs Big Buds"
      },
      {
        "type": "h2",
        "text": "Aroma and freshness"
      },
      {
        "type": "h2",
        "text": "Gas, Loud & Terpy"
      },
      {
        "type": "h2",
        "text": "Drying, Curing & Freshness"
      },
      {
        "type": "h2",
        "text": "Growing and genetics"
      },
      {
        "type": "h2",
        "text": "BC Grown / Indoor / Hydro / Outdoor"
      },
      {
        "type": "h2",
        "text": "Craft vs Commercial Cannabis"
      },
      {
        "type": "h2",
        "text": "Indica vs Sativa vs Hybrid"
      },
      {
        "type": "h2",
        "text": "Strain vs Cultivar"
      },
      {
        "type": "h2",
        "text": "Landrace vs Hybrid"
      }
    ],
    "faqs": [
      {
        "question": "Are Exotic, Premium, AAA+, AA and Budget official government grades?",
        "answer": "No. They are retail/store categories, not one universal Canadian government grading system."
      },
      {
        "question": "Does Exotic always mean higher THC?",
        "answer": "No. Exotic is retail/culture positioning and does not guarantee one THC range."
      },
      {
        "question": "What are quads?",
        "answer": "Quads is common Canadian slang for AAAA, generally implying premium positioning."
      },
      {
        "question": "Can Budget Weed still have a high THC number?",
        "answer": "Yes. Tier language and product-specific THC are different pieces of information."
      },
      {
        "question": "What should I compare besides tier?",
        "answer": "Adults may compare producer, cultivar, THC/CBD, aroma, trim, structure, trichomes, moisture, cure and freshness where information is available."
      }
    ]
  },
  "native-smokes/native-cigarettes-guide": {
    "title": "Native Cigarettes in Ontario: Terms, Brands and What to Know",
    "seoTitle": "Native Cigarettes in Ontario | Mohawk Medicine Guide",
    "description": "Learn what “Native cigarettes” can mean in Ontario, how brand identity differs from tax status, and how to read commercial tobacco terminology carefully.",
    "eyebrow": "Commercial Tobacco Guide",
    "intro": "Replace the current price-led authority copy with the following evergreen educational copy. Do not freeze current prices, current stock, current flavour availability or direct purchase language into this page.",
    "cards": [
      {
        "title": "Native Smokes overview",
        "href": "/resources/native-smokes",
        "text": "Continue with Native Smokes overview."
      },
      {
        "title": "Mohawk Medicine Resources",
        "href": "/resources",
        "text": "Continue with Mohawk Medicine Resources."
      },
      {
        "title": "First Visit to Mohawk Medicine",
        "href": "/resources/eglinton-east-scarborough-visit-guide",
        "text": "Continue with First Visit to Mohawk Medicine."
      },
      {
        "title": "Mohawk Medicine in Toronto",
        "href": "/weed-dispensary-toronto",
        "text": "Continue with Mohawk Medicine in Toronto."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Replace the current price-led authority copy with the following evergreen educational copy. Do not freeze current prices, current stock, current flavour availability or direct purchase language into this page."
      },
      {
        "type": "p",
        "text": "“Native cigarettes” is a common phrase in Ontario."
      },
      {
        "type": "p",
        "text": "It is also broad enough to cause confusion."
      },
      {
        "type": "p",
        "text": "Adults may use the phrase when talking about:"
      },
      {
        "type": "p",
        "text": "cigarettes associated with First Nations manufacturers;"
      },
      {
        "type": "p",
        "text": "brands commonly seen through Indigenous retail channels;"
      },
      {
        "type": "p",
        "text": "cigarettes sold on reserve;"
      },
      {
        "type": "p",
        "text": "tax-exempt allocation cigarettes;"
      },
      {
        "type": "p",
        "text": "commercial tobacco shopping at a business that carries Native-smoke categories."
      },
      {
        "type": "p",
        "text": "Those ideas can overlap."
      },
      {
        "type": "p",
        "text": "They are not automatically the same thing."
      },
      {
        "type": "h2",
        "text": "“Native Cigarettes” Is Not One Legal Product Category"
      },
      {
        "type": "p",
        "text": "The phrase “Native cigarettes” does not by itself establish:"
      },
      {
        "type": "p",
        "text": "who manufactured the product;"
      },
      {
        "type": "p",
        "text": "who owns the brand;"
      },
      {
        "type": "p",
        "text": "whether the manufacturer is Indigenous-owned;"
      },
      {
        "type": "p",
        "text": "whether the package is tax-exempt;"
      },
      {
        "type": "p",
        "text": "where the product may be sold;"
      },
      {
        "type": "p",
        "text": "who may qualify for a tax-exempt purchase."
      },
      {
        "type": "p",
        "text": "That information has to be checked separately."
      },
      {
        "type": "p",
        "text": "The phrase is useful as consumer language."
      },
      {
        "type": "p",
        "text": "It is not a complete legal description."
      },
      {
        "type": "h2",
        "text": "Traditional or Sacred Tobacco Is Different From Commercial Cigarettes"
      },
      {
        "type": "p",
        "text": "Tobacco has cultural and ceremonial significance in many Indigenous communities."
      },
      {
        "type": "p",
        "text": "Traditional or sacred tobacco practices should not be treated as the same thing as modern commercial cigarette smoking."
      },
      {
        "type": "p",
        "text": "This page discusses commercial cigarettes and Ontario tobacco terminology."
      },
      {
        "type": "p",
        "text": "It does not describe ceremonial tobacco practices."
      },
      {
        "type": "p",
        "text": "That distinction matters because words such as “traditional” or “Native” should not be used to imply that a commercial cigarette is safer or equivalent to sacred tobacco."
      },
      {
        "type": "h2",
        "text": "Manufacturer Identity and Tax Status Are Separate Questions"
      },
      {
        "type": "p",
        "text": "A cigarette can be associated with an Indigenous-owned or First Nations-connected manufacturer without every package being tax-exempt."
      },
      {
        "type": "p",
        "text": "A cigarette can also be sold through a retail channel without the retailer name proving who manufactured it."
      },
      {
        "type": "p",
        "text": "Keep the questions separate:"
      },
      {
        "type": "p",
        "text": "What is the exact brand?"
      },
      {
        "type": "p",
        "text": "Who is the manufacturer or brand owner according to reliable product/company information?"
      },
      {
        "type": "p",
        "text": "What package markings are present?"
      },
      {
        "type": "p",
        "text": "Where is the product being sold?"
      },
      {
        "type": "p",
        "text": "Which tax and distribution rules apply to that particular package and sale?"
      },
      {
        "type": "p",
        "text": "Do not use one nickname to answer all five questions."
      },
      {
        "type": "h2",
        "text": "Ontario's First Nations Cigarette Allocation System Is a Specific Framework"
      },
      {
        "type": "p",
        "text": "Ontario has a First Nations Cigarette Allocation System under provincial tobacco-tax rules."
      },
      {
        "type": "p",
        "text": "That system involves specific rules around allocation cigarettes, authorized distribution and eligible on-reserve sales."
      },
      {
        "type": "p",
        "text": "It is not a general label for every cigarette associated with an Indigenous manufacturer, retailer or community."
      },
      {
        "type": "p",
        "text": "That is why:"
      },
      {
        "type": "h2",
        "text": "Indigenous-manufactured and tax-exempt allocation cigarette"
      },
      {
        "type": "p",
        "text": "should not be treated as automatic synonyms."
      },
      {
        "type": "h2",
        "text": "What Package Markings Can Tell You"
      },
      {
        "type": "p",
        "text": "Package markings are part of the legal/tax context."
      },
      {
        "type": "p",
        "text": "Ontario's allocation-cigarette framework uses a federal peach-coloured stamp for allocation cigarettes."
      },
      {
        "type": "p",
        "text": "That marking belongs to a specific tax/distribution framework."
      },
      {
        "type": "p",
        "text": "It does not mean every cigarette connected to an Indigenous business is automatically an allocation cigarette."
      },
      {
        "type": "p",
        "text": "The package and sale context matter."
      },
      {
        "type": "h2",
        "text": "Brand Names Seen in Mohawk Medicine's Commercial Tobacco Catalog"
      },
      {
        "type": "p",
        "text": "Mohawk Medicine's cigarette-related catalog terminology has included names such as:"
      },
      {
        "type": "p",
        "text": "Canadian Lights;"
      },
      {
        "type": "p",
        "text": "Canadian Full;"
      },
      {
        "type": "p",
        "text": "Canadian Goose Full;"
      },
      {
        "type": "p",
        "text": "Canadian Goose Lights;"
      },
      {
        "type": "p",
        "text": "Canadian Menthol;"
      },
      {
        "type": "p",
        "text": "Canadian Classics Original;"
      },
      {
        "type": "p",
        "text": "Canadian Classics Silver;"
      },
      {
        "type": "p",
        "text": "Rolled Gold Lights;"
      },
      {
        "type": "p",
        "text": "Nexus Full;"
      },
      {
        "type": "p",
        "text": "Nexus Lights;"
      },
      {
        "type": "p",
        "text": "Time Full;"
      },
      {
        "type": "p",
        "text": "Backwoods product names;"
      },
      {
        "type": "p",
        "text": "Grabba-related product names;"
      },
      {
        "type": "p",
        "text": "nicotine pouch names."
      },
      {
        "type": "p",
        "text": "These names are included as catalog terminology only."
      },
      {
        "type": "p",
        "text": "They are not a claim that every listed name is:"
      },
      {
        "type": "p",
        "text": "Indigenous-owned;"
      },
      {
        "type": "p",
        "text": "Indigenous-manufactured;"
      },
      {
        "type": "p",
        "text": "tax-exempt;"
      },
      {
        "type": "p",
        "text": "part of Ontario's allocation system;"
      },
      {
        "type": "p",
        "text": "currently available."
      },
      {
        "type": "p",
        "text": "Do not add ownership or manufacturer statements unless the exact brand has reliable supporting evidence."
      },
      {
        "type": "h2",
        "text": "Cigarettes, Backwoods, Grabba and Nicotine Pouches Are Different Product Types"
      },
      {
        "type": "p",
        "text": "A cigarette category can contain several tobacco/nicotine-related product families."
      },
      {
        "type": "p",
        "text": "Do not blur them together."
      },
      {
        "type": "p",
        "text": "Cigarettes are not the same thing as:"
      },
      {
        "type": "p",
        "text": "cigar products;"
      },
      {
        "type": "p",
        "text": "loose or prepared grabba products;"
      },
      {
        "type": "p",
        "text": "nicotine pouches;"
      },
      {
        "type": "p",
        "text": "cannabis products."
      },
      {
        "type": "p",
        "text": "Each has its own package identity and product information."
      },
      {
        "type": "p",
        "text": "A useful resource keeps those lanes clear."
      },
      {
        "type": "h2",
        "text": "Packs, Cartons and Mixed Listings Need Exact Reading"
      },
      {
        "type": "p",
        "text": "Pack and carton describe quantity or packaging format."
      },
      {
        "type": "p",
        "text": "They do not automatically determine:"
      },
      {
        "type": "p",
        "text": "manufacturer identity;"
      },
      {
        "type": "p",
        "text": "Indigenous ownership;"
      },
      {
        "type": "p",
        "text": "tax status;"
      },
      {
        "type": "p",
        "text": "current price."
      },
      {
        "type": "p",
        "text": "If a current listing matters, use the current public category and the actual package information."
      },
      {
        "type": "p",
        "text": "Do not carry old price assumptions into an evergreen guide."
      },
      {
        "type": "h2",
        "text": "Commercial Tobacco Has Serious Health Risks"
      },
      {
        "type": "p",
        "text": "Commercial cigarette smoking carries serious health risks."
      },
      {
        "type": "p",
        "text": "Words such as:"
      },
      {
        "type": "p",
        "text": "Native;"
      },
      {
        "type": "p",
        "text": "natural;"
      },
      {
        "type": "p",
        "text": "traditional;"
      },
      {
        "type": "p",
        "text": "premium;"
      },
      {
        "type": "p",
        "text": "should not be interpreted as proof that a commercial cigarette is safe."
      },
      {
        "type": "p",
        "text": "Traditional/sacred tobacco and commercial cigarette smoking should remain clearly separated."
      },
      {
        "type": "p",
        "text": "How to Read a Commercial Cigarette Listing More Carefully Brand"
      },
      {
        "type": "p",
        "text": "What is the exact brand or product name?"
      },
      {
        "type": "h2",
        "text": "Variant"
      },
      {
        "type": "p",
        "text": "Is it Full, Lights, Silver, Menthol or another named variant?"
      },
      {
        "type": "h2",
        "text": "Package"
      },
      {
        "type": "p",
        "text": "Is the listing a pack, carton or another quantity?"
      },
      {
        "type": "h2",
        "text": "Manufacturer / brand owner"
      },
      {
        "type": "p",
        "text": "Is that identity supported by reliable information for the exact brand?"
      },
      {
        "type": "h2",
        "text": "Tax context"
      },
      {
        "type": "p",
        "text": "What do the package markings and legal sale context indicate?"
      },
      {
        "type": "h2",
        "text": "Current availability"
      },
      {
        "type": "p",
        "text": "Is the item actually shown in the current live category?"
      },
      {
        "type": "p",
        "text": "This sequence is more reliable than treating “Native cigarettes” as a complete answer."
      },
      {
        "type": "h2",
        "text": "Mohawk Medicine and This Guide"
      },
      {
        "type": "p",
        "text": "This page is an educational resource."
      },
      {
        "type": "p",
        "text": "It does not promise:"
      },
      {
        "type": "p",
        "text": "current cigarette inventory;"
      },
      {
        "type": "p",
        "text": "a current brand list;"
      },
      {
        "type": "p",
        "text": "a current price;"
      },
      {
        "type": "p",
        "text": "a particular carton or pack quantity;"
      },
      {
        "type": "p",
        "text": "a particular tax treatment."
      },
      {
        "type": "p",
        "text": "Use the current public category and actual package information for current product-specific details."
      }
    ],
    "faqs": [
      {
        "question": "Are all Native cigarettes tax free?",
        "answer": "No. Brand/manufacturer identity and tax-exempt allocation status are separate questions."
      },
      {
        "question": "Does “Native cigarette” identify the manufacturer?",
        "answer": "Not reliably. It is broad consumer language. Manufacturer and ownership should be confirmed for the exact brand."
      },
      {
        "question": "What is Ontario's First Nations Cigarette Allocation System?",
        "answer": "It is a specific provincial tobacco-tax and distribution framework involving allocation cigarettes and eligible on-reserve sales."
      },
      {
        "question": "What does a peach-coloured cigarette stamp indicate?",
        "answer": "It is associated with Ontario's allocation-cigarette framework. Package and sale context still matter."
      },
      {
        "question": "Are traditional sacred tobacco and commercial cigarettes the same thing?",
        "answer": "No. Traditional or sacred tobacco practices should be distinguished from modern commercial cigarette smoking."
      },
      {
        "question": "Does this page show Mohawk Medicine's current cigarette inventory or prices?",
        "answer": "No. This is an educational resource. Current product details belong on current public listings and packages."
      }
    ]
  },
  "native-smokes": {
    "title": "Mohawk Medicine Native Smokes Guide",
    "seoTitle": "Mohawk Medicine Native Smokes Guide | Commercial Tobacco Terms",
    "description": "A general Mohawk Medicine tobacco guide for adults 19+ covering cigarette terminology, brand variants, Backwoods, Grabba and nicotine-pouch categories without fixed price claims.",
    "eyebrow": "Commercial Tobacco Guide",
    "intro": "Replace the existing price-led hub copy with the following evergreen hub copy.",
    "cards": [
      {
        "title": "Native Cigarettes in Ontario",
        "href": "/resources/native-smokes/native-cigarettes-guide",
        "text": "Continue with Native Cigarettes in Ontario."
      },
      {
        "title": "Mohawk Medicine Resources",
        "href": "/resources",
        "text": "Continue with Mohawk Medicine Resources."
      },
      {
        "title": "Mohawk Medicine in Toronto",
        "href": "/weed-dispensary-toronto",
        "text": "Continue with Mohawk Medicine in Toronto."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Replace the existing price-led hub copy with the following evergreen hub copy."
      },
      {
        "type": "p",
        "text": "Commercial tobacco listings can look simple until several product types and variants are mixed into one category."
      },
      {
        "type": "p",
        "text": "This guide keeps the vocabulary separated."
      },
      {
        "type": "p",
        "text": "Use it to understand the product type and naming."
      },
      {
        "type": "p",
        "text": "Use the current public listing and package for anything that can change."
      },
      {
        "type": "h2",
        "text": "Start With the Product Type"
      },
      {
        "type": "p",
        "text": "A commercial tobacco stop may include:"
      },
      {
        "type": "p",
        "text": "cigarettes;"
      },
      {
        "type": "p",
        "text": "cigar products such as Backwoods;"
      },
      {
        "type": "p",
        "text": "Grabba products;"
      },
      {
        "type": "p",
        "text": "nicotine pouches;"
      },
      {
        "type": "p",
        "text": "other smoke-related items."
      },
      {
        "type": "p",
        "text": "Do not treat every item in the category as the same product type."
      },
      {
        "type": "h2",
        "text": "Read the Full Variant Name"
      },
      {
        "type": "p",
        "text": "Cigarette names can include variant words such as:"
      },
      {
        "type": "p",
        "text": "Full;"
      },
      {
        "type": "p",
        "text": "Lights;"
      },
      {
        "type": "p",
        "text": "Silver;"
      },
      {
        "type": "p",
        "text": "Menthol."
      },
      {
        "type": "p",
        "text": "Those words matter."
      },
      {
        "type": "p",
        "text": "The family name alone may not identify the exact item someone is trying to compare."
      },
      {
        "type": "h2",
        "text": "Brand Names Are Catalog Terms Until More Is Confirmed"
      },
      {
        "type": "p",
        "text": "A brand name by itself does not prove:"
      },
      {
        "type": "p",
        "text": "manufacturer ownership;"
      },
      {
        "type": "p",
        "text": "Indigenous ownership;"
      },
      {
        "type": "p",
        "text": "tax status;"
      },
      {
        "type": "p",
        "text": "allocation status."
      },
      {
        "type": "p",
        "text": "If those details matter, they require reliable information for the exact brand/package."
      },
      {
        "type": "h2",
        "text": "Current Price and Availability Belong on Current Listings"
      },
      {
        "type": "p",
        "text": "Prices, brands, flavours and availability can change."
      },
      {
        "type": "p",
        "text": "This educational hub should not freeze them."
      },
      {
        "type": "p",
        "text": "Use the live category for the current public entry."
      },
      {
        "type": "h2",
        "text": "Keep Tobacco Separate From Cannabis"
      },
      {
        "type": "p",
        "text": "If the same visit also includes flower, pre-rolls, edibles, THC vapes or concentrates, treat those as separate menu decisions."
      },
      {
        "type": "p",
        "text": "That keeps both sides of the site easier to understand."
      },
      {
        "type": "h2",
        "text": "Learn the Ontario Terminology"
      },
      {
        "type": "p",
        "text": "For a deeper explanation of the consumer phrase “Native cigarettes,” manufacturer identity, Ontario allocation/tax context and traditional/sacred tobacco distinctions, use the Native Cigarettes in Ontario guide."
      }
    ],
    "faqs": [
      {
        "question": "Does this page guarantee current cigarette brands or prices?",
        "answer": "No. Current details belong on the current public listing and package."
      },
      {
        "question": "Are Backwoods, Grabba and nicotine pouches cigarettes?",
        "answer": "No. They are different tobacco/nicotine-related product types."
      },
      {
        "question": "Does a brand name prove Indigenous ownership or tax status?",
        "answer": "No. Those are separate factual questions."
      },
      {
        "question": "Where can I learn about the phrase “Native cigarettes” in Ontario?",
        "answer": "Use the Native Cigarettes in Ontario guide."
      }
    ]
  },
  "value-guide": {
    "title": "Mohawk Medicine Weed Value Guide",
    "seoTitle": "Mohawk Medicine Weed Value Guide | Budget, AA & AAA+ Explained",
    "description": "Understand Mohawk Medicine's Budget Weed, AA Weed and AAA+ Weed value lanes without freezing current prices, deals, stock or availability into an evergreen guide.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Replace fixed-dollar and bundle/deal copy with the following evergreen value copy.",
    "cards": [
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "Continue with Budget Weed."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "Continue with AA Weed."
      },
      {
        "title": "AAA+ Weed",
        "href": "/aaa-weed",
        "text": "Continue with AAA+ Weed."
      },
      {
        "title": "Mohawk Medicine Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Mohawk Medicine Weed & Flower Quality Guide."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Replace fixed-dollar and bundle/deal copy with the following evergreen value copy."
      },
      {
        "type": "p",
        "text": "Value is not one number."
      },
      {
        "type": "p",
        "text": "A lower current price can matter, but so can:"
      },
      {
        "type": "p",
        "text": "package amount;"
      },
      {
        "type": "p",
        "text": "the actual product;"
      },
      {
        "type": "p",
        "text": "the tier;"
      },
      {
        "type": "p",
        "text": "producer;"
      },
      {
        "type": "p",
        "text": "cultivar;"
      },
      {
        "type": "p",
        "text": "current listing details;"
      },
      {
        "type": "p",
        "text": "what the shopper is trying to compare."
      },
      {
        "type": "p",
        "text": "Mohawk Medicine's value guide should explain where to start without freezing today's prices into an evergreen page."
      },
      {
        "type": "h2",
        "text": "Start With the Value-Oriented Weed Owners"
      },
      {
        "type": "p",
        "text": "For adults starting with value, the first three flower owners to compare are:"
      },
      {
        "type": "p",
        "text": "Budget Weed;"
      },
      {
        "type": "p",
        "text": "AA Weed;"
      },
      {
        "type": "p",
        "text": "AAA+ Weed."
      },
      {
        "type": "p",
        "text": "Those are three different store lanes."
      },
      {
        "type": "p",
        "text": "The current category pages carry the current products and prices."
      },
      {
        "type": "h2",
        "text": "Budget Weed"
      },
      {
        "type": "p",
        "text": "Budget Weed is the clearest value-positioned owner."
      },
      {
        "type": "p",
        "text": "Budget should not be read as:"
      },
      {
        "type": "p",
        "text": "unsafe;"
      },
      {
        "type": "p",
        "text": "automatically weak;"
      },
      {
        "type": "p",
        "text": "automatically stale;"
      },
      {
        "type": "p",
        "text": "automatically low quality."
      },
      {
        "type": "p",
        "text": "It tells the shopper where to start when price/value is the priority."
      },
      {
        "type": "h2",
        "text": "AA Weed"
      },
      {
        "type": "p",
        "text": "AA Weed is another separate flower owner."
      },
      {
        "type": "p",
        "text": "Its role is to make comparison easier, not to guarantee one potency, aroma or quality score."
      },
      {
        "type": "p",
        "text": "Use the actual product information for the product."
      },
      {
        "type": "h2",
        "text": "AAA+ Weed"
      },
      {
        "type": "p",
        "text": "AAA+ Weed sits in its own protected lane."
      },
      {
        "type": "p",
        "text": "Some adults may compare it against lower-value tiers when they want to see what changes as they move up the flower menu."
      },
      {
        "type": "p",
        "text": "That comparison should be based on the live category, not old bundle math."
      },
      {
        "type": "h2",
        "text": "Compare Within One Product Type"
      },
      {
        "type": "p",
        "text": "Value means something different for:"
      },
      {
        "type": "p",
        "text": "flower;"
      },
      {
        "type": "p",
        "text": "pre-rolls;"
      },
      {
        "type": "p",
        "text": "edibles;"
      },
      {
        "type": "p",
        "text": "THC vapes;"
      },
      {
        "type": "p",
        "text": "concentrates;"
      },
      {
        "type": "p",
        "text": "accessories;"
      },
      {
        "type": "p",
        "text": "cigarettes."
      },
      {
        "type": "p",
        "text": "Do not compare a flower price directly against an unrelated product type and call that a quality comparison."
      },
      {
        "type": "p",
        "text": "Start with the category."
      },
      {
        "type": "h2",
        "text": "Current Price, Deals and Availability Can Change"
      },
      {
        "type": "p",
        "text": "Do not freeze:"
      },
      {
        "type": "p",
        "text": "per-gram price;"
      },
      {
        "type": "p",
        "text": "bundle price;"
      },
      {
        "type": "p",
        "text": "special price;"
      },
      {
        "type": "p",
        "text": "current product;"
      },
      {
        "type": "p",
        "text": "stock status;"
      },
      {
        "type": "p",
        "text": "into this guide."
      },
      {
        "type": "p",
        "text": "Use the current category/product page for those details."
      },
      {
        "type": "h2",
        "text": "Value and Quality Are Not Opposites"
      },
      {
        "type": "p",
        "text": "A value-oriented product can still have characteristics an adult likes."
      },
      {
        "type": "p",
        "text": "A higher-priced product is not automatically better in every way."
      },
      {
        "type": "p",
        "text": "A useful value decision asks:"
      },
      {
        "type": "p",
        "text": "What do I get in this current listing, and does that fit the reason for the visit?"
      }
    ],
    "faqs": [
      {
        "question": "Does Budget Weed automatically mean low quality?",
        "answer": "No. Budget is a value-positioning term, not a complete quality grade."
      },
      {
        "question": "Should this guide list current prices?",
        "answer": "No. Current prices and deals belong on current category/product pages."
      },
      {
        "question": "Is AAA+ always a better value than AA?",
        "answer": "Not automatically. Value depends on the current product, package, price and what the shopper wants."
      },
      {
        "question": "Where should I check today's Weed prices?",
        "answer": "Use the current protected Weed owner/category pages."
      }
    ]
  }
};
const MEB01_RESOURCE_ADDITIONS: ResourcePage[] = [
  {
    "slug": "cannabis-101",
    "title": "Cannabis 101: Pick a Lane, Then Read the Details",
    "seoTitle": "Cannabis 101 in Scarborough | Mohawk Medicine",
    "description": "A practical Cannabis 101 guide to menu formats, Weed tiers, THC, genetics, labels and common cannabis slang for adults 19+.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Cannabis 101 should make the menu feel smaller, not bigger.",
    "cards": [
      {
        "title": "First Visit to Mohawk Medicine",
        "href": "/resources/eglinton-east-scarborough-visit-guide",
        "text": "Continue with First Visit to Mohawk Medicine."
      },
      {
        "title": "Mohawk Medicine Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Mohawk Medicine Weed & Flower Quality Guide."
      },
      {
        "title": "Indica vs Sativa vs Hybrid",
        "href": "/resources/cannabis-101/indica-sativa-hybrid",
        "text": "Continue with Indica vs Sativa vs Hybrid."
      },
      {
        "title": "Strain vs Cultivar",
        "href": "/resources/cannabis-101/strain-vs-cultivar",
        "text": "Continue with Strain vs Cultivar."
      },
      {
        "title": "Landrace vs Hybrid",
        "href": "/resources/cannabis-101/landrace-vs-hybrid",
        "text": "Continue with Landrace vs Hybrid."
      },
      {
        "title": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary",
        "text": "Continue with Weed Slang Explained."
      },
      {
        "title": "Mohawk Medicine local store page",
        "href": "/weed-dispensary-toronto",
        "text": "Continue with Mohawk Medicine local store page."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis 101 should make the menu feel smaller, not bigger."
      },
      {
        "type": "p",
        "text": "Mohawk Medicine already separates the menu into clear categories. The easiest way to understand it is to pick one lane first."
      },
      {
        "type": "p",
        "text": "Flower is one lane."
      },
      {
        "type": "p",
        "text": "Pre-rolls are another."
      },
      {
        "type": "p",
        "text": "Edibles, THC vapes and concentrates each have their own format."
      },
      {
        "type": "p",
        "text": "Cigarettes and other tobacco products are a separate category again."
      },
      {
        "type": "p",
        "text": "Once the lane is clear, the vocabulary gets easier."
      },
      {
        "type": "p",
        "text": "Start With Format Flower"
      },
      {
        "type": "p",
        "text": "Flower, bud and Weed are common words for dried cannabis flower."
      },
      {
        "type": "p",
        "text": "Mohawk Medicine organizes flower across five protected Weed owners:"
      },
      {
        "type": "p",
        "text": "Exotic Weed;"
      },
      {
        "type": "p",
        "text": "Premium Weed;"
      },
      {
        "type": "p",
        "text": "AAA+ Weed;"
      },
      {
        "type": "p",
        "text": "AA Weed;"
      },
      {
        "type": "p",
        "text": "Budget Weed."
      },
      {
        "type": "p",
        "text": "Use those owners as the shelf map."
      },
      {
        "type": "p",
        "text": "Then use the current product information to understand the product inside the shelf."
      },
      {
        "type": "h2",
        "text": "Pre-Rolls"
      },
      {
        "type": "p",
        "text": "Pre-rolls are prepared rolls containing cannabis."
      },
      {
        "type": "p",
        "text": "They should be compared as their own format because pack count, total weight and other listing details are different from loose flower."
      },
      {
        "type": "h2",
        "text": "Edibles"
      },
      {
        "type": "p",
        "text": "Edibles are cannabis-containing food or beverage products."
      },
      {
        "type": "p",
        "text": "The package and legal label matter because amount-per-unit and total package information are part of the product."
      },
      {
        "type": "h2",
        "text": "THC Vapes"
      },
      {
        "type": "p",
        "text": "THC vape products use a vaporizer format."
      },
      {
        "type": "p",
        "text": "Keep that lane separate from nicotine-vape categories."
      },
      {
        "type": "h2",
        "text": "Concentrates"
      },
      {
        "type": "p",
        "text": "Concentrates are cannabis products in which cannabis constituents are present in a more concentrated form than dried flower."
      },
      {
        "type": "p",
        "text": "They deserve their own menu lane because the format and label information differ from flower."
      },
      {
        "type": "h2",
        "text": "Weed and Cannabis Are Different Words for Overlapping Context"
      },
      {
        "type": "p",
        "text": "Cannabis is the formal term."
      },
      {
        "type": "p",
        "text": "Weed is everyday language."
      },
      {
        "type": "p",
        "text": "Bud and flower usually refer to dried cannabis flower."
      },
      {
        "type": "p",
        "text": "Nug is slang for an individual piece of flower."
      },
      {
        "type": "p",
        "text": "None of those words is a quality grade."
      },
      {
        "type": "p",
        "text": "They describe what someone is talking about."
      },
      {
        "type": "h2",
        "text": "Flower Tiers Are Navigation"
      },
      {
        "type": "p",
        "text": "Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed help adults narrow the browse."
      },
      {
        "type": "p",
        "text": "They are not one universal Canadian government grading system."
      },
      {
        "type": "p",
        "text": "A tier is useful because it says:"
      },
      {
        "type": "h2",
        "text": "“Start here.”"
      },
      {
        "type": "p",
        "text": "It does not say:"
      },
      {
        "type": "h2",
        "text": "“You now know everything about every product in this section.”"
      },
      {
        "type": "p",
        "text": "The actual product still has its own producer, cultivar, legal label and current listing."
      },
      {
        "type": "h2",
        "text": "THC Is Important but Incomplete"
      },
      {
        "type": "p",
        "text": "THC is important regulated product information."
      },
      {
        "type": "p",
        "text": "It is relevant to intoxicating potency."
      },
      {
        "type": "p",
        "text": "It does not directly score:"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "bud structure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "personal preference."
      },
      {
        "type": "p",
        "text": "Do not let one number do every job."
      },
      {
        "type": "h2",
        "text": "Indica, Sativa and Hybrid Are Familiar Shortcuts"
      },
      {
        "type": "p",
        "text": "Those labels remain common because adults recognize them quickly."
      },
      {
        "type": "p",
        "text": "Modern commercial cannabis has been crossed extensively, so the simple three-box story is imperfect."
      },
      {
        "type": "p",
        "text": "Use the label as one piece of information, not a guaranteed effect prediction."
      },
      {
        "type": "h2",
        "text": "Learn the Slang by Translating It"
      },
      {
        "type": "p",
        "text": "Mohawk Medicine can speak normal Weed language without turning slang into science."
      },
      {
        "type": "p",
        "text": "Gas usually means a fuel-like aroma."
      },
      {
        "type": "p",
        "text": "Loud means the smell is pronounced."
      },
      {
        "type": "p",
        "text": "Frosty points toward visible trichomes."
      },
      {
        "type": "p",
        "text": "Fire means someone considers the product very good."
      },
      {
        "type": "p",
        "text": "Mids means someone considers it middle-of-the-road."
      },
      {
        "type": "p",
        "text": "Quads is common Canadian slang for AAAA."
      },
      {
        "type": "p",
        "text": "Zaza is newer slang associated with premium or exotic-positioned Weed."
      },
      {
        "type": "p",
        "text": "The useful habit is simple:"
      },
      {
        "type": "p",
        "text": "when the word sounds like hype, ask what real characteristic it is describing."
      },
      {
        "type": "h2",
        "text": "Read the Legal Product Information"
      },
      {
        "type": "p",
        "text": "Use the actual package for the regulated product-specific information."
      },
      {
        "type": "p",
        "text": "A menu nickname, image, tier label or old memory should not replace the legal package."
      },
      {
        "type": "h2",
        "text": "Use the Resource Centre for the Deeper Questions"
      },
      {
        "type": "p",
        "text": "From Cannabis 101, adults can move into:"
      },
      {
        "type": "p",
        "text": "flower quality;"
      },
      {
        "type": "p",
        "text": "THC;"
      },
      {
        "type": "p",
        "text": "bag appeal;"
      },
      {
        "type": "p",
        "text": "trichomes;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "drying and curing;"
      },
      {
        "type": "p",
        "text": "bud size;"
      },
      {
        "type": "p",
        "text": "growing methods;"
      },
      {
        "type": "p",
        "text": "genetics;"
      },
      {
        "type": "p",
        "text": "Weed slang."
      },
      {
        "type": "p",
        "text": "That keeps the main guide simple and lets each deeper question have its own owner."
      }
    ],
    "faqs": [
      {
        "question": "Is Weed the same thing as cannabis?",
        "answer": "Weed is common informal language for cannabis."
      },
      {
        "question": "Are Mohawk Medicine's five Weed tiers official government grades?",
        "answer": "No. They are store browsing owners, not one universal government grading system."
      },
      {
        "question": "Does higher THC automatically mean better flower?",
        "answer": "No. THC is one important measurement and does not describe every quality characteristic."
      },
      {
        "question": "Are Indica and Sativa guaranteed effect categories?",
        "answer": "No. They are familiar menu labels, but modern cannabis is heavily crossed and individual response varies."
      },
      {
        "question": "Where should I check current products and prices?",
        "answer": "Use the current category and product pages. Educational resources should not be treated as live inventory or price promises."
      }
    ]
  },
  {
    "slug": "flower-guides/what-does-good-weed-mean",
    "title": "What Does “Good Weed” Actually Mean?",
    "seoTitle": "What Does Good Weed Mean? | Mohawk Medicine Scarborough",
    "description": "Good weed is more than THC. Learn how aroma, cure, trichomes, freshness, structure and preference shape cannabis flower quality.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "“Good weed” is not one official grade.",
    "cards": [
      {
        "title": "Mohawk Medicine Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Mohawk Medicine Weed & Flower Quality Guide."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      },
      {
        "title": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal",
        "text": "Continue with Bag Appeal."
      },
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "“Good weed” is not one official grade."
      },
      {
        "type": "p",
        "text": "It is shorthand for a mix of things people care about."
      },
      {
        "type": "p",
        "text": "One adult may mean strong aroma."
      },
      {
        "type": "p",
        "text": "Another may mean clean trim."
      },
      {
        "type": "p",
        "text": "Another may mean frosty-looking buds, good freshness, a cultivar they already like, or simply good value."
      },
      {
        "type": "p",
        "text": "That is why the most useful question is not:"
      },
      {
        "type": "h2",
        "text": "“Is this good weed?”"
      },
      {
        "type": "p",
        "text": "It is:"
      },
      {
        "type": "h2",
        "text": "“What makes it good to you?”"
      },
      {
        "type": "h2",
        "text": "Aroma"
      },
      {
        "type": "p",
        "text": "Aroma is one of the first things people notice."
      },
      {
        "type": "p",
        "text": "Cannabis can be described as:"
      },
      {
        "type": "p",
        "text": "gassy;"
      },
      {
        "type": "p",
        "text": "fruity;"
      },
      {
        "type": "p",
        "text": "skunky;"
      },
      {
        "type": "p",
        "text": "citrusy;"
      },
      {
        "type": "p",
        "text": "earthy;"
      },
      {
        "type": "p",
        "text": "piney;"
      },
      {
        "type": "p",
        "text": "sweet;"
      },
      {
        "type": "p",
        "text": "floral."
      },
      {
        "type": "p",
        "text": "Those words describe smell."
      },
      {
        "type": "p",
        "text": "They do not automatically prove potency or quality on their own."
      },
      {
        "type": "h2",
        "text": "Trichomes"
      },
      {
        "type": "p",
        "text": "Trichomes are small resin-producing structures on the cannabis plant."
      },
      {
        "type": "p",
        "text": "Visible coverage can make flower look frosty or sparkly."
      },
      {
        "type": "p",
        "text": "That can be a useful visual clue."
      },
      {
        "type": "p",
        "text": "It is not an exact THC measurement."
      },
      {
        "type": "h2",
        "text": "Trim and Structure"
      },
      {
        "type": "p",
        "text": "People often notice:"
      },
      {
        "type": "p",
        "text": "bud shape;"
      },
      {
        "type": "p",
        "text": "density;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "colour;"
      },
      {
        "type": "p",
        "text": "how intact the flower looks."
      },
      {
        "type": "p",
        "text": "Those details affect bag appeal."
      },
      {
        "type": "p",
        "text": "They do not tell you the whole freshness, chemistry or cure story."
      },
      {
        "type": "h2",
        "text": "Drying and Curing"
      },
      {
        "type": "p",
        "text": "Quality can change after harvest."
      },
      {
        "type": "p",
        "text": "Drying reduces moisture."
      },
      {
        "type": "p",
        "text": "Curing is part of controlled post-harvest conditioning."
      },
      {
        "type": "p",
        "text": "Poor handling can weaken aroma, texture and storage quality even when the plant was grown well."
      },
      {
        "type": "h2",
        "text": "Freshness"
      },
      {
        "type": "p",
        "text": "Freshness does not mean wetness."
      },
      {
        "type": "p",
        "text": "Overly dry flower can become brittle."
      },
      {
        "type": "p",
        "text": "Excess moisture creates different storage concerns."
      },
      {
        "type": "p",
        "text": "The useful goal is balanced, appropriate post-harvest handling."
      },
      {
        "type": "h2",
        "text": "THC"
      },
      {
        "type": "p",
        "text": "THC is important regulated information."
      },
      {
        "type": "p",
        "text": "It matters to intoxicating potency."
      },
      {
        "type": "p",
        "text": "It does not directly score:"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "bud size;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "personal preference."
      },
      {
        "type": "h2",
        "text": "That is why a higher THC number should not automatically be called “better weed.”"
      },
      {
        "type": "h2",
        "text": "Cultivar and Producer"
      },
      {
        "type": "p",
        "text": "Cultivar names can help identify a product."
      },
      {
        "type": "p",
        "text": "They do not guarantee every producer's version will look, smell or feel identical."
      },
      {
        "type": "p",
        "text": "Genetics interact with cultivation and post-harvest handling."
      },
      {
        "type": "p",
        "text": "The finished product still has to be judged from the actual product information."
      },
      {
        "type": "h2",
        "text": "Personal Preference"
      },
      {
        "type": "p",
        "text": "Good weed can mean different things to different adults."
      },
      {
        "type": "p",
        "text": "Someone starting with value may browse Budget Weed."
      },
      {
        "type": "p",
        "text": "Someone else may care more about aroma."
      },
      {
        "type": "p",
        "text": "Someone else may want a specific cultivar."
      },
      {
        "type": "p",
        "text": "Someone else may care about appearance or freshness."
      },
      {
        "type": "p",
        "text": "A useful resource helps people identify the characteristic they care about instead of pretending there is one universal answer."
      }
    ],
    "faqs": [
      {
        "question": "Does high THC mean good weed?",
        "answer": "Not by itself. THC is one important measurement and does not describe every quality characteristic."
      },
      {
        "question": "What does “fire weed” mean?",
        "answer": "It is slang for cannabis someone considers very good. The exact reason is subjective."
      },
      {
        "question": "Does frosty weed mean stronger weed?",
        "answer": "Visible frost usually points to trichomes, but appearance alone does not provide an exact potency reading."
      },
      {
        "question": "Is expensive weed always better?",
        "answer": "No. Price can reflect many factors and is not a universal quality score."
      },
      {
        "question": "What should I compare when looking at flower?",
        "answer": "Adults may compare the legal label, cultivar, producer, THC/CBD, aroma, trim, structure, trichomes, moisture, cure and freshness where information is available."
      }
    ]
  },
  {
    "slug": "flower-guides/top-shelf-mids-quads",
    "title": "Top Shelf, Mids, Quads, AAAA and AAA: What Are People Really Saying?",
    "seoTitle": "Top Shelf vs Mids vs Quads | Weed Grades Explained",
    "description": "Top shelf, mids, quads, AAAA, AAA and AA are common Weed terms, not one official grading system. Learn what the labels usually describe.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Weed grade language sounds official because the words are repeated so often.",
    "cards": [
      {
        "title": "Exotic Weed",
        "href": "/exotic-weed",
        "text": "Continue with Exotic Weed."
      },
      {
        "title": "Premium Weed",
        "href": "/premium-weed",
        "text": "Continue with Premium Weed."
      },
      {
        "title": "AAA+ Weed",
        "href": "/aaa-weed",
        "text": "Continue with AAA+ Weed."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "Continue with AA Weed."
      },
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "Continue with Budget Weed."
      },
      {
        "title": "Mohawk Medicine Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Mohawk Medicine Weed & Flower Quality Guide."
      },
      {
        "title": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary",
        "text": "Continue with Weed Slang Explained."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Weed grade language sounds official because the words are repeated so often."
      },
      {
        "type": "p",
        "text": "Top shelf."
      },
      {
        "type": "p",
        "text": "Mids."
      },
      {
        "type": "p",
        "text": "Quads."
      },
      {
        "type": "p",
        "text": "AAAA."
      },
      {
        "type": "p",
        "text": "AAA."
      },
      {
        "type": "p",
        "text": "AA."
      },
      {
        "type": "p",
        "text": "Premium."
      },
      {
        "type": "p",
        "text": "Exotic."
      },
      {
        "type": "p",
        "text": "The important thing to know is that these terms do not come from one universal Canadian grading authority."
      },
      {
        "type": "p",
        "text": "They are retail and culture language."
      },
      {
        "type": "p",
        "text": "They can still be useful when you understand what they are trying to describe."
      },
      {
        "type": "h2",
        "text": "Top Shelf"
      },
      {
        "type": "p",
        "text": "Top shelf generally means premium positioning."
      },
      {
        "type": "p",
        "text": "A person using the phrase may be reacting to:"
      },
      {
        "type": "p",
        "text": "appearance;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "genetics;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "rarity;"
      },
      {
        "type": "p",
        "text": "price;"
      },
      {
        "type": "p",
        "text": "overall presentation."
      },
      {
        "type": "p",
        "text": "Because the term is broad, it is better treated as a signal than a technical grade."
      },
      {
        "type": "h2",
        "text": "Mids"
      },
      {
        "type": "p",
        "text": "Mids means someone considers the flower middle-of-the-road."
      },
      {
        "type": "p",
        "text": "The reason can vary."
      },
      {
        "type": "p",
        "text": "Maybe the aroma is mild."
      },
      {
        "type": "p",
        "text": "Maybe the presentation is average."
      },
      {
        "type": "p",
        "text": "Maybe the product sits in the middle of a value comparison."
      },
      {
        "type": "p",
        "text": "Because the term is subjective, ask what characteristic the person actually means."
      },
      {
        "type": "h2",
        "text": "Quads / AAAA"
      },
      {
        "type": "p",
        "text": "Quads is common Canadian slang for AAAA."
      },
      {
        "type": "p",
        "text": "It generally signals premium positioning."
      },
      {
        "type": "p",
        "text": "It is not a government grade with one required THC range, bud size or terpene level."
      },
      {
        "type": "p",
        "text": "Different sellers can use the label differently."
      },
      {
        "type": "h2",
        "text": "AAA and AAA+"
      },
      {
        "type": "p",
        "text": "AAA is familiar cannabis retail shorthand."
      },
      {
        "type": "p",
        "text": "AAA+ suggests something positioned slightly above a normal AAA label."
      },
      {
        "type": "p",
        "text": "Mohawk Medicine's protected owner is:"
      },
      {
        "type": "h2",
        "text": "AAA+ Weed → /aaa-weed"
      },
      {
        "type": "p",
        "text": "Use that page for the current AAA+ collection."
      },
      {
        "type": "p",
        "text": "Use this resource for the language."
      },
      {
        "type": "h2",
        "text": "AA"
      },
      {
        "type": "p",
        "text": "AA is another familiar grade shorthand."
      },
      {
        "type": "p",
        "text": "Mohawk Medicine's protected owner is:"
      },
      {
        "type": "h2",
        "text": "AA Weed → /aa-weed"
      },
      {
        "type": "p",
        "text": "The tier helps organize the browse."
      },
      {
        "type": "p",
        "text": "It does not tell the full product story."
      },
      {
        "type": "h2",
        "text": "Premium and Exotic"
      },
      {
        "type": "p",
        "text": "Premium is broad quality-positioning language."
      },
      {
        "type": "p",
        "text": "Exotic can suggest unusual genetics, distinctive aroma, rarity or high-end presentation."
      },
      {
        "type": "p",
        "text": "Neither is an official government grade."
      },
      {
        "type": "p",
        "text": "At Mohawk Medicine, both are protected commercial owners with distinct roles."
      },
      {
        "type": "h2",
        "text": "Why the Words Still Work"
      },
      {
        "type": "p",
        "text": "They are fast."
      },
      {
        "type": "p",
        "text": "A shopper can say:"
      },
      {
        "type": "h2",
        "text": "“I am comparing AA and AAA+.”"
      },
      {
        "type": "p",
        "text": "or:"
      },
      {
        "type": "h2",
        "text": "“I want to understand the higher-tier collections.”"
      },
      {
        "type": "p",
        "text": "and immediately narrow the conversation."
      },
      {
        "type": "p",
        "text": "The shortcut becomes a problem only when the nickname replaces the actual product information."
      },
      {
        "type": "h2",
        "text": "THC Is Not the Grade"
      },
      {
        "type": "p",
        "text": "Higher THC does not automatically equal a higher grade."
      },
      {
        "type": "p",
        "text": "THC is one important measurement."
      },
      {
        "type": "p",
        "text": "Quality language often includes things THC does not directly measure:"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "structure;"
      },
      {
        "type": "p",
        "text": "trichome appearance."
      },
      {
        "type": "p",
        "text": "Keep the number and the grade language separate."
      }
    ],
    "faqs": [
      {
        "question": "What are quads?",
        "answer": "Quads is common Canadian slang for AAAA, usually implying premium positioning."
      },
      {
        "question": "What does mids mean?",
        "answer": "Mids is informal language for cannabis someone considers average or middle-tier."
      },
      {
        "question": "Is top shelf the same as Exotic Weed?",
        "answer": "Not necessarily. They can overlap in premium positioning, but the terms are not identical."
      },
      {
        "question": "Does AAAA require a certain THC percentage?",
        "answer": "No universal rule ties AAAA to one THC percentage."
      },
      {
        "question": "Are Mohawk Medicine's Weed-tier names changing?",
        "answer": "No. Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed remain the protected owners."
      }
    ]
  },
  {
    "slug": "flower-guides/thc-vs-weed-quality",
    "title": "Does Higher THC Mean Better Weed?",
    "seoTitle": "THC vs Weed Quality | Mohawk Medicine",
    "description": "THC is important label information, but it is not a complete flower-quality score. Learn what else adults may compare.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "THC is one of the easiest numbers to compare on a cannabis product.",
    "cards": [
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Weed & Flower Quality Guide."
      },
      {
        "title": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
        "text": "Continue with Gas, Loud & Terpy."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "THC is one of the easiest numbers to compare on a cannabis product."
      },
      {
        "type": "p",
        "text": "That makes it useful."
      },
      {
        "type": "p",
        "text": "It also makes it easy to overvalue."
      },
      {
        "type": "p",
        "text": "THC matters to intoxicating potency."
      },
      {
        "type": "p",
        "text": "It does not automatically tell you whether one flower is better than another in every other way."
      },
      {
        "type": "h2",
        "text": "What THC Tells You"
      },
      {
        "type": "p",
        "text": "The legal product information tells you about THC in the specific product."
      },
      {
        "type": "p",
        "text": "That is important."
      },
      {
        "type": "p",
        "text": "It does not directly tell you:"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "bud structure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "cultivar preference."
      },
      {
        "type": "p",
        "text": "Those are separate characteristics."
      },
      {
        "type": "h2",
        "text": "Why the Bigger Number Wins Too Much Attention"
      },
      {
        "type": "p",
        "text": "Numbers feel objective."
      },
      {
        "type": "p",
        "text": "If one package shows a bigger THC value, it is easy to assume the decision is finished."
      },
      {
        "type": "p",
        "text": "Cannabis flower is more complicated than that."
      },
      {
        "type": "p",
        "text": "Two flowers can have similar THC values and still look, smell and handle differently."
      },
      {
        "type": "h2",
        "text": "Aroma and THC Are Different"
      },
      {
        "type": "p",
        "text": "A flower can be very aromatic without being the highest-THC product on a menu."
      },
      {
        "type": "p",
        "text": "A high-THC product can be less aromatic."
      },
      {
        "type": "p",
        "text": "That is not a contradiction."
      },
      {
        "type": "p",
        "text": "It means aroma and THC are different dimensions."
      },
      {
        "type": "h2",
        "text": "Trichomes and THC Are Different"
      },
      {
        "type": "p",
        "text": "Visible trichomes can make flower look frosty."
      },
      {
        "type": "p",
        "text": "You still cannot look at a photo and read an exact THC percentage."
      },
      {
        "type": "p",
        "text": "Use the legal product information for the number."
      },
      {
        "type": "p",
        "text": "Use visual inspection only for the visible characteristic."
      },
      {
        "type": "h2",
        "text": "Post-Harvest Handling Is Different"
      },
      {
        "type": "p",
        "text": "Drying, curing, packaging and storage affect finished flower."
      },
      {
        "type": "p",
        "text": "A high THC number cannot tell you whether a product has become brittle, lost aroma or been poorly stored."
      },
      {
        "type": "h2",
        "text": "Higher THC Is Not Always the Better Goal"
      },
      {
        "type": "p",
        "text": "Maximum potency should not be presented as the default best choice."
      },
      {
        "type": "p",
        "text": "Higher-THC products can also increase the likelihood of unwanted effects."
      },
      {
        "type": "p",
        "text": "Adults should use the product information to make an informed choice rather than treating the biggest number as a score."
      },
      {
        "type": "h2",
        "text": "Tier and THC Are Different Systems"
      },
      {
        "type": "p",
        "text": "Mohawk Medicine's five Weed owners are retail/menu categories."
      },
      {
        "type": "p",
        "text": "THC is product-specific regulated information."
      },
      {
        "type": "p",
        "text": "Do not convert those tiers into THC brackets."
      },
      {
        "type": "p",
        "text": "A higher tier does not guarantee one THC range."
      },
      {
        "type": "p",
        "text": "A higher THC number does not automatically mean a higher tier."
      }
    ],
    "faqs": [
      {
        "question": "Does higher THC mean stronger cannabis?",
        "answer": "THC is relevant to intoxicating potency, but it still does not describe every quality characteristic."
      },
      {
        "question": "Does higher THC mean a higher Weed tier?",
        "answer": "Not automatically. Retail tiers and product THC are different pieces of information."
      },
      {
        "question": "Can two products with similar THC feel different?",
        "answer": "Yes. Products can differ in other cannabinoids, terpene profiles, format and individual response."
      },
      {
        "question": "Should a beginner choose the highest THC?",
        "answer": "No. Maximum potency should not be treated as the default goal."
      },
      {
        "question": "Where should I check the actual THC amount?",
        "answer": "Use the legal product information for the specific package."
      }
    ]
  },
  {
    "slug": "flower-guides/bag-appeal",
    "title": "Bag Appeal: What Your Eyes Notice First",
    "seoTitle": "Cannabis Bag Appeal Explained | Mohawk Medicine",
    "description": "Learn what bag appeal means, what visual clues people notice in Weed, and why looks alone cannot prove cannabis flower quality.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Bag appeal is Weed slang for first visual impression.",
    "cards": [
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "Smalls vs Big Buds",
        "href": "/resources/flower-guides/smalls-vs-big-buds",
        "text": "Continue with Smalls vs Big Buds."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Bag appeal is Weed slang for first visual impression."
      },
      {
        "type": "p",
        "text": "Before someone thinks about cure, THC or aroma, they usually notice how the flower looks."
      },
      {
        "type": "p",
        "text": "That first look can be useful."
      },
      {
        "type": "p",
        "text": "It should not be asked to answer every question."
      },
      {
        "type": "h2",
        "text": "What People Notice"
      },
      {
        "type": "p",
        "text": "Bag appeal often includes:"
      },
      {
        "type": "p",
        "text": "bud shape;"
      },
      {
        "type": "p",
        "text": "density;"
      },
      {
        "type": "p",
        "text": "colour;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "bud size;"
      },
      {
        "type": "p",
        "text": "how intact the flower looks."
      },
      {
        "type": "p",
        "text": "Large, tidy, frosty buds often make a strong first impression."
      },
      {
        "type": "p",
        "text": "That does not make every smaller or less-photogenic bud low quality."
      },
      {
        "type": "h2",
        "text": "Colour Is Not a Grade"
      },
      {
        "type": "p",
        "text": "Cannabis can show different shades of green, purple, orange and other plant colours."
      },
      {
        "type": "p",
        "text": "Colour can reflect genetics, pigments, growing conditions and maturity."
      },
      {
        "type": "p",
        "text": "Purple does not automatically mean stronger."
      },
      {
        "type": "p",
        "text": "Bright green does not automatically mean fresher."
      },
      {
        "type": "p",
        "text": "Colour is descriptive."
      },
      {
        "type": "h2",
        "text": "Frost Can Be Exaggerated by Photography"
      },
      {
        "type": "p",
        "text": "Visible trichomes can make flower sparkle."
      },
      {
        "type": "p",
        "text": "Close-up photography, bright lighting and sharpening can make those trichomes look more dramatic."
      },
      {
        "type": "p",
        "text": "A product photo can show presentation."
      },
      {
        "type": "p",
        "text": "It cannot replace legal product information."
      },
      {
        "type": "h2",
        "text": "Trim Changes Presentation"
      },
      {
        "type": "p",
        "text": "A tighter trim can make flower look more defined."
      },
      {
        "type": "p",
        "text": "A looser trim can leave more small leaf material."
      },
      {
        "type": "p",
        "text": "Neither tells you the exact THC number."
      },
      {
        "type": "h2",
        "text": "Bigger Buds Are More Photogenic"
      },
      {
        "type": "p",
        "text": "Large buds often display the flower structure clearly."
      },
      {
        "type": "p",
        "text": "Smalls can come from the same plant or batch."
      },
      {
        "type": "p",
        "text": "Size can affect presentation and sometimes price positioning, but it is not a universal potency grade."
      },
      {
        "type": "h2",
        "text": "Photos Cannot Show Moisture"
      },
      {
        "type": "p",
        "text": "A flower can look excellent and still be brittle."
      },
      {
        "type": "p",
        "text": "A picture cannot tell you the full moisture or storage history."
      },
      {
        "type": "p",
        "text": "That is why bag appeal belongs beside freshness and curing, not above them."
      }
    ],
    "faqs": [
      {
        "question": "What does bag appeal mean?",
        "answer": "It means the visual first impression of cannabis flower."
      },
      {
        "question": "Do purple buds mean better Weed?",
        "answer": "No. Colour is not a universal quality grade."
      },
      {
        "question": "Are large buds stronger than small buds?",
        "answer": "Bud size alone does not prove potency."
      },
      {
        "question": "Does more visible frost always mean higher THC?",
        "answer": "No. Visible trichomes are one clue, not an exact potency measurement."
      },
      {
        "question": "Can product photos be misleading?",
        "answer": "Lighting, magnification and editing can change how colour and trichomes appear."
      }
    ]
  },
  {
    "slug": "flower-guides/trichomes-frosty-weed",
    "title": "Frosty Weed: What Those “Crystals” Really Are",
    "seoTitle": "Frosty Weed & Trichomes Explained | Mohawk Medicine",
    "description": "Learn what cannabis trichomes are, why flower can look frosty and why visible resin is only one quality clue.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "When people say Weed looks frosty, they are usually talking about visible trichomes.",
    "cards": [
      {
        "title": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal",
        "text": "Continue with Bag Appeal."
      },
      {
        "title": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
        "text": "Continue with Gas, Loud & Terpy."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "When people say Weed looks frosty, they are usually talking about visible trichomes."
      },
      {
        "type": "p",
        "text": "Trichomes are tiny structures on the cannabis plant associated with resin production."
      },
      {
        "type": "p",
        "text": "Dense visible coverage can create the sparkly or crystal-like surface adults often call frost."
      },
      {
        "type": "h2",
        "text": "Why Trichomes Get Attention"
      },
      {
        "type": "p",
        "text": "They are easy to see."
      },
      {
        "type": "p",
        "text": "They photograph well."
      },
      {
        "type": "p",
        "text": "They are associated with compounds people care about in cannabis."
      },
      {
        "type": "p",
        "text": "That makes them a strong quality signal in cannabis culture."
      },
      {
        "type": "p",
        "text": "The signal is still only one part of the product."
      },
      {
        "type": "h2",
        "text": "Frosty Does Not Mean Automatically Better"
      },
      {
        "type": "p",
        "text": "A frosty bud still has:"
      },
      {
        "type": "p",
        "text": "a producer;"
      },
      {
        "type": "p",
        "text": "a cultivar;"
      },
      {
        "type": "p",
        "text": "a cure;"
      },
      {
        "type": "p",
        "text": "a moisture level;"
      },
      {
        "type": "p",
        "text": "a storage history;"
      },
      {
        "type": "p",
        "text": "actual regulated THC/CBD information."
      },
      {
        "type": "p",
        "text": "The visible frost does not replace those details."
      },
      {
        "type": "h2",
        "text": "Trichomes Can Be Damaged"
      },
      {
        "type": "p",
        "text": "Handling and processing can damage or remove some trichomes."
      },
      {
        "type": "p",
        "text": "Two buds can begin with similar resin development and end up looking different after different handling."
      },
      {
        "type": "h2",
        "text": "A Photo Is Not a THC Test"
      },
      {
        "type": "p",
        "text": "Visible trichomes do not provide an exact THC number."
      },
      {
        "type": "p",
        "text": "Use the legal product information for the actual THC amount."
      },
      {
        "type": "h2",
        "text": "Trichomes and Aroma Connect, but They Are Not the Same Thing"
      },
      {
        "type": "p",
        "text": "Aromatic compounds including terpenes are associated with glandular structures on the plant."
      },
      {
        "type": "p",
        "text": "That helps explain why trichomes and aroma are often discussed together."
      },
      {
        "type": "p",
        "text": "It does not mean the frostiest-looking flower must be the loudest-smelling one."
      },
      {
        "type": "h2",
        "text": "Storage Still Matters"
      },
      {
        "type": "p",
        "text": "Heat, light, air, dryness and handling can influence the finished flower."
      },
      {
        "type": "p",
        "text": "The plant may have been grown well, but quality preservation continues after harvest."
      }
    ],
    "faqs": [
      {
        "question": "What are cannabis trichomes?",
        "answer": "They are small resin-producing structures on the cannabis plant."
      },
      {
        "question": "Does frosty Weed always have higher THC?",
        "answer": "No. Visible trichomes do not provide an exact THC measurement."
      },
      {
        "question": "Can trichomes be damaged?",
        "answer": "Yes. Processing and handling can damage or remove some trichomes."
      },
      {
        "question": "Do trichomes relate to aroma?",
        "answer": "Aromatic compounds including terpenes are associated with glandular structures, but aroma depends on the full product and its handling."
      },
      {
        "question": "How do I know the actual THC amount?",
        "answer": "Use the legal product information for the package."
      }
    ]
  },
  {
    "slug": "flower-guides/terpenes-gas-loud-aroma",
    "title": "Gas, Loud, Terpy: Translating Cannabis Aroma",
    "seoTitle": "Gas, Loud & Terpy Weed | Cannabis Aroma Explained",
    "description": "Learn what terpenes are and what Weed slang such as gas, loud, skunky, fruity and terpy usually means when people describe cannabis aroma.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Cannabis aroma has both technical words and street words.",
    "cards": [
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      },
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      },
      {
        "title": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary",
        "text": "Continue with Weed Slang Explained."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis aroma has both technical words and street words."
      },
      {
        "type": "p",
        "text": "Terpenes are part of the technical side."
      },
      {
        "type": "p",
        "text": "Gas, loud, skunky, fruity and terpy are part of the everyday side."
      },
      {
        "type": "p",
        "text": "They can describe the same product from different angles."
      },
      {
        "type": "h2",
        "text": "Terpenes"
      },
      {
        "type": "p",
        "text": "Terpenes are aromatic compounds found in many plants, including cannabis."
      },
      {
        "type": "p",
        "text": "They contribute to smell and flavour."
      },
      {
        "type": "p",
        "text": "Different products can contain different terpene profiles."
      },
      {
        "type": "p",
        "text": "If exact terpene information matters, use information actually provided for the product."
      },
      {
        "type": "p",
        "text": "Do not guess a terpene profile from a cultivar name."
      },
      {
        "type": "h2",
        "text": "Gas"
      },
      {
        "type": "p",
        "text": "Gas usually describes a fuel-like, diesel-like or sharp pungent aroma."
      },
      {
        "type": "p",
        "text": "Some adults use it more broadly for any strong Weed smell."
      },
      {
        "type": "p",
        "text": "It is an aroma description."
      },
      {
        "type": "p",
        "text": "It is not an official quality grade."
      },
      {
        "type": "h2",
        "text": "Loud"
      },
      {
        "type": "p",
        "text": "Loud usually means the aroma is pronounced."
      },
      {
        "type": "p",
        "text": "It does not tell you the exact aroma family."
      },
      {
        "type": "p",
        "text": "A loud product can be gassy, fruity, skunky, floral or earthy."
      },
      {
        "type": "h2",
        "text": "Terpy"
      },
      {
        "type": "p",
        "text": "Terpy is slang suggesting a noticeable aroma or flavour profile associated with terpenes."
      },
      {
        "type": "p",
        "text": "It does not identify exact terpene content unless that information is actually provided."
      },
      {
        "type": "p",
        "text": "It also should not be used as a guaranteed-effect claim."
      },
      {
        "type": "p",
        "text": "Common Aroma Language Citrus"
      },
      {
        "type": "p",
        "text": "Lemon, lime, orange or grapefruit-like impressions."
      },
      {
        "type": "h2",
        "text": "Fruity"
      },
      {
        "type": "p",
        "text": "Berry, grape, tropical and other fruit-like impressions."
      },
      {
        "type": "h2",
        "text": "Skunky"
      },
      {
        "type": "p",
        "text": "A sharp, pungent cannabis descriptor."
      },
      {
        "type": "h2",
        "text": "Earthy"
      },
      {
        "type": "p",
        "text": "Soil-like, woody, herbal or musky impressions."
      },
      {
        "type": "h2",
        "text": "Pine"
      },
      {
        "type": "p",
        "text": "Forest-like, resinous or needle-like notes."
      },
      {
        "type": "h2",
        "text": "Sweet / Creamy"
      },
      {
        "type": "p",
        "text": "Dessert-like or softer aromatic impressions."
      },
      {
        "type": "p",
        "text": "These are descriptions, not effect guarantees."
      },
      {
        "type": "h2",
        "text": "Aroma Can Change"
      },
      {
        "type": "p",
        "text": "Drying, curing, packaging, storage temperature, air and time can influence volatile aromatic compounds."
      },
      {
        "type": "p",
        "text": "That is why two products with the same familiar cultivar name may not smell identical."
      },
      {
        "type": "h2",
        "text": "Strong Smell Does Not Equal High THC"
      },
      {
        "type": "p",
        "text": "A very aromatic flower does not automatically have the highest THC."
      },
      {
        "type": "p",
        "text": "A high-THC flower does not automatically have the strongest aroma."
      },
      {
        "type": "p",
        "text": "Keep those characteristics separate."
      }
    ],
    "faqs": [
      {
        "question": "What does gas mean in Weed slang?",
        "answer": "Usually a fuel-like, diesel-like or strong pungent aroma impression."
      },
      {
        "question": "What does loud mean?",
        "answer": "Usually that the cannabis aroma is pronounced."
      },
      {
        "question": "What does terpy mean?",
        "answer": "Slang for a noticeable aroma or flavour profile associated with terpenes."
      },
      {
        "question": "Does strong smell mean high THC?",
        "answer": "No. Aroma intensity and THC are different characteristics."
      },
      {
        "question": "Do terpene names guarantee effects?",
        "answer": "No. This guide uses terpene language to explain aroma, not to promise effects."
      }
    ]
  },
  {
    "slug": "flower-guides/drying-curing-freshness",
    "title": "Drying, Curing and Freshness: What Happens After Harvest",
    "seoTitle": "Drying, Curing & Cannabis Freshness | Mohawk Medicine",
    "description": "Learn how drying, curing, moisture, packaging, storage and time can change the way cannabis flower feels and smells after harvest.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Growing cannabis is only part of the flower-quality story.",
    "cards": [
      {
        "title": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
        "text": "Continue with Gas, Loud & Terpy."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      },
      {
        "title": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal",
        "text": "Continue with Bag Appeal."
      },
      {
        "title": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
        "text": "Continue with BC Grown / Indoor / Hydro / Outdoor."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Growing cannabis is only part of the flower-quality story."
      },
      {
        "type": "p",
        "text": "Once the plant is harvested, the flower still has to be dried, conditioned, packaged and stored."
      },
      {
        "type": "p",
        "text": "Those steps can affect:"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "texture;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "how intact the flower remains;"
      },
      {
        "type": "p",
        "text": "how the product handles over time."
      },
      {
        "type": "p",
        "text": "A well-grown plant can still lose desirable qualities if the post-harvest work is poor."
      },
      {
        "type": "h2",
        "text": "Drying Reduces Moisture"
      },
      {
        "type": "p",
        "text": "Freshly harvested cannabis contains substantial moisture."
      },
      {
        "type": "p",
        "text": "Drying reduces that moisture so the flower can be handled and stored appropriately."
      },
      {
        "type": "p",
        "text": "The goal is not simply to make the flower dry as quickly as possible."
      },
      {
        "type": "p",
        "text": "Drying conditions matter."
      },
      {
        "type": "p",
        "text": "Heat, airflow, timing and moisture management can influence the finished product."
      },
      {
        "type": "h2",
        "text": "Curing Is Post-Harvest Conditioning"
      },
      {
        "type": "p",
        "text": "Curing is a broad term for controlled conditioning after initial drying."
      },
      {
        "type": "p",
        "text": "Exact methods vary between producers."
      },
      {
        "type": "p",
        "text": "There is no one universal curing recipe."
      },
      {
        "type": "p",
        "text": "The useful idea is that flower keeps changing after harvest, and careful handling can help preserve desirable characteristics."
      },
      {
        "type": "h2",
        "text": "Too Dry Changes the Product"
      },
      {
        "type": "p",
        "text": "Overly dry flower can:"
      },
      {
        "type": "p",
        "text": "become brittle;"
      },
      {
        "type": "p",
        "text": "crumble more easily;"
      },
      {
        "type": "p",
        "text": "lose aroma faster;"
      },
      {
        "type": "p",
        "text": "handle differently."
      },
      {
        "type": "p",
        "text": "That does not mean every dry-feeling product is unsafe."
      },
      {
        "type": "p",
        "text": "It means moisture is one real quality characteristic."
      },
      {
        "type": "h2",
        "text": "Too Much Moisture Is Not the Goal Either"
      },
      {
        "type": "p",
        "text": "Fresh does not mean wet."
      },
      {
        "type": "p",
        "text": "Excess moisture creates different storage and handling concerns."
      },
      {
        "type": "p",
        "text": "A better way to think about freshness is balanced post-harvest handling, not maximum moisture."
      },
      {
        "type": "h2",
        "text": "Aroma Can Change Over Time"
      },
      {
        "type": "p",
        "text": "Terpenes and other aromatic compounds are volatile."
      },
      {
        "type": "p",
        "text": "Heat, air, time and storage conditions can influence how much aroma remains."
      },
      {
        "type": "p",
        "text": "A product known for a strong smell may present differently after different storage histories."
      },
      {
        "type": "h2",
        "text": "Packaging and Storage Matter"
      },
      {
        "type": "p",
        "text": "Once cannabis is packaged, time still passes."
      },
      {
        "type": "p",
        "text": "Light, oxygen, heat and repeated handling can influence the flower."
      },
      {
        "type": "p",
        "text": "Adults should follow the storage guidance provided with the product and keep cannabis secured away from children and pets."
      },
      {
        "type": "h2",
        "text": "A Photo Cannot Tell You Freshness"
      },
      {
        "type": "p",
        "text": "A photo can show:"
      },
      {
        "type": "p",
        "text": "colour;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "bud structure."
      },
      {
        "type": "p",
        "text": "It cannot reliably show:"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "brittleness;"
      },
      {
        "type": "p",
        "text": "package age;"
      },
      {
        "type": "p",
        "text": "complete storage history."
      },
      {
        "type": "p",
        "text": "That is why bag appeal and freshness belong in separate parts of the quality conversation."
      },
      {
        "type": "h2",
        "text": "The Quality Chain"
      },
      {
        "type": "p",
        "text": "A simple way to think about finished flower:"
      },
      {
        "type": "h2",
        "text": "genetics → cultivation → harvest → drying → curing → packaging → storage"
      },
      {
        "type": "p",
        "text": "A weak point late in the chain can change the final product even when the earlier steps were strong."
      }
    ],
    "faqs": [
      {
        "question": "What is cannabis drying?",
        "answer": "It is the post-harvest process of reducing moisture in harvested cannabis."
      },
      {
        "question": "What is curing?",
        "answer": "Curing is a broad term for controlled post-drying conditioning."
      },
      {
        "question": "Can drying affect aroma?",
        "answer": "Yes. Post-harvest conditions can influence volatile aromatic compounds."
      },
      {
        "question": "Does fresh Weed mean wet Weed?",
        "answer": "No. Freshness and excessive moisture are not the same thing."
      },
      {
        "question": "Can a product photo show freshness?",
        "answer": "Not reliably. A photo cannot measure moisture or show full storage history."
      }
    ]
  },
  {
    "slug": "flower-guides/smalls-vs-big-buds",
    "title": "Smalls vs Big Buds: Size Is Not the Whole Grade",
    "seoTitle": "Smalls vs Big Buds | Does Cannabis Bud Size Matter?",
    "description": "Smalls and larger buds can come from the same plant or batch. Learn what bud size can tell you and what it cannot.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Big buds get attention because they are easy to notice.",
    "cards": [
      {
        "title": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal",
        "text": "Continue with Bag Appeal."
      },
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Big buds get attention because they are easy to notice."
      },
      {
        "type": "p",
        "text": "Smalls are easier to underestimate because they are less dramatic."
      },
      {
        "type": "p",
        "text": "Bud size can affect presentation."
      },
      {
        "type": "p",
        "text": "It does not automatically tell you potency or overall quality."
      },
      {
        "type": "h2",
        "text": "Why Bud Sizes Differ"
      },
      {
        "type": "p",
        "text": "A cannabis plant does not produce identical flowers in every position."
      },
      {
        "type": "p",
        "text": "Bud size can be influenced by:"
      },
      {
        "type": "p",
        "text": "genetics;"
      },
      {
        "type": "p",
        "text": "plant structure;"
      },
      {
        "type": "p",
        "text": "position on the plant;"
      },
      {
        "type": "p",
        "text": "light exposure;"
      },
      {
        "type": "p",
        "text": "cultivation conditions;"
      },
      {
        "type": "p",
        "text": "trimming;"
      },
      {
        "type": "p",
        "text": "handling;"
      },
      {
        "type": "p",
        "text": "packaging."
      },
      {
        "type": "p",
        "text": "That means small buds are not automatically a different cultivar or lower-quality material."
      },
      {
        "type": "h2",
        "text": "Smalls Can Come From the Same Plant or Batch"
      },
      {
        "type": "p",
        "text": "Smaller buds can come from the same plant or batch as larger flower."
      },
      {
        "type": "p",
        "text": "That matters because the common assumption:"
      },
      {
        "type": "h2",
        "text": "small = weaker"
      },
      {
        "type": "p",
        "text": "is too simple."
      },
      {
        "type": "p",
        "text": "Use the actual product information for the actual product."
      },
      {
        "type": "h2",
        "text": "Why Big Buds Have More Bag Appeal"
      },
      {
        "type": "p",
        "text": "Larger buds often show the flower structure more clearly."
      },
      {
        "type": "p",
        "text": "They can make:"
      },
      {
        "type": "p",
        "text": "shape;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "colour;"
      },
      {
        "type": "p",
        "text": "trichome coverage;"
      },
      {
        "type": "p",
        "text": "easier to see."
      },
      {
        "type": "p",
        "text": "That visual advantage is real."
      },
      {
        "type": "p",
        "text": "It is still just a visual advantage."
      },
      {
        "type": "h2",
        "text": "Smalls Can Still Be Frosty"
      },
      {
        "type": "p",
        "text": "Bud size and trichome coverage are separate characteristics."
      },
      {
        "type": "p",
        "text": "A small bud can show visible trichomes."
      },
      {
        "type": "p",
        "text": "A large bud can show less dramatic visible frost."
      },
      {
        "type": "p",
        "text": "Neither size alone answers the chemistry question."
      },
      {
        "type": "h2",
        "text": "Big Buds Can Still Be Too Dry"
      },
      {
        "type": "p",
        "text": "Size does not tell you moisture."
      },
      {
        "type": "p",
        "text": "A large photogenic bud can still be brittle."
      },
      {
        "type": "p",
        "text": "A smaller bud can still be well preserved."
      },
      {
        "type": "p",
        "text": "That is why size should be discussed beside freshness and curing, not treated as a full grade."
      },
      {
        "type": "h2",
        "text": "Price Positioning Is Separate"
      },
      {
        "type": "p",
        "text": "Some menus may position smalls differently by price or package size."
      },
      {
        "type": "p",
        "text": "That current information belongs on the live listing."
      },
      {
        "type": "p",
        "text": "An evergreen educational guide should explain size, not freeze today's pricing."
      }
    ],
    "faqs": [
      {
        "question": "Are small buds weaker?",
        "answer": "Bud size alone does not prove potency."
      },
      {
        "question": "Can smalls come from the same plant as larger buds?",
        "answer": "Yes. They can come from the same plant, cultivar or batch."
      },
      {
        "question": "Are big buds always Premium or Exotic?",
        "answer": "No. Large size can improve presentation, but it does not automatically determine the tier."
      },
      {
        "question": "Can small buds still be frosty?",
        "answer": "Yes. Bud size and visible trichome coverage are different characteristics."
      },
      {
        "question": "Should this guide include current smalls prices?",
        "answer": "No. Current prices and package details belong on current menu/product pages."
      }
    ]
  },
  {
    "slug": "flower-guides/bc-grown-indoor-hydro-outdoor",
    "title": "BC Grown, Indoor, Hydro, Greenhouse and Outdoor: Stop Mixing the Labels",
    "seoTitle": "BC Grown vs Indoor, Hydro, Greenhouse & Outdoor Weed",
    "description": "BC grown describes origin; indoor, outdoor and greenhouse describe environments; hydroponic describes a growing method.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Cannabis growing terms often get compared as if they are all the same kind of label.",
    "cards": [
      {
        "title": "Craft vs Commercial Cannabis",
        "href": "/resources/flower-guides/craft-vs-commercial-cannabis",
        "text": "Continue with Craft vs Commercial Cannabis."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      },
      {
        "title": "Mohawk Medicine Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Mohawk Medicine Weed & Flower Quality Guide."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis growing terms often get compared as if they are all the same kind of label."
      },
      {
        "type": "p",
        "text": "They are not."
      },
      {
        "type": "p",
        "text": "BC grown answers a location question."
      },
      {
        "type": "p",
        "text": "Indoor, outdoor and greenhouse answer environment questions."
      },
      {
        "type": "p",
        "text": "Hydroponic answers a cultivation-method question."
      },
      {
        "type": "p",
        "text": "A single crop can fit more than one of those descriptions at the same time."
      },
      {
        "type": "h2",
        "text": "BC Grown = Origin"
      },
      {
        "type": "p",
        "text": "BC-grown cannabis means cannabis grown in British Columbia."
      },
      {
        "type": "p",
        "text": "That does not automatically tell you:"
      },
      {
        "type": "p",
        "text": "indoor or outdoor;"
      },
      {
        "type": "p",
        "text": "hydroponic or soil-based;"
      },
      {
        "type": "p",
        "text": "small scale or large scale;"
      },
      {
        "type": "p",
        "text": "THC level;"
      },
      {
        "type": "p",
        "text": "Weed tier;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "cure."
      },
      {
        "type": "p",
        "text": "Origin is one part of the product story."
      },
      {
        "type": "h2",
        "text": "Indoor = Controlled Growing Environment"
      },
      {
        "type": "p",
        "text": "Indoor cultivation takes place inside a controlled building."
      },
      {
        "type": "p",
        "text": "Growers can manage:"
      },
      {
        "type": "p",
        "text": "light;"
      },
      {
        "type": "p",
        "text": "temperature;"
      },
      {
        "type": "p",
        "text": "humidity;"
      },
      {
        "type": "p",
        "text": "airflow;"
      },
      {
        "type": "p",
        "text": "other environmental conditions."
      },
      {
        "type": "p",
        "text": "That level of control can support consistency."
      },
      {
        "type": "p",
        "text": "It does not guarantee one quality result."
      },
      {
        "type": "h2",
        "text": "Outdoor = Natural Environment"
      },
      {
        "type": "p",
        "text": "Outdoor cultivation uses natural sunlight and outdoor conditions."
      },
      {
        "type": "p",
        "text": "Weather, season and climate play larger roles."
      },
      {
        "type": "p",
        "text": "Outdoor does not automatically mean lower quality."
      },
      {
        "type": "p",
        "text": "It describes where the plant was grown."
      },
      {
        "type": "h2",
        "text": "Greenhouse = Protected Structure"
      },
      {
        "type": "p",
        "text": "Greenhouse cultivation uses a protected structure and typically makes use of natural light."
      },
      {
        "type": "p",
        "text": "Some operations also use supplemental lighting or environmental controls."
      },
      {
        "type": "p",
        "text": "That makes greenhouse a broad category, not one exact recipe."
      },
      {
        "type": "h2",
        "text": "Hydroponic = Cultivation Method"
      },
      {
        "type": "p",
        "text": "Hydroponic cultivation generally uses managed water/nutrient delivery rather than traditional field soil."
      },
      {
        "type": "p",
        "text": "Hydroponic systems can be used indoors."
      },
      {
        "type": "p",
        "text": "They can also be used in greenhouses."
      },
      {
        "type": "p",
        "text": "That is why “BC grown vs hydro” is not a clean comparison."
      },
      {
        "type": "p",
        "text": "A BC-grown crop can also be hydroponic."
      },
      {
        "type": "h2",
        "text": "Indoor Does Not Automatically Mean Hydro"
      },
      {
        "type": "p",
        "text": "Indoor growers can use:"
      },
      {
        "type": "p",
        "text": "soil;"
      },
      {
        "type": "p",
        "text": "soilless substrates;"
      },
      {
        "type": "p",
        "text": "hydroponic systems;"
      },
      {
        "type": "p",
        "text": "other managed media."
      },
      {
        "type": "p",
        "text": "The real cultivation setup can be more complicated than one menu word."
      },
      {
        "type": "h2",
        "text": "No Method Automatically Wins"
      },
      {
        "type": "p",
        "text": "A well-managed outdoor crop can be excellent."
      },
      {
        "type": "p",
        "text": "A poorly handled indoor crop can disappoint."
      },
      {
        "type": "p",
        "text": "Hydro can support strong cultivation without guaranteeing the final cure or freshness."
      },
      {
        "type": "p",
        "text": "The finished flower comes from the whole chain."
      }
    ],
    "faqs": [
      {
        "question": "Is BC bud always indoor?",
        "answer": "No. BC grown describes origin, not the growing environment."
      },
      {
        "question": "Can hydroponic Weed be grown indoors?",
        "answer": "Yes. Hydroponic describes a cultivation method and can be used indoors."
      },
      {
        "question": "Is outdoor Weed automatically lower quality?",
        "answer": "No. Outdoor describes environment, not a universal quality score."
      },
      {
        "question": "Is greenhouse the same as indoor?",
        "answer": "No. Greenhouses are protected structures that usually use natural light, while indoor cultivation takes place inside controlled buildings."
      },
      {
        "question": "What matters besides growing method?",
        "answer": "Genetics, plant health, harvest timing, drying, curing, storage and actual product information all matter."
      }
    ]
  },
  {
    "slug": "flower-guides/craft-vs-commercial-cannabis",
    "title": "Craft vs Commercial Cannabis: The Label Is Only the Start",
    "seoTitle": "Craft vs Commercial Cannabis | Mohawk Medicine",
    "description": "Craft and commercial can describe scale, process and branding, but neither is a universal quality grade. Learn what to compare instead.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Craft sounds premium.",
    "cards": [
      {
        "title": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
        "text": "Continue with BC Grown / Indoor / Hydro / Outdoor."
      },
      {
        "title": "Mohawk Medicine Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Continue with Mohawk Medicine Weed & Flower Quality Guide."
      },
      {
        "title": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness",
        "text": "Continue with Drying, Curing & Freshness."
      },
      {
        "title": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean",
        "text": "Continue with What Does Good Weed Mean?."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Craft sounds premium."
      },
      {
        "type": "p",
        "text": "Commercial sounds large-scale."
      },
      {
        "type": "p",
        "text": "Those impressions are common."
      },
      {
        "type": "p",
        "text": "They are not complete definitions of quality."
      },
      {
        "type": "p",
        "text": "The terms can describe:"
      },
      {
        "type": "p",
        "text": "production scale;"
      },
      {
        "type": "p",
        "text": "process;"
      },
      {
        "type": "p",
        "text": "branding;"
      },
      {
        "type": "p",
        "text": "batch size;"
      },
      {
        "type": "p",
        "text": "producer identity;"
      },
      {
        "type": "p",
        "text": "how hands-on an operation presents itself."
      },
      {
        "type": "p",
        "text": "Neither word guarantees the finished flower."
      },
      {
        "type": "h2",
        "text": "What People Usually Mean by Craft"
      },
      {
        "type": "p",
        "text": "Craft often suggests:"
      },
      {
        "type": "p",
        "text": "smaller-scale production;"
      },
      {
        "type": "p",
        "text": "close batch attention;"
      },
      {
        "type": "p",
        "text": "hands-on cultivation;"
      },
      {
        "type": "p",
        "text": "producer identity built around growing detail."
      },
      {
        "type": "p",
        "text": "The word is broad."
      },
      {
        "type": "p",
        "text": "It should not automatically be treated as one specific regulatory licence class unless that is actually confirmed for the producer."
      },
      {
        "type": "h2",
        "text": "What People Usually Mean by Commercial"
      },
      {
        "type": "p",
        "text": "Commercial often points toward larger-scale production and distribution."
      },
      {
        "type": "p",
        "text": "Larger operations may emphasize:"
      },
      {
        "type": "p",
        "text": "standardization;"
      },
      {
        "type": "p",
        "text": "repeatability;"
      },
      {
        "type": "p",
        "text": "process control;"
      },
      {
        "type": "p",
        "text": "consistency."
      },
      {
        "type": "p",
        "text": "That does not automatically mean lower quality."
      },
      {
        "type": "p",
        "text": "Scale can create strengths and trade-offs."
      },
      {
        "type": "p",
        "text": "The product still has to stand on its own."
      },
      {
        "type": "h2",
        "text": "Small Is Not Automatically Better"
      },
      {
        "type": "p",
        "text": "A small producer can make excellent flower."
      },
      {
        "type": "p",
        "text": "A small producer can also have an inconsistent batch."
      },
      {
        "type": "p",
        "text": "A large producer can make average flower."
      },
      {
        "type": "p",
        "text": "A large producer can also make carefully finished flower."
      },
      {
        "type": "p",
        "text": "Scale alone does not settle the comparison."
      },
      {
        "type": "h2",
        "text": "Craft Is Not the Same Thing as Exotic or Premium"
      },
      {
        "type": "p",
        "text": "Craft describes production context."
      },
      {
        "type": "p",
        "text": "Exotic and Premium are retail positioning terms."
      },
      {
        "type": "p",
        "text": "They can overlap."
      },
      {
        "type": "p",
        "text": "They are not synonyms."
      },
      {
        "type": "p",
        "text": "A craft-labelled product does not automatically belong in the Exotic Weed owner."
      },
      {
        "type": "p",
        "text": "An Exotic Weed product is not automatically craft."
      },
      {
        "type": "h2",
        "text": "Compare the Product, Not Just the Producer Label"
      },
      {
        "type": "p",
        "text": "Adults may compare:"
      },
      {
        "type": "p",
        "text": "producer;"
      },
      {
        "type": "p",
        "text": "cultivar;"
      },
      {
        "type": "p",
        "text": "legal THC/CBD information;"
      },
      {
        "type": "p",
        "text": "aroma description where provided;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "structure;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "moisture/freshness clues;"
      },
      {
        "type": "p",
        "text": "current tier context."
      },
      {
        "type": "p",
        "text": "Those details are more specific than the broad craft/commercial label."
      }
    ],
    "faqs": [
      {
        "question": "Does craft cannabis mean micro-licensed cannabis?",
        "answer": "Not necessarily. Craft is also used broadly in retail and marketing language."
      },
      {
        "question": "Is commercial cannabis lower quality?",
        "answer": "Not automatically. Scale is not a complete quality grade."
      },
      {
        "question": "Is craft the same as Premium or Exotic Weed?",
        "answer": "No. Craft describes production context; Premium and Exotic are retail positioning terms."
      },
      {
        "question": "What should I compare besides producer size?",
        "answer": "Use the legal product information and actual flower characteristics where available."
      },
      {
        "question": "Can large producers make consistent flower?",
        "answer": "Yes. Larger operations may use standardized processes designed for consistency."
      }
    ]
  },
  {
    "slug": "cannabis-101/indica-sativa-hybrid",
    "title": "Indica vs Sativa vs Hybrid: Useful Shortcuts, Not Guarantees",
    "seoTitle": "Indica vs Sativa vs Hybrid | Mohawk Medicine",
    "description": "Indica, Sativa and Hybrid are familiar cannabis labels, but modern genetics are heavily crossed. Learn what the terms can and cannot tell you.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Indica, Sativa and Hybrid are some of the first labels adults recognize on a cannabis menu.",
    "cards": [
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Strain vs Cultivar",
        "href": "/resources/cannabis-101/strain-vs-cultivar",
        "text": "Continue with Strain vs Cultivar."
      },
      {
        "title": "Landrace vs Hybrid",
        "href": "/resources/cannabis-101/landrace-vs-hybrid",
        "text": "Continue with Landrace vs Hybrid."
      },
      {
        "title": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality",
        "text": "Continue with THC vs Weed Quality."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Indica, Sativa and Hybrid are some of the first labels adults recognize on a cannabis menu."
      },
      {
        "type": "p",
        "text": "They are useful."
      },
      {
        "type": "p",
        "text": "They are also easy to oversimplify."
      },
      {
        "type": "p",
        "text": "The familiar shortcut goes:"
      },
      {
        "type": "p",
        "text": "Indica = relaxing;"
      },
      {
        "type": "p",
        "text": "Sativa = energetic;"
      },
      {
        "type": "p",
        "text": "Hybrid = somewhere in between."
      },
      {
        "type": "p",
        "text": "That story is simple."
      },
      {
        "type": "p",
        "text": "Modern commercial cannabis is not."
      },
      {
        "type": "h2",
        "text": "Why the Labels Persist"
      },
      {
        "type": "p",
        "text": "Adults recognize them quickly."
      },
      {
        "type": "p",
        "text": "They create a fast menu starting point."
      },
      {
        "type": "p",
        "text": "A product labelled Indica, Sativa or Hybrid communicates how the producer or retailer is classifying it."
      },
      {
        "type": "p",
        "text": "That is useful."
      },
      {
        "type": "p",
        "text": "It is not a guarantee."
      },
      {
        "type": "h2",
        "text": "Modern Cannabis Is Heavily Crossed"
      },
      {
        "type": "p",
        "text": "Commercial cannabis has a long history of crossbreeding."
      },
      {
        "type": "p",
        "text": "That means many modern products have mixed ancestry."
      },
      {
        "type": "p",
        "text": "The labels do not map cleanly to three perfectly separate modern genetic groups."
      },
      {
        "type": "h2",
        "text": "Why Effect Promises Are Too Strong"
      },
      {
        "type": "p",
        "text": "Individual response varies."
      },
      {
        "type": "p",
        "text": "Products differ in:"
      },
      {
        "type": "p",
        "text": "THC;"
      },
      {
        "type": "p",
        "text": "CBD;"
      },
      {
        "type": "p",
        "text": "other cannabinoids;"
      },
      {
        "type": "p",
        "text": "terpene profiles;"
      },
      {
        "type": "p",
        "text": "dose;"
      },
      {
        "type": "p",
        "text": "format;"
      },
      {
        "type": "p",
        "text": "individual sensitivity."
      },
      {
        "type": "p",
        "text": "That makes statements such as:"
      },
      {
        "type": "h2",
        "text": "“Indica always makes you sleepy”"
      },
      {
        "type": "p",
        "text": "too strong."
      },
      {
        "type": "p",
        "text": "The label can be a starting point without becoming an effect promise."
      },
      {
        "type": "h2",
        "text": "Hybrid Is Normal"
      },
      {
        "type": "p",
        "text": "Hybrid is not a weak middle category."
      },
      {
        "type": "p",
        "text": "Modern breeding makes hybrid ancestry common."
      },
      {
        "type": "p",
        "text": "A Hybrid label can reflect mixed genetics or a product that does not fit a simple Indica/Sativa story."
      },
      {
        "type": "h2",
        "text": "Read More Than the Category"
      },
      {
        "type": "p",
        "text": "When available, compare:"
      },
      {
        "type": "p",
        "text": "exact product name;"
      },
      {
        "type": "p",
        "text": "producer;"
      },
      {
        "type": "p",
        "text": "cultivar;"
      },
      {
        "type": "p",
        "text": "THC/CBD;"
      },
      {
        "type": "p",
        "text": "format;"
      },
      {
        "type": "p",
        "text": "any aroma/terpene information actually provided."
      },
      {
        "type": "p",
        "text": "The category label then becomes one part of a larger picture."
      }
    ],
    "faqs": [
      {
        "question": "Are Indica and Sativa exact modern genetic categories?",
        "answer": "Not in a simple retail sense. The labels remain common, but extensive crossbreeding makes them imperfect."
      },
      {
        "question": "Is most modern cannabis hybridized?",
        "answer": "Mixed ancestry is common in modern commercial cannabis because of extensive breeding."
      },
      {
        "question": "Does Indica always mean sleepy?",
        "answer": "No. That is a common cultural association, not a guaranteed effect."
      },
      {
        "question": "Does Sativa always mean energetic?",
        "answer": "No. Product chemistry and individual response vary."
      },
      {
        "question": "What should I read besides the category label?",
        "answer": "Use the legal product information, producer, cultivar, THC/CBD and any other information actually provided."
      }
    ]
  },
  {
    "slug": "cannabis-101/strain-vs-cultivar",
    "title": "Strain vs Cultivar: The Name Is Not a DNA Certificate",
    "seoTitle": "Strain vs Cultivar | Cannabis Names Explained",
    "description": "Strain is common cannabis language; cultivar is a horticultural term. Learn why a familiar name does not guarantee identical genetics.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Cannabis shoppers say strain.",
    "cards": [
      {
        "title": "Indica vs Sativa vs Hybrid",
        "href": "/resources/cannabis-101/indica-sativa-hybrid",
        "text": "Continue with Indica vs Sativa vs Hybrid."
      },
      {
        "title": "Landrace vs Hybrid",
        "href": "/resources/cannabis-101/landrace-vs-hybrid",
        "text": "Continue with Landrace vs Hybrid."
      },
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary",
        "text": "Continue with Weed Slang Explained."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis shoppers say strain."
      },
      {
        "type": "p",
        "text": "Growers and horticulture writers may say cultivar."
      },
      {
        "type": "p",
        "text": "Both words can be useful."
      },
      {
        "type": "p",
        "text": "The bigger lesson is that a familiar product name does not automatically guarantee identical genetics everywhere."
      },
      {
        "type": "h2",
        "text": "Strain Is the Common Cannabis Word"
      },
      {
        "type": "p",
        "text": "“Strain” is deeply established in cannabis culture."
      },
      {
        "type": "p",
        "text": "Adults understand it."
      },
      {
        "type": "p",
        "text": "There is no need to correct normal language simply to sound more technical."
      },
      {
        "type": "h2",
        "text": "Cultivar Is the Horticultural Word"
      },
      {
        "type": "h2",
        "text": "Cultivar is short for “cultivated variety.”"
      },
      {
        "type": "p",
        "text": "It is used in horticulture for plant lines selected and maintained for particular characteristics."
      },
      {
        "type": "p",
        "text": "In cannabis education, cultivar can be useful because it emphasizes the plant line rather than a promised effect."
      },
      {
        "type": "h2",
        "text": "The Same Name Does Not Guarantee the Same Product Everywhere"
      },
      {
        "type": "p",
        "text": "Different producers may work with:"
      },
      {
        "type": "p",
        "text": "different cuts;"
      },
      {
        "type": "p",
        "text": "different breeding lines;"
      },
      {
        "type": "p",
        "text": "different selections;"
      },
      {
        "type": "p",
        "text": "different growing conditions."
      },
      {
        "type": "p",
        "text": "That means similarly named products can differ in:"
      },
      {
        "type": "p",
        "text": "appearance;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "labelled chemistry;"
      },
      {
        "type": "p",
        "text": "structure;"
      },
      {
        "type": "p",
        "text": "finished quality."
      },
      {
        "type": "p",
        "text": "The name helps identify the product."
      },
      {
        "type": "p",
        "text": "It is not a genetic certificate."
      },
      {
        "type": "h2",
        "text": "Producer and Process Matter"
      },
      {
        "type": "p",
        "text": "The finished flower is influenced by:"
      },
      {
        "type": "p",
        "text": "genetics;"
      },
      {
        "type": "p",
        "text": "cultivation environment;"
      },
      {
        "type": "p",
        "text": "plant health;"
      },
      {
        "type": "p",
        "text": "harvest timing;"
      },
      {
        "type": "p",
        "text": "drying;"
      },
      {
        "type": "p",
        "text": "curing;"
      },
      {
        "type": "p",
        "text": "storage."
      },
      {
        "type": "p",
        "text": "A name is the beginning of the story, not the whole story."
      },
      {
        "type": "h2",
        "text": "Do Not Use a Name as an Effect Guarantee"
      },
      {
        "type": "p",
        "text": "A familiar cultivar name does not guarantee one exact experience for every person."
      },
      {
        "type": "p",
        "text": "Use the actual product information."
      },
      {
        "type": "p",
        "text": "Avoid turning the name into a medical or effect claim."
      }
    ],
    "faqs": [
      {
        "question": "Is strain the wrong word for cannabis?",
        "answer": "No. It is common cannabis language and widely understood."
      },
      {
        "question": "What does cultivar mean?",
        "answer": "Cultivar is a horticultural term for a cultivated plant variety."
      },
      {
        "question": "Does the same strain name mean identical genetics everywhere?",
        "answer": "Not necessarily. Commercial naming and producer lines can vary."
      },
      {
        "question": "Can two producers grow the same named cultivar differently?",
        "answer": "Yes. Growing and post-harvest conditions influence the finished product."
      },
      {
        "question": "Should a cultivar name be used to guarantee effects?",
        "answer": "No. The name alone should not be treated as an effect guarantee."
      }
    ]
  },
  {
    "slug": "cannabis-101/landrace-vs-hybrid",
    "title": "Landrace vs Hybrid: Where Modern Cannabis Genetics Come From",
    "seoTitle": "Landrace vs Hybrid Cannabis | Genetics Explained",
    "description": "Learn what landrace and hybrid mean in cannabis genetics and why modern commercial cannabis has a complicated breeding history.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Cannabis genetics are often explained like a family tree.",
    "cards": [
      {
        "title": "Indica vs Sativa vs Hybrid",
        "href": "/resources/cannabis-101/indica-sativa-hybrid",
        "text": "Continue with Indica vs Sativa vs Hybrid."
      },
      {
        "title": "Strain vs Cultivar",
        "href": "/resources/cannabis-101/strain-vs-cultivar",
        "text": "Continue with Strain vs Cultivar."
      },
      {
        "title": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
        "text": "Continue with BC Grown / Indoor / Hydro / Outdoor."
      },
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis genetics are often explained like a family tree."
      },
      {
        "type": "p",
        "text": "Landrace sits closer to the older regional roots of that story."
      },
      {
        "type": "p",
        "text": "Hybrid describes the crossing and selection that shaped much of modern commercial cannabis."
      },
      {
        "type": "p",
        "text": "Neither word is a quality grade."
      },
      {
        "type": "h2",
        "text": "Landrace"
      },
      {
        "type": "p",
        "text": "Landrace generally refers to cannabis populations associated with long-term adaptation to a particular geographic region before modern commercial breeding mixed many lineages together."
      },
      {
        "type": "p",
        "text": "The term points toward geographic history and older regional populations."
      },
      {
        "type": "p",
        "text": "It does not mean every plant from that area is genetically identical."
      },
      {
        "type": "h2",
        "text": "Hybrid"
      },
      {
        "type": "p",
        "text": "A hybrid is produced by crossing genetic lines."
      },
      {
        "type": "p",
        "text": "Breeders may select for traits such as:"
      },
      {
        "type": "p",
        "text": "structure;"
      },
      {
        "type": "p",
        "text": "flowering time;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "cannabinoid profile;"
      },
      {
        "type": "p",
        "text": "yield;"
      },
      {
        "type": "p",
        "text": "resilience;"
      },
      {
        "type": "p",
        "text": "visual characteristics."
      },
      {
        "type": "p",
        "text": "The resulting line can be selected and crossed again."
      },
      {
        "type": "h2",
        "text": "Why Modern Cannabis Has Mixed Ancestry"
      },
      {
        "type": "p",
        "text": "Commercial cannabis breeding has been active for decades."
      },
      {
        "type": "p",
        "text": "That history helps explain why modern Indica/Sativa/Hybrid labels do not fit into three perfectly separate genetic boxes."
      },
      {
        "type": "p",
        "text": "Many current cultivars contain multiple layers of ancestry."
      },
      {
        "type": "h2",
        "text": "Landrace Does Not Mean Automatically Better"
      },
      {
        "type": "p",
        "text": "Older regional origin can be interesting."
      },
      {
        "type": "p",
        "text": "It does not automatically mean:"
      },
      {
        "type": "p",
        "text": "stronger;"
      },
      {
        "type": "p",
        "text": "safer;"
      },
      {
        "type": "p",
        "text": "more aromatic;"
      },
      {
        "type": "p",
        "text": "more premium;"
      },
      {
        "type": "p",
        "text": "better cured."
      },
      {
        "type": "p",
        "text": "Hybrid does not automatically mean diluted or lower quality."
      },
      {
        "type": "p",
        "text": "Those are value judgments, not genetic definitions."
      },
      {
        "type": "h2",
        "text": "Why This Matters on the Menu"
      },
      {
        "type": "p",
        "text": "Genetics provide context."
      },
      {
        "type": "p",
        "text": "The practical shopper still needs the actual product label, producer information and current listing."
      }
    ],
    "faqs": [
      {
        "question": "What is landrace cannabis?",
        "answer": "The term generally refers to cannabis populations historically associated with long-term adaptation to particular geographic regions."
      },
      {
        "question": "Is landrace cannabis “pure”?",
        "answer": "“Pure” is too strong. Landrace refers to regional historical populations, not a guarantee of identical untouched genetics."
      },
      {
        "question": "What is a hybrid cultivar?",
        "answer": "A cultivar produced through crossing genetic lines and selection."
      },
      {
        "question": "Is hybrid cannabis lower quality?",
        "answer": "No. Hybrid describes breeding history, not quality."
      },
      {
        "question": "Why are so many modern cultivars hybrids?",
        "answer": "Decades of breeding have mixed many cannabis lineages."
      }
    ]
  },
  {
    "slug": "cannabis-101/weed-slang-glossary",
    "title": "Weed Slang Explained: Gas, Loud, Fire, Dank, Mids, Quads and More",
    "seoTitle": "Weed Slang Glossary | Gas, Loud, Fire, Mids & Quads",
    "description": "Weed, bud, gas, loud, fire, dank, mids, quads and zaza are common cannabis slang. Learn what they usually mean and what they do not prove.",
    "eyebrow": "Mohawk Medicine Guide",
    "intro": "Cannabis has formal label language and street language.",
    "cards": [
      {
        "title": "Cannabis 101",
        "href": "/resources/cannabis-101",
        "text": "Continue with Cannabis 101."
      },
      {
        "title": "Top Shelf, Mids & Quads",
        "href": "/resources/flower-guides/top-shelf-mids-quads",
        "text": "Continue with Top Shelf, Mids & Quads."
      },
      {
        "title": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
        "text": "Continue with Gas, Loud & Terpy."
      },
      {
        "title": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed",
        "text": "Continue with Frosty Weed & Trichomes."
      },
      {
        "title": "Exotic Weed",
        "href": "/exotic-weed",
        "text": "Continue with Exotic Weed."
      },
      {
        "title": "Premium Weed",
        "href": "/premium-weed",
        "text": "Continue with Premium Weed."
      }
    ],
    "sections": [],
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis has formal label language and street language."
      },
      {
        "type": "p",
        "text": "Both show up around the same menu."
      },
      {
        "type": "p",
        "text": "Mohawk Medicine can use normal adult Weed language without pretending slang is science."
      },
      {
        "type": "p",
        "text": "The useful move is to translate the slang into a real characteristic."
      },
      {
        "type": "h2",
        "text": "Weed"
      },
      {
        "type": "p",
        "text": "Weed is common informal language for cannabis."
      },
      {
        "type": "p",
        "text": "People often use it when they mean flower, though the word can also be used more broadly."
      },
      {
        "type": "h2",
        "text": "Bud / Flower / Nugs"
      },
      {
        "type": "p",
        "text": "Bud and flower usually refer to dried cannabis flower."
      },
      {
        "type": "p",
        "text": "Nug or nugs is slang for individual pieces of flower."
      },
      {
        "type": "h2",
        "text": "Fire"
      },
      {
        "type": "p",
        "text": "Fire means someone considers the cannabis very good."
      },
      {
        "type": "p",
        "text": "That is an opinion."
      },
      {
        "type": "p",
        "text": "The useful follow-up is:"
      },
      {
        "type": "p",
        "text": "What makes it fire to you?"
      },
      {
        "type": "h2",
        "text": "Dank"
      },
      {
        "type": "p",
        "text": "Dank is older cannabis slang usually used positively for strong-smelling or desirable Weed."
      },
      {
        "type": "p",
        "text": "Like fire, it is subjective."
      },
      {
        "type": "h2",
        "text": "Gas"
      },
      {
        "type": "p",
        "text": "Gas usually describes a fuel-like, diesel-like or sharp pungent aroma."
      },
      {
        "type": "p",
        "text": "It is an aroma word."
      },
      {
        "type": "p",
        "text": "It is not a THC grade."
      },
      {
        "type": "h2",
        "text": "Loud"
      },
      {
        "type": "p",
        "text": "Loud means the smell is pronounced."
      },
      {
        "type": "p",
        "text": "The exact scent can still be gassy, fruity, skunky, floral or earthy."
      },
      {
        "type": "h2",
        "text": "Terpy"
      },
      {
        "type": "p",
        "text": "Terpy suggests a noticeable aroma or flavour profile associated with terpenes."
      },
      {
        "type": "p",
        "text": "It does not identify exact terpene content unless that information is actually provided."
      },
      {
        "type": "h2",
        "text": "Frosty"
      },
      {
        "type": "p",
        "text": "Frosty points toward visible trichome coverage."
      },
      {
        "type": "p",
        "text": "It describes appearance."
      },
      {
        "type": "p",
        "text": "It does not provide an exact THC number."
      },
      {
        "type": "h2",
        "text": "Bag Appeal"
      },
      {
        "type": "p",
        "text": "Bag appeal means visual first impression."
      },
      {
        "type": "p",
        "text": "People may be talking about:"
      },
      {
        "type": "p",
        "text": "bud size;"
      },
      {
        "type": "p",
        "text": "shape;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "colour;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "overall presentation."
      },
      {
        "type": "h2",
        "text": "Mids"
      },
      {
        "type": "p",
        "text": "Mids means cannabis someone considers middle-of-the-road."
      },
      {
        "type": "p",
        "text": "The reason can vary."
      },
      {
        "type": "p",
        "text": "It is not an official grade."
      },
      {
        "type": "h2",
        "text": "Top Shelf"
      },
      {
        "type": "p",
        "text": "Top shelf suggests premium positioning."
      },
      {
        "type": "p",
        "text": "It does not come with one required THC range."
      },
      {
        "type": "h2",
        "text": "Quads / AAAA"
      },
      {
        "type": "p",
        "text": "Quads is common Canadian slang for AAAA."
      },
      {
        "type": "p",
        "text": "It usually signals premium positioning."
      },
      {
        "type": "p",
        "text": "It is not one regulated Canadian grading standard."
      },
      {
        "type": "h2",
        "text": "AAA / AAA+"
      },
      {
        "type": "p",
        "text": "AAA is familiar informal grading language."
      },
      {
        "type": "p",
        "text": "AAA+ suggests slightly higher positioning."
      },
      {
        "type": "p",
        "text": "Mohawk Medicine's protected owner is AAA+ Weed at /aaa-weed."
      },
      {
        "type": "h2",
        "text": "AA"
      },
      {
        "type": "p",
        "text": "AA is another familiar cannabis tier shorthand."
      },
      {
        "type": "p",
        "text": "Mohawk Medicine's protected owner is AA Weed at /aa-weed."
      },
      {
        "type": "h2",
        "text": "Exotic"
      },
      {
        "type": "p",
        "text": "Exotic can suggest unusual genetics, distinctive aroma, rarity or high-end presentation."
      },
      {
        "type": "p",
        "text": "At Mohawk Medicine, Exotic Weed is a protected commercial owner."
      },
      {
        "type": "h2",
        "text": "Zaza / Za"
      },
      {
        "type": "p",
        "text": "Zaza or za is newer slang often associated with premium, exotic or expensive-positioned Weed."
      },
      {
        "type": "p",
        "text": "It is not an official grade."
      },
      {
        "type": "p",
        "text": "The useful question is whether the speaker means genetics, aroma, appearance, rarity, price positioning or simply hype."
      },
      {
        "type": "h2",
        "text": "Why Slang Is Useful"
      },
      {
        "type": "p",
        "text": "Gas quickly communicates an aroma family."
      },
      {
        "type": "p",
        "text": "Frosty points to trichomes."
      },
      {
        "type": "p",
        "text": "Bag appeal points to appearance."
      },
      {
        "type": "p",
        "text": "Quads points toward premium positioning."
      },
      {
        "type": "p",
        "text": "The mistake is not using slang."
      },
      {
        "type": "p",
        "text": "The mistake is treating slang as proof."
      }
    ],
    "faqs": [
      {
        "question": "Is Weed the same thing as cannabis?",
        "answer": "Weed is common informal language for cannabis."
      },
      {
        "question": "What does gas mean?",
        "answer": "Usually a fuel-like, diesel-like or pungent aroma impression."
      },
      {
        "question": "What does loud mean?",
        "answer": "Usually that the aroma is pronounced."
      },
      {
        "question": "What are quads?",
        "answer": "Common Canadian slang for AAAA, generally implying premium positioning."
      },
      {
        "question": "What is zaza?",
        "answer": "Newer slang commonly associated with premium, exotic or expensive-positioned cannabis. It is not an official grade."
      }
    ]
  }
];
RESOURCE_PAGES[0].sections.push({ heading: "Learn the Category, Then Check the Current Listing", body: "Mohawk Medicine's Resource Centre should separate stable education from changing menu details. Use the Resource Centre to understand: cannabis terminology; first-visit planning; Weed tiers; flower quality; THC; trichomes; aroma; drying and curing; growing methods; genetics; Weed slang; commercial tobacco terminology. Use current category/product pages for: current products; current prices; current package details; current flavours; current stock; current availability. That keeps the guides useful when the menu changes." });
RESOURCE_PAGES[0].cards.push(...[
  {
    "title": "Cannabis 101",
    "href": "/resources/cannabis-101",
    "text": "Continue with Cannabis 101."
  },
  {
    "title": "First Visit to Mohawk Medicine",
    "href": "/resources/eglinton-east-scarborough-visit-guide",
    "text": "Continue with First Visit to Mohawk Medicine."
  },
  {
    "title": "Cannabis Dispensary vs Weed Dispensary",
    "href": "/resources/cannabis-dispensary-vs-weed-dispensary",
    "text": "Continue with Cannabis Dispensary vs Weed Dispensary."
  },
  {
    "title": "Indica vs Sativa vs Hybrid",
    "href": "/resources/cannabis-101/indica-sativa-hybrid",
    "text": "Continue with Indica vs Sativa vs Hybrid."
  },
  {
    "title": "Strain vs Cultivar",
    "href": "/resources/cannabis-101/strain-vs-cultivar",
    "text": "Continue with Strain vs Cultivar."
  },
  {
    "title": "Landrace vs Hybrid",
    "href": "/resources/cannabis-101/landrace-vs-hybrid",
    "text": "Continue with Landrace vs Hybrid."
  },
  {
    "title": "Weed Slang Explained",
    "href": "/resources/cannabis-101/weed-slang-glossary",
    "text": "Continue with Weed Slang Explained."
  },
  {
    "title": "Mohawk Medicine Weed & Flower Quality Guide",
    "href": "/resources/weed-flower-guide",
    "text": "Continue with Mohawk Medicine Weed & Flower Quality Guide."
  },
  {
    "title": "What Does Good Weed Mean?",
    "href": "/resources/flower-guides/what-does-good-weed-mean",
    "text": "Continue with What Does Good Weed Mean?."
  },
  {
    "title": "Top Shelf, Mids & Quads",
    "href": "/resources/flower-guides/top-shelf-mids-quads",
    "text": "Continue with Top Shelf, Mids & Quads."
  },
  {
    "title": "THC vs Weed Quality",
    "href": "/resources/flower-guides/thc-vs-weed-quality",
    "text": "Continue with THC vs Weed Quality."
  },
  {
    "title": "Bag Appeal",
    "href": "/resources/flower-guides/bag-appeal",
    "text": "Continue with Bag Appeal."
  },
  {
    "title": "Frosty Weed & Trichomes",
    "href": "/resources/flower-guides/trichomes-frosty-weed",
    "text": "Continue with Frosty Weed & Trichomes."
  },
  {
    "title": "Gas, Loud & Terpy",
    "href": "/resources/flower-guides/terpenes-gas-loud-aroma",
    "text": "Continue with Gas, Loud & Terpy."
  },
  {
    "title": "Drying, Curing & Freshness",
    "href": "/resources/flower-guides/drying-curing-freshness",
    "text": "Continue with Drying, Curing & Freshness."
  },
  {
    "title": "Smalls vs Big Buds",
    "href": "/resources/flower-guides/smalls-vs-big-buds",
    "text": "Continue with Smalls vs Big Buds."
  },
  {
    "title": "BC Grown / Indoor / Hydro / Outdoor",
    "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
    "text": "Continue with BC Grown / Indoor / Hydro / Outdoor."
  },
  {
    "title": "Craft vs Commercial Cannabis",
    "href": "/resources/flower-guides/craft-vs-commercial-cannabis",
    "text": "Continue with Craft vs Commercial Cannabis."
  },
  {
    "title": "Menu Guide",
    "href": "/resources/menu-guide",
    "text": "Continue with Menu Guide."
  },
  {
    "title": "Value Guide",
    "href": "/resources/value-guide",
    "text": "Continue with Value Guide."
  },
  {
    "title": "Pre-Roll Guide",
    "href": "/resources/pre-roll-guide",
    "text": "Continue with Pre-Roll Guide."
  },
  {
    "title": "Native Smokes Guide",
    "href": "/resources/native-smokes",
    "text": "Continue with Native Smokes Guide."
  },
  {
    "title": "Native Cigarettes in Ontario",
    "href": "/resources/native-smokes/native-cigarettes-guide",
    "text": "Continue with Native Cigarettes in Ontario."
  }
]);
for (const page of RESOURCE_PAGES) Object.assign(page, MEB01_RESOURCE_OVERRIDES[page.slug] || {});
RESOURCE_PAGES.push(...MEB01_RESOURCE_ADDITIONS);

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  return RESOURCE_PAGES.find((page) => page.slug === slug);
}
