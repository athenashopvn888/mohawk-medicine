import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreMap from "../components/StoreMap";
import StoreNap from "../components/StoreNap";
import { STORE_NAP } from "../lib/nap";
import ParityHubLinks from "../components/ParityHubLinks";
import styles from "./page.module.css";

const CANONICAL = "https://mohawkmedicine.com/near-me";
const TITLE = "Dispensary Near Me in Scarborough | Mohawk Medicine | Eglinton East FAQ";
const DESCRIPTION =
  "Dispensary near me in Scarborough: Mohawk Medicine at 2655 Eglinton Ave E. Eglinton East arrival FAQ for a cannabis store near me. Adults 19+. Call +1 (437) 524-9335.";

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

const FAQS = [
  {
    q: "I searched dispensary near me. Where is the Scarborough shop?",
    a: "If you searched dispensary near me in Scarborough or along Eglinton Ave E, this FAQ points to one walk-in storefront: 2655 Eglinton Ave E, Toronto, ON M1K 2S2. The listed store name is Mohawk Craft Dispensary. Call +1 (437) 524-9335. The website homepage is https://mohawkmedicine.com/.",
  },
  {
    q: "Is there a dispensary in Scarborough on Eglinton East?",
    a: "Yes. Mohawk Medicine is the Scarborough walk-in shop at 2655 Eglinton Ave E, near Brimley Rd on Eglinton East. Use that exact pin rather than a generic Toronto result.",
  },
  {
    q: "Is Mohawk dispensary a cannabis store near me?",
    a: "Mohawk dispensary here means the same Eglinton East storefront. This website uses Mohawk Medicine as the site brand for Mohawk Craft Dispensary at 2655 Eglinton Ave E. Check the homepage for current menu categories.",
  },
  {
    q: "Cannabis near me in Scarborough — which address should I use?",
    a: "Use 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Scarborough is the borough; Toronto is the city on the postal address. Map the Eglinton East pin, then walk in with valid 19+ government photo ID.",
  },
  {
    q: "Is this a Toronto dispensary or a Scarborough dispensary?",
    a: "Both labels can appear in search. The shop is in Scarborough on Eglinton Avenue East, with a Toronto postal address. Use the Toronto store page for city-level visit information and this FAQ for the Scarborough / Eglinton East pin.",
  },
  {
    q: "What are the hours for this Scarborough walk-in?",
    a: "The store lists Open 24 Hours / 7 Days a Week. Adults 19+ can walk in without an appointment. Call +1 (437) 524-9335 if you want to confirm the stop before a special trip.",
  },
  {
    q: "Is the dispensary near me in Scarborough open now?",
    a: "The Eglinton East shop lists Open 24 Hours / 7 Days a Week, so a late-night or early-morning walk-in is treated as an open-now visit on that listing. Use the 24-hour Scarborough walk-in guide for arrival details. Delivery hours are separate.",
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
    { "@type": "ListItem", position: 2, name: "Dispensary Near Me FAQ", item: CANONICAL },
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

export default function NearMePage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <section className={styles.bannerSection}>
        <img
          src="/banners/23_Mohawk_Welcome_Banner.webp"
          alt="Dispensary near me in Scarborough at Mohawk Medicine on Eglinton Ave E"
          className={styles.bannerImg}
        />
      </section>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Dispensary Near Me FAQ</span>
          </nav>
          <p className={styles.eyebrow}>Eglinton East Arrival FAQ</p>
          <h1 className={styles.h1}>Dispensary Near Me in Scarborough</h1>
          <p className={styles.tagline}>
            If you searched dispensary near me in Scarborough, this FAQ points to one walk-in shop:{" "}
            {STORE_NAP.brandName} at {STORE_NAP.address}. The listed store name is {STORE_NAP.legalName}.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <article className={styles.section}>
            <h2 className={styles.h2}>Pin Clarity</h2>
            <p>
              The exact pin is {STORE_NAP.address}, {STORE_NAP.neighborhoodLabel}. Use that address when a
              dispensary near me or cannabis store near me search needs a storefront, not a generic city
              result.
            </p>
            <p>
              Store listings use {STORE_NAP.legalName}. This website uses {STORE_NAP.brandName} as the site
              brand for the same shop. Call{" "}
              <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>. The website homepage is{" "}
              <a href={STORE_NAP.website}>{STORE_NAP.website}</a>.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Scarborough vs Toronto</h2>
            <p>
              The postal address uses Toronto because Scarborough is a Toronto borough. For arrival, treat
              this as a Scarborough / Eglinton East storefront, not a downtown Toronto shop.
            </p>
            <p>
              Keep this FAQ for the Scarborough pin. Use the{" "}
              <Link href="/weed-dispensary-toronto/">Toronto weed dispensary</Link> page for city-level visit
              information. Use the <Link href="/">homepage</Link> for current menu categories.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Hours</h2>
            <p>
              The store lists {STORE_NAP.hoursLong}. Adults 19+ with valid government photo ID can walk in
              without an appointment. Bring ID at any hour.
            </p>
            <p>
              For late-night open-now arrival on Eglinton East, use the{" "}
              <Link href="/visit">24-hour Scarborough walk-in guide</Link>. This page stays the near-me /
              Scarborough pin FAQ. Native cigarettes and nicotine vapes have their own Scarborough
              guides if that is the reason for the stop.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Retail Dispensary Facts</h2>
            <p>
              This is a retail cannabis and smoke-shop storefront. Shoppers can compare flower tiers
              (Exotic, Premium, AAA+, AA, Budget), pre-rolls, edibles, THC vapes, nicotine vapes,
              concentrates, accessories, and cigarettes. Check the current category page before visiting
              because names, prices, and pack details can change.
            </p>
            <p>
              This FAQ is visit and arrival copy only. It describes the storefront, hours, and listed
              menu categories for adults 19+.
            </p>
            <ParityHubLinks
              currentPath="/near-me"
              includeCorridor
              lead="Keep this FAQ for dispensary near me / Scarborough pin questions. Open a *-weed page for flower, the 24-hour walk-in guide for open-now arrival, or the Mohawk Craft visit FAQ for listed-name questions."
            />
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Store Details</h2>
            <StoreNap />
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Map And Directions</h2>
            <p>
              Use this map for the Scarborough storefront at {STORE_NAP.streetAddress}. Call or open
              directions from the buttons under the map if you need a live route.
            </p>
            <div className={styles.mapWrap}>
              <StoreMap showActions />
            </div>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Home, Toronto Store, And Walk-In Guide</h2>
            <p>
              Keep this page for dispensary near me / Scarborough arrival. Use the homepage for menu
              categories. Use the trailing-slash Toronto landing for city-level visit information. Use the
              24-hour walk-in guide for open-now Eglinton East details.
            </p>
            <div className={styles.localLinks}>
              <Link href="/" className={styles.localLink}>
                Homepage
              </Link>
              <Link href="/weed-dispensary-toronto/" className={styles.localLink}>
                Weed Dispensary Scarborough
              </Link>
              <Link href="/cannabis-delivery-scarborough" className={styles.localLink}>
                Scarborough Cannabis Delivery
              </Link>
              <Link href="/visit" className={styles.localLink}>
                24-Hour Walk-In Guide
              </Link>
              <Link href="/native-cigarettes-scarborough" className={styles.localLink}>
                Native Cigarettes Scarborough
              </Link>
              <Link href="/nicotine-vape-scarborough" className={styles.localLink}>
                Nicotine Vapes Scarborough
              </Link>
              <Link href="/mohawk-craft-visit" className={styles.localLink}>
                Mohawk Craft Visit FAQ
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
              <Link href="/info/scarborough-weed-dispensary" className={styles.localLink}>
                Scarborough Weed Dispensary
              </Link>
              <Link href="/info/weed-store-near-eglinton-east" className={styles.localLink}>
                Weed Store Near Eglinton East
              </Link>
              <Link href="/contact" className={styles.localLink}>
                Contact And Hours
              </Link>
            </div>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>FAQ: Dispensary Near Me / Scarborough</h2>
            {FAQS.map((faq) => (
              <details key={faq.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{faq.q}</summary>
                <p className={styles.faqA}>{faq.a}</p>
              </details>
            ))}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
