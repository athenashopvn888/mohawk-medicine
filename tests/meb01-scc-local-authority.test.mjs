import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const layout = read("app/layout.tsx");
const nap = read("app/lib/nap.ts");
const footer = read("app/components/Footer.tsx");
const torontoPage = read("app/components/GBPLandingPage.tsx");
const seoPages = read("app/lib/seoPages.ts");
const home = read("app/page.tsx");
const contact = read("app/contact/page.tsx");
const redirects = read("next.config.ts");

const RISKY_NATIVE = /Indigenous|First Nation|on reserve|healing|traditional medicine|ceremonial|sacred tobacco/i;

test("the site exposes one governed Store entity and page schemas point to it", () => {
  assert.match(nap, /"@type": "Store"/);
  assert.match(nap, /"@id": "https:\/\/mohawkmedicine\.com\/#store"/);
  assert.match(nap, /url: STORE_NAP\.website/);
  assert.match(nap, /telephone: STORE_NAP\.phoneIntl/);
  assert.match(nap, /latitude: STORE_NAP\.latitude/);
  assert.match(nap, /longitude: STORE_NAP\.longitude/);
  assert.match(layout, /storeJsonLd/);
  assert.doesNotMatch(nap, /aggregateRating/);
  assert.doesNotMatch(footer, /"@type": "Store"/);
  assert.doesNotMatch(torontoPage, /"@type": "Store"/);
  assert.match(torontoPage, /"@type": "WebPage"/);
  assert.match(torontoPage, /"about": \{ "@id": "https:\/\/mohawkmedicine\.com\/#store" \}/);
  assert.match(home, /"@type": "WebPage"/);
  assert.match(home, /about: \{ "@id": "https:\/\/mohawkmedicine\.com\/#store" \}/);
});

test("canonical NAP uses Mohawk Craft Dispensary with Mohawk Medicine as site brand", () => {
  assert.match(nap, /legalName: "Mohawk Craft Dispensary"/);
  assert.match(nap, /brandName: "Mohawk Medicine"/);
  assert.match(nap, /name: STORE_NAP\.legalName/);
  assert.match(nap, /alternateName: STORE_NAP\.brandName/);
  assert.match(nap, /website: "https:\/\/mohawkmedicine\.com\/"/);
  assert.match(nap, /phoneDisplay: "\+1 \(437\) 524-9335"/);
  assert.match(nap, /hours: "Open 24 Hours"/);
  assert.match(nap, /streetAddress: "2655 Eglinton Ave E"/);
  assert.match(layout, /siteName: "Mohawk Medicine"/);
  assert.match(footer, /Mohawk Craft Dispensary/);
  assert.match(footer, /https:\/\/mohawkmedicine\.com\//);
  assert.match(home, /Mohawk Craft Dispensary/);
  assert.match(contact, /Mohawk Craft Dispensary/);
  assert.match(torontoPage, /legalName/);
  assert.match(torontoPage, /Use this Toronto store page for Mohawk Medicine&apos;s general visit information\./);
  assert.match(torontoPage, /For the exact Scarborough storefront context/);
  assert.doesNotMatch(torontoPage, /Kennedy|Golden Mile|Birchmount|Warden|parkingNote|fully licensed|complete line|finest quality/i);
});

test("PROTECTED_NATIVE_WORDING is not expanded on homepage, schema, or Toronto landing", () => {
  assert.doesNotMatch(`${layout}\n${home}\n${torontoPage}\n${nap}`, RISKY_NATIVE);
  assert.doesNotMatch(`${layout}\n${home}\n${torontoPage}`, /cultural/i);
});

test("approved MEB01 Scarborough page stays borough-level", () => {
  const scarboroughStart = seoPages.indexOf('slug: "scarborough-weed-dispensary"');
  const scarboroughEnd = seoPages.indexOf('slug: "cheap-weed-scarborough"');
  const scarborough = seoPages.slice(scarboroughStart, scarboroughEnd);
  assert.ok(scarboroughStart >= 0 && scarboroughEnd > scarboroughStart);
  assert.match(scarborough, /Use this page for Scarborough store information for Mohawk Medicine at 2655 Eglinton Ave E\./);
  assert.match(scarborough, /Where can I find Mohawk Medicine's Scarborough store information\?/);
  assert.match(scarborough, /Use this page for Mohawk Medicine store information connected to 2655 Eglinton Ave E in Scarborough\./);
  assert.match(scarborough, /How To Find The Scarborough Shop/);
  assert.doesNotMatch(scarborough, /Kennedy|Golden Mile|Birchmount|Warden/);
  assert.doesNotMatch(scarborough, RISKY_NATIVE);
});

test("homepage routing is bounded and protected category separation remains visible", () => {
  for (const [label, href] of [
    ["Toronto Weed Dispensary", "/weed-dispensary-toronto/"],
    ["24-Hour Walk-In Guide", "/visit"],
    ["Dispensary Near Me FAQ", "/near-me"],
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
  assert.match(redirects, /source: "\/info\/dispensary-near-me-scarborough"/);
  assert.match(redirects, /destination: "\/near-me"/);
  assert.match(home, /href: "\/weed-dispensary-toronto\/"/);
  assert.match(torontoPage, /`https:\/\/\$\{gbpLocation\.domain\}\/\$\{gbpLocation\.slug\}\/`/);
});
