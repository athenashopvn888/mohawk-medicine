import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SmokePilotLanding } from "../../components/SmokePilot";
import { getItemsByCategory } from "../../lib/products";

export const metadata: Metadata = {
  title: { absolute: "Native Cigarettes Scarborough | Mohawk Medicine" },
  description:
    "Explore Native cigarette brands, pack styles, and listed menu prices at Mohawk Medicine, 2655 Eglinton Ave E in Scarborough. Open 24 hours.",
  alternates: { canonical: "https://mohawkmedicine.com/info/native-cigarettes-scarborough" },
};

export default function NativeCigarettesScarboroughPage() {
  const items = getItemsByCategory("CIGARETTES");

  return (
    <>
      <Navbar />
      <SmokePilotLanding
        canonicalUrl="https://mohawkmedicine.com/info/native-cigarettes-scarborough"
        storeName="Mohawk Medicine"
        locationLabel="Scarborough"
        eyebrow="Eglinton East Cigarette Guide"
        title="Native Cigarettes in Scarborough"
        intro="Start with the cigarette lineup. Browse Native cigarette brands, full, lights and menthol styles, plus the pack prices listed at Mohawk Medicine on Eglinton Avenue East."
        items={items}
        menuHref="/items/cigarettes"
        menuLabel="Shop the cigarette menu"
        menuHeading="Cigarette Menu Highlights"
        menuIntro="See cigarette-category products listed for Mohawk Medicine, then open the full menu for the complete lineup."
        crossLink={{
          href: "/info/nicotine-vapes-scarborough",
          eyebrow: "Also at Mohawk Medicine",
          title: "Looking for nicotine vapes?",
          body: "Nicotine vapes have their own Scarborough guide, with a direct path to devices, flavours and listed menu prices.",
          label: "Explore nicotine vapes",
        }}
        sections={[
          {
            heading: "A Dedicated Cigarette Guide for Eglinton East",
            body: "Mohawk Medicine is at 2655 Eglinton Ave E in Scarborough. This page pulls the cigarette lineup forward so shoppers can skip the larger cannabis menu.",
          },
          {
            heading: "Start With Brand and Style",
            body: "Use the product cards to compare the brand and style names shown on the menu. Full, lights, menthol and other options appear when they are part of the listing.",
          },
          {
            heading: "See Packs, Prices and Smoke-Shop Extras",
            body: "The full cigarette category carries the clearest listed price for each item and may also include pouches, grabba or Backwoods products from the same smoke-shop section.",
          },
        ]}
        faqs={[
          {
            q: "Does Mohawk Medicine sell Native cigarettes in Scarborough?",
            a: "Mohawk Medicine has a dedicated cigarette category. This page highlights the cigarette products listed for the Eglinton Avenue East store.",
          },
          {
            q: "Can I see cigarette prices online?",
            a: "Yes. Product cards show a menu price when one is listed. Open the full cigarette menu for the complete lineup.",
          },
          {
            q: "Where is Mohawk Medicine?",
            a: "Mohawk Medicine is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2 and lists open 24 hours.",
          },
        ]}
        address="2655 Eglinton Ave E, Scarborough"
        hours="Open 24 Hours"
        theme="cigarettes"
      />
      <Footer />
    </>
  );
}
