import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import CategoryCoreBanners from "../../components/CategoryCoreBanners";
import CigaretteSeasonalNotice from "../../components/CigaretteSeasonalNotice";
import SafeImage from "../../components/SafeImage";
import { getItemPriceDisplay } from "../../lib/itemPricing";
import Footer from "../../components/Footer";
import {
  fetchLiveProducts,
  getCategoryFromSlug,
  CATEGORY_CONFIG,
  type ItemProduct,
} from "../../lib/products";
import styles from "./items.module.css";
import { getCategoryGuideGroups } from "../../lib/guideRegistry";
import { SHOW_CIGARETTES, isGrabbaItem } from "../../lib/showCigarettes";
import VapeActionPanel from "../../components/VapeActionPanel";

const SITE_ORIGIN = "https://mohawkmedicine.com";

export const dynamic = "force-dynamic";

/* ── Generate all category pages ── */
export function generateStaticParams() {
  return Object.values(CATEGORY_CONFIG).map((c) => ({ category: c.slug }));
}

/* ── SEO ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: catSlug } = await params;
  const catInfo = getCategoryFromSlug(catSlug);
  if (!catInfo) return {};
  const { items: liveItems } = await fetchLiveProducts();
  const items = liveItems.filter((item) => item.category.toUpperCase() === catInfo.key.toUpperCase());

  return {
    title: {
      absolute: catInfo.config.seoTitle || `${catInfo.config.name} — ${items.length} Products`,
    },
    description: catInfo.config.seoIntro || `Shop ${items.length} ${catInfo.config.name.toLowerCase()} at Mohawk Medicine.`,
    alternates: {
      canonical: `${SITE_ORIGIN}/items/${catSlug}`,
    },
    openGraph: {
      url: `${SITE_ORIGIN}/items/${catSlug}`,
    },
  };
}

export default async function ItemsCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: catSlug } = await params;
  const catInfo = getCategoryFromSlug(catSlug);
  if (!catInfo) notFound();

  /* Pre-Rolls also shows accessories (ADD ONS) */
  const { items: liveItems } = await fetchLiveProducts();
  let items = liveItems.filter((item) => item.category.toUpperCase() === catInfo.key.toUpperCase());
  if (catInfo.key === "PREROLLS") {
    const accessories = liveItems.filter((item) => item.category.toUpperCase() === "ADD ONS");
    const existingIds = new Set(items.map(i => i.sku));
    const uniqueAccessories = accessories.filter(a => !existingIds.has(a.sku));
    items = [...items, ...uniqueAccessories];
  }
  if (!SHOW_CIGARETTES) {
    items = items.filter((item) => !isGrabbaItem(item));
  }
  const { config } = catInfo;
  const coreKind = catSlug === "cigarettes" ? "cigarettes" : (catSlug === "vapes" || catSlug === "vape-disposables") ? "vapes" : null;
  const guideGroups = getCategoryGuideGroups(`/items/${catSlug}`);

  return (
    <main className={styles.main}>
      <Navbar />
      {catSlug === "cigarettes" && <CigaretteSeasonalNotice sticky />}
      {coreKind && <CategoryCoreBanners kind={coreKind} storeName="Mohawk Medicine" weedHref="/exotic-weed" vapeHref="/items/vapes" cigaretteHref="/items/cigarettes" />}

      {/* Hero Banner (cigarettes: gray icon tile + count removed per owner 2026-10-15; H1 kept as plain heading) */}
      {catSlug === "cigarettes" ? (
        <div style={{ width: "100%", background: "#ffffff", padding: "18px 16px 6px", textAlign: "center" }}>
          <h1 style={{ margin: 0, color: "#111827", fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 900 }}>{config.name}</h1>
        </div>
      ) : (
      <section style={{ width: "100%", overflow: "hidden", marginTop: "92px", marginBottom: "24px" }}>
        {config.banner && !coreKind ? (
          <>
            <img
              src={config.banner}
              alt={config.name}
              style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
            />
            <div className={styles.heroContent} style={{ background: config.color, padding: "20px 24px", textAlign: "center" }}>
              <h1 className={styles.heroTitle}>
                <span style={{ color: "#fff" }}>{config.name}</span>
              </h1>
            </div>
          </>
        ) : (
          <div className={styles.heroContent} style={{ background: config.color, padding: "60px 24px", textAlign: "center" }}>
            <span className={styles.heroIcon}>{config.icon}</span>
            <h1 className={styles.heroTitle}>
              <span style={{ color: "#fff" }}>{config.name}</span>
            </h1>
            <p className={styles.heroSub} style={{ color: "rgba(255,255,255,0.8)" }}>{items.length} products available</p>
          </div>
        )}
      </section>
      )}

      {guideGroups.length > 0 && (
        <nav className={styles.guideStrip} aria-label={`${config.name} guides`}>
          <div className={styles.container}>
            {guideGroups.map((group) => <div className={styles.guideGroup} key={group.label}><h2>{group.label}</h2><div>{group.guides.map((guide) => <Link key={guide.slug} href={`/guides/${guide.slug}`}>{guide.name}</Link>)}</div></div>)}
          </div>
        </nav>
      )}

      {/* Product Grid */}
      <section className={styles.products}>
        <div className={styles.container}>
          {items.length > 0 ? (
            <div className={styles.grid}>
              {items.map((item) => (
                <ItemCard key={item.sku} item={item} catColor={config.color} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>🌱</span>
              <h3>Coming Soon</h3>
              <p>We&apos;re stocking this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {(catInfo.key === "VAPE PENS" || catInfo.key === "VAPE DISPOSABLE") && <VapeActionPanel />}

      {/* SEO Content */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <h2 className={styles.seoTitle}>{config.seoTitle}</h2>
          <p className={styles.seoBody}>{config.seoDescription}</p>

          {/* FAQ */}
          {config.faqs.length > 0 && (
            <div className={styles.faqBlock}>
              <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
              {config.faqs.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          )}

          {/* Visit CTA */}
          <div className={styles.visitCta}>
            <h3 className={styles.visitTitle}>Visit Mohawk Medicine</h3>
            <p className={styles.visitText}>
              2655 Eglinton Ave E, Toronto, ON M1K 2S2 · Open 24 Hours
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ItemCard({ item, catColor }: { item: ItemProduct; catColor: string }) {
  const itemPrice = getItemPriceDisplay(item.price, item.sku);

  return (
    <Link href={`/item/${item.slug}`} className={styles.card} style={{ "--cat-color": catColor } as React.CSSProperties}>
      <div className={styles.cardMedia}>
        {item.image ? (
          <SafeImage 
            src={item.image} 
            alt={item.name} 
            loading="lazy" 
            className={styles.cardImg} 
          />
        ) : (
          <div className={styles.cardPlaceholder}>
            {item.name[0]}
          </div>
        )}
        <div className={styles.cardBadges}>
          {item.thc && <span className={styles.badgeThc}>{item.thc}</span>}
          {item.mg && <span className={styles.badgeMg}>{item.mg}</span>}
        </div>
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardCategory}>{item.category}</span>
        <h3 className={styles.cardName}>{item.name}</h3>
        {item.price && (
          <div className={styles.cardPrice}>
            <span className={styles.priceVal}>{itemPrice.display}</span>
            <span className={styles.priceUnit}>{itemPrice.isMultiple ? "price options" : "each"}</span>
          </div>
        )}
        <span className={styles.skuTag}>SKU {item.sku}</span>
      </div>
    </Link>
  );
}
