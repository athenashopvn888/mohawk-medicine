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
        eyebrow="Native Cigarettes · Eglinton East"
        title="Native Cigarettes in Scarborough"
        intro="Shop Native cigarette brands, full, light and menthol styles, plus Backwoods, grabba and other smoke-shop essentials at Mohawk Medicine on Eglinton Avenue East."
        items={items}
        menuHref="/items/cigarettes"
        menuLabel="Shop the cigarette menu"
        menuHeading="Native Cigarette Brands & Prices"
        menuIntro="Compare the cigarette brands, styles and listed prices available from Mohawk Medicine in Scarborough."
        crossLink={{
          href: "/info/nicotine-vapes-scarborough",
          eyebrow: "Also at Mohawk Medicine",
          title: "Prefer a nicotine vape?",
          body: "Shop disposable nicotine vapes with brand, flavour, puff-count and listed price details from Mohawk Medicine.",
          label: "Shop nicotine vapes",
        }}
        sections={[
          {
            heading: "Native Cigarettes on Eglinton Avenue East",
            body: "Mohawk Medicine brings Native cigarettes and smoke-shop essentials together at 2655 Eglinton Ave E in Scarborough, with 24-hour shopping every day of the week.",
          },
          {
            heading: "Full, Light and Menthol Styles",
            body: "Look for familiar names across Canadian, Canadian Goose, Canadian Classics, Nexus and Time, with full, light and menthol choices represented when available.",
          },
          {
            heading: "Backwoods, Grabba and Smoke-Shop Extras",
            body: "Round out the stop with Backwoods, grabba, grabba shakers and nicotine pouch options when they are part of the current selection.",
          },
        ]}
        faqs={[
          {
            q: "Does Mohawk Medicine sell Native cigarettes in Scarborough?",
            a: "Yes. Mohawk Medicine carries Native cigarette brands and related smoke-shop products at 2655 Eglinton Ave E in Scarborough.",
          },
          {
            q: "Can I see cigarette prices online?",
            a: "Yes. Current listed prices appear with the cigarette selection, and staff can confirm the latest shelf details when you visit.",
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
