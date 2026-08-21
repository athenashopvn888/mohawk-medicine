import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SmokePilotLanding } from "../../components/SmokePilot";
import { getItemsByCategory } from "../../lib/products";

export const metadata: Metadata = {
  title: { absolute: "Nicotine Vapes Scarborough | Mohawk Medicine" },
  description:
    "Browse nicotine vape devices, flavours, formats, and listed menu prices at Mohawk Medicine, 2655 Eglinton Ave E in Scarborough. Open 24 hours.",
  alternates: { canonical: "https://mohawkmedicine.com/info/nicotine-vapes-scarborough" },
};

export default function NicotineVapesScarboroughPage() {
  const items = getItemsByCategory("VAPE PENS");

  return (
    <>
      <Navbar />
      <SmokePilotLanding
        canonicalUrl="https://mohawkmedicine.com/info/nicotine-vapes-scarborough"
        storeName="Mohawk Medicine"
        locationLabel="Scarborough"
        eyebrow="Nicotine Vapes · Eglinton East"
        title="Nicotine Vapes in Scarborough"
        intro="Shop nicotine vape devices from names such as Geek, NEXA and OVNS at Mohawk Medicine on Eglinton Avenue East. Compare formats, flavours, puff counts and listed prices."
        items={items}
        menuHref="/items/vapes"
        menuLabel="Shop the nicotine vape menu"
        menuHeading="Nicotine Vape Devices & Prices"
        menuIntro="Compare disposable nicotine vape options listed by Mohawk Medicine in Scarborough."
        crossLink={{
          href: "/info/native-cigarettes-scarborough",
          eyebrow: "Also at Mohawk Medicine",
          title: "Need Native cigarettes instead?",
          body: "Shop full, light and menthol cigarette styles alongside Backwoods, grabba and other smoke-shop essentials at Mohawk Medicine.",
          label: "Shop Native cigarettes",
        }}
        sections={[
          {
            heading: "Nicotine Vapes on Eglinton Avenue East",
            body: "Mohawk Medicine carries nicotine vape options at 2655 Eglinton Ave E in Scarborough, with a changing mix of disposable devices and listed flavour choices.",
          },
          {
            heading: "Flavours, Puff Counts and Device Formats",
            body: "Compare disposable puff counts, device formats and flavour details from Geek, NEXA, OVNS and other names in the current selection.",
          },
          {
            heading: "Open 24 Hours in Scarborough",
            body: "Visit Mohawk Medicine at 2655 Eglinton Ave E any time of day or night for nicotine vapes, cigarettes and other smoke-shop essentials.",
          },
        ]}
        faqs={[
          {
            q: "Does Mohawk Medicine sell nicotine vapes?",
            a: "Yes. Mohawk Medicine carries nicotine vape devices with formats, flavours, puff counts and listed prices for the Eglinton Avenue East store.",
          },
          {
            q: "Are nicotine vapes different from THC vapes?",
            a: "Yes. Nicotine devices and THC vapes are different product groups at Mohawk Medicine, with separate selections for each.",
          },
          {
            q: "Where is Mohawk Medicine?",
            a: "Mohawk Medicine is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2 and lists open 24 hours.",
          },
        ]}
        address="2655 Eglinton Ave E, Scarborough"
        hours="Open 24 Hours"
        theme="nicotine"
      />
      <Footer />
    </>
  );
}
