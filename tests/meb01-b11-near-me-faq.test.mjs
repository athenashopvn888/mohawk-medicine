import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const nearMe = read("app/near-me/page.tsx");
const sitemap = read("app/sitemap.ts");
const redirects = read("next.config.ts");
const footer = read("app/components/Footer.tsx");
const home = read("app/page.tsx");
const toronto = read("app/components/GBPLandingPage.tsx");
const infoTemplate = read("app/info/[seoPage]/page.tsx");
const resources = read("app/resources/resourceData.ts");
const navbar = read("app/components/Navbar.tsx");
const visit = read("app/visit/page.tsx");
const seoPages = read("app/lib/seoPages.ts");

const INVENTED_NATIVE =
  /Indigenous|First Nation|on reserve|healing|traditional medicine|ceremonial|Mohawk Nation|sacred/i;

test("B11 canonical page owns the Scarborough near-me arrival FAQ", () => {
  assert.match(nearMe, /title: \{ absolute: TITLE \}/);
  assert.match(nearMe, /Dispensary Near Me in Scarborough \| Mohawk Medicine \| Eglinton East FAQ/);
  assert.match(nearMe, /<h1 className=\{styles\.h1\}>Dispensary Near Me in Scarborough<\/h1>/);
  assert.match(nearMe, /canonical: CANONICAL/);
  assert.match(nearMe, /const CANONICAL = "https:\/\/mohawkmedicine\.com\/near-me"/);
  assert.match(nearMe, /"@type": "FAQPage"/);
  assert.match(nearMe, /"@type": "WebPage"/);
  assert.match(nearMe, /about: \{ "@id": "https:\/\/mohawkmedicine\.com\/#store" \}/);
  assert.doesNotMatch(nearMe, /"@type": "Store"/);
});

test("B11 follows the brief H2s with MEB01 NAP only", () => {
  assert.match(nearMe, /STORE_NAP\.legalName/);
  assert.match(nearMe, /STORE_NAP\.website/);
  assert.match(nearMe, /STORE_NAP\.hoursLong/);
  assert.match(nearMe, />Pin Clarity</);
  assert.match(nearMe, />Scarborough vs Toronto</);
  assert.match(nearMe, />Hours</);
  assert.match(nearMe, />Retail Dispensary Facts</);
  assert.match(nearMe, /FAQ: Dispensary Near Me \/ Scarborough/);
  assert.match(nearMe, /I searched dispensary near me/);
  assert.match(nearMe, /Is Mohawk dispensary a cannabis store near me\?/);
  assert.match(nearMe, /Cannabis near me in Scarborough/);
});

test("B11 internal links hit homepage, trailing-slash Toronto LP, and /visit", () => {
  assert.match(nearMe, /<Link href="\/">homepage<\/Link>/);
  assert.match(nearMe, /href="\/weed-dispensary-toronto\/"/);
  assert.match(nearMe, /href="\/visit"/);
  assert.match(sitemap, /url: `\$\{BASE\}\/near-me`/);
  assert.match(redirects, /source: "\/info\/dispensary-near-me-scarborough"/);
  assert.match(redirects, /destination: "\/near-me"/);
  assert.match(redirects, /source: "\/info\/dispensary-near-me-york"/);
});

test("B11 is linked from home, footer, Toronto LP, visit, info template, and resources", () => {
  assert.match(home, /name: "Dispensary Near Me FAQ", href: "\/near-me"/);
  assert.match(footer, /href="\/near-me">Dispensary Near Me FAQ</);
  assert.match(toronto, /href="\/near-me"/);
  assert.match(infoTemplate, /href: "\/near-me", label: "Dispensary Near Me FAQ"/);
  assert.match(navbar, /href: "\/near-me", label: "Near Me"/);
  assert.match(resources, /href: "\/near-me"/);
  assert.match(visit, /href="\/near-me"/);
});

test("B11 copy stays neighbourhood door-test with PROTECTED_NATIVE_WORDING", () => {
  assert.doesNotMatch(nearMe, INVENTED_NATIVE);
  assert.doesNotMatch(nearMe, /cultural|clinic|treatment|reserve dispensary/i);
  assert.match(nearMe, /visit and arrival copy only/);
  assert.doesNotMatch(seoPages, /slug: "dispensary-near-me-scarborough"/);
});
