import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlowerCard from "../components/FlowerCard";
import {
  fetchLiveProducts,
  getTierFromSlug,
  TIER_CONFIG,
} from "../lib/products";
import { TIER_SEO } from "../lib/tierSeoContent";
import { SITE_ORIGIN } from "../lib/collectionPageSchema";
import { buildTierCollectionJsonLd } from "../lib/tierStructuredData";
import { serializeJsonLd } from "../lib/nap";
import ParityHubLinks from "../components/ParityHubLinks";
import { formatAsLowAsAfterPromos, formatPerGram, isBogoDeal, type BoardDeal } from "../lib/flowerDeals";
import styles from "./tier.module.css";
import { getTierGuideLinks } from "../lib/guideRegistry";

export const revalidate = 300;

/* -- Generate all tier pages at build -- */
export function generateStaticParams() {
  return Object.values(TIER_CONFIG).map((t) => ({ tier: t.slug }));
}
/* -- Dynamic SEO metadata -- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ tier: string }>;
}): Promise<Metadata> {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) return {};
  const { flowers: liveFlowers } = await fetchLiveProducts();
  const flowers = liveFlowers.filter((flower) => flower.tier.toUpperCase() === tierInfo.key.toUpperCase());
  const seo = TIER_SEO[tierInfo.key];

  return {
    title: { absolute: seo?.metadataTitle || `${tierInfo.config.name} Cannabis Flower | Mohawk Medicine` },
    description: seo?.seoIntro || `Shop ${flowers.length} ${tierInfo.config.name.toLowerCase()} cannabis strains at Mohawk Medicine.`,
    alternates: {
      canonical: `${SITE_ORIGIN}/${tierSlug}`,
    },
    openGraph: {
      title: seo?.metadataTitle || `${tierInfo.config.name} Flower | Mohawk Medicine`,
      description: `Browse the current ${tierInfo.config.name.toLowerCase()} flower menu. Listed prices start from $${tierInfo.config.unitPrice}/g.`,
      url: `${SITE_ORIGIN}/${tierSlug}`,
    },
  };
}
/* -- Page component -- */
export default async function TierPage({
  params,
}: {
  params: Promise<{ tier: string }>;
}) {
  const { tier: tierSlug } = await params;
  const tierInfo = getTierFromSlug(tierSlug);
  if (!tierInfo) notFound();

  const { flowers: liveFlowers } = await fetchLiveProducts();
  const flowers = liveFlowers.filter((flower) => flower.tier.toUpperCase() === tierInfo.key.toUpperCase());
  const { config } = tierInfo;
  const guideLinks = getTierGuideLinks(`/${tierSlug}`);
  const seo = TIER_SEO[tierInfo.key];

  const saleFlowers = flowers.filter((f) => f.isSale);
  const regularFlowers = flowers.filter((f) => !f.isSale);
  const displayFlowers = [...saleFlowers, ...regularFlowers];
  const hotFlowers = flowers.filter((f) => f.isHot);
  const collectionJsonLd = buildTierCollectionJsonLd({
    canonicalPath: `/${tierSlug}`,
    name: seo?.h1 || config.name,
    description: seo?.seoIntro || `Shop ${flowers.length} ${config.name.toLowerCase()} cannabis strains at Mohawk Medicine.`,
    flowers: displayFlowers,
  });
  const faqNode = seo?.faqs.length
    ? {
        "@type": "FAQPage",
        mainEntity: seo.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;
  const tierJsonLd = faqNode
    ? { ...collectionJsonLd, "@graph": [...collectionJsonLd["@graph"], faqNode] }
    : collectionJsonLd;

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(tierJsonLd) }}
      />
      <Navbar />

      {/* ── Banner Image (standalone, no overlay text) ── */}
      <section className={styles.bannerSection}>
        <img
          src={config.banner}
          alt={`${config.name} Cannabis Flower — ${config.tagline}`}
          className={styles.bannerImg}
        />
      </section>

      {/* ── Hero Content BELOW banner ── */}
      <section
        className={styles.heroInfo}
        style={{ "--tier-color": config.color } as React.CSSProperties}
      >
        <div className={styles.heroInfoInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTitleRow}>
              <span className={styles.heroIcon}>{config.icon}</span>
              <h1 className={styles.heroTitle}>
                <span style={{ color: config.color }}>{seo?.h1 || config.name}</span>
              </h1>
            </div>
            <p className={styles.heroTagline}>{config.tagline}</p>
            <div className={styles.heroStats}>
              <span className={styles.stat}>
                <strong>{flowers.length}</strong> strains
              </span>
              {saleFlowers.length > 0 && (
                <span className={styles.statSale}>
                  🔥 {saleFlowers.length} on sale
                </span>
              )}
              {hotFlowers.length > 0 && (
                <span className={styles.statHot}>
                  ⚡ {hotFlowers.length} hot picks
                </span>
              )}
            </div>
          </div>

          <div className={styles.heroRight}>
            {isBogoDeal(config.deal6g) ? (
              <>
                <p className={styles.asLowAsBanner}>{formatAsLowAsAfterPromos(config.deal6g.price, config.deal6g.grams)}</p>
                <p className={styles.listAnchor}>List ${config.unitPrice}/g</p>
              </>
            ) : (
              <div className={styles.unitPriceBox}>
                <span className={styles.unitPriceLabel}>Starting at</span>
                <span className={styles.unitPriceValue}>${config.unitPrice}/g</span>
              </div>
            )}

            {(config.deal3g || config.deal6g) && (
            <div className={styles.dealRow}>
              {[config.deal3g, config.deal6g].filter((deal): deal is BoardDeal => deal !== null).map((deal) => (
                <div className={styles.dealBox} key={deal.total}>
                  <div className={styles.dealLabel}>{isBogoDeal(deal) ? deal.label : `🎁 ${deal.label}`}</div>
                  <div className={styles.dealPrice}>
                    {isBogoDeal(deal) ? <>Pay <strong>${deal.price}</strong> = {deal.grams}g</> : <>= <strong>${deal.price}</strong> / {deal.total}</>}
                  </div>
                  {isBogoDeal(deal) && <div className={styles.dealMeta}>{formatPerGram(deal.price, deal.grams)} · {deal.equals}</div>}
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </section>

      {guideLinks.length > 0 && (
        <nav className={styles.guideStrip} aria-label={`Popular ${config.name} strain guides`}>
          <div className={styles.container}><h2>Popular strain guides</h2><div>
            {guideLinks.map((guide) => <Link key={guide.slug} href={`/guides/${guide.slug}`}>{guide.name}</Link>)}
          </div></div>
        </nav>
      )}

      {/* Product grid */}
      <section className={styles.products}>
        <div className={styles.container}>
          {saleFlowers.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>
                🔥 <span style={{ color: "#f43f5e" }}>On Sale</span>
              </h2>
              <div className={styles.grid}>
                {saleFlowers.map((f) => (
                  <FlowerCard
                    key={`${f.sku}-${f.slug}`}
                    flower={f}
                    tierKey={tierInfo.key}
                  />
                ))}
              </div>
            </>
          )}

          <h2 className={styles.sectionTitle}>
            All{" "}
            <span style={{ color: config.color }}>{config.name}</span>{" "}
            Strains
          </h2>
          <div className={styles.grid}>
            {regularFlowers.map((f) => (
              <FlowerCard
                key={`${f.sku}-${f.slug}`}
                flower={f}
                tierKey={tierInfo.key}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Content ── */}
      {seo && (
        <section className={styles.seoSection}>
          <div className={styles.container}>
            <h2 className={styles.seoMainTitle}>{seo.seoTitle}</h2>
            <p className={styles.seoIntro}>{seo.seoIntro}</p>

            {seo.sections.map((s, i) => (
              <div key={i} className={styles.seoBlock}>
                <h3 className={styles.seoHeading}>{s.heading}</h3>
                <p className={styles.seoBody}>{s.body}</p>
              </div>
            ))}

            {/* FAQ Accordion */}
            {seo.faqs.length > 0 && (
              <div className={styles.faqSection}>
                <h3 className={styles.seoHeading}>Frequently Asked Questions</h3>
                {seo.faqs.map((faq, i) => (
                  <details key={i} className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>{faq.q}</summary>
                    <p className={styles.faqAnswer}>{faq.a}</p>
                  </details>
                ))}
              </div>
            )}

            <div className={styles.seoBlock}>
              <h3 className={styles.seoHeading}>Scarborough Visit Hubs And Other Flower Tiers</h3>
              <p className={styles.seoBody}>
                For Scarborough / Eglinton East delivery, use the{" "}
                <Link href="/cannabis-delivery-scarborough">cannabis delivery page</Link>. Delivery hours are
                dispatcher-confirmed and stay separate from 24-hour walk-in hours.
              </p>
              <ParityHubLinks currentPath={`/${tierSlug}`} includeCorridor />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
