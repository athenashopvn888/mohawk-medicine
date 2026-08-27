import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { SEO_PAGES } from "../app/lib/seoPages.ts";

const EXPECTED_FOOTER_GUIDES = [
  ["/info/scarborough-weed-dispensary", "Scarborough Dispensary"],
  ["/info/cheap-weed-scarborough", "Cheap Weed Scarborough"],
  ["/info/native-cigarettes-scarborough", "Native Cigarettes Scarborough"],
  ["/info/nicotine-vapes-scarborough", "Nicotine Vapes Scarborough"],
  ["/info/weed-store-near-eglinton-east", "Weed Store Near Eglinton East"],
] as const;

test("footer exposes the exact five verified Scarborough guides", async () => {
  const footer = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
  const slugs = new Set(SEO_PAGES.map((page) => page.slug));

  for (const [href, label] of EXPECTED_FOOTER_GUIDES) {
    assert.match(footer, new RegExp(`href="${href}"[^>]*>${label}<`));
    assert.equal(slugs.has(href.replace("/info/", "")), true, `${href} must remain a generated SEO page`);
  }

  assert.doesNotMatch(footer, /href="\/info\/dispensary-near-me-scarborough"/);
});

