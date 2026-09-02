import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohawkmedicine.com"),
  title: {
    default: "Mohawk Medicine | 24-Hour Scarborough Cannabis Dispensary",
    template: "%s | Mohawk Medicine",
  },
  description:
    "Mohawk Medicine is a 24-hour cannabis dispensary on Eglinton Ave E in Scarborough with menu categories, local store details, walk-in shopping info, and adult 19+ details. Open 24/7.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://mohawkmedicine.com",
    siteName: "Mohawk Medicine",
    title: "Mohawk Medicine - Scarborough Cannabis Dispensary",
    description: "Flower tiers, edibles, vapes, concentrates, cigarettes, and accessories at 2655 Eglinton Ave E. Open 24 Hours.",
    images: [{ url: "https://mohawkmedicine.com/banners/13_Mohawk_Home_Hero.webp", width: 1200, height: 630, alt: "Mohawk Medicine" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mohawkmedicine.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://mohawkmedicine.com",
  name: "Mohawk Medicine",
  description: "24-hour cannabis dispensary at 2655 Eglinton Ave E in Scarborough.",
  url: "https://mohawkmedicine.com",
  telephone: "+14375249335",
  priceRange: "$4 - $20/g",
  address: { "@type": "PostalAddress", streetAddress: "2655 Eglinton Ave E", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M1K 2S2", addressCountry: "CA" },
  geo: { "@type": "GeoCoordinates", latitude: 43.73562, longitude: -79.25086 },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="geo.position" content="43.73562;-79.25086" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto, Scarborough" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-56DQVKRW14"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-56DQVKRW14');
            `
          }}
        />
      </head>
      <body>
        <Link className="deliveryAnnouncement" href="/weed-delivery-toronto">
          EXPLORE WEED DELIVERY
        </Link>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
