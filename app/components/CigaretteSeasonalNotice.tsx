"use client";

import { useEffect, useRef, useState } from "react";

export const CIGARETTE_SEASONAL_TEXT =
  "Cigarettes are seasonal and in limited stock. Please check in store for availability.";

const wrapStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  margin: 0,
  padding: "10px 12px",
  display: "flex",
  justifyContent: "center",
  background: "transparent",
};

const pillStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  width: "100%",
  maxWidth: "1100px",
  boxSizing: "border-box" as const,
  margin: 0,
  padding: "12px 24px",
  borderRadius: "999px",
  background: "linear-gradient(90deg, #7a4a1f 0%, #a0672e 100%)",
  border: "1.5px solid #e8c27a",
  boxShadow: "0 6px 18px rgba(0,0,0,.35)",
  color: "#fff8ea",
  textAlign: "center" as const,
  fontWeight: 800,
  fontSize: "clamp(14px, 2.1vw, 18px)",
  lineHeight: 1.35,
  textTransform: "none" as const,
  letterSpacing: "normal",
  textShadow: "0 1px 2px rgba(0,0,0,.35)",
  overflowWrap: "anywhere" as const,
};

/** Brown seasonal-stock notice. `sticky` pins it just under the site nav on scroll. */
export default function CigaretteSeasonalNotice({ sticky = false }: { sticky?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [navBottom, setNavBottom] = useState(0);
  const [clearance, setClearance] = useState(0);

  useEffect(() => {
    if (!sticky) return;
    const nav = document.querySelector<HTMLElement>("#main-nav, header[data-site-header], header.site-header, header, nav.nav");
    const node = ref.current;
    if (!nav || !node) return;
    const update = () => {
      const pos = window.getComputedStyle(nav).position;
      const pinned = pos === "sticky" || pos === "fixed";
      const bottom = pinned ? Math.ceil(nav.getBoundingClientRect().bottom) : 0;
      setNavBottom(bottom);
      // A fixed nav sits on top of page flow: push the notice below it (measured at top of page only).
      if (pos === "fixed" && window.scrollY < 2) {
        const margin = Number.parseFloat(window.getComputedStyle(node).marginTop) || 0;
        const flowTop = node.getBoundingClientRect().top - margin;
        setClearance(Math.max(0, bottom - flowTop));
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(nav);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [sticky]);

  return (
    <div
      ref={ref}
      data-cigarette-seasonal-wrap={sticky ? "sticky" : "inline"}
      style={sticky ? { ...wrapStyle, position: "sticky", top: navBottom, marginTop: clearance, zIndex: 40, pointerEvents: "none" } : wrapStyle}
    >
      <p
        role="note"
        data-cigarette-seasonal-notice={sticky ? "sticky" : "inline"}
        style={{ ...pillStyle, pointerEvents: "auto" }}
      >
        <span aria-hidden="true" style={{ flex: "0 0 auto", fontSize: "1.15em" }}>🚬</span>
        <span>{CIGARETTE_SEASONAL_TEXT}</span>
      </p>
    </div>
  );
}
