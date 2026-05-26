"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./tv2.module.css";

/* â”€â”€ TYPES â”€â”€ */
interface Item {
  sku: string;
  name: string;
  category: string;
  type?: string;
  thc?: string;
  mg?: string;
  price?: string;
  image?: string;
  isSale?: boolean;
}

/* â”€â”€ CATEGORY CONFIG â€” matches original TVMenu2.html layout â”€â”€ */
/* Row 1: PREROLLS+ADDONS | VAPES | EDIBLES
   Row 2: CONCENTRATES   | CIGARETTES (poster daytime / list evening) | MAGIC & OTHERS */
const CARD_CONFIG: { id: string; title: string; accent: string; filter: (it: Item) => boolean; preset: string }[] = [
  { id: "PREROLLS_ADDONS", title: "ðŸ”¥ PREROLLS & ADD ONS", accent: "#dc2626", filter: it => it.category === "PREROLLS" || it.category === "ADD ONS", preset: "ðŸ”¥ START SLOW â€¢ 2â€“3 PUFFS â€¢ WAIT 5 MIN" },
  { id: "VAPES", title: "ðŸ’¨ VAPES", accent: "#0284c7", filter: it => ["VAPE PENS","VAPE DISPOSABLE"].includes(it.category), preset: "ðŸ’¨ 1â€“2 PUFFS â€¢ WAIT 2â€“3 MIN â€¢ REPEAT" },
  { id: "EDIBLES", title: "ðŸ¬ EDIBLES", accent: "#7c3aed", filter: it => it.category === "EDIBLES", preset: "ðŸ¬ START SMALL â€¢ WAIT 45 MIN â€¢ THEN MORE" },
  { id: "CONCENTRATES", title: "âš—ï¸ CONCENTRATES", accent: "#b45309", filter: it => it.category === "CONCENTRATES", preset: "âš ï¸ VERY STRONG â€¢ TINY AMOUNT â€¢ WAIT 10â€“15 MIN" },
  { id: "CIGARETTES", title: "ðŸš¬ CIGARETTES", accent: "#78350f", filter: it => it.category === "CIGARETTES", preset: "" },
  { id: "MAGIC", title: "ðŸ„ MAGIC & OTHERS", accent: "#9333ea", filter: it => it.category === "MAGIC & OTHERS", preset: "ðŸ« START SMALL â€¢ WAIT 45 MIN â€¢ THEN MORE" },
];

/* Daytime (10AMâ€“5PM): show cigarette poster instead of list */
function isDaytime() {
  const h = new Date().getHours();
  return h >= 10 && h < 17;
}

/* â”€â”€ HELPERS â”€â”€ */
const fmtPrice = (v?: string) => {
  const s = String(v || "").trim();
  if (!s) return "";
  return /^\$/.test(s) ? s : "$" + s;
};
const fmtTHC = (v?: string) => {
  const s = String(v || "").trim();
  if (!s) return "";
  if (/^\d+(\.\d+)?%?$/.test(s)) {
    const n = parseFloat(s);
    return (n <= 1 ? Math.round(n * 100) : Math.round(n)) + "%";
  }
  return s;
};
const fmtMG = (v?: string) => {
  const s = String(v || "").trim();
  if (!s) return "";
  if (/^\d+(\.\d+)?$/.test(s)) return s + "mg";
  return s;
};

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   ITEM CARD â€” one category card
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
function ItemCard({ title, accent, items, hiIdx, preset }: {
  title: string; accent: string; items: Item[]; hiIdx: number; preset: string;
}) {
  const MAX = 10;
  const vis = items.slice(0, MAX);
  const hiW = Math.min(hiIdx % Math.max(1, vis.length), vis.length - 1);
  const hi = vis[hiW] || items[0];

  /* dissolve image */
  const prevRef = useRef<string>("");
  const [fadeImg, setFadeImg] = useState("");
  const [prevImg, setPrevImg] = useState("");
  useEffect(() => {
    if (hi?.image && hi.image !== prevRef.current) {
      setPrevImg(prevRef.current);
      setFadeImg(hi.image);
      prevRef.current = hi.image;
    }
  }, [hi?.image]);

  /* overflow rotation: window slides when hiIdx wraps */
  const topIdx = items.length > MAX ? Math.floor(hiIdx / MAX) * MAX % items.length : 0;
  const windowItems = items.length > MAX
    ? Array.from({ length: MAX }, (_, i) => items[(topIdx + i) % items.length])
    : items;
  const displayItems = windowItems.slice(0, MAX);

  /* detail meta */
  const metaParts: string[] = [];
  if (hi?.type) metaParts.push(hi.type);
  if (hi?.thc) metaParts.push(fmtTHC(hi.thc));
  if (hi?.mg) metaParts.push(fmtMG(hi.mg));
  if (hi?.price) metaParts.push(fmtPrice(hi.price));

  return (
    <div className={styles.card} style={{ "--accent": accent } as React.CSSProperties}>
      <div className={styles.cardHeader}>{title}</div>
      <div className={styles.cardMain}>
        {/* LEFT: Hero image + detail */}
        <div className={styles.mediaSide}>
          <div className={styles.mediaFrame}>
            <div className={styles.mediaViewport}>
              {prevImg && <img src={prevImg} alt="" className={`${styles.budImg} ${styles.budImgFadeOut}`} referrerPolicy="no-referrer" />}
              {fadeImg && <img key={fadeImg} src={fadeImg} alt={hi?.name || ""} className={`${styles.budImg} ${styles.budImgFadeIn}`} referrerPolicy="no-referrer" />}
            </div>
          </div>
          <div className={styles.detailCard}>
            <div className={styles.detailAccent} style={{ background: accent }} />
            <div className={styles.detailContent}>
              <div className={styles.detailTop}>
                {metaParts.map((p, i) => (
                  <span key={i}>
                    {i > 0 && <span className={styles.detailSep}> â€¢ </span>}
                    <span className={p === fmtTHC(hi?.thc) ? styles.detailThc : undefined} style={p === fmtPrice(hi?.price) ? { fontWeight: 900 } : undefined}>{p}</span>
                  </span>
                ))}
              </div>
              <div className={styles.detailName}>{hi?.name || ""}</div>
              {preset && <div className={styles.detailPreset}>{preset}</div>}
            </div>
          </div>
        </div>

        {/* RIGHT: List */}
        <div className={styles.listSide}>
          <div className={styles.listHead}>
            <div className={styles.mh}>Item</div>
            <div className={styles.mh}>Price</div>
          </div>
          <div className={styles.listBody}>
            {displayItems.map((it, i) => {
              const isHi = i === hiW;
              const hiStyle = isHi ? {
                borderColor: `color-mix(in srgb, ${accent} 70%, rgba(2,6,23,.18) 30%)`,
                boxShadow: `0 0 0 3px color-mix(in srgb, ${accent} 50%, transparent 50%), 0 8px 20px rgba(2,6,23,.18), 0 0 28px color-mix(in srgb, ${accent} 70%, transparent 30%)`
              } : undefined;
              return (
                <div key={it.sku + i} className={`${styles.row} ${isHi ? styles.rowHi : ""}`} style={hiStyle}>
                  <div className={styles.mcItem}>
                    {it.name}
                    {it.type && <span className={styles.submeta}> â€¢ {it.type}</span>}
                    {it.thc && <span className={styles.submeta}> â€¢ {fmtTHC(it.thc)}</span>}
                    {it.mg && <span className={styles.submeta}> â€¢ {fmtMG(it.mg)}</span>}
                  </div>
                  <div className={styles.mcPrice}>{fmtPrice(it.price)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PROMO CARD â€” full-screen poster slide (used for cigarette daytime poster)
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const PROMO_URLS = [
  "/banners/cig-poster-1.png",
];

function PromoCard({ title, accent }: { title: string; accent: string }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (PROMO_URLS.length < 2) return;
    const iv = setInterval(() => setIdx(p => (p + 1) % PROMO_URLS.length), 9000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className={styles.card} style={{ "--accent": accent } as React.CSSProperties}>
      <div className={styles.cardHeader}>{title}</div>
      <div className={styles.promoMain}>
        <div className={styles.promoViewport}>
          {PROMO_URLS.map((url, i) => (
            <img
              key={url}
              src={url}
              alt={`Promo ${i + 1}`}
              className={`${styles.promoImg} ${i === idx ? styles.promoActive : ""}`}
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   VERTICAL TICKER
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const TICKER_SLIDES = [
  "ðŸ”¥ Mohawk Medicine â€” 2655 Eglinton Ave E, Scarborough",
  "200+ Strains In Stock",
  "Open 24 Hours",
  "Pre-Rolls â€¢ Edibles â€¢ Vapes â€¢ Concentrates",
  "ALL SALES ARE FINAL",
  "ðŸŽ® Play Games at mohawkmedicine.com/games",
];

function VerticalTicker() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [exitIdx, setExitIdx] = useState(-1);
  useEffect(() => {
    const iv = setInterval(() => {
      setExitIdx(activeIdx);
      setActiveIdx(prev => (prev + 1) % TICKER_SLIDES.length);
    }, 3000);
    return () => clearInterval(iv);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  return (
    <div className={styles.ticker}>
      <div className={styles.tickerInner}>
        {TICKER_SLIDES.map((text, i) => (
          <div key={i} className={`${styles.tickerSlide} ${i === activeIdx ? styles.tickerActive : ""} ${i === exitIdx ? styles.tickerExit : ""}`}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   MAIN TV2 PAGE
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
export default function TV2Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [highlights, setHighlights] = useState<Record<string, number>>({});
  const [lastUpdate, setLastUpdate] = useState("");
  const [daytime, setDaytime] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  /* check daytime on mount + every minute */
  useEffect(() => {
    setDaytime(isDaytime());
    const iv = setInterval(() => setDaytime(isDaytime()), 60_000);
    return () => clearInterval(iv);
  }, []);

  const loadData = useCallback(async () => {
    try {
      const res = await fetch("/api/tv-data?type=items");
      const data: Item[] = res.ok ? await res.json() : [];
      setItems(data);

      const hi: Record<string, number> = {};
      CARD_CONFIG.forEach(c => { hi[c.id] = 0; });
      setHighlights(hi);
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (err) { console.warn("[TV2] Load failed:", err); }
  }, []);

  const fitToScreen = useCallback(() => {
    if (!wrapRef.current) return;
    const W = window.innerWidth, H = window.innerHeight;
    const s = Math.min(W / 3840, H / 2160);
    const tx = Math.round((W - 3840 * s) / 2);
    const ty = Math.round((H - 2160 * s) / 2);
    wrapRef.current.style.transform = `translate(${tx}px,${ty}px) scale(${s})`;
  }, []);

  useEffect(() => {
    loadData(); fitToScreen();
    window.addEventListener("resize", fitToScreen);
    const refresh = setInterval(loadData, 5 * 60 * 1000);
    return () => { window.removeEventListener("resize", fitToScreen); clearInterval(refresh); };
  }, [loadData, fitToScreen]);

  /* Highlight rotation â€” 5s per step */
  useEffect(() => {
    if (!items.length) return;
    const interval = setInterval(() => {
      setHighlights(prev => {
        const next = { ...prev };
        CARD_CONFIG.forEach(c => {
          const filtered = items.filter(c.filter);
          next[c.id] = ((prev[c.id] || 0) + 1) % Math.max(1, filtered.length);
        });
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className={styles.tvPage}>
      <div className={styles.wrap} ref={wrapRef}>
        {/* TV BANNER */}
        <div style={{ margin: "-40px -40px 30px -40px", width: "calc(100% + 80px)" }}>
          <img src="/banners/ItemTv.webp" alt="Mohawk Medicine TV Menu" style={{ width: "100%", display: "block" }} />
        </div>
        {/* GRID: 3 cols Ã— 2 rows */}
        <div className={styles.stage}>
          <div className={styles.grid}>
            {CARD_CONFIG.map(card => {
              /* CIGARETTES: poster during daytime (10AM-5PM), list otherwise */
              if (card.id === "CIGARETTES" && daytime) {
                return <PromoCard key={card.id} title={card.title} accent={card.accent} />;
              }

              const filtered = items.filter(card.filter);
              return (
                <ItemCard
                  key={card.id}
                  title={card.title}
                  accent={card.accent}
                  items={filtered}
                  hiIdx={highlights[card.id] || 0}
                  preset={card.preset}
                />
              );
            })}
          </div>
        </div>

        {/* TICKER */}
        <VerticalTicker />
      </div>
      <div className={styles.lastUpdated}>Updated: {lastUpdate}</div>
    </div>
  );
}



