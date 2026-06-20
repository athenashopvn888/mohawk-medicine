import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us — Mohawk Medicine | 2655 Eglinton Ave E, Toronto",
  description:
    "Visit Mohawk Medicine at 2655 Eglinton Ave E, Toronto, ON M1K 2S2. Open 24 Hours a day, 7 days a week. Walk-ins welcome.",
  alternates: {
    canonical: "https://mohawkmedicine.com/contact",
  },
  openGraph: {
    title: "Contact Mohawk Medicine — Toronto Dispensary",
    description:
      "2655 Eglinton Ave E, Toronto. Open 24 Hours a day, 7 days a week. Premium cannabis, always fire.",
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
            Have a question? Stop by any time — we&apos;re open 24/7. Or browse our FAQ below.
          </p>

          <div className={styles.grid}>
            <div className={styles.infoCard}>
              <span className={styles.icon}>📍</span>
              <h2 className={styles.cardTitle}>Location</h2>
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
              <span className={styles.icon}>💬</span>
              <h2 className={styles.cardTitle}>Questions?</h2>
              <p>Visit our FAQ page for common questions, or stop by the store.</p>
              <a href="/faq" className={styles.link}>View FAQ →</a>
            </div>
          </div>

          <div className={styles.mapWrap}>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
