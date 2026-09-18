import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { TIER_SEO } from "../app/lib/tierSeoContent.ts";
import { SEO_PAGES } from "../app/lib/seoPages.ts";
import { FLOWER_TIER_HUBS, VISIT_HUBS } from "../app/lib/parityHub.ts";

const read = (path: string) => readFileSync(path, "utf8");

const WAVE1_FILES = [
  "app/lib/parityHub.ts",
  "app/components/ParityHubLinks.tsx",
  "app/lib/tierSeoContent.ts",
  "app/page.tsx",
  "app/visit/page.tsx",
  "app/mohawk-craft-visit/page.tsx",
  "app/near-me/page.tsx",
  "app/cannabis-delivery-scarborough/page.tsx",
  "app/components/GBPLandingPage.tsx",
  "app/[tier]/page.tsx",
] as const;

const TIER_KEYS = ["EXOTIC", "PREMIUM", "AAA+", "AA", "BUDGET"] as const;

const HUB_MOUNTS = {
  "app/page.tsx": 'currentPath="/"',
  "app/visit/page.tsx": 'currentPath="/visit"',
  "app/mohawk-craft-visit/page.tsx": 'currentPath="/mohawk-craft-visit"',
  "app/near-me/page.tsx": 'currentPath="/near-me"',
  "app/cannabis-delivery-scarborough/page.tsx": 'currentPath="/cannabis-delivery-scarborough"',
  "app/components/GBPLandingPage.tsx": 'currentPath="/weed-dispensary-toronto/"',
  "app/[tier]/page.tsx": "currentPath={`/${tierSlug}`}",
} as const;

test("live flower tiers keep *-weed slugs and do not replace them with short paths", () => {
  const products = read("app/lib/products.ts");
  for (const slug of ["exotic-weed", "premium-weed", "aaa-weed", "aa-weed", "budget-weed"]) {
    assert.match(products, new RegExp(`slug: "${slug}"`));
  }
  assert.doesNotMatch(products, /slug: "(exotic|premium|aaa|aa|budget)"/);

  const nextConfig = read("next.config.ts");
  for (const [short, live] of [
    ["/exotic", "/exotic-weed"],
    ["/premium", "/premium-weed"],
    ["/aaa", "/aaa-weed"],
    ["/aa", "/aa-weed"],
    ["/budget", "/budget-weed"],
  ]) {
    assert.match(
      nextConfig,
      new RegExp(`source: "${short}", destination: "${live}", permanent: true`),
    );
  }
});

test("each flower tier has a unique Scarborough / Eglinton East H1, title, and FAQ set", () => {
  const h1s = new Set<string>();
  const titles = new Set<string>();
  const questions = new Set<string>();

  for (const key of TIER_KEYS) {
    const seo = TIER_SEO[key];
    assert.ok(seo, `${key} SEO is required`);
    assert.equal(h1s.has(seo.h1), false, `duplicate H1: ${seo.h1}`);
    assert.equal(titles.has(seo.metadataTitle), false, `duplicate title: ${seo.metadataTitle}`);
    h1s.add(seo.h1);
    titles.add(seo.metadataTitle);

    assert.match(`${seo.h1} ${seo.metadataTitle} ${seo.seoTitle}`, /Scarborough|Eglinton East|Eglinton Ave E|Brimley/);
    assert.doesNotMatch(seo.h1, / in Toronto$/);
    assert.ok(seo.faqs.length >= 4, `${key} needs a distinct FAQ set`);

    for (const faq of seo.faqs) {
      assert.equal(questions.has(faq.q), false, `duplicate FAQ question: ${faq.q}`);
      questions.add(faq.q);
    }
  }
});

test("Wave 1 hub graph is shared and mounted on homepage, visit, brand FAQ, near-me, geo LP, and tiers", () => {
  assert.deepEqual(
    VISIT_HUBS.map((item) => item.href),
    ["/", "/visit", "/mohawk-craft-visit", "/near-me", "/weed-dispensary-toronto/", "/cannabis-delivery-scarborough"],
  );
  assert.deepEqual(
    FLOWER_TIER_HUBS.map((item) => item.href),
    ["/exotic-weed", "/premium-weed", "/aaa-weed", "/aa-weed", "/budget-weed"],
  );

  for (const [file, marker] of Object.entries(HUB_MOUNTS)) {
    const source = read(file);
    assert.match(source, /import ParityHubLinks/);
    assert.equal(source.includes(marker), true, `${file} must mount the hub at ${marker}`);
  }
});

test("geo weed hub leans Scarborough / Eglinton East while keeping the live Toronto slug", () => {
  const gbp = read("app/lib/gbp-location.ts");
  const landing = read("app/components/GBPLandingPage.tsx");
  assert.match(gbp, /slug: "weed-dispensary-toronto"/);
  assert.match(gbp, /Weed Dispensary Scarborough/);
  assert.match(landing, /Weed Dispensary in Scarborough on Eglinton East/);
  assert.match(landing, /weed dispensary near me in \{gbpLocation\.city\}/);
  assert.doesNotMatch(landing, /Ottawa|Gatineau|ByWard/);
});

test("Eglinton East corridor page uses Brimley as the landmark and avoids Golden Mile spam", () => {
  const corridor = SEO_PAGES.find((page) => page.slug === "weed-store-near-eglinton-east");
  assert.ok(corridor);
  assert.match(corridor.h1, /Eglinton East/);
  assert.match(`${corridor.h1} ${corridor.sections.map((section) => section.body).join(" ")}`, /Brimley/);
  const blob = [
    corridor.title,
    corridor.h1,
    corridor.heroTagline,
    ...corridor.sections.map((section) => section.body),
    ...corridor.faqs.map((faq) => `${faq.q} ${faq.a}`),
  ].join("\n");
  assert.doesNotMatch(blob, /Golden Mile/);
  assert.doesNotMatch(read("app/visit/page.tsx"), /Golden Mile/);
});

test("Wave 1 public copy stays retail voice and does not add Nation, reserve, healing, or Indigenous claims", () => {
  const blocked = /\b(Nation|reserve|healing|Indigenous)\b/i;
  for (const file of WAVE1_FILES) {
    assert.doesNotMatch(read(file), blocked, file);
  }
  const corridor = SEO_PAGES.find((page) => page.slug === "weed-store-near-eglinton-east");
  assert.ok(corridor);
  const blob = [
    corridor.title,
    ...corridor.sections.map((section) => section.body),
    ...corridor.faqs.map((faq) => `${faq.q} ${faq.a}`),
  ].join("\n");
  assert.doesNotMatch(blob, blocked);
});
