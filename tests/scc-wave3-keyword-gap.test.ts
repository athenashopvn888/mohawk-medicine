import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path: string) => readFileSync(path, "utf8");

const CIG_PAGE = "app/native-cigarettes-scarborough/page.tsx";
const NIC_PAGE = "app/nicotine-vape-scarborough/page.tsx";
const VISIT_PAGE = "app/visit/page.tsx";
const NEAR_ME_PAGE = "app/near-me/page.tsx";

const WAVE3_FILES = [
  CIG_PAGE,
  NIC_PAGE,
  VISIT_PAGE,
  NEAR_ME_PAGE,
  "app/page.tsx",
  "app/mohawk-craft-visit/page.tsx",
] as const;

const BLOCKED = /\b(Nation|reserve|healing|Indigenous|Ottawa|Gatineau|ByWard)\b/i;
const INVENTED_NATIVE =
  /Indigenous|First Nation|on reserve|healing|traditional medicine|ceremonial|Mohawk Nation|sacred/i;

const LINKED_SURFACES = [
  "app/page.tsx",
  "app/visit/page.tsx",
  "app/near-me/page.tsx",
  "app/mohawk-craft-visit/page.tsx",
  "app/cannabis-delivery-scarborough/page.tsx",
  "app/components/Footer.tsx",
  "app/components/GBPLandingPage.tsx",
  "app/faq/page.tsx",
] as const;

test("Wave 3 Native cigarettes LP owns native-cigarettes-scarborough", () => {
  const page = read(CIG_PAGE);
  const sitemap = read("app/sitemap.ts");
  const nextConfig = read("next.config.ts");

  assert.match(page, /<h1 className=\{styles\.h1\}>Native Cigarettes in Scarborough on Eglinton East<\/h1>/);
  assert.match(page, /Native Cigarettes Scarborough \| Eglinton East \| Mohawk Medicine/);
  assert.match(page, /2655 Eglinton Ave E, Toronto, ON M1K 2S2/);
  assert.match(page, /\+1 \(437\) 524-9335/);
  assert.match(page, /https:\/\/mohawkmedicine\.com\//);
  assert.match(page, /"@type": "FAQPage"/);
  assert.match(page, /retail product copy only/);
  assert.match(page, /does not add origin stories/);
  assert.match(page, /href="\/items\/cigarettes"/);
  assert.match(page, /href="\/visit"/);
  assert.match(page, /href="\/weed-delivery-toronto"/);
  assert.match(sitemap, /\$\{BASE\}\/native-cigarettes-scarborough/);
  assert.match(
    nextConfig,
    /source: "\/info\/native-cigarettes-scarborough", destination: "\/native-cigarettes-scarborough", permanent: true/,
  );
});

test("Wave 3 nicotine vape LP ships because nic vapes are sold", () => {
  const page = read(NIC_PAGE);
  const sitemap = read("app/sitemap.ts");
  const nextConfig = read("next.config.ts");

  assert.match(page, /<h1 className=\{styles\.h1\}>Nicotine Vapes in Scarborough on Eglinton East<\/h1>/);
  assert.match(page, /Nicotine Vape Scarborough \| Eglinton East \| Mohawk Medicine/);
  assert.match(page, /2655 Eglinton Ave E, Toronto, ON M1K 2S2/);
  assert.match(page, /Adults 19\+\. Nicotine is addictive\./);
  assert.match(page, /href="\/items\/vapes"/);
  assert.match(page, /href="\/visit"/);
  assert.match(page, /href="\/weed-delivery-toronto"/);
  assert.match(sitemap, /\$\{BASE\}\/nicotine-vape-scarborough/);
  assert.match(
    nextConfig,
    /source: "\/info\/nicotine-vapes-scarborough", destination: "\/nicotine-vape-scarborough", permanent: true/,
  );
  assert.doesNotMatch(read("app/sitemap.ts"), /nicotine-pouches-scarborough/);
});

test("Wave 3 24h lane keeps /visit as owner and aliases the short slug", () => {
  const visit = read(VISIT_PAGE);
  const nearMe = read(NEAR_ME_PAGE);
  const nextConfig = read("next.config.ts");

  assert.match(visit, /<h1 className=\{styles\.h1\}>24-Hour Dispensary Scarborough<\/h1>/);
  assert.match(visit, /Is a late-night walk-in on Eglinton East treated as open now\?/);
  assert.match(visit, /Do 24-hour hours apply to cannabis delivery too\?/);
  assert.match(visit, /href="\/native-cigarettes-scarborough"/);
  assert.match(visit, /href="\/nicotine-vape-scarborough"/);
  assert.match(nearMe, /Is the dispensary near me in Scarborough open now\?/);
  assert.match(nearMe, /href="\/native-cigarettes-scarborough"/);
  assert.match(nearMe, /href="\/nicotine-vape-scarborough"/);
  assert.match(
    nextConfig,
    /source: "\/24-hour-scarborough-dispensary", destination: "\/visit", permanent: true/,
  );
  assert.doesNotMatch(visit, /24\/7 delivery|delivery is 24 hours/i);
  assert.doesNotMatch(nearMe, /24\/7 delivery|delivery is 24 hours/i);
});

test("Wave 3 copy prefers Scarborough / Eglinton East and stays retail voice", () => {
  for (const file of WAVE3_FILES) {
    const source = read(file);
    assert.match(source, /Scarborough/);
    assert.match(source, /Eglinton/);
    assert.doesNotMatch(source, BLOCKED, file);
    assert.doesNotMatch(source, INVENTED_NATIVE, file);
    assert.doesNotMatch(source, /cultural|clinic|treatment|reserve dispensary/i, file);
    assert.doesNotMatch(source, /sister store|our other locations/i, file);
  }
});

test("Wave 3 LPs link homepage, visit, brand FAQ, geo, *-weed, and delivery", () => {
  for (const file of [CIG_PAGE, NIC_PAGE]) {
    const page = read(file);
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
      "/cannabis-delivery-scarborough",
    ]) {
      assert.match(page, new RegExp(`href="${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
    }
  }

  for (const file of LINKED_SURFACES) {
    const source = read(file);
    assert.match(source, /native-cigarettes-scarborough/, `${file} must link the cig LP`);
    assert.match(source, /nicotine-vape-scarborough/, `${file} must link the nic LP`);
  }
});
