import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreMap from "../components/StoreMap";
import StoreNap from "../components/StoreNap";
import { STORE_NAP } from "../lib/nap";
import ParityHubLinks from "../components/ParityHubLinks";
import styles from "./page.module.css";

const CANONICAL = "https://mohawkmedicine.com/mohawk-craft-visit";
const TITLE = "Mohawk Craft Dispensary | Brand Visit FAQ | Mohawk Medicine";
const DESCRIPTION =
  "Mohawk Craft Dispensary visit FAQ for the walk-in shop at 2655 Eglinton Ave E. Mohawk dispensary, Mohawk Medicine, and Mohawk cannabis searches point to this retail storefront. Adults 19+. Call +1 (437) 524-9335.";

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
    q: "What is Mohawk Craft Dispensary?",
    a: "Mohawk Craft Dispensary is the listed store name for the 24-hour walk-in retail dispensary at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, in Scarborough near Brimley Rd. This website uses Mohawk Medicine as the site brand for the same shop. Call +1 (437) 524-9335. The website homepage is https://mohawkmedicine.com/.",
  },
  {
    q: "Is Mohawk dispensary the same shop as Mohawk Medicine?",
    a: "Yes. Mohawk dispensary here means the same Eglinton East storefront. Store listings use Mohawk Craft Dispensary. This website uses Mohawk Medicine as the site brand. Use the homepage for current menu categories.",
  },
  {
    q: "I searched Mohawk Medicine. Where do I visit?",
    a: "Walk in at 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Scarborough is the borough; Toronto is the city on the postal address. Bring valid 19+ government photo ID. Call +1 (437) 524-9335 if you want to confirm the stop.",
  },
  {
    q: "What does Mohawk cannabis refer to on this site?",
    a: "Mohawk cannabis searches on this site point to the same retail walk-in shop: Mohawk Craft Dispensary / Mohawk Medicine at 2655 Eglinton Ave E. This FAQ is retail visit copy only and does not add origin stories.",
  },
  {
    q: "Where is Mohawk Craft Dispensary and what are the hours?",
    a: "The shop is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2. The store lists Open 24 Hours / 7 Days a Week. Adults 19+ can walk in without an appointment.",
  },
  {
    q: "What should I bring to Mohawk Craft Dispensary?",
    a: "Bring valid 19+ government photo ID. Check the current category page before visiting because names, prices, and pack details can change. No appointment is needed.",
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
    { "@type": "ListItem", position: 2, name: "Mohawk Craft Visit FAQ", item: CANONICAL },
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

export default function MohawkCraftVisitPage() {
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
          alt="Mohawk Craft Dispensary visit FAQ for the walk-in shop on Eglinton Ave E"
          className={styles.bannerImg}
        />
      </section>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Mohawk Craft Visit FAQ</span>
          </nav>
          <p className={styles.eyebrow}>Retail Brand + Visit FAQ</p>
          <h1 className={styles.h1}>Mohawk Craft Dispensary Visit FAQ</h1>
          <p className={styles.tagline}>
            {STORE_NAP.legalName} is the listed store name for the walk-in shop at {STORE_NAP.address}. This
            website uses {STORE_NAP.brandName} as the site brand for the same retail dispensary.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <article className={styles.section}>
            <h2 className={styles.h2}>Who We Are</h2>
            <p>
              {STORE_NAP.legalName} is a retail dispensary. Shoppers can walk in, show 19+ ID, and compare
              current menu categories. This page is the brand visit FAQ for people who searched Mohawk Craft
              Dispensary, Mohawk dispensary, Mohawk Medicine, or Mohawk cannabis.
            </p>
            <p>
              Store listings use {STORE_NAP.legalName}. This website uses {STORE_NAP.brandName} as the site
              brand for the same Eglinton East storefront. Those names are not separate shops.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Where / Hours</h2>
            <p>
              The shop is at {STORE_NAP.address}, {STORE_NAP.neighborhoodLabel}. Call{" "}
              <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>. The website homepage is{" "}
              <a href={STORE_NAP.website}>{STORE_NAP.website}</a>.
            </p>
            <p>
              The store lists {STORE_NAP.hoursLong}. Adults 19+ with valid government photo ID can walk in
              without an appointment. Bring ID at any hour.
            </p>
            <StoreNap />
            <p>
              Use this map for the Scarborough storefront at {STORE_NAP.streetAddress}. Call or open
              directions from the buttons under the map if you need a live route.
            </p>
            <div className={styles.mapWrap}>
              <StoreMap showActions />
            </div>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>What We Don&apos;t Claim</h2>
            <p>
              This FAQ is retail visit copy only. It confirms the listed store name, address, hours, phone,
              website, and menu categories for adults 19+. It does not add origin stories or extra identity
              claims beyond those listed facts.
            </p>
            <p>
              Brand searches for Mohawk Craft Dispensary, Mohawk dispensary, Mohawk Medicine, and Mohawk
              cannabis all point to the same walk-in shop at {STORE_NAP.streetAddress}. This page is not a
              wellness-program page. For late-night arrival details, use the{" "}
              <Link href="/visit">24-hour Scarborough walk-in guide</Link>. For Scarborough pin questions, use
              the <Link href="/near-me">dispensary near me FAQ</Link>.
            </p>
            <ParityHubLinks
              currentPath="/mohawk-craft-visit"
              includeCorridor
              lead="This page stays the retail brand visit FAQ. Use the homepage and *-weed pages for flower, the 24-hour walk-in guide for late-night arrival, and the near-me FAQ for the Scarborough pin."
            />
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>FAQ</h2>
            {FAQS.map((faq) => (
              <details key={faq.q} className={styles.faqItem}>
                <summary className={styles.faqQ}>{faq.q}</summary>
                <p className={styles.faqA}>{faq.a}</p>
              </details>
            ))}
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>CTA</h2>
            <p>
              Plan the stop from the <Link href="/">homepage</Link> menu, or use the trailing-slash{" "}
              <Link href="/weed-dispensary-toronto/">Scarborough weed hub</Link> for store visit
              information. Call the shop if you want a quick confirmation before a special trip.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.ctaPrimary} href={`tel:${STORE_NAP.phoneIntl}`}>
                Call {STORE_NAP.phoneDisplay}
              </a>
              <Link href="/" className={styles.ctaSecondary}>
                Homepage menu
              </Link>
              <Link href="/weed-dispensary-toronto/" className={styles.ctaSecondary}>
                Weed Dispensary Scarborough
              </Link>
              <Link href="/cannabis-delivery-scarborough" className={styles.ctaSecondary}>
                Scarborough Delivery
              </Link>
            </div>
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
              <Link href="/near-me" className={styles.localLink}>
                Dispensary Near Me FAQ
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
              <Link href="/contact" className={styles.localLink}>
                Contact And Hours
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
