"use client";

import { SHOW_CIGARETTES } from "../lib/siteConfig";


import { useEffect, useState } from "react";
import Link from "next/link";
import FlowerBogoStrip from "./FlowerBogoStrip";

function isHalloweenNoticeActive(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const value = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const dateKey = Number(`${value.year}${value.month}${value.day}`);

  return dateKey >= 20261014 && dateKey <= 20261031;
}

export default function FleetAnnouncementBanner() {
  const [showHalloweenNotice, setShowHalloweenNotice] = useState(false);

  useEffect(() => {
    const updateVisibility = () =>
      setShowHalloweenNotice(isHalloweenNoticeActive(new Date()));

    updateVisibility();
    const timer = window.setInterval(updateVisibility, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <aside data-fleet-homepage-announcement="" aria-label="Store announcements">
      {showHalloweenNotice ? (
        <p data-halloween-hours-notice="">
          Happy Halloween! Mohawk Medicine is open regular hours on Saturday, October 31.
        </p>
      ) : null}
      <FlowerBogoStrip hero />
      <Link href="/exotic-weed" data-exotic-tier-banner="" aria-label="Shop Exotic Premium AAA+ tier weed">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/banners/top-weed-tier-meb01.webp"
          alt="TOP WEED TIER at Mohawk Medicine — Exotic, Premium, and AAA+ weed with Buy 2g Get 1g FREE and Buy 3g Get 3g FREE."
        />
      </Link>
{SHOW_CIGARETTES ? (<Link href="/items/cigarettes" data-cig-mix-banner="" aria-label="Shop cigarette mix-and-match deals">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/banners/native-cigarette-offer-20260822.webp"
          alt="Cigarette deal at Mohawk Medicine — 2 packs for $5 mix and match. Adults 19+."
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </Link>) : null}
</aside>
  );
}
