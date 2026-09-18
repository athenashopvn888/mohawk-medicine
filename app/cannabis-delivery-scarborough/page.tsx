import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreMap from "../components/StoreMap";
import StoreNap from "../components/StoreNap";
import { STORE_NAP } from "../lib/nap";
import ParityHubLinks from "../components/ParityHubLinks";
import styles from "./page.module.css";

const CANONICAL = "https://mohawkmedicine.com/cannabis-delivery-scarborough";
const TITLE = "Cannabis Delivery Scarborough | Eglinton East | Mohawk Medicine";
const DESCRIPTION =
  "Cannabis delivery from Mohawk Medicine at 2655 Eglinton Ave E in Scarborough. Local Eglinton East delivery; dispatcher confirms hours and range. $60 product minimum. 24-hour walk-in is separate. Adults 19+. Call +1 (437) 524-9335.";

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
    q: "Do you deliver cannabis in Scarborough?",
    a: "Yes. Mohawk Medicine offers local cannabis delivery from the walk-in shop at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, on Eglinton East in Scarborough. Browse the live delivery menu, then start LIVE ORDER so the dispatcher can confirm availability, range, and timing. Adults 19+.",
  },
  {
    q: "Is cannabis delivery available 24 hours like the walk-in shop?",
    a: "No. The Eglinton East storefront lists Open 24 Hours / 7 Days a Week for walk-in shopping only. Delivery is a separate service. The dispatcher confirms whether delivery is available for your address and time before an order is accepted. Walk-in hours are not delivery hours.",
  },
  {
    q: "What area does Eglinton East cannabis delivery cover?",
    a: "This page is for Scarborough / Eglinton East delivery from 2655 Eglinton Ave E, near Brimley Rd. Toronto appears on the postal address because Scarborough is a Toronto borough. The dispatcher confirms whether your address is in range. This is not a city-wide Toronto delivery claim.",
  },
  {
    q: "How do I order cannabis delivery from Mohawk Medicine?",
    a: "Open the live delivery menu, note the product names and weights you want, then start LIVE ORDER in Web Chat. New customers complete a private selfie-with-ID step. The dispatcher confirms availability, delivery details, and next steps. There is a $60 product minimum.",
  },
  {
    q: "What is the delivery minimum?",
    a: "The live delivery menu lists a $60 product minimum. The dispatcher confirms current details before an order is accepted.",
  },
  {
    q: "Is this the same shop as Mohawk Craft Dispensary?",
    a: "Yes. Store listings use Mohawk Craft Dispensary. This website uses Mohawk Medicine as the site brand for the same retail storefront at 2655 Eglinton Ave E. Call +1 (437) 524-9335. The website homepage is https://mohawkmedicine.com/.",
  },
];

const ORDER_STEPS = [
  {
    title: "Browse the Scarborough delivery menu",
    body: "Open the live delivery catalog and note the product names and weights you want.",
  },
  {
    title: "Start LIVE ORDER",
    body: "Open Web Chat on the delivery menu and send your choices to the Mohawk Medicine dispatcher.",
  },
  {
    title: "Verify privately if you are new",
    body: "New customers complete the private selfie-with-ID step in Web Chat.",
  },
  {
    title: "Confirm hours, range, and next steps",
    body: "The dispatcher confirms current availability, whether your Eglinton East / Scarborough address is in range, and how the order proceeds. Delivery is not listed as 24 hours.",
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
    { "@type": "ListItem", position: 2, name: "Scarborough Cannabis Delivery", item: CANONICAL },
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

export default function CannabisDeliveryScarboroughPage() {
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
          alt="Cannabis delivery Scarborough from Mohawk Medicine on Eglinton Ave E"
          className={styles.bannerImg}
        />
      </section>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Scarborough Cannabis Delivery</span>
          </nav>
          <p className={styles.eyebrow}>Scarborough / Eglinton East Delivery</p>
          <h1 className={styles.h1}>Cannabis Delivery in Scarborough on Eglinton East</h1>
          <p className={styles.tagline}>
            Local delivery from {STORE_NAP.brandName} at {STORE_NAP.address}. The listed store name is{" "}
            {STORE_NAP.legalName}. Adults 19+ can browse the live menu, then ask the dispatcher to confirm
            range and timing.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <article className={styles.section}>
            <h2 className={styles.h2}>Local Delivery From Eglinton East</h2>
            <p>
              This page is the Scarborough / Eglinton East delivery guide for the retail shop at{" "}
              {STORE_NAP.address}, {STORE_NAP.neighborhoodLabel}. Use it when you want cannabis delivered
              from that pin, not a generic Toronto result.
            </p>
            <p>
              The live catalog still lives at{" "}
              <Link href="/weed-delivery-toronto">weed delivery menu</Link>. That menu is the place to
              browse products and start LIVE ORDER. This page owns neighbourhood delivery questions:
              area, hours, minimum, and how the dispatcher confirms an order.
            </p>
            <p>
              Store listings use {STORE_NAP.legalName}. This website uses {STORE_NAP.brandName} as the site
              brand for the same storefront. Call{" "}
              <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>. The website homepage is{" "}
              <a href={STORE_NAP.website}>{STORE_NAP.website}</a>.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Delivery Hours Are Separate From 24-Hour Walk-In</h2>
            <div className={styles.hoursSplit}>
              <div className={styles.hoursCard}>
                <strong>Walk-in store hours</strong>
                <p>
                  The shop lists {STORE_NAP.hoursLong} for in-store shopping on Eglinton East. Adults 19+
                  can walk in without an appointment. That claim belongs to the{" "}
                  <Link href="/visit">24-hour Scarborough walk-in guide</Link>.
                </p>
              </div>
              <div className={styles.hoursCard}>
                <strong>Delivery hours</strong>
                <p>{STORE_NAP.deliveryHoursLong}</p>
              </div>
            </div>
            <p>
              Web Chat can pause new delivery chats when the dispatcher is not taking orders. If LIVE
              ORDER is paused, wait and check again, call the shop, or walk in on Eglinton East instead.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>How To Order Cannabis Delivery</h2>
            <p>
              {STORE_NAP.deliveryMinimum}. The dispatcher confirms current availability and delivery
              details before an order is accepted.
            </p>
            <ol className={styles.steps}>
              {ORDER_STEPS.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.body}</span>
                </li>
              ))}
            </ol>
            <div className={styles.ctaRow}>
              <Link href="/weed-delivery-toronto" className={styles.ctaPrimary}>
                Browse delivery menu
              </Link>
              <Link href="/weed-delivery-toronto?liveOrder=1" className={styles.ctaSecondary}>
                Start LIVE ORDER
              </Link>
              <a className={styles.ctaSecondary} href={`tel:${STORE_NAP.phoneIntl}`}>
                Call {STORE_NAP.phoneDisplay}
              </a>
            </div>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Scarborough / Eglinton East Delivery Area</h2>
            <p>{STORE_NAP.deliveryArea}</p>
            <p>
              If you are near Eglinton Avenue East and Brimley Road, this is the shop that would take
              the order. Scarborough is the borough; Toronto is the city on the postal address. Keep
              this page for Scarborough / Eglinton East delivery. Use the{" "}
              <Link href="/weed-dispensary-toronto/">Scarborough weed hub</Link> for store visit
              information, not as a city-wide delivery claim.
            </p>
            <p>
              Bring valid 19+ government photo ID. New delivery customers complete a private
              selfie-with-ID step in Web Chat.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Store Details</h2>
            <StoreNap hoursLabel="Walk-in hours" />
            <p>
              Walk-in hours above describe the 24-hour Eglinton East storefront. Delivery hours stay
              dispatcher-confirmed and are listed separately on this page.
            </p>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Map And Dispatch Pin</h2>
            <p>
              Use this map for the Scarborough storefront at {STORE_NAP.streetAddress}. Delivery starts
              from this Eglinton East pin. Call or open directions if you need the walk-in lot instead.
            </p>
            <div className={styles.mapWrap}>
              <StoreMap showActions />
            </div>
          </article>

          <article className={styles.section}>
            <h2 className={styles.h2}>Home, Visit, Weed Hub, And Flower Tiers</h2>
            <p>
              Keep this page for Scarborough cannabis delivery. Use the homepage for current menu
              categories. Use the 24-hour walk-in guide for late-night arrival. Use the Mohawk Craft
              visit FAQ for listed-name questions. Use a named *-weed page when the order is about a
              flower collection.
            </p>
            <ParityHubLinks
              currentPath="/cannabis-delivery-scarborough"
              includeCorridor
              lead="This page stays the Scarborough / Eglinton East delivery guide. Open the homepage, 24-hour walk-in guide, Mohawk Craft visit FAQ, Scarborough weed hub, or a *-weed flower page without leaving this shop."
            />
            <div className={styles.localLinks}>
              <Link href="/" className={styles.localLink}>
                Homepage
              </Link>
              <Link href="/visit" className={styles.localLink}>
                24-Hour Walk-In Guide
              </Link>
              <Link href="/mohawk-craft-visit" className={styles.localLink}>
                Mohawk Craft Visit FAQ
              </Link>
              <Link href="/weed-dispensary-toronto/" className={styles.localLink}>
                Weed Dispensary Scarborough
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
              <Link href="/info/weed-store-near-eglinton-east" className={styles.localLink}>
                Weed Store Near Eglinton East
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
            <h2 className={styles.h2}>FAQ: Scarborough / Eglinton East Delivery</h2>
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
