import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StoreMap from "../../components/StoreMap";
import StoreNap from "../../components/StoreNap";
import { SEO_PAGES, getLegacySeoRedirect, getSeoPageBySlug } from "../../lib/seoPages";
import { TIER_CONFIG } from "../../lib/products";
import styles from "./seo.module.css";

const LOCAL_GUIDES = [
  { href: "/weed-dispensary-toronto/", label: "Toronto Weed Dispensary" },
  { href: "/visit", label: "24-Hour Walk-In Guide" },
  { href: "/near-me", label: "Dispensary Near Me FAQ" },
  { href: "/info/scarborough-weed-dispensary", label: "Scarborough Weed Dispensary" },
  { href: "/info/weed-store-near-eglinton-east", label: "Weed Store Near Eglinton East" },
  { href: "/resources/eglinton-east-scarborough-visit-guide", label: "Eglinton East Visit Guide" },
  { href: "/contact", label: "Contact And Hours" },
] as const;

/* ── Generate all SEO pages ── */
export function generateStaticParams() {
  return SEO_PAGES.map((p) => ({ seoPage: p.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ seoPage: string }>;
}): Promise<Metadata> {
  const { seoPage: slug } = await params;
  const replacementSlug = getLegacySeoRedirect(slug);
  const page = getSeoPageBySlug(replacementSlug || slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: `https://mohawkmedicine.com/info/${replacementSlug || slug}`,
    },
  };
}

/* ── Page ── */
export default async function SeoLandingPage({
  params,
}: {
  params: Promise<{ seoPage: string }>;
}) {
  const { seoPage: slug } = await params;
  const replacementSlug = getLegacySeoRedirect(slug);
  if (replacementSlug) redirect(`/info/${replacementSlug}`);

  const page = getSeoPageBySlug(slug);
  if (!page) notFound();

  const tiers = Object.values(TIER_CONFIG);
  const currentPath = `/info/${page.slug}`;
  const faqSchema = page.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mohawkmedicine.com/" },
      { "@type": "ListItem", position: 2, name: page.h1, item: `https://mohawkmedicine.com/info/${page.slug}` },
    ],
  };

  return (
    <main className={styles.main}>
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      {/* Banner Image */}
      {page.banner && (
        <section className={styles.bannerSection}>
          <img
            src={page.banner}
            alt={page.h1}
            className={styles.bannerImg}
          />
        </section>
      )}

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>{page.h1}</span>
          </nav>
          <span className={styles.heroIcon}>{page.icon}</span>
          <h1 className={styles.heroH1}>{page.h1}</h1>
          <p className={styles.heroTagline}>{page.heroTagline}</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className={styles.content}>
        <div className={styles.container}>
          {page.sections.map((s, i) => (
            <div key={i} className={styles.section}>
              <h2 className={styles.sectionTitle}>{s.heading}</h2>
              <p className={styles.sectionBody}>{s.body}</p>
            </div>
          ))}

          {/* Tier Grid */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Cannabis Menu — Five Tiers of Quality</h2>
            <div className={styles.tierGrid}>
              {tiers.map((tier) => (
                <Link
                  key={tier.slug}
                  href={`/${tier.slug}`}
                  className={styles.tierCard}
                  style={{ "--tier-color": tier.color } as React.CSSProperties}
                >
                  <div className={styles.tierLabel} style={{ color: tier.color }}>
                    {tier.icon} {tier.name}
                  </div>
                  <div className={styles.tierPrice}>${tier.unitPrice}/g</div>
                  <p className={styles.tierDesc}>{tier.tagline}</p>
                  <span className={styles.tierLink}>Browse {tier.name} →</span>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Store Details</h2>
            <StoreNap />
          </div>

          {/* Map */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Find Us</h2>
            <div className={styles.mapWrap}>
              <StoreMap showActions />
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Nearby Local Pages</h2>
            <div className={styles.localLinks}>
              {LOCAL_GUIDES.filter((guide) => guide.href !== currentPath).map((guide) => (
                <Link key={guide.href} href={guide.href} className={styles.localLink}>
                  {guide.label}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          {page.faqs.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              {page.faqs.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{faq.q}</summary>
                  <p className={styles.faqA}>{faq.a}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
