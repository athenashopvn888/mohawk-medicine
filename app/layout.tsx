import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohawkmedicine.com"),
  title: {
    default: "Mohawk Medicine | Toronto 24-Hour Cannabis Dispensary | 2655 Eglinton Ave E",
    template: "%s | Mohawk Medicine",
  },
  description:
    "Mohawk Medicine - Toronto's premier 24-hour cannabis dispensary at 2655 Eglinton Ave E, Scarborough. 200+ strains, exotic to budget, walk-ins welcome. Open 24/7.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://mohawkmedicine.com",
    siteName: "Mohawk Medicine",
    title: "Mohawk Medicine - Toronto 24-Hour Cannabis Dispensary",
    description: "200+ strains, exotic to budget. Scarborough's premier dispensary at 2655 Eglinton Ave E. Open 24 hours, 7 days a week.",
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
  description: "Toronto's premier 24-hour cannabis dispensary at 2655 Eglinton Ave E, Scarborough.",
  url: "https://mohawkmedicine.com",
  priceRange: "$4 - $20/g",
  address: { "@type": "PostalAddress", streetAddress: "2655 Eglinton Ave E", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M1K 2S2", addressCountry: "CA" },
  geo: { "@type": "GeoCoordinates", latitude: 43.7615, longitude: -79.265 },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
  hasMap: "https://maps.google.com/?q=2655+Eglinton+Ave+E,+Toronto,+ON+M1K+2S2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="geo.position" content="43.7615;-79.2650" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto, Scarborough" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
