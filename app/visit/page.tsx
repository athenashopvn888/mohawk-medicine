import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreMap from "../components/StoreMap";
import StoreNap from "../components/StoreNap";
import { STORE_NAP } from "../lib/nap";
import styles from "./page.module.css";

const CANONICAL = "https://mohawkmedicine.com/visit";
const TITLE = "24-Hour Dispensary Scarborough | Mohawk Medicine | Eglinton East Walk-In";
const DESCRIPTION =
  "24-hour dispensary in Scarborough at 2655 Eglinton Ave E. Mohawk Medicine is open now for walk-in shopping on Eglinton East. Adults 19+. Call +1 (437) 524-9335.";

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
    q: "Is there a 24 hour dispensary in Scarborough?",
    a: "Yes. Mohawk Medicine at 2655 Eglinton Ave E, Toronto, ON M1K 2S2 lists Open 24 Hours / 7 Days a Week. The listed store name is Mohawk Craft Dispensary. Bring valid 19+ government photo ID.",
  },
  {
    q: "Where is the dispensary on Eglinton East in Scarborough?",
    a: "The walk-in shop is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, in Scarborough near Brimley Rd. Call +1 (437) 524-9335. The website homepage is https://mohawkmedicine.com/.",
  },
  {
    q: "Is Mohawk dispensary Scarborough open now?",
    a: "The store lists Open 24 Hours, so a late-night or early-morning walk-in is treated as an open-now visit on that listing. Call +1 (437) 524-9335 if you want to confirm the stop before a special trip.",
  },
  {
    q: "I searched dispensary near me. Is this the Scarborough storefront?",
    a: "If you are looking for a dispensary near me in Scarborough or along Eglinton Ave E, this page points to one storefront: 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Use the homepage at https://mohawkmedicine.com/ for menu categories.",
  },
  {
    q: "Is this a 24 hour dispensary open near me?",
    a: "The Eglinton East shop lists Open 24 Hours / 7 Days a Week. Adults 19+ can walk in without an appointment. Check current TTC or map details for your route, then use the exact address 2655 Eglinton Ave E.",
  },
  {
    q: "What does this Scarborough dispensary sell?",
    a: "This is a retail dispensary listing flower tiers, pre-rolls, edibles, THC vapes, nicotine vapes, concentrates, accessories, and cigarettes. Check the current category page before visiting. Product mix and prices can change.",
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
    { "@type": "ListItem", position: 2, name: "24-Hour Walk-In Guide", item: CANONICAL },
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

export default function VisitPage() {
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
          alt="24-hour dispensary Scarborough walk-in at Mohawk Medicine on Eglinton Ave E"
          className={styles.bannerImg}
        />
      </section>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>24-Hour Walk-In Guide</span>
          </nav>
          <p className={styles.eyebrow}>Scarborough / Eglinton East Walk-In Guide</p>
          <h1 className={styles.h1}>24-Hour Dispensary Scarborough</h1>
          <p className={styles.tagline}>
            Mohawk Medicine is a 24-hour walk-in dispensary at {STORE_NAP.address}. The listed store
            name is {STORE_NAP.legalName}. Use this page for open-now arrival details on Eglinton East.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <article className={styles.section}>
            <h2 className={styles.h2}>2655 Eglinton Ave E — Scarborough Side Arrival</h2>
            <p>
              The shop is on the Scarborough side of Eglinton Avenue East at {STORE_NAP.address},{" "}
              {STORE_NAP.neighborhoodLabel}. Use that exact pin when you map the trip rather than a
              generic Toronto result.
            </p>
            <p>
              No appointment is needed. Adults 19+ with valid government photo ID can walk in at any
              hour. If you want to confirm the stop before you head out, call{" "}
              <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>.
            </p>
            <p>
              Store listings use the name {STORE_NAP.legalName}. This website uses {STORE_NAP.brandName}{" "}
              as the site brand for the same storefront. The website homepage is{" "}
              <a href={STORE_NAP.website}>{STORE_NAP.website}</a>.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>24-Hour / Open-Now Hours</h2>
            <p>
              The store lists {STORE_NAP.hoursLong}. A late-night or early-morning visit is treated as
              an open-now walk-in on that listing. Bring 19+ ID at any hour.
            </p>
            <p>
              If you searched for a 24 hour dispensary near me or a 24 hour dispensary open near me,
              this page is the Eglinton East pin to use: {STORE_NAP.streetAddress} in Scarborough.
              Call {STORE_NAP.phoneDisplay} before a special trip if you want a quick confirmation.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Nearby Transit Landmarks</h2>
            <p>
              This Eglinton East stop is useful if you are coming along Eglinton East, Kennedy Road,
              Brimley Road, Golden Mile, Birchmount, Warden, or the Kennedy Station area. Check
              current TTC or map details before visiting.
            </p>
            <p>
              The shop sits in a retail plaza on Eglinton Ave E. Use the map pin below for the lot
              rather than guessing a nearby corner.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>What This Retail Dispensary Sells</h2>
            <p>
              This is a retail cannabis and smoke-shop storefront. Shoppers can compare flower tiers
              (Exotic, Premium, AAA+, AA, Budget), pre-rolls, edibles, THC vapes, nicotine vapes,
              concentrates, accessories, and cigarettes. Check the current category page before
              visiting because names, prices, and pack details can change.
            </p>
            <p>
              Cigarette listings are on the{" "}
              <Link href="/items/cigarettes">cigarettes menu</Link>. Use the{" "}
              <Link href="/">homepage</Link> to start with flower tiers or other categories. This
              page is a walk-in retail guide only.
            </p>
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
            <h2 className={styles.h2}>Home And Toronto Store Pages</h2>
            <p>
              Keep this page for 24-hour Scarborough / Eglinton East arrival. Use the homepage for
              current menu categories. Use the Toronto store page for broader city-level visit
              information. Those two URLs stay on the homepage root and the trailing-slash Toronto
              landing so the same shop is not split across extra website addresses.
            </p>
            <div className={styles.localLinks}>
              <Link href="/" className={styles.localLink}>
                Homepage
              </Link>
              <Link href="/weed-dispensary-toronto/" className={styles.localLink}>
                Toronto Weed Dispensary
              </Link>
              <Link href="/near-me" className={styles.localLink}>
                Dispensary Near Me FAQ
              </Link>
              <Link href="/mohawk-craft-visit" className={styles.localLink}>
                Mohawk Craft Visit FAQ
              </Link>
              <Link href="/info/scarborough-weed-dispensary" className={styles.localLink}>
                Scarborough Weed Dispensary
              </Link>
              <Link href="/info/weed-store-near-eglinton-east" className={styles.localLink}>
                Weed Store Near Eglinton East
              </Link>
              <Link href="/resources/eglinton-east-scarborough-visit-guide" className={styles.localLink}>
                First Visit Guide
              </Link>
              <Link href="/items/cigarettes" className={styles.localLink}>
                Cigarettes Menu
              </Link>
              <Link href="/contact" className={styles.localLink}>
                Contact And Hours
              </Link>
            </div>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>FAQ: Dispensary Scarborough / Near Me</h2>
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
