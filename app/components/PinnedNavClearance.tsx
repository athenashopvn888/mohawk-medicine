"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * The site nav (#main-nav) is position:fixed under the delivery bar, so it sits on top of page flow.
 * Page templates used fixed guesses for their top spacing (e.g. 92px) that are smaller than the real
 * pinned height (~243px on phones), so the first banner/hero started hidden behind the nav.
 * This measures the real pinned bottom and tops up the first content block's margin so it starts
 * fully below the nav. Measured in document coordinates (scroll-safe) and re-run on resize/route change.
 * Pages that already manage their own clearance (homepage banner stack, sticky cigarette notice) are skipped.
 */
export default function PinnedNavClearance() {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.getElementById("main-nav");
    if (!nav) return;

    const firstContent = (): HTMLElement | null => {
      let el = nav.nextElementSibling as HTMLElement | null;
      while (el) {
        const cs = window.getComputedStyle(el);
        const skip =
          el.tagName === "SCRIPT" || el.tagName === "STYLE" || cs.display === "none" ||
          cs.position === "fixed" || cs.position === "absolute" || el.getBoundingClientRect().height < 1;
        if (!skip) return el;
        el = el.nextElementSibling as HTMLElement | null;
      }
      return null;
    };

    let frame = 0;
    const apply = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const el = firstContent();
        if (!el) return;
        if (el.hasAttribute("data-fleet-homepage-announcement") || el.hasAttribute("data-cigarette-seasonal-wrap")) return;
        if (window.getComputedStyle(nav).position !== "fixed") {
          if (el.dataset.pinnedClearance) { el.style.marginTop = ""; delete el.dataset.pinnedClearance; }
          return;
        }
        const current = Number.parseFloat(window.getComputedStyle(el).marginTop) || 0;
        const added = Number(el.dataset.pinnedClearance || 0);
        const base = current - added;
        const flowTopDoc = el.getBoundingClientRect().top + window.scrollY - added;
        const need = Math.min(400, Math.max(0, Math.ceil(nav.getBoundingClientRect().bottom - flowTopDoc)));
        if (need === added) return;
        el.dataset.pinnedClearance = String(need);
        el.style.marginTop = need ? `${base + need}px` : "";
      });
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(nav);
    window.addEventListener("resize", apply);
    window.addEventListener("load", apply);
    return () => {
      window.cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("resize", apply);
      window.removeEventListener("load", apply);
    };
  }, [pathname]);

  return null;
}
