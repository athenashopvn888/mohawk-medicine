import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { VISIT_HUBS } from "../app/lib/parityHub.ts";

const read = (path: string) => readFileSync(path, "utf8");

const DELIVERY_PAGE = "app/cannabis-delivery-scarborough/page.tsx";
const LINKED_SURFACES = [
  "app/page.tsx",
  "app/visit/page.tsx",
  "app/mohawk-craft-visit/page.tsx",
  "app/near-me/page.tsx",
  "app/components/GBPLandingPage.tsx",
  "app/[tier]/page.tsx",
  "app/components/Footer.tsx",
  "app/faq/page.tsx",
  "app/delivery/DeliveryContent.tsx",
] as const;

test("Wave 2 Scarborough delivery LP owns cannabis-delivery-scarborough", () => {
  const page = read(DELIVERY_PAGE);
  const nap = read("app/lib/nap.ts");
  const sitemap = read("app/sitemap.ts");
  const nextConfig = read("next.config.ts");

  assert.match(page, /<h1 className=\{styles\.h1\}>Cannabis Delivery in Scarborough on Eglinton East<\/h1>/);
  assert.match(page, /absolute:\s*TITLE/);
  assert.match(page, /Cannabis Delivery Scarborough \| Eglinton East \| Mohawk Medicine/);
  assert.match(page, /2655 Eglinton Ave E, Toronto, ON M1K 2S2/);
  assert.match(page, /\+1 \(437\) 524-9335/);
  assert.match(page, /https:\/\/mohawkmedicine\.com\//);
  assert.match(page, /"@type": "FAQPage"/);
  assert.match(page, /\$60 product minimum/);
  assert.match(page, /href="\/weed-delivery-toronto"/);
  assert.match(page, /href="\/weed-delivery-toronto\?liveOrder=1"/);

  assert.match(nap, /deliveryHoursLong:/);
  assert.match(nap, /Delivery is not listed as 24 hours/);
  assert.match(sitemap, /\$\{BASE\}\/cannabis-delivery-scarborough/);
  assert.match(
    nextConfig,
    /source: "\/weed-delivery-eglinton-east", destination: "\/cannabis-delivery-scarborough", permanent: true/,
  );
});

test("delivery hours stay separate from 24-hour walk-in claims", () => {
  const page = read(DELIVERY_PAGE);
  assert.match(page, /Delivery Hours Are Separate From 24-Hour Walk-In/);
  assert.match(page, /Walk-in store hours/);
  assert.match(page, /Delivery hours/);
  assert.match(page, /Walk-in hours are not delivery hours/);
  assert.match(page, /Is cannabis delivery available 24 hours like the walk-in shop\?/);
  assert.match(page, /No\. The Eglinton East storefront lists Open 24 Hours \/ 7 Days a Week for walk-in shopping only/);
  assert.doesNotMatch(page, /open 24 hours for delivery|delivery is 24 hours|24\/7 delivery/i);
});

test("Wave 2 delivery copy prefers Scarborough / Eglinton East and stays retail voice", () => {
  const page = read(DELIVERY_PAGE);
  assert.match(page, /Scarborough \/ Eglinton East/);
  assert.match(page, /Brimley/);
  assert.doesNotMatch(page, /Ottawa|Gatineau|ByWard|Golden Mile/);
  assert.doesNotMatch(page, /\b(Nation|reserve|healing|Indigenous)\b/i);
  assert.doesNotMatch(page, /sister store|our other locations/i);
});

test("delivery LP and hub graph link homepage, visit, brand FAQ, geo, *-weed, and delivery menu", () => {
  const page = read(DELIVERY_PAGE);
  for (const href of [
    "/",
    "/visit",
    "/mohawk-craft-visit",
    "/weed-dispensary-toronto/",
    "/exotic-weed",
    "/premium-weed",
    "/aaa-weed",
    "/aa-weed",
    "/budget-weed",
    "/weed-delivery-toronto",
  ]) {
    assert.match(page, new RegExp(`href="${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
  }

  assert.equal(
    VISIT_HUBS.some((item) => item.href === "/cannabis-delivery-scarborough"),
    true,
  );

  const hub = read("app/components/ParityHubLinks.tsx");
  assert.match(hub, /VISIT_HUBS/);

  for (const file of LINKED_SURFACES) {
    const source = read(file);
    assert.match(source, /cannabis-delivery-scarborough/, `${file} must link the Wave 2 delivery LP`);
  }
});
