import Link from "next/link";
import Script from "next/script";
import styles from "./GBPLandingPage.module.css";
import { gbpLocation } from "../lib/gbp-location";

const preferredSourceAttribute = {
  "google-add-preferred-source-btn": "",
};

// Dictionary mapping category names to their respective paths
const categoryLinks: { [key: string]: string } = {
  "Flower": "/",
  "Pre-rolls": "/items/prerolls",
  "Edibles": "/items/edibles",
  "THC vapes": "/items/vape-disposables",
  "Concentrates": "/items/concentrates",
  "Shatter": "/items/concentrates",
  "CBD oils": "/items/concentrates",
  "Accessories": "/items/add-ons"
};

type WebPageSchemaMarkup = {
  "@context": string;
  "@type": string;
  "@id": string;
  name: string;
  url: string;
  about: { "@id": string };
};

export function GBPLandingPage() {
  const categoryGuideLinks = gbpLocation.products.slice(0, 6).map((product) => ({
    label: product,
    href: categoryLinks[product] || "/"
  }));

  const schemaMarkup: WebPageSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://${gbpLocation.domain}/${gbpLocation.slug}/#webpage`,
    "name": `${gbpLocation.storeName} — Weed Dispensary in ${gbpLocation.city}`,
    "url": `https://${gbpLocation.domain}/${gbpLocation.slug}/`,
    "about": { "@id": "https://mohawkmedicine.com/#store" }
  };

  return (
    <div className={styles.container}>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero Header */}
      <header className={styles.hero}>
        <h1 className={styles.h1}>{gbpLocation.storeName} — Weed Dispensary in {gbpLocation.city}</h1>
        <p className={styles.heroTagline}>Mohawk Medicine on Eglinton Ave E in Scarborough</p>
      </header>

      {/* Call to Actions */}
      <div className={styles.btnRow}>
        <a href={gbpLocation.menuUrl} className={`${styles.btn} ${styles.btnPrimary}`}>
          View Menu
        </a>
        <a href={`tel:${gbpLocation.phoneIntl}`} className={`${styles.btn} ${styles.btnSecondary}`}>
          Call Store
        </a>
      </div>

      {/* Intro Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>A Local Weed Dispensary</h2>
        <p className={styles.introText}>{gbpLocation.introVariant}</p>
        <p className={styles.infoText}>
          If you searched for a weed dispensary near me in {gbpLocation.city}, this page helps you confirm {gbpLocation.storeName}&apos;s store details, browse its menu categories, and plan a visit using its local information.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Use the Most Specific Mohawk Medicine Page</h2>
        <p className={styles.infoText}>
          Use this Toronto store page for Mohawk Medicine&apos;s general visit information.
        </p>
        <p className={styles.infoText}>
          For the exact Scarborough storefront context, use the{" "}
          <Link href="/info/scarborough-weed-dispensary">Scarborough Weed Dispensary</Link> page. For Eglinton Avenue East context, use the{" "}
          <Link href="/info/weed-store-near-eglinton-east">Eglinton East store page</Link>. Adults looking for category information can continue to the five Weed tiers or the separate cigarette and nicotine-vape guides.
        </p>
        <p className={styles.infoText}>
          <Link href="/resources/eglinton-east-scarborough-visit-guide">First Visit to Mohawk Medicine</Link>
        </p>
      </section>

      {/* Product Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Weed and Cannabis Products Available</h2>
        <p className={styles.infoText}>
          Adults 19+ can use these category links to browse the current weed and cannabis menu sections before visiting Mohawk Medicine:
        </p>
        <div className={styles.productGrid}>
          {gbpLocation.products.map((p) => {
            const href = categoryLinks[p] || "/";
            return (
              <Link key={p} href={href} className={styles.productCard}>
                {p}
              </Link>
            );
          })}
        </div>
      </section>      {/* Visit Planning Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Plan a Visit to {gbpLocation.storeName}</h2>
        <p className={styles.infoText}>
          Planning a visit to {gbpLocation.storeName} is easier when the main store details are in one place. Adults 19+ can use this page to confirm the store address, phone number, hours, and menu-category links before heading to the store.
        </p>
        <p className={styles.infoText}>
          Mohawk Medicine is at 2655 Eglinton Ave E in Scarborough. Use the Eglinton East page when that exact local context is useful.
        </p>
        <p className={styles.infoText}>
          For a fuller local overview, read the{" "}
          <Link href="/">Home</Link>.
        </p>
      </section>

      {/* Location & NAP Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Visit {gbpLocation.storeName} in {gbpLocation.city}</h2>
        <div className={styles.napGrid}>
          <div className={styles.napDetails}>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Store Name</span>
              <strong>{gbpLocation.storeName}</strong>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Address</span>
              <span>{gbpLocation.address}</span>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Phone</span>
              <span><a href={`tel:${gbpLocation.phoneIntl}`} style={{ color: "inherit" }}>{gbpLocation.phone}</a></span>
            </div>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Website</span>
              <span><a href={`https://${gbpLocation.domain}/`} style={{ color: "inherit" }}>https://{gbpLocation.domain}/</a></span>
            </div>
            {gbpLocation.hours && gbpLocation.hours.length > 0 && (
              <div className={styles.napItem}>
                <span className={styles.napLabel}>Store Hours</span>
                {gbpLocation.hours.map((line) => (
                  <span key={line} style={{ fontSize: "0.95rem" }}>{line}</span>
                ))}
              </div>
            )}
          </div>
          <div className={styles.mapWrapper}>
            {gbpLocation.mapEmbedUrl ? (
              <iframe
                title={`Map of ${gbpLocation.storeName}`}
                src={gbpLocation.mapEmbedUrl}
                className={styles.mapIframe}
                allowFullScreen={true}
                loading="lazy"
              />
            ) : (
              <div style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}>
                Map preview not listed.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Category Link Context Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Compare Menu Categories Before You Visit</h2>
        <p className={styles.infoText}>
          These category links help adults 19+ browse general menu sections before visiting. Use the current menu for listed product names, prices, and package details.
        </p>
        <div className={styles.productGrid}>
          {categoryGuideLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.productCard}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={styles.section}>
        <h2 className={styles.h2}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>How should I plan a visit to {gbpLocation.storeName}?</h3>
            <p className={styles.faqAnswer}>
              Check the store address, phone number, hours, and menu links on this page before visiting Mohawk Medicine at 2655 Eglinton Ave E in Scarborough.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Can I use this page to compare menu categories?</h3>
            <p className={styles.faqAnswer}>
              Yes. The category links on this page are intended to help adults 19+ compare general menu sections such as flower, pre-rolls, edibles, vapes, concentrates, and accessories before checking the live menu.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Where is {gbpLocation.storeName} located?</h3>
            <p className={styles.faqAnswer}>{gbpLocation.storeName} is located at {gbpLocation.address}.</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Is {gbpLocation.storeName} a weed dispensary in {gbpLocation.city}?</h3>
            <p className={styles.faqAnswer}>
              {gbpLocation.storeName} is a local weed dispensary in {gbpLocation.city} for adults aged 19 and older with valid identification.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>What products does {gbpLocation.storeName} carry?</h3>
            <p className={styles.faqAnswer}>
              Use the current category links on this page to browse flower, pre-rolls, edibles, vapes, concentrates, and accessories before visiting.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Do I need to be 19+ to shop at {gbpLocation.storeName}?</h3>
            <p className={styles.faqAnswer}>
              Yes, to visit our cannabis store or order from our menu, you must be at least 19 years of age. Valid government-issued photo ID is required for verification.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.preferredSources}`} aria-labelledby="google-preferred-sources-heading">
        <Script async src="https://news.google.com/swg/js/v1/publisher.js" strategy="afterInteractive" />
        <p className={styles.preferredSourcesEyebrow}>Google Preferred Sources</p>
        <h2 id="google-preferred-sources-heading" className={styles.h2}>Choose Mohawk Medicine as a Preferred Source on Google</h2>
        <p className={styles.infoText}>
          If you find Mohawk Medicine guides and local information useful, you can add mohawkmedicine.com as a Preferred Source on Google. Preferred Sources is a Google personalization feature that lets you choose sources you want to see more often in supported Google experiences. It is not a Google endorsement, verification badge, ranking guarantee, or general ranking boost.
        </p>
        <div className={styles.preferredSourcesControl} {...preferredSourceAttribute} />
        <a
          className={styles.preferredSourcesFallback}
          href="https://www.google.com/preferences/source?q=mohawkmedicine.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Google Preferred Sources for mohawkmedicine.com
        </a>
      </section>
    </div>
  );
}
