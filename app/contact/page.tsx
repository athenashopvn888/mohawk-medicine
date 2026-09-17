import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreMap from "../components/StoreMap";
import { STORE_NAP } from "../lib/nap";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us - Mohawk Medicine | 2655 Eglinton Ave E, Toronto",
  description:
    "Visit Mohawk Craft Dispensary (Mohawk Medicine) at 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Call +1 (437) 524-9335. Open 24 Hours a day, 7 days a week. Walk-ins welcome.",
  alternates: {
    canonical: "https://mohawkmedicine.com/contact",
  },
  openGraph: {
    title: "Contact Mohawk Medicine - Toronto Dispensary",
    description:
      "2655 Eglinton Ave E, Toronto. Open 24 Hours a day, 7 days a week. Check current menu categories before visiting.",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.hero}>
          <img
            src="/banners/08_Mohawk_Contact_Us.webp"
            alt="Contact Mohawk Medicine"
            className={styles.heroBanner}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.h1}>Contact Mohawk Medicine</h1>
          <p className={styles.subtext}>
            Mohawk Craft Dispensary is the listed store name for this 24-hour shop at 2655 Eglinton Ave E in Scarborough. Have a question? Call, stop by any time, or browse the FAQ.
          </p>

          <div className={styles.grid}>
            <div className={styles.infoCard}>
              <span className={styles.icon}>📍</span>
              <h2 className={styles.cardTitle}>Location</h2>
              <p>{STORE_NAP.legalName}</p>
              <p>2655 Eglinton Ave E</p>
              <p>Toronto, ON M1K 2S2</p>
              <p>Scarborough, near Brimley Rd</p>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.icon}>🕒</span>
              <h2 className={styles.cardTitle}>Hours</h2>
              <p className={styles.openNow}>Open 24 Hours / 7 Days a Week</p>
              <p>We never close. Walk in any time.</p>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.icon}>📞</span>
              <h2 className={styles.cardTitle}>Phone</h2>
              <p><a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a></p>
              <p>Website: <a href={STORE_NAP.website}>{STORE_NAP.website}</a></p>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.icon}>💬</span>
              <h2 className={styles.cardTitle}>Questions?</h2>
              <p>Visit our FAQ page for common questions, or stop by the store.</p>
              <Link href="/faq" className={styles.link}>View FAQ →</Link>
            </div>
          </div>

          <div className={styles.mapWrap}>
            <StoreMap showActions />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
