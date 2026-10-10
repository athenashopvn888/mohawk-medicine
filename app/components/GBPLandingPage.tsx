import Link from "next/link";
import Script from "next/script";
import styles from "./GBPLandingPage.module.css";
import { gbpLocation } from "../lib/gbp-location";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParityHubLinks from "./ParityHubLinks";

const preferredSourceAttribute = {
  "google-add-preferred-source-btn": "",
};

const H1 = "Weed Dispensary in Scarborough on Eglinton East";

const FAQS = [
  {
    q: "Is there a weed dispensary in Scarborough on Eglinton East?",
    a: "Yes. Mohawk Medicine is the walk-in weed dispensary at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, on Eglinton East in Scarborough near Brimley Rd. Adults 19+. Call +1 (437) 524-9335. The website homepage is https://mohawkmedicine.com/.",
  },
  {
    q: "Which page is the live Scarborough weed-dispensary hub?",
    a: "This page is the live neighbourhood weed-dispensary hub for the Eglinton East shop. Use it for store details, category links, and which Scarborough page to open next. Flower collections stay on the *-weed pages. Late-night arrival stays on the 24-hour walk-in guide.",
  },
  {
    q: "What can I browse from this Scarborough weed dispensary page?",
    a: "Adults 19+ can compare flower, pre-rolls, edibles, THC vapes, concentrates, and accessories from the category links on this hub. Native cigarettes and nicotine vapes have their own Scarborough guides. Check the current category page before visiting because names and prices can change.",
  },
  {
    q: "How is this weed-dispensary hub different from the 24-hour walk-in guide?",
    a: "This hub owns neighbourhood weed-dispensary visit facts for Scarborough / Eglinton East. The 24-hour walk-in guide owns open-now / late-night arrival. Delivery stays on the Scarborough cannabis delivery page. The near-me FAQ owns pin questions.",
  },
  {
    q: "I searched weed dispensary near me. Is this the Eglinton East shop?",
    a: "If you searched weed dispensary near me in Scarborough or along Eglinton Ave E, this hub points to one walk-in shop: 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Use the near-me FAQ for pin questions and this page for the neighbourhood weed-dispensary hub.",
  },
  {
    q: "Is this Scarborough weed dispensary the same storefront as Mohawk Craft Dispensary?",
    a: "Yes. Store listings use Mohawk Craft Dispensary. This website uses Mohawk Medicine as the site brand for the same retail storefront at 2655 Eglinton Ave E. Call +1 (437) 524-9335. The website homepage is https://mohawkmedicine.com/.",
  },
];

const LOCAL_LINKS = [
  { href: "/", label: "Homepage" },
  { href: "/visit", label: "24-Hour Walk-In Guide" },
  { href: "/mohawk-craft-visit", label: "Mohawk Craft Visit FAQ" },
  { href: "/cannabis-delivery-scarborough", label: "Scarborough Cannabis Delivery" },
  { href: "/native-cigarettes-scarborough", label: "Native Cigarettes Scarborough" },
  { href: "/nicotine-vape-scarborough", label: "Nicotine Vapes Scarborough" },
  { href: "/weed-delivery-toronto", label: "Live Delivery Menu" },
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
  { href: "/near-me", label: "Dispensary Near Me FAQ" },
  { href: "/info/scarborough-weed-dispensary", label: "Scarborough Weed Dispensary" },
  { href: "/info/weed-store-near-eglinton-east", label: "Weed Store Near Eglinton East" },
  { href: "/contact", label: "Contact And Hours" },
] as const;

const categoryLinks: { [key: string]: string } = {
  Flower: "/",
  "Pre-rolls": "/items/prerolls",
  Edibles: "/items/edibles",
  "THC vapes": "/items/vape-disposables",
  Concentrates: "/items/concentrates",
  Shatter: "/items/concentrates",
  "CBD oils": "/items/concentrates",
  Accessories: "/items/add-ons",
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
    href: categoryLinks[product] || "/",
  }));

  const schemaMarkup: WebPageSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://${gbpLocation.domain}/${gbpLocation.slug}/#webpage`,
    "name": H1,
    "url": `https://${gbpLocation.domain}/${gbpLocation.slug}/`,
    "about": { "@id": "https://mohawkmedicine.com/#store" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mohawkmedicine.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Weed Dispensary Scarborough",
        item: `https://${gbpLocation.domain}/${gbpLocation.slug}/`,
      },
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

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <div className={styles.container}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Scarborough / Eglinton East · Neighbourhood Weed Hub</p>
          <h1 className={styles.h1}>{H1}</h1>
          <p className={styles.heroTagline}>Mohawk Medicine on Eglinton Ave E in Scarborough</p>
        </header>

        <div className={styles.btnRow}>
          <a href={gbpLocation.menuUrl} className={`${styles.btn} ${styles.btnPrimary}`}>
            View Menu
          </a>
          <a href={`tel:${gbpLocation.phoneIntl}`} className={`${styles.btn} ${styles.btnSecondary}`}>
            Call Store
          </a>
        </div>

        <section className={styles.section}>
          <h2 className={styles.h2}>A Local Weed Dispensary On Eglinton East</h2>
          <p className={styles.introText}>{gbpLocation.introVariant}</p>
          <p className={styles.infoText}>
            If you searched for a weed dispensary near me in Scarborough or on Eglinton East, this
            page helps you confirm {gbpLocation.storeName}&apos;s store details, browse its menu
            categories, and plan a visit using its local information.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Use The Most Specific Mohawk Medicine Page</h2>
          <p className={styles.infoText}>
            Use this Scarborough / Eglinton East weed-dispensary hub for neighbourhood store
            details, category links, and which page to open next.
          </p>
          <p className={styles.infoText}>
            For the supporting Scarborough storefront notes, use the{" "}
            <Link href="/info/scarborough-weed-dispensary">Scarborough Weed Dispensary</Link> page.
            For Eglinton Avenue East corridor context, use the{" "}
            <Link href="/info/weed-store-near-eglinton-east">Eglinton East store page</Link>. Adults
            looking for category information can continue to the five Weed tiers or the separate{" "}
            <Link href="/native-cigarettes-scarborough">Native cigarettes Scarborough guide</Link>{" "}
            and <Link href="/nicotine-vape-scarborough">nicotine vape Scarborough guide</Link>.
            See also <Link href="/vape-shop-scarborough">current Scarborough nicotine vape listings</Link>.
          </p>
          <p className={styles.infoText}>
            For 24-hour walk-in arrival on Eglinton East, use the{" "}
            <Link href="/visit">24-hour Scarborough walk-in guide</Link>. For local cannabis delivery
            from this Eglinton East pin, use the{" "}
            <Link href="/cannabis-delivery-scarborough">Scarborough cannabis delivery page</Link>.
            For dispensary near me / Scarborough pin questions, use the{" "}
            <Link href="/near-me">Eglinton East arrival FAQ</Link>. For Mohawk Craft Dispensary /
            Mohawk Medicine brand visit questions, use the{" "}
            <Link href="/mohawk-craft-visit">Mohawk Craft visit FAQ</Link>. For a first-stop
            overview, use{" "}
            <Link href="/resources/eglinton-east-scarborough-visit-guide">
              First Visit to Mohawk Medicine
            </Link>
            .
          </p>
          <ParityHubLinks
            currentPath="/weed-dispensary-toronto/"
            includeCorridor
            lead="This page is the live weed hub for the Scarborough shop on Eglinton East. Open a *-weed flower page, the 24-hour walk-in guide, the Mohawk Craft visit FAQ, or the near-me pin FAQ without leaving this store."
          />
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Weed and Cannabis Products Available</h2>
          <p className={styles.infoText}>
            Adults 19+ can use these category links to browse the current weed and cannabis menu
            sections before visiting Mohawk Medicine:
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
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Plan a Visit to {gbpLocation.storeName}</h2>
          <p className={styles.infoText}>
            Planning a visit to {gbpLocation.storeName} is easier when the main store details are in
            one place. Adults 19+ can use this page to confirm the store address, phone number,
            hours, and menu-category links before heading to the store.
          </p>
          <p className={styles.infoText}>
            Mohawk Medicine is at 2655 Eglinton Ave E in Scarborough. Use the Eglinton East page
            when that exact local context is useful.
          </p>
          <p className={styles.infoText}>
            For a fuller local overview, read the <Link href="/">Home</Link>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Visit {gbpLocation.storeName} in Scarborough</h2>
          <p className={styles.infoText}>
            Store listings use the name Mohawk Craft Dispensary for this Eglinton Ave E shop. This
            website uses Mohawk Medicine as the site brand for the same storefront.
          </p>
          <div className={styles.napGrid}>
            <div className={styles.napDetails}>
              <div className={styles.napItem}>
                <span className={styles.napLabel}>Store Name</span>
                <strong>{gbpLocation.legalName}</strong>
              </div>
              <div className={styles.napItem}>
                <span className={styles.napLabel}>Address</span>
                <span>{gbpLocation.address}</span>
              </div>
              <div className={styles.napItem}>
                <span className={styles.napLabel}>Phone</span>
                <span>
                  <a href={`tel:${gbpLocation.phoneIntl}`} style={{ color: "inherit" }}>
                    {gbpLocation.phone}
                  </a>
                </span>
              </div>
              <div className={styles.napItem}>
                <span className={styles.napLabel}>Website</span>
                <span>
                  <a href={`https://${gbpLocation.domain}/`} style={{ color: "inherit" }}>
                    https://{gbpLocation.domain}/
                  </a>
                </span>
              </div>
              {gbpLocation.hours && gbpLocation.hours.length > 0 && (
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Store Hours</span>
                  {gbpLocation.hours.map((line) => (
                    <span key={line} style={{ fontSize: "0.95rem" }}>
                      {line}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.mapWrapper}>
              {gbpLocation.mapEmbedUrl ? (
                <iframe
                  title={`Map of ${gbpLocation.legalName}`}
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

        <section className={styles.section}>
          <h2 className={styles.h2}>Compare Menu Categories Before You Visit</h2>
          <p className={styles.infoText}>
            These category links help adults 19+ browse general menu sections before visiting. Use
            the current menu for listed product names, prices, and package details.
          </p>
          <div className={styles.productGrid}>
            {categoryGuideLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.productCard}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Visit, Delivery, Cigarettes, Nicotine, And Flower Tiers</h2>
          <p className={styles.infoText}>
            Keep this page for the Scarborough / Eglinton East weed dispensary hub. Use the
            homepage for current menu categories. Use a named *-weed page when the visit is about
            flower. Use the cigarette or nicotine guides when that is the reason for the stop.
          </p>
          <div className={styles.localLinks}>
            {LOCAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.localLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section id="faq" className={styles.section}>
          <h2 className={styles.h2}>FAQ: Scarborough / Eglinton East Weed Dispensary</h2>
          <div className={styles.faqList}>
            {FAQS.map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.q}</h3>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.preferredSources}`} aria-labelledby="google-preferred-sources-heading">
          <Script async src="https://news.google.com/swg/js/v1/publisher.js" strategy="afterInteractive" />
          <p className={styles.preferredSourcesEyebrow}>Google Preferred Sources</p>
          <h2 id="google-preferred-sources-heading" className={styles.h2}>
            Choose Mohawk Medicine as a Preferred Source on Google
          </h2>
          <p className={styles.infoText}>
            If you find Mohawk Medicine guides and local information useful, you can add
            mohawkmedicine.com as a Preferred Source on Google. Preferred Sources is a Google
            personalization feature that lets you choose sources you want to see more often in
            supported Google experiences. It is not a Google endorsement, verification badge,
            ranking guarantee, or general ranking boost.
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
      <Footer />
    </div>
  );
}
