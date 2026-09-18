import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const visit = read("app/visit/page.tsx");
const sitemap = read("app/sitemap.ts");
const redirects = read("next.config.ts");
const footer = read("app/components/Footer.tsx");
const home = read("app/page.tsx");
const toronto = read("app/components/GBPLandingPage.tsx");
const infoTemplate = read("app/info/[seoPage]/page.tsx");
const resources = read("app/resources/resourceData.ts");
const navbar = read("app/components/Navbar.tsx");

const INVENTED_NATIVE =
  /Indigenous|First Nation|on reserve|healing|traditional medicine|ceremonial|Mohawk Nation|sacred/i;

test("B05 canonical page owns the 24-hour Scarborough walk-in query", () => {
  assert.match(visit, /title: \{ absolute: TITLE \}/);
  assert.match(visit, /24-Hour Dispensary Scarborough \| Mohawk Medicine \| Eglinton East Walk-In/);
  assert.match(visit, /<h1 className=\{styles\.h1\}>24-Hour Dispensary Scarborough<\/h1>/);
  assert.match(visit, /canonical: CANONICAL/);
  assert.match(visit, /const CANONICAL = "https:\/\/mohawkmedicine\.com\/visit"/);
  assert.match(visit, /"@type": "FAQPage"/);
  assert.match(visit, /"@type": "WebPage"/);
  assert.match(visit, /about: \{ "@id": "https:\/\/mohawkmedicine\.com\/#store" \}/);
  assert.doesNotMatch(visit, /"@type": "Store"/);
});

test("B05 uses GBP-true 24h hours and MEB01 NAP only", () => {
  assert.match(visit, /STORE_NAP\.hoursLong/);
  assert.match(visit, /STORE_NAP\.legalName/);
  assert.match(visit, /STORE_NAP\.website/);
  assert.match(visit, /2655 Eglinton Ave E — Scarborough Side Arrival/);
  assert.match(visit, /24-Hour \/ Open-Now Hours/);
  assert.match(visit, /Nearby Transit Landmarks/);
  assert.match(visit, /What This Retail Dispensary Sells/);
  assert.match(visit, /FAQ: Dispensary Scarborough \/ Near Me/);
  assert.match(visit, /Is there a 24 hour dispensary in Scarborough\?/);
  assert.match(visit, /I searched dispensary near me/);
});

test("B05 internal links hit homepage, trailing-slash Toronto LP, and cigarettes", () => {
  assert.match(visit, /<Link href="\/">homepage<\/Link>/);
  assert.match(visit, /href="\/weed-dispensary-toronto\/"/);
  assert.match(visit, /href="\/items\/cigarettes"/);
  assert.match(sitemap, /url: `\$\{BASE\}\/visit`/);
  assert.match(redirects, /source: "\/info\/24-hour-dispensary-scarborough"/);
  assert.match(redirects, /destination: "\/visit"/);
});

test("B05 is linked from home, footer, Toronto LP, info template, and visit resources", () => {
  assert.match(home, /name: "24-Hour Walk-In Guide", href: "\/visit"/);
  assert.match(footer, /href="\/visit">24-Hour Walk-In Guide</);
  assert.match(toronto, /href="\/visit"/);
  assert.match(infoTemplate, /href: "\/visit", label: "24-Hour Walk-In Guide"/);
  assert.match(navbar, /href: "\/visit", label: "Visit"/);
  assert.match(resources, /href: "\/visit"/);
});

test("B05 copy stays neighbourhood door-test with PROTECTED_NATIVE_WORDING", () => {
  assert.doesNotMatch(visit, INVENTED_NATIVE);
  assert.doesNotMatch(visit, /cultural|clinic|treatment|reserve dispensary/i);
  assert.match(visit, /walk-in retail guide only/);
});
