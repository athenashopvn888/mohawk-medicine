/* â”€â”€ Geo-targeted SEO landing pages for Mohawk Medicine / Scarborough keywords â”€â”€ */

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
    slug: "york-weed-dispensary",
    title: "Mohawk Weed Dispensary â€” Mohawk Medicine | 24 Hours | Eglinton Ave E",
    metaDescription: "Mohawk Medicine is Mohawk's #1 24-hour weed dispensary at 2655 Eglinton Ave E near Weston. 200+ strains, THC up to 39%, edibles, vapes, concentrates & more. Walk in anytime.",
    h1: "Mohawk Weed Dispensary â€” Mohawk Medicine",
    icon: "âœ¨",
    heroTagline: "Premium Cannabis on Eglinton Ave E Â· Open 24 Hours Â· Walk-In Welcome",
    banner: "/banners/23_Mohawk_Welcome_Banner.webp",
    sections: [
      {
        heading: "Mohawk's Premier Cannabis Destination",
        body: "Mohawk Medicine is a premium cannabis dispensary located at 2655 Eglinton Ave E in the heart of Mohawk's vibrant Weston and Mount Dennis neighbourhoods. We carry over 200 hand-picked cannabis strains across five quality tiers â€” from ultra-rare Exotic genetics with THC up to 39% to affordable Budget flower starting at just $3/g. Whether you're a connoisseur seeking the rarest strains or a daily smoker looking for reliable value, Mohawk Medicine has the perfect flower for you. We're proud to be one of Mohawk's most trusted dispensaries, serving our community 24 hours a day, 7 days a week.",
      },
      {
        heading: "Five Tiers of Quality Cannabis â€” Transparent Pricing",
        body: "Our unique tier system ensures transparent pricing and quality grading so you always know what you're getting. Exotic ($10-$12/g) features top-shelf, ultra-rare genetics with THC levels reaching 35-39% â€” these are the strains connoisseurs travel across Mohawk to find. Premium ($7-$10/g) offers connoisseur-grade strains at THC 32-34%, balancing quality and value. AAA+ ($5-$6/g) delivers heavy hitters at THC 30-32% â€” our most popular tier for experienced users. AA ($4/g) provides quality daily drivers at THC 27-29%, perfect for regular consumption. Budget ($3/g) offers value ounces from $40 without sacrificing reliability. Every tier is lab-tested, properly cured, and freshly rotated.",
      },
      {
        heading: "Beyond Flower â€” Edibles, Vapes, Concentrates & More",
        body: "Mohawk Medicine is more than just a flower shop. We carry a comprehensive selection of cannabis edibles (gummies, chocolates, baked goods), vape pens and disposable vapes, concentrates (shatter, wax, hash, diamonds, live resin), pre-rolled joints, native cigarettes, rolling papers, and accessories. Our live digital menu at mohawkmedicine.com updates in real time so you always know exactly what's in stock before you make the trip.",
      },
      {
        heading: "Open 24 Hours on Eglinton Ave E",
        body: "Unlike most dispensaries that close at midnight, Mohawk Medicine is open around the clock â€” 24 hours a day, 7 days a week, 365 days a year. Whether you're finishing a late shift, heading out for the night, or need something at 3 AM, our doors are always open. We're centrally located at 2655 Eglinton Ave E, steps from Weston Road, near major TTC bus routes, and minutes from the Weston GO Station and Highway 401. Free street parking is available in the evenings.",
      },
      {
        heading: "Unbeatable Promotions on Every Purchase",
        body: "Every purchase at Mohawk Medicine comes with our signature promotions. Our Buy 2g Get 1g FREE deal applies to every single tier â€” you always get a bonus gram. Our top three tiers (Exotic, Premium, and AAA+) also qualify for Buy 3g Get 3g FREE, effectively doubling your order. Combined with our already competitive pricing, Mohawk Medicine offers some of the best cannabis value in Mohawk, Toronto, and the surrounding area.",
      },
      {
        heading: "Serving Mohawk, Toronto & Mississauga",
        body: "Mohawk Medicine proudly serves customers from across the Greater Toronto Area. Whether you're coming from Weston, Mount Dennis, North Mohawk, Etobicoke, Mississauga, Brampton, or downtown Toronto, we welcome you. Our 24-hour operation means you can visit on your own schedule. Call us at (555) 555-5555 or visit us at 2655 Eglinton Ave E, Toronto, ON M1K 2S2.",
      },
    ],
    faqs: [
      { q: "Where is Mohawk Medicine located?", a: "We are located at 2655 Eglinton Ave E, Toronto, ON M1K 2S2 â€” in the heart of Weston and Mount Dennis, one of Mohawk's most accessible neighbourhoods. We're near the Weston GO Station, Highway 401, and major bus routes." },
      { q: "What are the hours for Mohawk Medicine?", a: "We are open 24 hours a day, 7 days a week, 365 days a year. Walk in anytime â€” no appointment needed. Whether it's 2 PM or 2 AM, our staff is here to help." },
      { q: "What cannabis products does Mohawk Medicine carry?", a: "We carry 200+ strains of cannabis flower across 5 quality tiers (Exotic, Premium, AAA+, AA, Budget), plus edibles, vapes, concentrates, pre-rolls, native cigarettes, and accessories. Our menu updates in real time online." },
      { q: "What is the cheapest weed at Mohawk Medicine?", a: "Our Budget tier starts at $3/g with value ounces from $40. Our AA tier is $4/g. Every tier includes our Buy 2g Get 1g FREE promotion, making our prices even more competitive." },
      { q: "Does Mohawk Medicine have a live menu?", a: "Yes! Our online menu at mohawkmedicine.com updates in real time with current stock, prices, and availability. You can see exactly what we have before you visit." },
      { q: "What makes Mohawk Medicine different from other Mohawk dispensaries?", a: "Three things set us apart: (1) We're open 24 hours, (2) our transparent 5-tier pricing system means no confusing markups, and (3) every purchase includes our Buy 2g Get 1g FREE promotion. Plus we carry one of Mohawk's largest selections with over 200 strains." },
      { q: "Can I check stock before visiting?", a: "Absolutely. Visit mohawkmedicine.com to see our live menu. All flower, edibles, vapes, and accessories are listed with real-time stock status, THC levels, and pricing." },
      { q: "Is there parking near Mohawk Medicine?", a: "Yes. Free street parking is available in the evenings on Eglinton Ave E and surrounding residential streets. We're also easily accessible via TTC." },
    ],
  },

  {
    slug: "cheap-weed-york",
    title: "Cheap Weed Mohawk â€” Budget Cannabis Deals From $3/g | Mohawk Medicine",
    metaDescription: "Looking for cheap weed in Mohawk? Mohawk Medicine has budget flower from $3/g, ounces from $40, and Buy 2g Get 1g FREE promos. Open 24 hours at 2655 Eglinton Ave E.",
    h1: "Cheap Weed Mohawk â€” Budget Cannabis Deals",
    icon: "ðŸ’°",
    heroTagline: "Budget Flower From $3/g Â· Ounces From $40 Â· Always Open",
    banner: "/banners/05_Mohawk_Budget.webp",
    sections: [
      {
        heading: "Mohawk's Best Prices on Quality Cannabis",
        body: "Looking for cheap weed in Mohawk without sacrificing quality? Mohawk Medicine offers some of the most competitive cannabis prices in the city. Our Budget tier starts at just $3/g with value ounces from $40. Our AA tier ($4/g) and AAA+ tier ($5-$6/g) also deliver incredible value with THC levels from 27% to 32%. We believe great cannabis shouldn't break the bank, and our transparent tier-based pricing ensures you always get exactly what you pay for â€” no hidden markups, no gimmicks.",
      },
      {
        heading: "Unbeatable Promotions That Stack",
        body: "Every tier at Mohawk Medicine comes with our signature Buy 2g Get 1g FREE promotion â€” meaning you always get a free gram with every purchase. Our top three tiers (Exotic, Premium, AAA+) also offer Buy 3g Get 3g FREE, effectively doubling your order. When you combine our already low prices with these promos, Mohawk Medicine delivers the best cannabis value in Mohawk. A $15 AAA+ 3g purchase actually gets you 3g of flower â€” that's just $5/g for THC 30%+ cannabis.",
      },
      {
        heading: "Budget Doesn't Mean Low Quality",
        body: "At Mohawk Medicine, cheap doesn't mean low quality. Every strain in our Budget and AA tiers delivers reliable potency (THC 24-29%) from trusted Canadian growers. We rotate our inventory frequently to ensure freshness and maintain our quality standards across all price points. Our Budget strains are perfect for rolling, sessions, or anyone who prefers value over premium aesthetics. Our AA tier is a step up â€” solid daily drivers with consistent effects.",
      },
      {
        heading: "Compare Our Prices",
        body: "Budget: $3/g â€” $40/oz. AA: $4/g â€” $90/oz. AAA+: $5-$6/g â€” $100/oz. Premium: $7-$10/g. Exotic: $10-$12/g. Every tier includes Buy 2g Get 1g FREE. Top tiers include Buy 3g Get 3g FREE. These are some of the lowest prices you'll find at any dispensary in Mohawk, Weston, Mount Dennis, Etobicoke, or North Mohawk.",
      },
    ],
    faqs: [
      { q: "What is the cheapest weed at Mohawk Medicine?", a: "Our Budget tier starts at $3/g with value ounces from $40. These are quality, properly-cured strains at Mohawk's most competitive prices." },
      { q: "Do you have ounce deals?", a: "Yes! Budget ounces from $40, AA ounces from $90, AAA+ ounces from $100. All with excellent quality, freshness guaranteed, and Buy 2g Get 1g FREE promotions on top." },
      { q: "Is cheap weed still good quality?", a: "Absolutely. Our Budget flower delivers THC 24-27% from trusted Canadian growers. We never sell old, dry, or improperly stored flower. Every product meets our quality standards regardless of price point." },
      { q: "Where can I buy cheap weed in Mohawk?", a: "Mohawk Medicine at 2655 Eglinton Ave E, Mohawk. Open 24 hours a day, walk in anytime, no appointment needed. We're in the heart of Weston neighbourhood." },
      { q: "What promotions do you offer?", a: "Every tier includes Buy 2g Get 1g FREE (pay for 2g, get 3g). Our Exotic, Premium, and AAA+ tiers also offer Buy 3g Get 3g FREE (pay for 3g, get 6g). These promos apply on every visit." },
      { q: "Do you offer bulk discounts?", a: "Yes â€” our ounce pricing is deeply discounted compared to per-gram rates. Budget ounces are $40, AA ounces $90, and AAA+ ounces $100. The more you buy, the more you save." },
    ],
  },

  {
    slug: "native-cigarettes-york",
    title: "Native Cigarettes Mohawk â€” Discount Tobacco | Mohawk Medicine",
    metaDescription: "Buy native cigarettes in Mohawk at Mohawk Medicine. Wide selection of premium and value tobacco brands at the best prices. 2655 Eglinton Ave E, Weston. Open 24/7.",
    h1: "Native Cigarettes Mohawk â€” Discount Tobacco",
    icon: "ðŸ·ï¸",
    heroTagline: "Premium & Value Brands Â· Best Prices in Mohawk Â· Open 24 Hours",
    banner: "/banners/24_Mohawk_Edibles_Concentrates_More.webp",
    sections: [
      {
        heading: "Mohawk's Best Selection of Native Cigarettes",
        body: "Mohawk Medicine carries one of the widest selections of native cigarettes in Mohawk. Located at 2655 Eglinton Ave E near Weston Road, we stock a comprehensive range of both premium and value native cigarette brands at competitive prices. Whether you prefer full-flavour, light, menthol, or specialty blends, our tobacco selection has something for every smoker. We're proud to be one of the few stores in Mohawk that combines a full cannabis dispensary with a comprehensive tobacco counter â€” one stop for everything you need.",
      },
      {
        heading: "Why Mohawk Smokers Choose Mohawk Medicine",
        body: "There are three reasons Mohawk smokers keep coming back to Mohawk Medicine for their cigarettes. First, our prices are among the lowest in the Weston and Mount Dennis area â€” we buy in volume and pass the savings to our customers. Second, our selection is comprehensive â€” we carry brands and varieties that many other shops simply don't stock. Third, we're open 24 hours a day, 7 days a week. Need cigarettes at midnight? 3 AM? We're here. No other tobacco shop in Mohawk offers this level of convenience.",
      },
      {
        heading: "Convenient Eglinton Ave E Location",
        body: "Our shop at 2655 Eglinton Ave E is centrally located in Mohawk â€” easily accessible from Weston Rd, Lawrence Ave W, Highway 401, and all major Peel/Toronto routes. Whether you're walking, driving, or taking the bus, Mohawk Medicine is easy to reach. Free evening street parking is available on Eglinton Ave E and nearby streets. We serve customers from across Mohawk including Weston, Mount Dennis, Etobicoke, North Mohawk, and Mississauga.",
      },
      {
        heading: "More Than Just Cigarettes",
        body: "While you're picking up your cigarettes, browse our full cannabis menu â€” over 200 strains of flower, plus edibles, vapes, concentrates, pre-rolls, and accessories. Many of our customers appreciate the convenience of getting their cigarettes and cannabis in one trip. Our knowledgeable staff can help you with both sides of our inventory.",
      },
    ],
    faqs: [
      { q: "Does Mohawk Medicine sell native cigarettes?", a: "Yes! We carry one of the widest selections of native cigarettes in Mohawk, including premium brands, value brands, full-flavour, light, and menthol varieties." },
      { q: "What cigarette brands do you carry?", a: "We stock a comprehensive range of native cigarette brands in multiple varieties. Our selection rotates regularly. Visit us at 2655 Eglinton Ave E to see our full current inventory and pricing." },
      { q: "Where can I buy cheap cigarettes in Mohawk?", a: "Mohawk Medicine at 2655 Eglinton Ave E offers some of the best cigarette prices in Mohawk's Weston area. We're open 24 hours so you can shop on your own schedule." },
      { q: "Are you open late for cigarette purchases?", a: "We're open 24 hours a day, 7 days a week. Whether you need cigarettes at noon or 3 AM, our doors are always open." },
      { q: "Can I buy cigarettes and cannabis at Mohawk Medicine?", a: "Absolutely. Mohawk Medicine is both a fully-licensed cannabis dispensary and a tobacco retailer. Many customers appreciate the convenience of one stop for both products." },
      { q: "Where is Mohawk Medicine located?", a: "2655 Eglinton Ave E, Toronto, ON M1K 2S2 â€” in Weston/Mount Dennis area. Near Weston GO Station, close to TTC bus routes, with free evening street parking available." },
    ],
  },

  {
    slug: "weed-store-near-mississauga",
    title: "Weed Store Near Mississauga â€” Mohawk Medicine | 5 Min From Highway 410 / 401",
    metaDescription: "Looking for a weed store near Mississauga? Mohawk Medicine at 2655 Eglinton Ave E, Mohawk is just minutes away via Highway 410/401. 200+ strains, open 24 hours.",
    h1: "Weed Store Near Mississauga â€” Mohawk Medicine",
    icon: "ðŸš—",
    heroTagline: "Just Minutes From Mississauga via Highway 410 & 401 Â· Open 24 Hours",
    banner: "/banners/23_Mohawk_Welcome_Banner.webp",
    sections: [
      {
        heading: "The Closest Quality Dispensary to Mississauga",
        body: "Mohawk Medicine is one of the closest premium cannabis dispensaries to Mississauga. Located at 2655 Eglinton Ave E in Mohawk â€” just minutes up Highway 410 and East on 401 â€” we're the easiest dispensary to reach when you're coming from the south-west. Whether you're driving from Square One, Port Credit, Streetsville, or anywhere in the Peel Region, Mohawk Medicine is the fastest, most convenient option for top-tier cannabis.",
      },
      {
        heading: "Why Make the Drive to Mohawk Medicine?",
        body: "Mohawk Medicine offers a wider selection and more competitive pricing than most local Peel options. You'll find over 200 strains across five quality tiers â€” from ultra-rare Exotic genetics (THC 35-39%) to affordable Budget flower at just $3/g. Our Buy 2g Get 1g FREE promotion applies to every tier, and our top three tiers offer Buy 3g Get 3g FREE. With prices starting at $3/g and ounces from $40, Mohawk Medicine delivers value that's worth the short drive from Mississauga.",
      },
      {
        heading: "Open 24 Hours â€” Perfect for Late Night Visits",
        body: "Unlike most dispensaries in Peel Region with limited hours, Mohawk Medicine is open 24 hours a day, 7 days a week. Whether you're heading home from a late shift in Mississauga, going out for the night, or just need a quick pickup after hours, you can stop by Mohawk Medicine anytime. Early morning, late night, weekends, holidays â€” we're always here.",
      },
      {
        heading: "Directions From Mississauga",
        body: "From central Mississauga (Square One area): Take Highway 403 East to Highway 410 North or Hwy 401 East. Exit at Eglinton Ave E in Mohawk and head south to 2655 Eglinton Ave E. Total drive time: approximately 15-20 minutes. Free evening street parking is available near the dispensary. We're also accessible via TTC routes connecting from Mississauga Transit (MiWay) at subway terminals.",
      },
      {
        heading: "Full Menu â€” Cannabis, Edibles, Vapes & More",
        body: "When you make the trip up to Mohawk, make it count. Mohawk Medicine carries a full selection including 200+ flower strains, edibles, vape pens, disposable vapes, concentrates (shatter, wax, hash, live resin), pre-rolled joints, native cigarettes, and accessories. Check our live online menu at mohawkmedicine.com before you visit to see exactly what's in stock.",
      },
    ],
    faqs: [
      { q: "How far is Mohawk Medicine from Mississauga?", a: "We're located at 2655 Eglinton Ave E in Mohawk â€” just a 15-20 minute drive from central Mississauga via Highway 401 East." },
      { q: "Is it worth driving from Mississauga for cannabis?", a: "Absolutely. Mohawk Medicine offers 200+ strains, prices starting at $3/g, and promotions like Buy 2g Get 1g FREE that make the short drive incredibly worthwhile." },
      { q: "Is Mohawk Medicine open late?", a: "We're open 24 hours a day, 7 days a week. Whether you're driving up from Mississauga at noon or midnight, we're open and ready to serve you." },
      { q: "What's the cheapest weed near Mississauga?", a: "Mohawk Medicine has Budget flower from $3/g and value ounces from $40. With our Buy 2g Get 1g FREE promo, these are some of the best prices in the Greater Toronto Area." },
      { q: "Is there parking at Mohawk Medicine?", a: "Yes. Free evening street parking is available near the store on Eglinton Ave E and surrounding residential streets." },
      { q: "Can I take transit from Mississauga to Mohawk Medicine?", a: "Yes! MiWay connects directly to TTC subway and bus routes that will drop you off right near our location on Eglinton Ave E." },
      { q: "Do you carry products besides cannabis?", a: "Yes â€” we also carry native cigarettes, rolling papers, grinders, and other accessories. Many Mississauga customers appreciate the one-stop convenience." },
    ],
  },

  {
    slug: "dispensary-near-me-york",
    title: "Cannabis Dispensary Near Me Mohawk â€” Mohawk Medicine | Open 24 Hours",
    metaDescription: "Find a cannabis dispensary near you in Mohawk. Mohawk Medicine at 2655 Eglinton Ave E has 200+ strains from $3/g. Open 24 hours. Walk in anytime, no appointment needed.",
    h1: "Cannabis Dispensary Near Me â€” Mohawk",
    icon: "ðŸ—ºï¸",
    heroTagline: "Walk-In Welcome Â· Open 24 Hours Â· 200+ Strains In Stock",
    banner: "/banners/23_Mohawk_Welcome_Banner.webp",
    sections: [
      {
        heading: "Find Premium Cannabis Near You in Mohawk",
        body: "If you're searching for a cannabis dispensary near you in Mohawk, Mohawk Medicine is conveniently located at 2655 Eglinton Ave E â€” in the heart of Weston and Mount Dennis neighbourhoods. We serve customers from across Mohawk, North Mohawk, Etobicoke, Mississauga, and Toronto.",
      },
      {
        heading: "Why Choose Mohawk Medicine Over Other Dispensaries?",
        body: "What sets Mohawk Medicine apart from other Mohawk dispensaries is our combination of selection, pricing, and convenience. We carry 200+ strains across five clear quality tiers â€” no confusing markups, no inconsistent pricing. Our Buy 2g Get 1g FREE promotion applies to every tier, every purchase. And unlike most dispensaries that close at midnight, we're open 24 hours a day, 7 days a week. Whether you need flower, edibles, vapes, or concentrates at any hour, Mohawk Medicine is here.",
      },
      {
        heading: "Areas We Serve in Greater Toronto Area",
        body: "Mohawk Medicine is centrally located and easily accessible from anywhere in Mohawk and West Toronto. We regularly serve customers from: Weston, Mount Dennis, Silverthorn, Humber Heights, Kingsview Village, Pelmo Park, North Mohawk, Etobicoke, Rexdale, Mississauga, Brampton, and downtown Toronto. We're near the Weston GO Station, TTC routes, and Highway 401/Hwy 400."
      },
    ],
    faqs: [
      { q: "Where is the closest dispensary in Weston/Mohawk?", a: "Mohawk Medicine at 2655 Eglinton Ave E is conveniently located in the heart of Mohawk â€” easily accessible from Weston Rd and Lawrence Ave W." },
      { q: "Is Mohawk Medicine walk-in friendly?", a: "Absolutely! No appointment needed. Walk in anytime â€” we're open 24 hours a day, 7 days a week. Our friendly staff is always ready to help." },
      { q: "What neighbourhoods does Mohawk Medicine serve?", a: "We serve all of Mohawk and surrounding areas, including Weston, Mount Dennis, Etobicoke, North Mohawk, Mississauga, Brampton, and Toronto." },
      { q: "How do I check what's in stock?", a: "Visit mohawkmedicine.com for our live menu with real-time stock, pricing, and THC levels for all products." },
      { q: "Do you sell edibles and vapes?", a: "Yes! In addition to 200+ flower strains, we carry edibles (gummies, chocolates), vape pens, disposable vapes, concentrates, pre-rolls, and accessories." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

