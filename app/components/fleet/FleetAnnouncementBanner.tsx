"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FULL_NAME_NAP } from "../../lib/fullNameNap";
import { FLEET_COLORS } from "../../lib/fleet/config";
import type { ResolvedBanner } from "../../lib/fleet/types";
import FourCoreBannerStack from "../FourCoreBannerStack";
import { useCigaretteState } from "../CigaretteStateProvider";

const figureStyle = { margin: 0, width: "100%" } as const;
const imageStyle = { display: "block", width: "100%", maxWidth: "100%", height: "auto" } as const;
const linkStyle = { display: "block", width: "100%" } as const;
const captionStyle = { margin: 0, padding: "10px 14px", background: FLEET_COLORS.banner, color: FLEET_COLORS.bannerText, textAlign: "center" as const, fontWeight: 800, lineHeight: 1.35 };

type FleetAnnouncementBannerProps = {
  title: string;
  banners?: ResolvedBanner[];
  storeName: string;
  storeArea: string;
  storeOrigin: string;
  weedHref: string;
  vapeHref: string;
  cigaretteHref: string;
};

function BannerFigure({ banner }: { banner: ResolvedBanner }) {
  const [src, setSrc] = useState(banner.image);
  const [imageFailed, setImageFailed] = useState(false);
  const showText = banner.render === "text" || imageFailed || !src;
  const swapCodedImage = () => {
    if (banner.codedImage && src !== banner.codedImage) {
      setSrc(banner.codedImage);
      return;
    }
    setImageFailed(true);
  };
  const useCodedFallback = swapCodedImage;
  return (
    <figure data-core-banner={banner.id} style={figureStyle}>
      {showText ? (
        <div data-fleet-text-banner="" style={{ ...imageStyle, minHeight: banner.imageHeight || 180, display: "flex", alignItems: "center", justifyContent: "center", background: FLEET_COLORS.banner, color: FLEET_COLORS.bannerText, fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)" }}>{banner.categoryName}</div>
      ) : (
        <Link href={banner.href} style={linkStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={src}
            src={src}
            alt={banner.alt}
            title={banner.title}
            width={banner.imageWidth}
            height={banner.imageHeight}
            style={imageStyle}
            ref={(node) => { if (node?.complete && node.naturalWidth === 0) swapCodedImage(); }}
            onError={useCodedFallback}
          />
        </Link>
      )}
      <figcaption style={captionStyle}>{banner.textBar}</figcaption>
    </figure>
  );
}

export default function FleetAnnouncementBanner({
  title,
  banners,
  storeName,
  storeArea,
  storeOrigin,
  weedHref,
  vapeHref,
  cigaretteHref,
}: FleetAnnouncementBannerProps) {
  const cigarettes = useCigaretteState();
  const announcementRef = useRef<HTMLElement>(null);
  const [navClearance, setNavClearance] = useState<number | null>(null);
  const showCigarettes = cigarettes.web;

  useEffect(() => {
    if (!banners) return;
    const announcement = announcementRef.current;
    const nav = document.getElementById("main-nav");
    if (!announcement || !nav) return;
    let frame = 0;
    const updateClearance = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const currentMargin = Number.parseFloat(window.getComputedStyle(announcement).marginTop) || 0;
        const flowTopDoc = announcement.getBoundingClientRect().top + window.scrollY - currentMargin;
        const nextClearance = window.getComputedStyle(nav).position === "fixed" ? Math.min(400, Math.max(0, Math.ceil(nav.getBoundingClientRect().bottom - flowTopDoc))) : 0;
        setNavClearance((current) => current === nextClearance ? current : nextClearance);
      });
    };
    updateClearance();
    const resizeObserver = new ResizeObserver(updateClearance);
    resizeObserver.observe(nav);
    window.addEventListener("resize", updateClearance);
    return () => { window.cancelAnimationFrame(frame); resizeObserver.disconnect(); window.removeEventListener("resize", updateClearance); };
  }, [banners]);

  if (!banners) {
    return (
      <FourCoreBannerStack
        title={title}
        storeName={storeName}
        storeArea={storeArea}
        storeOrigin={storeOrigin}
        weedHref={weedHref}
        vapeHref={vapeHref}
        cigaretteHref={cigaretteHref}
      />
    );
  }

  const visible = banners.filter((banner) => !banner.hidden && (showCigarettes || (banner.id !== "cigarettes" && banner.id !== "premium-cigarettes")));

  return (
    <aside ref={announcementRef} data-fleet-homepage-announcement="" data-nav-clearance-self="" aria-label="Store announcements" style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "100%", height: "auto", overflowX: "hidden", overflowY: "visible", marginTop: navClearance === null ? undefined : navClearance, position: "relative", zIndex: 50 }}>
      <div data-home-title-block="" style={{ width: "100%", boxSizing: "border-box", padding: "10px 16px", background: "#0b1018", color: "#ffffff", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "clamp(24px, 4vw, 38px)", lineHeight: 1.2, fontWeight: 900 }}>{title}</h1>
        <p data-fullname-subline="" style={{ margin: "4px 0 0", fontSize: "13px", fontWeight: 600, lineHeight: 1.35, opacity: 0.85, color: "inherit", overflowWrap: "anywhere" }}>{FULL_NAME_NAP.fullName}</p>
      </div>
      {visible.map((banner) => <BannerFigure key={banner.id} banner={banner} />)}
    </aside>
  );
}
