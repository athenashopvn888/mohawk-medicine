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
        eyebrow="Eglinton East Nicotine Vape Guide"
        title="Nicotine Vapes in Scarborough"
        intro="Browse the nicotine vape lineup without mixing it into the THC vape menu. Compare the devices, formats, flavour notes and menu prices listed at Mohawk Medicine on Eglinton Avenue East."
        items={items}
        menuHref="/items/vapes"
        menuLabel="Shop the nicotine vape menu"
        menuHeading="Nicotine Vape Menu Highlights"
        menuIntro="These highlights come from the nicotine vape category for Mohawk Medicine. Open the full menu to see every device listed."
        crossLink={{
          href: "/info/native-cigarettes-scarborough",
          eyebrow: "Also at Mohawk Medicine",
          title: "Shopping for Native cigarettes?",
          body: "Jump to the dedicated Scarborough cigarette guide for brands, pack styles and listed menu prices.",
          label: "Explore Native cigarettes",
        }}
        sections={[
          {
            heading: "Nicotine Vapes, Clearly Separated",
            body: "This guide points to the nicotine vape category at Mohawk Medicine. Shoppers looking for THC vapes can use the separate THC vape menu instead.",
          },
          {
            heading: "Compare Device Formats Faster",
            body: "Product names show the device or format details supplied on the menu. Use the cards to compare what is listed, then open an item for a closer look.",
          },
          {
            heading: "A 24-Hour Eglinton Avenue East Stop",
            body: "Mohawk Medicine is at 2655 Eglinton Ave E in Scarborough and lists open 24 hours, so the nicotine vape guide stays connected to the exact store shoppers will visit.",
          },
        ]}
        faqs={[
          {
            q: "Does Mohawk Medicine list nicotine vapes?",
            a: "Yes. The nicotine vape category lists devices and menu prices shown for the Eglinton Avenue East store.",
          },
          {
            q: "Are nicotine vapes and THC vapes on the same page?",
            a: "No. This guide links to the nicotine vape category. THC vapes have a separate category on the site.",
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
