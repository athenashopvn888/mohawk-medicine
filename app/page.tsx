"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlowerCard from "./components/FlowerCard";
import { allFlowers } from "./lib/products";

/* Tier Grid Config */
const TIER_CARDS = [
  {
    name: "EXOTIC",
    slug: "exotic",
    price: "Starting at $10/g",
    tagline: "Ultra-rare top-shelf genetics",
    banner: "/banners/11_Mohawk_Exotic.webp",
  },
  {
    name: "PREMIUM",
    slug: "premium",
    price: "Starting at $8/g",
    tagline: "Connoisseur-grade strains",
    banner: "/banners/15_Mohawk_Premium.webp",
  },
  {
    name: "AAA+",
    slug: "aaa",
    price: "Starting at $7/g",
    tagline: "Heavy hitters, proven strains",
    banner: "/banners/02_Mohawk_AAA_Plus.webp",
  },
  {
    name: "AA",
    slug: "aa",
    price: "Starting at $5/g",
    tagline: "Quality daily drivers",
    banner: "/banners/01_Mohawk_AA.webp",
  },
  {
    name: "BUDGET",
    slug: "budget",
    price: "Starting at $4/g",
    tagline: "Shreds & value ounces",
    banner: "/banners/05_Mohawk_Budget.webp",
  },
  {
    name: "DAILY DEALS",
    slug: "budget",
    price: "Today's Best Prices",
    tagline: "Fresh deals every day",
    banner: "/banners/09_Mohawk_Daily_Deals.webp",
  },
];

/* Category Strip Config */
const CATEGORIES = [
  { name: "Edibles", slug: "items/edibles", banner: "/banners/17_Mohawk_Edibles.webp" },
  { name: "Pre-Rolls", slug: "items/prerolls", banner: "/banners/21_Mohawk_Pre_Rolls.webp" },
  { name: "Nic Vape", slug: "items/vapes", banner: "/banners/18_Mohawk_Nic_Vape.webp" },
  { name: "THC Vape", slug: "items/vape-disposables", banner: "/banners/22_Mohawk_THC_Vape.webp" },
  { name: "Concentrates", slug: "items/concentrates", banner: "/banners/07_Mohawk_Concentrate.webp" },
  { name: "Magic Stuff", slug: "items/magic", banner: "/banners/16_Mohawk_Magic_Stuff.webp" },
  { name: "Cigarettes", slug: "items/cigarettes", banner: "/banners/06_Mohawk_Cigarettes_No_Nicotine.webp" },
  { name: "Accessories", slug: "items/add-ons", banner: "/banners/03_Mohawk_Accessories.webp" },
];

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
    a: "No appointment needed. Walk in any time and our staff will help you find the perfect strain.",
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
  const [featuredStrains, setFeaturedStrains] = useState<any[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <main className={styles.main}>
      <Navbar />

      {/* A) HERO BANNER */}
      <section className={styles.heroBanner}>
        <img
          src="/banners/13_Mohawk_Home_Hero.webp"
          alt="Mohawk Medicine — Toronto's 24-Hour Cannabis Dispensary"
          className={styles.heroBannerImg}
        />
        <div className={styles.heroBannerGradient} />
      </section>

      {/* B) WELCOME STRIP */}
      <section className={styles.welcomeStrip}>
        <div className={styles.container}>
          <h1 className={styles.welcomeH1}>MOHAWK MEDICINE</h1>
          <p className={styles.welcomeSub}>
            Toronto&apos;s Premier 24-Hour Cannabis Dispensary &bull; 2655 Eglinton Ave E
          </p>
          <div className={styles.trustBadges}>
            <span className={styles.trustBadge}>🕐 Open 24/7</span>
            <span className={styles.trustBadge}>📍 Scarborough, Toronto</span>
            <span className={styles.trustBadge}>✅ Walk-Ins Welcome</span>
          </div>
        </div>
      </section>

      {/* C) TIER GRID */}
      <section className={styles.tierSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Shop By Tier</h2>
            <p className={styles.sectionSub}>Six quality tiers — transparent pricing, always fresh</p>
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
                  <span className={styles.tierCardBtn}>Shop Now →</span>
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

      {/* E) HOT RIGHT NOW BANNER */}
      <section className={styles.hotBanner}>
        <img
          src="/banners/27_Mohawk_Hot_Right_Now.webp"
          alt="Hot Right Now at Mohawk Medicine"
          className={styles.hotBannerImg}
        />
      </section>

      {/* F) FEATURED PRODUCTS GRID */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Products</h2>
            <p className={styles.sectionSub}>Staff picks from our live inventory</p>
          </div>
          <div className={styles.featuredGrid}>
            {featuredStrains.map((strain, i) => (
              <div key={`${strain.sku}-${i}`}>
                <FlowerCard flower={strain} tierKey={strain.tier} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G) ABOUT / SEO SECTION */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutPanel}>
            <h2 className={styles.aboutTitle}>Toronto&apos;s Best Dispensary — Open 24 Hours</h2>
            <p className={styles.aboutText}>
              Mohawk Medicine at 2655 Eglinton Ave E is Scarborough&apos;s premier cannabis destination.
              Open 24 hours a day, 7 days a week, we carry 200+ strains across 6 quality tiers — from
              budget-friendly $4/g to ultra-rare exotic fire. Walk-ins always welcome. No appointment needed.
            </p>
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
              <span className={styles.storeIcon}>📍</span>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                2655 Eglinton Ave E<br />
                Toronto, ON M1K 2S2<br />
                <a
                  href="https://maps.google.com/?q=2655+Eglinton+Ave+E,+Toronto,+ON+M1K+2S2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.storeLink}
                >
                  Get Directions →
                </a>
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>🕒</span>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week<br />
                <span className={styles.storeHighlight}>Open 24 Hours</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <span className={styles.storeIcon}>✅</span>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed<br />
                <span className={styles.storeHighlight}>Scarborough, near Brimley Rd</span>
              </p>
            </div>
          </div>

          {/* I) GOOGLE MAP */}
          <div className={styles.mapWrap}>
            <iframe
              src="https://maps.google.com/maps?q=2655%20Eglinton%20Ave%20E%2C%20Toronto%2C%20ON%20M1K%202S2&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, display: "block", borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mohawk Medicine — 2655 Eglinton Ave E, Toronto"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
