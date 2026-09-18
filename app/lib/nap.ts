/**
 * Canonical NAP for MEB01. Standalone store — do not attach other shops.
 *
 * Keep public copy to neighbourhood / Eglinton / Scarborough / Toronto facts.
 * Do not invent identity or medical claims beyond the live site brand name.
 * Site brand (Mohawk Medicine) stays as alternateName / public heading brand.
 */
export const STORE_NAP = {
  legalName: "Mohawk Craft Dispensary",
  brandName: "Mohawk Medicine",
  streetAddress: "2655 Eglinton Ave E",
  addressLocality: "Toronto",
  addressRegion: "ON",
  postalCode: "M1K 2S2",
  addressCountry: "CA",
  address: "2655 Eglinton Ave E, Toronto, ON M1K 2S2",
  neighborhoodLabel: "Scarborough, near Brimley Rd",
  city: "Toronto",
  borough: "Scarborough",
  corridor: "Eglinton Ave E",
  phoneDisplay: "+1 (437) 524-9335",
  phoneIntl: "+14375249335",
  website: "https://mohawkmedicine.com/",
  domain: "mohawkmedicine.com",
  hours: "Open 24 Hours",
  hoursLong: "Open 24 Hours / 7 Days a Week",
  deliveryHours: "Dispatcher confirms current delivery availability",
  deliveryHoursLong:
    "Delivery is not listed as 24 hours. The dispatcher confirms whether delivery is available for your Scarborough / Eglinton East address and time before an order is accepted.",
  deliveryMinimum: "$60 product minimum",
  deliveryArea:
    "Local delivery from the Scarborough shop on Eglinton East. The dispatcher confirms whether an address is in range.",
  latitude: 43.7356759,
  longitude: -79.2508842,
  image: "https://mohawkmedicine.com/banners/13_Mohawk_Home_Hero.webp",
  logo: "https://mohawkmedicine.com/mohawk-ribbon-logo.png",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=2655%20Eglinton%20Ave%20E%2C%20Toronto%2C%20ON%20M1K%202S2&z=16&output=embed",
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=2655+Eglinton+Ave+E,+Toronto,+ON+M1K+2S2",
} as const;

export const storeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://mohawkmedicine.com/#store",
  name: STORE_NAP.legalName,
  alternateName: STORE_NAP.brandName,
  description: "24-hour cannabis dispensary at 2655 Eglinton Ave E in Scarborough.",
  url: STORE_NAP.website,
  telephone: STORE_NAP.phoneIntl,
  image: STORE_NAP.image,
  logo: STORE_NAP.logo,
  hasMap: STORE_NAP.hasMap,
  address: {
    "@type": "PostalAddress",
    streetAddress: STORE_NAP.streetAddress,
    addressLocality: STORE_NAP.addressLocality,
    addressRegion: STORE_NAP.addressRegion,
    postalCode: STORE_NAP.postalCode,
    addressCountry: STORE_NAP.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: STORE_NAP.latitude,
    longitude: STORE_NAP.longitude,
  },
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "Place", name: "Scarborough" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
} as const;
