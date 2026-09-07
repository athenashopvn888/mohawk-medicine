"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlowerCard from "./components/FlowerCard";
import SmokePilotSpotlight from "./components/SmokePilotSpotlight";
import { allFlowers, type FlowerProduct } from "./lib/products";

/* Tier Grid Config */
const TIER_CARDS = [
  {
    name: "Exotic Weed",
    slug: "exotic-weed",
    price: "Starting at $10/g",
    tagline: "Explore the current Exotic menu",
    banner: "/banners/EXOTIC.webp",
  },
  {
    name: "Premium Weed",
    slug: "premium-weed",
    price: "Starting at $8/g",
    tagline: "Connoisseur-grade strains",
    banner: "/banners/PREMIUM.webp",
  },
  {
    name: "AAA+ Weed",
    slug: "aaa-weed",
    price: "Starting at $7/g",
    tagline: "Heavy hitters, proven strains",
    banner: "/banners/02_Mohawk_AAA_Plus.webp",
  },
  {
    name: "AA Weed",
    slug: "aa-weed",
    price: "Starting at $5/g",
    tagline: "Quality daily drivers",
    banner: "/banners/01_Mohawk_AA.webp",
  },
  {
    name: "Budget Weed",
    slug: "budget-weed",
    price: "Starting at $4/g",
    tagline: "Shreds & value ounces",
    banner: "/banners/05_Mohawk_Budget.webp",
  },
  {
    name: "DAILY DEALS",
    slug: "budget-weed",
    price: "Current Menu Prices",
    tagline: "Fresh deals every day",
    banner: "/banners/09_Mohawk_Daily_Deals.webp",
  },
];

/* Category Strip Config */
const CATEGORIES = [
  { name: "Edibles", slug: "items/edibles", banner: "/banners/EDIBLES.webp" },
  { name: "Pre-Rolls", slug: "items/prerolls", banner: "/banners/21_Mohawk_Pre_Rolls.webp" },
  { name: "Nic Vape", slug: "items/vapes", banner: "/banners/NIC%20VAPE.webp" },
  { name: "THC Vape", slug: "items/vape-disposables", banner: "/banners/22_Mohawk_THC_Vape.webp" },
  { name: "Concentrates", slug: "items/concentrates", banner: "/banners/07_Mohawk_Concentrate.webp" },
  { name: "Magic Stuff", slug: "items/magic", banner: "/banners/MAGIC%20STUFF.webp" },
  { name: "Accessories", slug: "items/add-ons", banner: "/banners/03_Mohawk_Accessories.webp" },
];

const HELPFUL_PAGES = [
  { name: "Toronto Weed Dispensary", href: "/weed-dispensary-toronto/", description: "Confirm broad Toronto store and visit information." },
  { name: "Scarborough Weed Dispensary", href: "/info/scarborough-weed-dispensary", description: "Review Scarborough storefront information." },
  { name: "Weed Store Near Eglinton East", href: "/info/weed-store-near-eglinton-east", description: "Review Eglinton East store context." },
  { name: "First Visit to Mohawk Medicine", href: "/resources/eglinton-east-scarborough-visit-guide", description: "Plan a visit around the exact Eglinton Ave E address." },
  { name: "Cheap Weed in Scarborough", href: "/info/cheap-weed-scarborough", description: "Open the value-intent guide and current tier links." },
  { name: "Native Cigarettes in Scarborough", href: "/info/native-cigarettes-scarborough", description: "Open the cigarette-information guide." },
  { name: "Nicotine Vapes in Scarborough", href: "/info/nicotine-vapes-scarborough", description: "Open the nicotine guide, separate from THC vape." },
  { name: "Mohawk Medicine Resources", href: "/resources", description: "Browse the store's informational guides." },
];

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://mohawkmedicine.com/#webpage",
  url: "https://mohawkmedicine.com/",
  name: "Mohawk Medicine | 24-Hour Scarborough Cannabis Dispensary",
  about: { "@id": "https://mohawkmedicine.com/#store" },
};

/* FAQs */
const FAQS = [
  {
    q: "What are Mohawk Medicine's hours?",
    a: "Mohawk Medicine at 2655 Eglinton Ave E, Toronto is open 24 hours a day, 7 days a week. We never close.",
  },
  {
    q: "Where is Mohawk Medicine located?",
    a: "We are located at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, in Scarborough near Brimley Rd.",
  },
  {
    q: "Do I need an appointment?",
    a: "No appointment needed. Walk in any time and our staff can help you compare current menu options.",
  },
  {
    q: "What's the cheapest weed at Mohawk Medicine?",
    a: "Our Budget tier starts at just $4/g. We also have daily deals and bulk pricing.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes! We offer local delivery. Visit our Delivery page for details.",
  },
];

export default function HomePage() {
  const [featuredStrains, setFeaturedStrains] = useState<FlowerProduct[]>([]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const pool = [...allFlowers].filter((f) => f.image);
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      const picked: typeof pool = [];
      const tierCounts: Record<string, number> = {};
      for (const f of pool) {
        if (picked.length >= 8) break;
        const tc = tierCounts[f.tier] || 0;
        if (tc >= 2) continue;
        if (picked.some((p) => p.name === f.name)) continue;
        picked.push(f);
        tierCounts[f.tier] = tc + 1;
      }
      setFeaturedStrains(picked);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      <Navbar />

      {/* A) HERO BANNER */}
      <section className={styles.heroBanner}>
        <img
          src="/banners/13_Mohawk_Home_Hero.webp"
          alt="Mohawk Medicine  Toronto's 24-Hour Cannabis Dispensary"
          className={styles.heroBannerImg}
        />
        <div className={styles.heroBannerGradient} />
      </section>

      <section className={styles.hiringCallout} aria-label="Hiring at Mohawk Medicine">
        <div className={styles.hiringCalloutInner}>
          <div>
            <span className={styles.hiringEyebrow}>Budtenders / Managers Wanted</span>
            <h2>Join Mohawk Medicine</h2>
            <p>Mohawk Medicine is taking online applications for budtender and manager roles. We are looking for motivated, reliable people who can help customers and stay sharp during 24-hour service. Online applications only. Please do not call the store about hiring.</p>
          </div>
          <Link href="/careers/budtender" className={styles.hiringButton}>Apply Online</Link>
        </div>
      </section>



      {/* B) WELCOME STRIP */}
      <section className={styles.welcomeStrip}>
        <div className={styles.container}>
          <h1 className={styles.welcomeH1}>MOHAWK MEDICINE</h1>
          <p className={styles.welcomeSub}>
            24-Hour Scarborough Cannabis Dispensary on Eglinton Ave E
          </p>
          <div className={styles.trustBadges}>
            <span className={styles.trustBadge}> Open 24/7</span>
            <span className={styles.trustBadge}> Scarborough, Toronto</span>
            <span className={styles.trustBadge}> Walk-Ins Welcome</span>
          </div>
        </div>
      </section>

      {/* C) TIER GRID */}
      <section className={styles.tierSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Shop By Tier</h2>
            <p className={styles.sectionSub}>Six quality tiers  transparent pricing, always fresh</p>
          </div>
          <div className={styles.tierGrid}>
            {TIER_CARDS.map((tier) => (
              <Link key={tier.slug + tier.name} href={`/${tier.slug}`} className={styles.tierCard}>
                <div className={styles.tierCardImg}>
                  <img src={tier.banner} alt={tier.name} loading="lazy" />
                </div>
                <div className={styles.tierCardBody}>
                  <span className={styles.tierCardBadge}>{tier.price}</span>
                  <h3 className={styles.tierCardName}>{tier.name}</h3>
                  <p className={styles.tierCardTagline}>{tier.tagline}</p>
                  <span className={styles.tierCardBtn}>Shop Now </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* D) CATEGORY STRIP */}
      <section className={styles.categorySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>More Categories</h2>
          <div className={styles.categoryStrip}>
            {CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={`/${cat.slug}`} className={styles.categoryPill}>
                <img src={cat.banner} alt={cat.name} className={styles.categoryPillImg} />
                <span className={styles.categoryPillName}>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SmokePilotSpotlight
        storeName="Mohawk Medicine"
        locationLabel="Scarborough"
        cigaretteHref="/info/native-cigarettes-scarborough"
        nicotineHref="/info/nicotine-vapes-scarborough"
      />

      {/* E) HOT RIGHT NOW BANNER */}
      <section className={styles.hotBanner}>
        <img
          src="/banners/27_Mohawk_Hot_Right_Now.webp"
          alt="Hot Right Now at Mohawk Medicine"
          className={styles.hotBannerImg}
        />
      </section>

      {/* F) FEATURED PRODUCTS  Horizontal Scroll Carousel */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}> Featured Products</h2>
            <p className={styles.sectionSub}>Featured menu listings — swipe to explore</p>
          </div>
        </div>
        <div className={styles.featuredCarouselWrap}>
          <button
            className={`${styles.carouselBtn} ${styles.carouselBtnLeft}`}
            onClick={() => {
              const el = document.getElementById("featuredRail");
              if (el) el.scrollBy({ left: -320, behavior: "smooth" });
            }}
            aria-label="Scroll left"
          ></button>

          <div id="featuredRail" className={styles.featuredRail}>
            {featuredStrains.map((strain, i) => (
              <div key={`${strain.sku}-${i}`} className={styles.featuredRailItem}>
                <FlowerCard flower={strain} tierKey={strain.tier} />
              </div>
            ))}
          </div>

          <button
            className={`${styles.carouselBtn} ${styles.carouselBtnRight}`}
            onClick={() => {
              const el = document.getElementById("featuredRail");
              if (el) el.scrollBy({ left: 320, behavior: "smooth" });
            }}
            aria-label="Scroll right"
          ></button>
        </div>
      </section>

      {/* G) ABOUT / SEO SECTION */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutPanel}>
            <p className={styles.aboutEyebrow}>Mohawk Medicine · Scarborough · Open 24 Hours</p>
            <h2 className={styles.aboutTitle}>A 24-Hour Cannabis Dispensary on Eglinton Avenue East</h2>
            <p className={styles.aboutText}>
              Find Mohawk Medicine at 2655 Eglinton Ave E in Scarborough. Adults 19+ can use this site to compare the five Weed flower tiers, browse separate cannabis and smoke-shop categories, review local store information, and plan an in-store visit at any hour.
            </p>
            <p className={styles.aboutText}>
              Mohawk Medicine is open 24 hours at 2655 Eglinton Ave E in Scarborough. The exact address, current phone number, store hours and primary local pages are kept together so adults can confirm the storefront before visiting. Use the Toronto store page for broad visit information, or open the Scarborough and Eglinton East pages for more specific local context.
            </p>
            <h2 className={styles.aboutTitle}>Compare Weed, Cannabis and Smoke-Shop Categories</h2>
            <p className={styles.aboutText}>
              Start with Exotic Weed, Premium Weed, AAA+ Weed, AA Weed or Budget Weed when the visit is about flower. Separate pages organize pre-rolls, edibles, THC vapes, concentrates and accessories. Native cigarettes and nicotine vapes remain separate from cannabis products so adults can reach the correct category without confusing nicotine with THC.
            </p>
          </div>
          <div className={styles.helpfulPanel}>
            <h2 className={styles.aboutTitle}>Helpful Mohawk Medicine Pages</h2>
            <div className={styles.helpfulGrid}>
              {HELPFUL_PAGES.map((page) => (
                <Link key={page.href} href={page.href} className={styles.helpfulCard}>
                  <strong>{page.name}</strong>
                  <span>{page.description}</span>
                </Link>
              ))}
            </div>
            <Link href="/weed-dispensary-toronto/" className={styles.helpfulCta}>Plan Your Visit</Link>
            <p className={styles.helpfulSupport}>Confirm the exact address, phone and hours on the store page before heading to Mohawk Medicine.</p>
          </div>
        </div>
      </section>

      {/* H) FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "32px" }}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqList}>
            {FAQS.map((faq, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqQ}>{faq.q}</summary>
                <p className={styles.faqA}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* STORE INFO CARDS */}
      <section className={styles.storeSection} id="contact">
        <div className={styles.container}>
          <div className={styles.storeGrid}>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}></span>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                2655 Eglinton Ave E<br />
                Toronto, ON M1K 2S2<br />
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}></span>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week<br />
                <span className={styles.storeHighlight}>Open 24 Hours</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}></span>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed<br />
                <span className={styles.storeHighlight}>Scarborough, near Brimley Rd</span>
              </p>
            </div>
          </div>

          {/* I) GOOGLE MAP */}
          <div className={styles.mapWrap}>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
