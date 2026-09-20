import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path: string) => readFileSync(path, "utf8");

const WEED_HUB = "app/components/GBPLandingPage.tsx";
const WEED_ROUTE = "app/weed-dispensary-toronto/page.tsx";
const GBP = "app/lib/gbp-location.ts";

const PILLAR_FILES = [
  WEED_HUB,
  WEED_ROUTE,
  GBP,
  "app/page.tsx",
  "app/visit/page.tsx",
  "app/near-me/page.tsx",
  "app/faq/page.tsx",
] as const;

const BLOCKED = /\b(Nation|reserve|healing|Indigenous)\b/i;
const INVENTED_NATIVE =
  /Indigenous|First Nation|on reserve|healing|traditional medicine|ceremonial|Mohawk Nation|sacred/i;

const REQUIRED_HREFS = [
  "/",
  "/visit",
  "/mohawk-craft-visit",
  "/cannabis-delivery-scarborough",
  "/native-cigarettes-scarborough",
  "/nicotine-vape-scarborough",
  "/exotic-weed",
  "/premium-weed",
  "/aaa-weed",
  "/aa-weed",
  "/budget-weed",
  "/weed-delivery-toronto",
] as const;

test("5th pillar keeps the live geo slug and unique Scarborough H1/FAQ", () => {
  const landing = read(WEED_HUB);
  const route = read(WEED_ROUTE);
  const gbp = read(GBP);
  const sitemap = read("app/sitemap.ts");
  const nextConfig = read("next.config.ts");

  assert.match(gbp, /slug: "weed-dispensary-toronto"/);
  assert.match(route, /title:\s*\{\s*absolute:\s*gbpLocation\.seoTitle\s*\}/);
  assert.match(gbp, /Weed Dispensary Scarborough/);
  assert.match(landing, /<h1 className=\{styles\.h1\}>\{H1\}<\/h1>/);
  assert.match(landing, /const H1 = "Weed Dispensary in Scarborough on Eglinton East"/);
  assert.match(landing, /FAQ: Scarborough \/ Eglinton East Weed Dispensary/);
  assert.match(landing, /"@type": "FAQPage"/);
  assert.match(landing, /Is there a weed dispensary in Scarborough on Eglinton East\?/);
  assert.match(landing, /Which page is the live Scarborough weed-dispensary hub\?/);
  assert.match(landing, /What can I browse from this Scarborough weed dispensary page\?/);
  assert.match(landing, /How is this weed-dispensary hub different from the 24-hour walk-in guide\?/);
  assert.match(landing, /I searched weed dispensary near me\. Is this the Eglinton East shop\?/);
  assert.match(landing, /Is this Scarborough weed dispensary the same storefront as Mohawk Craft Dispensary\?/);
  assert.match(landing, /2655 Eglinton Ave E, Toronto, ON M1K 2S2/);
  assert.match(landing, /\+1 \(437\) 524-9335/);
  assert.match(landing, /https:\/\/mohawkmedicine\.com\//);
  assert.match(sitemap, /\$\{BASE\}\/weed-dispensary-toronto\//);
  assert.match(
    nextConfig,
    /source: "\/weed-dispensary-scarborough", destination: "\/weed-dispensary-toronto\/", permanent: true/,
  );
  assert.doesNotMatch(nextConfig, /destination: "\/weed-dispensary-scarborough"/);
});

test("5th pillar hub cards link visit, brand FAQ, delivery, cig, nic, and *-weed", () => {
  const landing = read(WEED_HUB);
  assert.match(landing, /currentPath="\/weed-dispensary-toronto\/"/);
  assert.match(landing, /LOCAL_LINKS/);
  for (const href of REQUIRED_HREFS) {
    assert.match(
      landing,
      new RegExp(`href: "${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`),
    );
  }
});

test("5th pillar stays retail voice and avoids bare Toronto spam", () => {
  const landing = read(WEED_HUB);
  const gbp = read(GBP);
  assert.match(landing, /Scarborough \/ Eglinton East/);
  assert.match(landing, /Brimley/);
  assert.match(landing, /Adults 19\+/);
  assert.match(gbp, /neighbourhood weed dispensary/);
  assert.doesNotMatch(landing, /Toronto store page|city-level visit|in \{gbpLocation\.city\}/);
  assert.doesNotMatch(landing, /Ottawa|Gatineau|ByWard|Golden Mile/);
  assert.doesNotMatch(landing, BLOCKED);
  assert.doesNotMatch(landing, INVENTED_NATIVE);
  assert.doesNotMatch(landing, /menu JSON|MENU_JSON|allItems|FLOWERS_LIVE/i);
});

test("homepage, visit, near-me, and FAQ point at the live Scarborough weed hub", () => {
  const home = read("app/page.tsx");
  const visit = read("app/visit/page.tsx");
  const nearMe = read("app/near-me/page.tsx");
  const faq = read("app/faq/page.tsx");
  const footer = read("app/components/Footer.tsx");

  assert.match(home, /name: "Weed Dispensary Scarborough", href: "\/weed-dispensary-toronto\/"/);
  assert.match(home, /Scarborough weed-dispensary hub/);
  assert.match(visit, /Home And Scarborough Weed Hub/);
  assert.match(nearMe, /Scarborough weed dispensary hub/);
  assert.match(faq, /href="\/weed-dispensary-toronto\/"/);
  assert.match(footer, /href="\/weed-dispensary-toronto\/">Weed Dispensary Scarborough</);

  for (const file of PILLAR_FILES) {
    assert.doesNotMatch(read(file), BLOCKED, file);
  }
});
