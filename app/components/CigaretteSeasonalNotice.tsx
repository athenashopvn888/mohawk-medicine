"use client";

import { useEffect, useRef, useState } from "react";

export const CIGARETTE_SEASONAL_TEXT =
  "Cigarettes are seasonal and in limited stock. Please check in store for availability.";

const baseStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  margin: 0,
  padding: "10px 16px",
  background: "#5a3417",
  borderBottom: "2px solid #3b200c",
  color: "#fff7ec",
  textAlign: "center" as const,
  fontWeight: 800,
  fontSize: "clamp(15px, 2.2vw, 18px)",
  lineHeight: 1.35,
  textTransform: "none" as const,
  letterSpacing: "normal",
};

/** Brown seasonal-stock notice. `sticky` pins it just under the site nav on scroll. */
export default function CigaretteSeasonalNotice({ sticky = false }: { sticky?: boolean }) {
  const ref = useRef<HTMLParagraphElement>(null);
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
    <p
      ref={ref}
      role="note"
      data-cigarette-seasonal-notice={sticky ? "sticky" : "inline"}
      style={sticky ? { ...baseStyle, position: "sticky", top: navBottom, marginTop: clearance, zIndex: 40 } : baseStyle}
    >
      {CIGARETTE_SEASONAL_TEXT}
    </p>
  );
}
