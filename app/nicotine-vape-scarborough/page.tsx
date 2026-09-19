import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreMap from "../components/StoreMap";
import StoreNap from "../components/StoreNap";
import { STORE_NAP } from "../lib/nap";
import ParityHubLinks from "../components/ParityHubLinks";
import styles from "./page.module.css";

const CANONICAL = "https://mohawkmedicine.com/nicotine-vape-scarborough";
const TITLE = "Nicotine Vape Scarborough | Eglinton East | Mohawk Medicine";
const DESCRIPTION =
  "Adults 19+: nicotine vapes at Mohawk Medicine, 2655 Eglinton Ave E in Scarborough on Eglinton East. Separate from THC vapes. Nicotine is addictive. Call +1 (437) 524-9335.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
  },
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

const FAQS = [
  {
    q: "Does Mohawk Medicine sell nicotine vapes in Scarborough?",
    a: "Yes. Nicotine vapes are listed in a separate nicotine vape category for the walk-in shop at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, on Eglinton East in Scarborough. Adults 19+. Nicotine is addictive.",
  },
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
  {
    q: "Is the Scarborough nicotine vape counter open 24 hours?",
    a: "The walk-in shop lists Open 24 Hours / 7 Days a Week. Adults 19+ with valid government photo ID can walk in on Eglinton East. Delivery hours are separate.",
  },
  {
    q: "Is this the same shop as Mohawk Craft Dispensary?",
    a: "Yes. Store listings use Mohawk Craft Dispensary. This website uses Mohawk Medicine as the site brand for the same retail storefront at 2655 Eglinton Ave E. Call +1 (437) 524-9335. The website homepage is https://mohawkmedicine.com/.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CANONICAL}#webpage`,
  url: CANONICAL,
  name: TITLE,
  description: DESCRIPTION,
  about: { "@id": "https://mohawkmedicine.com/#store" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mohawkmedicine.com/" },
    { "@type": "ListItem", position: 2, name: "Nicotine Vape Scarborough", item: CANONICAL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function NicotineVapeScarboroughPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <Navbar hideThcVape />

      <section className={styles.bannerSection}>
        <img
          src="/banners/23_Mohawk_Welcome_Banner.webp"
          alt="Nicotine vape Scarborough at Mohawk Medicine on Eglinton Ave E"
          className={styles.bannerImg}
        />
      </section>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Nicotine Vape Scarborough</span>
          </nav>
          <p className={styles.eyebrow}>Mohawk Medicine · Scarborough · Eglinton East · Adults 19+</p>
          <h1 className={styles.h1}>Nicotine Vapes in Scarborough on Eglinton East</h1>
          <p className={styles.tagline}>
            Retail nicotine vape listings at {STORE_NAP.brandName}, {STORE_NAP.address}. The listed store
            name is {STORE_NAP.legalName}. Nicotine is addictive.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <article className={styles.section}>
            <h2 className={styles.h2}>Nicotine Vapes, Not THC Vapes</h2>
            <p className={styles.warning}>Adults 19+. Nicotine is addictive.</p>
            <p>
              This page is the Scarborough / Eglinton East nicotine vape guide for the walk-in shop at{" "}
              {STORE_NAP.address}, {STORE_NAP.neighborhoodLabel}. Use the nicotine vape category for
              product information. THC and cannabis vape products stay on their own category.
            </p>
            <p>
              Store listings use {STORE_NAP.legalName}. This website uses {STORE_NAP.brandName} as the site
              brand for the same storefront. Call{" "}
              <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>. The website homepage is{" "}
              <a href={STORE_NAP.website}>{STORE_NAP.website}</a>.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Six Live-Checked Nicotine Vape Pages</h2>
            <p>
              This focused set covers verified Geek, NEXA and OVNS product pages. Each card keeps its exact
              supported name and image attached to the correct page. It is a six-page reference set, not a
              claim about the complete nicotine vape selection.
            </p>
            <p>
              Names on the live-checked pages include product-specific nicotine strength, format and
              puff-count details. Use those details only to identify the corresponding listing; they are
              not guarantees of duration, performance or superiority.
            </p>
            <div className={styles.productGrid}>
              {VERIFIED_NICOTINE_VAPES.map((item) => (
                <Link key={item.slug} href={`/item/${item.slug}`} className={styles.productCard} data-product-slug={item.slug}>
                  <img src={item.image} alt={item.name} />
                  <strong>{item.name}</strong>
                </Link>
              ))}
            </div>
            <p>
              Six live-checked product pages only. These cards do not describe the complete selection,
              current stock, price or availability.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/items/vapes" className={styles.ctaPrimary}>
                Browse Nicotine Vapes
              </Link>
              <Link href="/native-cigarettes-scarborough" className={styles.ctaSecondary}>
                Native Cigarettes guide
              </Link>
            </div>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Scarborough And Eglinton East Context</h2>
            <p>
              This {STORE_NAP.brandName} resource is written for adults looking for nicotine vape
              information around Scarborough, Eglinton Avenue East and Eglinton East. Product facts remain
              tied to the six verified pages rather than broad local assumptions.
            </p>
            <p>
              The walk-in shop lists {STORE_NAP.hoursLong}. Use the{" "}
              <Link href="/visit">24-hour Scarborough walk-in guide</Link> for open-now arrival. Delivery
              hours stay dispatcher-confirmed on the{" "}
              <Link href="/cannabis-delivery-scarborough">Scarborough cannabis delivery page</Link>.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Store Details</h2>
            <StoreNap />
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Map And Eglinton East Pin</h2>
            <p>
              Use this map for the Scarborough storefront at {STORE_NAP.streetAddress}. Call or open
              directions if you need the walk-in lot.
            </p>
            <div className={styles.mapWrap}>
              <StoreMap showActions />
            </div>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Home, Visit, Delivery, And Flower Tiers</h2>
            <p>
              Keep this page for nicotine vapes in Scarborough / Eglinton East. Use the homepage for
              current menu categories. Use a named *-weed page when the visit is about flower.
            </p>
            <ParityHubLinks
              currentPath="/nicotine-vape-scarborough"
              includeCorridor
              lead="This page stays the Scarborough / Eglinton East nicotine vape guide. Open the homepage, 24-hour walk-in guide, Mohawk Craft visit FAQ, Scarborough weed hub, delivery page, or a *-weed flower page without leaving this shop."
            />
            <div className={styles.localLinks}>
              <Link href="/" className={styles.localLink}>
                Homepage
              </Link>
              <Link href="/visit" className={styles.localLink}>
                24-Hour Walk-In Guide
              </Link>
              <Link href="/native-cigarettes-scarborough" className={styles.localLink}>
                Native Cigarettes Scarborough
              </Link>
              <Link href="/items/vapes" className={styles.localLink}>
                Nicotine Vape Menu
              </Link>
              <Link href="/mohawk-craft-visit" className={styles.localLink}>
                Mohawk Craft Visit FAQ
              </Link>
              <Link href="/weed-dispensary-toronto/" className={styles.localLink}>
                Weed Dispensary Scarborough
              </Link>
              <Link href="/cannabis-delivery-scarborough" className={styles.localLink}>
                Scarborough Cannabis Delivery
              </Link>
              <Link href="/weed-delivery-toronto" className={styles.localLink}>
                Live Delivery Menu
              </Link>
              <Link href="/exotic-weed" className={styles.localLink}>
                Exotic Weed
              </Link>
              <Link href="/premium-weed" className={styles.localLink}>
                Premium Weed
              </Link>
              <Link href="/aaa-weed" className={styles.localLink}>
                AAA+ Weed
              </Link>
              <Link href="/aa-weed" className={styles.localLink}>
                AA Weed
              </Link>
              <Link href="/budget-weed" className={styles.localLink}>
                Budget Weed
              </Link>
              <Link href="/near-me" className={styles.localLink}>
                Dispensary Near Me FAQ
              </Link>
              <Link href="/contact" className={styles.localLink}>
                Contact And Hours
              </Link>
            </div>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>FAQ: Nicotine Vape Scarborough / Eglinton East</h2>
            {FAQS.map((faq) => (
              <details key={faq.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{faq.q}</summary>
                <p className={styles.faqA}>{faq.a}</p>
              </details>
            ))}
          </article>
        </div>
      </section>

      <Footer hideThcVape />
    </main>
  );
}
