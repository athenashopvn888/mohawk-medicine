import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer({ hideThcVape = false }: { hideThcVape?: boolean }) {
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
            telephone: "+14375249335",
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
              latitude: 43.73562,
              longitude: -79.25086,
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
          {/* Column 1  Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>MOHAWK MEDICINE</div>
            <p className={styles.desc}>
              24-hour cannabis dispensary at 2655 Eglinton Ave E in Scarborough.
              Check the current menu before visiting.
            </p>
            <div className={styles.buttons}>
              <Link href="/contact" className={styles.btnSecondary}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Column 2  Contact Info */}
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
              <span><a href="tel:+14375249335" style={{ color: "inherit" }}>+1 (437) 524-9335</a></span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Website</span>
              <span>mohawkmedicine.com</span>
            </div>
          </div>

          {/* Column 3  Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic-weed">Exotic Weed</Link>
              <Link href="/premium-weed">Premium Weed</Link>
              <Link href="/aaa-weed">AAA+ Weed</Link>
              <Link href="/aa-weed">AA Weed</Link>
              <Link href="/budget-weed">Budget Weed</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/prerolls">Pre-Rolls</Link>
              <Link href="/items/vapes">Nic Vape</Link>
              {!hideThcVape && <Link href="/items/vape-disposables">THC Vape</Link>}
              <Link href="/items/concentrates">Concentrates</Link>
              <Link href="/items/magic">Magic Stuff</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/info/scarborough-weed-dispensary">Scarborough Dispensary</Link>
              <Link href="/info/cheap-weed-scarborough">Cheap Weed Scarborough</Link>
              <Link href="/info/native-cigarettes-scarborough">Native Cigarettes Scarborough</Link>
              <Link href="/info/nicotine-vapes-scarborough">Nicotine Vapes Scarborough</Link>
              <Link href="/info/weed-store-near-eglinton-east">Weed Store Near Eglinton East</Link>
              <Link href="/items/add-ons">Accessories</Link>
              <Link href="/weed-delivery-toronto">Weed Delivery</Link>
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
            Must be 19+ to enter. Please follow applicable laws and product labels. &nbsp;|&nbsp;
            2655 Eglinton Ave E, Toronto, ON M1K 2S2
          </p>
        </div>
      </div>
    </footer>
  );
}


