import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreMap from "../components/StoreMap";
import StoreNap from "../components/StoreNap";
import { STORE_NAP } from "../lib/nap";
import ParityHubLinks from "../components/ParityHubLinks";
import styles from "./page.module.css";

const CANONICAL = "https://mohawkmedicine.com/native-cigarettes-scarborough";
const TITLE = "Native Cigarettes Scarborough | Eglinton East | Mohawk Medicine";
const DESCRIPTION =
  "Native cigarettes at Mohawk Medicine, 2655 Eglinton Ave E in Scarborough on Eglinton East. Retail product listings for adults 19+. Check the current cigarette menu. Call +1 (437) 524-9335.";

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
    q: "Does Mohawk Medicine sell Native cigarettes in Scarborough?",
    a: "Yes. The Eglinton East shop at 2655 Eglinton Ave E, Toronto, ON M1K 2S2 lists Native cigarette brands and related smoke-shop items on the cigarette menu. Adults 19+. Check the current category page before visiting because brand mix and prices can change.",
  },
  {
    q: "Where do I see listed cigarette brands and prices?",
    a: "Use the cigarette menu for current brand names, pack styles, and listed prices. Staff can confirm shelf details in store at 2655 Eglinton Ave E.",
  },
  {
    q: "Are Native cigarettes the same as the cannabis menu?",
    a: "No. Native cigarettes are a separate retail product category. Flower stays on the *-weed pages. Nicotine vapes have their own Scarborough guide. Use the matching page for the product you want.",
  },
  {
    q: "Do you list nicotine pouches, Backwoods, or grabba?",
    a: "Those items can appear on the cigarette menu when they are part of the current selection. Confirm the live category page before a special trip. This page does not invent stock.",
  },
  {
    q: "Is the Scarborough cigarette counter open 24 hours?",
    a: "The walk-in shop lists Open 24 Hours / 7 Days a Week. Adults 19+ with valid government photo ID can walk in on Eglinton East. Delivery hours are separate and dispatcher-confirmed.",
  },
  {
    q: "What is the listed store name for this cigarette counter?",
    a: "Store listings use Mohawk Craft Dispensary. This website uses Mohawk Medicine as the site brand for the same retail storefront at 2655 Eglinton Ave E. Call +1 (437) 524-9335. The website homepage is https://mohawkmedicine.com/.",
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
    { "@type": "ListItem", position: 2, name: "Native Cigarettes Scarborough", item: CANONICAL },
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

export default function NativeCigarettesScarboroughPage() {
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
          alt="Native cigarettes Scarborough at Mohawk Medicine on Eglinton Ave E"
          className={styles.bannerImg}
        />
      </section>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Native Cigarettes Scarborough</span>
          </nav>
          <p className={styles.eyebrow}>Scarborough / Eglinton East · Retail Product Label</p>
          <h1 className={styles.h1}>Native Cigarettes in Scarborough on Eglinton East</h1>
          <p className={styles.tagline}>
            Retail cigarette listings at {STORE_NAP.brandName}, {STORE_NAP.address}. The listed store name is{" "}
            {STORE_NAP.legalName}. Adults 19+.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <article className={styles.section}>
            <h2 className={styles.h2}>Retail Counter On Eglinton East</h2>
            <p className={styles.warning}>Adults 19+. Check the current cigarette menu before visiting.</p>
            <p>
              This page is the Scarborough / Eglinton East guide for Native cigarettes sold at the walk-in
              shop at {STORE_NAP.address}, {STORE_NAP.neighborhoodLabel}. Native cigarettes here means the
              listed retail product category on the cigarette menu, not a separate shop.
            </p>
            <p>
              Store listings use {STORE_NAP.legalName}. This website uses {STORE_NAP.brandName} as the site
              brand for the same storefront. Call{" "}
              <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>. The website homepage is{" "}
              <a href={STORE_NAP.website}>{STORE_NAP.website}</a>.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Listed Brands And Pack Styles</h2>
            <p>
              The cigarette menu may list names such as Canadian, Canadian Goose, Canadian Classics, Nexus,
              and Time, with full, light, and menthol styles when those options are on the current page.
              Use the live menu for brand, pack, and price. This page does not invent inventory.
            </p>
            <p>
              Backwoods, grabba, grabba shakers, and nicotine pouch options can appear on the same
              cigarette category when they are part of the current selection. Confirm those listings
              in the menu if one exact item is the reason for the stop.
            </p>
            <div className={styles.ctaRow}>
              <Link href="/items/cigarettes" className={styles.ctaPrimary}>
                Open cigarette menu
              </Link>
              <a className={styles.ctaSecondary} href={`tel:${STORE_NAP.phoneIntl}`}>
                Call {STORE_NAP.phoneDisplay}
              </a>
            </div>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>What This Page Does Not Add</h2>
            <p>
              This FAQ is retail product copy only. It confirms the listed cigarette category, address,
              hours, phone, and website for adults 19+. It does not add origin stories or extra identity
              claims beyond those listed facts.
            </p>
            <p>
              Keep cannabis flower on the *-weed pages. Keep nicotine vapes on the separate Scarborough
              nicotine vape guide. Keep late-night arrival on the 24-hour walk-in guide.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>24-Hour Walk-In, Separate From Delivery</h2>
            <p>
              The storefront lists {STORE_NAP.hoursLong}. Adults 19+ with valid government photo ID can
              walk in on Eglinton East without an appointment. That hours claim belongs to the walk-in
              shop. Delivery hours stay dispatcher-confirmed.
            </p>
            <p>
              Use the <Link href="/visit">24-hour Scarborough walk-in guide</Link> for open-now arrival.
              Use the <Link href="/cannabis-delivery-scarborough">Scarborough cannabis delivery page</Link>{" "}
              when the order is delivery, not cigarettes at the counter.
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
              Keep this page for Native cigarettes in Scarborough / Eglinton East. Use the homepage for
              current menu categories. Use a named *-weed page when the visit is about flower.
            </p>
            <ParityHubLinks
              currentPath="/native-cigarettes-scarborough"
              includeCorridor
              lead="This page stays the Scarborough / Eglinton East Native cigarettes guide. Open the homepage, 24-hour walk-in guide, Mohawk Craft visit FAQ, Scarborough weed hub, delivery page, or a *-weed flower page without leaving this shop."
            />
            <div className={styles.localLinks}>
              <Link href="/" className={styles.localLink}>
                Homepage
              </Link>
              <Link href="/visit" className={styles.localLink}>
                24-Hour Walk-In Guide
              </Link>
              <Link href="/nicotine-vape-scarborough" className={styles.localLink}>
                Nicotine Vapes Scarborough
              </Link>
              <Link href="/items/cigarettes" className={styles.localLink}>
                Cigarettes Menu
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
            <h2 className={styles.h2}>FAQ: Native Cigarettes Scarborough / Eglinton East</h2>
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
