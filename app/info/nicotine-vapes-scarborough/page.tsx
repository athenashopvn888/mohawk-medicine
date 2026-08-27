import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SmokePilotLanding } from "../../components/SmokePilot";

export const metadata: Metadata = {
  title: { absolute: "Nicotine Vapes Scarborough | Mohawk Medicine" },
  description:
    "Adults 19+: review six live-checked nicotine vape product pages from Mohawk Medicine in Scarborough. Nicotine is addictive.",
  alternates: { canonical: "https://mohawkmedicine.com/info/nicotine-vapes-scarborough" },
};

const VERIFIED_NICOTINE_VAPES = [
  {
    slug: "geek-promax-5-30k-puffs",
    name: "GEEK PROMAX – 5% | 30K PUFFS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg",
  },
  {
    slug: "geek-universe-25k-puffs",
    name: "GEEK UNIVERSE 25k PUFFS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp",
  },
  {
    slug: "nexa-pix-30k-puffs-many-flavors",
    name: "NEXA PIX | 30K PUFFS | MANY FLAVORS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp",
  },
  {
    slug: "ovns-10000-5-10k-puffs",
    name: "OVNS 10000 – 5% | 10K PUFFS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg",
  },
  {
    slug: "ovns-disposable-5-8ml-many-flavors",
    name: "OVNS DISPOSABLE – 5% | 8ML | MANY FLAVORS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp",
  },
  {
    slug: "ovns-pioneer-5-22k-puffs",
    name: "OVNS PIONEER – 5% | 22K PUFFS",
    image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp",
  },
] as const;

export default function NicotineVapesScarboroughPage() {
  return (
    <>
      <Navbar hideThcVape />
      <SmokePilotLanding
        canonicalUrl="https://mohawkmedicine.com/info/nicotine-vapes-scarborough"
        storeName="Mohawk Medicine"
        locationLabel="Scarborough"
        eyebrow="Mohawk Medicine · Scarborough · Eglinton East · Adults 19+"
        title="Nicotine Vapes in Scarborough"
        intro="This Mohawk Medicine guide highlights six live-checked nicotine vape product pages for adults in Scarborough near Eglinton Avenue East. Use the nicotine vape category for product information. The cards are a limited evidence set. Nicotine is addictive."
        items={[]}
        menuHref="/items/vapes"
        menuLabel="Browse Nicotine Vapes"
        menuHeading="Six Live-Checked Nicotine Vape Pages"
        menuIntro="Six verified pages only; use the nicotine vape category for product information."
        crossLink={{
          href: "/info/native-cigarettes-scarborough",
          eyebrow: "Separate Mohawk Medicine guide",
          title: "Native Cigarettes in Scarborough",
          body: "Use the verified Mohawk Medicine Native Cigarettes guide for the separate cigarette category.",
          label: "Read the Native Cigarettes guide",
        }}
        sections={[
          {
            heading: "Six Live-Checked Nicotine Vape Pages",
            body: "This focused set covers verified Geek, NEXA and OVNS product pages. Each card keeps its exact supported name and image attached to the correct page. It is a six-page reference set, not a claim about the complete nicotine vape selection.",
          },
          {
            heading: "Keep Product Details Attached to Each Page",
            body: "Names on the live-checked pages include product-specific nicotine strength, format and puff-count details. Use those details only to identify the corresponding listing; they are not guarantees of duration, performance or superiority.",
          },
          {
            heading: "Scarborough and Eglinton East Context",
            body: "This Mohawk Medicine resource is written for adults looking for nicotine vape information around Scarborough, Eglinton Avenue East and Eglinton East. Product facts remain tied to the six verified pages rather than broad local assumptions.",
          },
          {
            heading: "Keep Nicotine and THC Vapes Separate",
            body: "This page is limited to six live-checked products from the VAPE PENS category. THC and cannabis vape products are excluded from this nicotine guide.",
          },
        ]}
        faqs={[
          {
            q: "How many nicotine vape product pages are featured here?",
            a: "Six live-checked product pages are featured. The cards are a focused evidence set and do not claim to show a complete or currently available selection.",
          },
          {
            q: "Where should adults review nicotine vape category information?",
            a: "Use /items/vapes. Product details can change, so keep each detail attached to its own current product page.",
          },
          {
            q: "Does this Mohawk Medicine page include THC vapes?",
            a: "No. This guide covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products are excluded.",
          },
        ]}
        address=""
        hours=""
        theme="nicotine"
        heroItems={VERIFIED_NICOTINE_VAPES}
        heroDisclosure="Six live-checked product pages only. These cards do not describe the complete selection, current stock, price or availability."
        heroSecondaryLabel="Review the Six Vape Cards"
        warning="Adults 19+. Nicotine is addictive."
        reducedCardsOnly
      />
      <Footer hideThcVape />
    </>
  );
}

