import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const layout = read("app/layout.tsx");
const footer = read("app/components/Footer.tsx");
const torontoPage = read("app/components/GBPLandingPage.tsx");
const seoPages = read("app/lib/seoPages.ts");
const home = read("app/page.tsx");
const redirects = read("next.config.ts");

test("the site exposes one governed Store entity and page schemas point to it", () => {
  assert.match(layout, /"@type": "Store"/);
  assert.match(layout, /"@id": "https:\/\/mohawkmedicine\.com\/#store"/);
  assert.match(layout, /url: "https:\/\/mohawkmedicine\.com\/"/);
  assert.match(layout, /telephone: "\+14375249335"/);
  assert.match(layout, /latitude: 43\.7356759, longitude: -79\.2508842/);
  assert.doesNotMatch(layout, /priceRange|areaServed|alternateName|aggregateRating/);
  assert.doesNotMatch(footer, /"@type": "Store"/);
  assert.doesNotMatch(torontoPage, /"@type": "Store"/);
  assert.match(torontoPage, /"@type": "WebPage"/);
  assert.match(torontoPage, /"about": \{ "@id": "https:\/\/mohawkmedicine\.com\/#store" \}/);
  assert.match(home, /"@type": "WebPage"/);
  assert.match(home, /about: \{ "@id": "https:\/\/mohawkmedicine\.com\/#store" \}/);
});

test("approved MEB01 identity and public-copy corrections are exact", () => {
  assert.match(layout, /name: "Mohawk Medicine"/);
  assert.doesNotMatch(`${layout}\n${home}\n${torontoPage}`, /Mohawk Craft Dispensary|alternateName|Indigenous|cultural/i);
  assert.match(torontoPage, /Use this Toronto store page for Mohawk Medicine&apos;s general visit information\./);
  assert.match(torontoPage, /For the exact Scarborough storefront context/);
  assert.doesNotMatch(torontoPage, /Kennedy|Golden Mile|Birchmount|Warden|parkingNote|fully licensed|complete line|finest quality/i);

  const scarboroughStart = seoPages.indexOf('slug: "scarborough-weed-dispensary"');
  const scarboroughEnd = seoPages.indexOf('slug: "cheap-weed-scarborough"');
  const scarborough = seoPages.slice(scarboroughStart, scarboroughEnd);
  assert.ok(scarboroughStart >= 0 && scarboroughEnd > scarboroughStart);
  assert.match(scarborough, /Use this page for Scarborough store information for Mohawk Medicine at 2655 Eglinton Ave E\./);
  assert.match(scarborough, /Where can I find Mohawk Medicine's Scarborough store information\?/);
  assert.match(scarborough, /Use this page for Mohawk Medicine store information connected to 2655 Eglinton Ave E in Scarborough\./);
  assert.doesNotMatch(scarborough, /Kennedy|Golden Mile|Birchmount|Warden/);
});

test("homepage routing is bounded and protected category separation remains visible", () => {
  for (const [label, href] of [
    ["Toronto Weed Dispensary", "/weed-dispensary-toronto/"],
    ["Scarborough Weed Dispensary", "/info/scarborough-weed-dispensary"],
    ["Weed Store Near Eglinton East", "/info/weed-store-near-eglinton-east"],
    ["First Visit to Mohawk Medicine", "/resources/eglinton-east-scarborough-visit-guide"],
    ["Cheap Weed in Scarborough", "/info/cheap-weed-scarborough"],
    ["Native Cigarettes in Scarborough", "/info/native-cigarettes-scarborough"],
    ["Nicotine Vapes in Scarborough", "/info/nicotine-vapes-scarborough"],
    ["Mohawk Medicine Resources", "/resources"],
  ]) {
    assert.ok(home.includes(`name: "${label}", href: "${href}"`));
  }
  assert.match(home, /Native cigarettes and nicotine vapes remain separate from cannabis products/);
  assert.match(home, /without confusing nicotine with THC/);
  assert.doesNotMatch(home, /new local route|canonical owner|SEO workflow|copied city|copied store/i);
});

test("held routes and slash convention are unchanged", () => {
  assert.doesNotMatch(redirects, /dispensary-near-me-scarborough/);
  assert.match(home, /href: "\/weed-dispensary-toronto\/"/);
  assert.match(torontoPage, /`https:\/\/\$\{gbpLocation\.domain\}\/\$\{gbpLocation\.slug\}\/`/);
});
