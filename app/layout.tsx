import { cigaretteSafeContent, SHOW_CIGARETTES } from "./lib/siteConfig";
import CigaretteStateProvider from "./components/CigaretteStateProvider";
import FleetContentProvider from "./components/FleetContentProvider";
import FullNameNap from "./components/FullNameNap";
import { HOME_DOC_TITLE } from "./lib/homeDelivery";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import PinnedNavClearance from "./components/PinnedNavClearance";
import { getCigaretteSnapshot, toPublicCigaretteState } from "./lib/cigaretteFeed";
import { getFleetContent } from "./lib/fleetContent";
import { serializeJsonLd, storeJsonLd, websiteJsonLd } from "./lib/nap";

export const revalidate = 300;

const ROOT_METADATA: Metadata = cigaretteSafeContent({
  metadataBase: new URL("https://mohawkmedicine.com"),
  title: {
    default: HOME_DOC_TITLE,
    template: "%s | Mohawk Medicine",
  },
  description:
    "Mohawk Medicine is a 24-hour cannabis dispensary on Eglinton Ave E in Scarborough with menu categories, local store details, walk-in shopping info, and adult 19+ details. Open 24/7.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://mohawkmedicine.com",
    siteName: "Mohawk Medicine",
    title: HOME_DOC_TITLE,
    description: "Flower tiers, edibles, vapes, concentrates, cigarettes, and accessories at 2655 Eglinton Ave E. Open 24 Hours.",
    images: [{ url: "https://mohawkmedicine.com/banners/13_Mohawk_Home_Hero.webp", width: 1200, height: 630, alt: "Mohawk Medicine" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mohawkmedicine.com" },

  twitter: { card: "summary_large_image", title: HOME_DOC_TITLE },
});

export async function generateMetadata(): Promise<Metadata> {
  const fleet = await getFleetContent();
  if (!fleet.active) return ROOT_METADATA;
  const description = fleet.pages.Home?.metaDescription || "";
  if (!description || description === ROOT_METADATA.description) return ROOT_METADATA;
  return {
    ...ROOT_METADATA,
    description,
    openGraph: { ...ROOT_METADATA.openGraph, description },
    twitter: { ...ROOT_METADATA.twitter, description },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [fleet, cigaretteSnapshot] = await Promise.all([getFleetContent(), getCigaretteSnapshot()]);
  const cigarettes = toPublicCigaretteState(cigaretteSnapshot);
  const publishedStore = fleet.active
    ? {
        ...storeJsonLd,
        name: fleet.nap.schemaName,
        alternateName: fleet.nap.name,
        telephone: fleet.nap.phoneTel,
        url: fleet.nap.website,
        hasMap: fleet.nap.mapsSearchUrl,
        address: {
          ...storeJsonLd.address,
          streetAddress: fleet.nap.street,
          addressLocality: fleet.nap.city,
          addressRegion: fleet.nap.province,
          postalCode: fleet.nap.postalCode,
        },
        geo: {
          ...storeJsonLd.geo,
          latitude: Number(fleet.nap.lat),
          longitude: Number(fleet.nap.lng),
        },
      }
    : storeJsonLd;
  return (
    <html lang="en">
      <head>
        <meta name="fleet-content-version" content={fleet.version} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="geo.position" content="43.7356759;-79.2508842" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto, Scarborough" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(cigaretteSafeContent(websiteJsonLd)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(cigaretteSafeContent(publishedStore)) }} />
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
        <FleetContentProvider value={{ active: fleet.active, version: fleet.version, nap: fleet.nap }}>
          <CigaretteStateProvider value={{ ...cigarettes, web: SHOW_CIGARETTES ? cigarettes.web : false }}>
            {children}
            <FullNameNap />
            <PinnedNavClearance />
          </CigaretteStateProvider>
        </FleetContentProvider>
      </body>
    </html>
  );
}
