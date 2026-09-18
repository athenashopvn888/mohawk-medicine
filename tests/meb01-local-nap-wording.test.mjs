import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const nap = read("app/lib/nap.ts");
const home = read("app/page.tsx");
const footer = read("app/components/Footer.tsx");
const contact = read("app/contact/page.tsx");
const torontoPage = read("app/components/GBPLandingPage.tsx");
const seoTemplate = read("app/info/[seoPage]/page.tsx");
const seoPages = read("app/lib/seoPages.ts");
const visitGuide = read("app/resources/resourceData.ts");
const walkInGuide = read("app/visit/page.tsx");
const nearMeFaq = read("app/near-me/page.tsx");
const brandVisitFaq = read("app/mohawk-craft-visit/page.tsx");
const nativeCigarettes = read("app/info/native-cigarettes-scarborough/page.tsx");

const INVENTED_NATIVE = /Indigenous|First Nation|on reserve|healing|traditional medicine|ceremonial|Mohawk Nation|sacred/i;

test("visible NAP blocks share the same MEB01 facts", () => {
  for (const source of [home, footer, contact, torontoPage, seoTemplate, walkInGuide, nearMeFaq, brandVisitFaq]) {
    assert.match(source, /StoreMap|mapEmbedUrl|Mohawk Craft Dispensary|legalName/);
  }
  assert.match(home, /\+1 \(437\) 524-9335|STORE_NAP\.phoneDisplay/);
  assert.match(contact, /STORE_NAP\.phoneDisplay/);
  assert.match(footer, /\+1 \(437\) 524-9335/);
  assert.match(nap, /website: "https:\/\/mohawkmedicine\.com\/"/);
  assert.doesNotMatch(nap, /mohawkcraftsandmedicine\.com|kennedyloudcannabis\.com|stclaircannabis\.com/);
});

test("Eglinton East landing keeps existing nearby-area door-test language only", () => {
  const start = seoPages.indexOf('slug: "weed-store-near-eglinton-east"');
  const eglinton = seoPages.slice(start);
  assert.ok(start >= 0);
  assert.match(eglinton, /Eglinton East, Kennedy Road, Brimley Road, Golden Mile, Birchmount, Warden/);
  assert.match(eglinton, /Door-Test Details On Eglinton Avenue East/);
  assert.match(eglinton, /\+1 \(437\) 524-9335/);
  assert.doesNotMatch(eglinton, INVENTED_NATIVE);
});

test("visit guide adds phone without new Native claims", () => {
  const start = visitGuide.indexOf('slug: "eglinton-east-scarborough-visit-guide"');
  const end = visitGuide.indexOf('slug: "menu-guide"');
  const guide = visitGuide.slice(start, end);
  assert.match(guide, /\+1 \(437\) 524-9335/);
  assert.match(guide, /Mohawk Craft Dispensary/);
  assert.doesNotMatch(guide, INVENTED_NATIVE);
});

test("Native cigarette page copy was not expanded", () => {
  assert.match(nativeCigarettes, /Native Cigarettes in Scarborough/);
  assert.doesNotMatch(nativeCigarettes, INVENTED_NATIVE);
});

test("B05 24-hour walk-in guide stays neighbourhood door-test only", () => {
  assert.match(walkInGuide, /24-Hour Dispensary Scarborough/);
  assert.match(walkInGuide, /const CANONICAL = "https:\/\/mohawkmedicine\.com\/visit"/);
  assert.match(walkInGuide, /href="\/weed-dispensary-toronto\/"/);
  assert.match(walkInGuide, /href="\/items\/cigarettes"/);
  assert.doesNotMatch(walkInGuide, INVENTED_NATIVE);
});

test("B11 near-me FAQ stays neighbourhood door-test only", () => {
  assert.match(nearMeFaq, /Dispensary Near Me in Scarborough/);
  assert.match(nearMeFaq, /const CANONICAL = "https:\/\/mohawkmedicine\.com\/near-me"/);
  assert.match(nearMeFaq, /href="\/weed-dispensary-toronto\/"/);
  assert.match(nearMeFaq, /href="\/visit"/);
  assert.doesNotMatch(nearMeFaq, INVENTED_NATIVE);
});

test("B17 brand visit FAQ stays retail voice only", () => {
  assert.match(brandVisitFaq, /Mohawk Craft Dispensary Visit FAQ/);
  assert.match(brandVisitFaq, /const CANONICAL = "https:\/\/mohawkmedicine\.com\/mohawk-craft-visit"/);
  assert.match(brandVisitFaq, /href="\/weed-dispensary-toronto\/"/);
  assert.match(brandVisitFaq, /href="\/"/);
  assert.doesNotMatch(brandVisitFaq, INVENTED_NATIVE);
});
