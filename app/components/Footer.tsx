import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Mohawk Medicine",
            description: "Toronto's 24-hour cannabis dispensary at 2655 Eglinton Ave E, Scarborough.",
            url: "https://mohawkmedicine.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2655 Eglinton Ave E",
              addressLocality: "Toronto",
              addressRegion: "ON",
              postalCode: "M1K 2S2",
              addressCountry: "CA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 43.7330,
              longitude: -79.2500,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
            ],
          }),
        }}
      />
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 — Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>MOHAWK MEDICINE</div>
            <p className={styles.desc}>
              Toronto&apos;s premier 24-hour cannabis dispensary at 2655 Eglinton Ave E,
              Scarborough. Open every day, all day. Walk-ins always welcome.
            </p>
            <div className={styles.buttons}>
              <Link href="/contact" className={styles.btnSecondary}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address</span>
              <span>2655 Eglinton Ave E</span>
              <span>Toronto, ON M1K 2S2</span>
              <span>Scarborough, near Brimley Rd</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours</span>
              <span className={styles.highlight}>Open 24 Hours / 7 Days a Week</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone</span>
              <span>(437) 577-1809</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Website</span>
              <span>mohawkmedicine.com</span>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/prerolls">Pre-Rolls</Link>
              <Link href="/items/vapes">Nic Vape</Link>
              <Link href="/items/vape-disposables">THC Vape</Link>
              <Link href="/items/concentrates">Concentrates</Link>
              <Link href="/items/magic">Magic Stuff</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/add-ons">Accessories</Link>
              <Link href="/delivery">Delivery</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/weed-dispensary-toronto/">Mohawk Medicine Weed Dispensary in Toronto</Link>
              <Link href="/contact">Contact</Link>
                          <Link href="/resources">Resources</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} Mohawk Medicine. All rights reserved. &nbsp;|&nbsp;
            Must be 19+ to enter. Please consume responsibly. &nbsp;|&nbsp;
            2655 Eglinton Ave E, Toronto, ON M1K 2S2
          </p>
        </div>
      </div>
    </footer>
  );
}
