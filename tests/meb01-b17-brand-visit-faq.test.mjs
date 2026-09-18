import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const brandFaq = read("app/mohawk-craft-visit/page.tsx");
const sitemap = read("app/sitemap.ts");
const redirects = read("next.config.ts");
const footer = read("app/components/Footer.tsx");
const home = read("app/page.tsx");
const toronto = read("app/components/GBPLandingPage.tsx");
const infoTemplate = read("app/info/[seoPage]/page.tsx");
const resources = read("app/resources/resourceData.ts");
const navbar = read("app/components/Navbar.tsx");
const visit = read("app/visit/page.tsx");
const nearMe = read("app/near-me/page.tsx");

const INVENTED_NATIVE =
  /Indigenous|First Nation|on reserve|healing|traditional medicine|ceremonial|Mohawk Nation|sacred/i;

test("B17 canonical page owns the Mohawk Craft brand visit FAQ", () => {
  assert.match(brandFaq, /title: \{ absolute: TITLE \}/);
  assert.match(brandFaq, /Mohawk Craft Dispensary \| Brand Visit FAQ \| Mohawk Medicine/);
  assert.match(brandFaq, /<h1 className=\{styles\.h1\}>Mohawk Craft Dispensary Visit FAQ<\/h1>/);
  assert.match(brandFaq, /canonical: CANONICAL/);
  assert.match(brandFaq, /const CANONICAL = "https:\/\/mohawkmedicine\.com\/mohawk-craft-visit"/);
  assert.match(brandFaq, /"@type": "FAQPage"/);
  assert.match(brandFaq, /"@type": "WebPage"/);
  assert.match(brandFaq, /about: \{ "@id": "https:\/\/mohawkmedicine\.com\/#store" \}/);
  assert.doesNotMatch(brandFaq, /"@type": "Store"/);
});

test("B17 follows the brief H2s with MEB01 NAP only", () => {
  assert.match(brandFaq, /STORE_NAP\.legalName/);
  assert.match(brandFaq, /STORE_NAP\.website/);
  assert.match(brandFaq, /STORE_NAP\.hoursLong/);
  assert.match(brandFaq, />Who We Are</);
  assert.match(brandFaq, />Where \/ Hours</);
  assert.match(brandFaq, />What We Don&apos;t Claim</);
  assert.match(brandFaq, />FAQ</);
  assert.match(brandFaq, />CTA</);
  assert.match(brandFaq, /What is Mohawk Craft Dispensary\?/);
  assert.match(brandFaq, /Is Mohawk dispensary the same shop as Mohawk Medicine\?/);
  assert.match(brandFaq, /What does Mohawk cannabis refer to on this site\?/);
});

test("B17 internal links hit homepage and trailing-slash Toronto LP", () => {
  assert.match(brandFaq, /<Link href="\/">homepage<\/Link>/);
  assert.match(brandFaq, /href="\/weed-dispensary-toronto\/"/);
  assert.match(sitemap, /url: `\$\{BASE\}\/mohawk-craft-visit`/);
  assert.match(redirects, /source: "\/visit-faq"/);
  assert.match(redirects, /destination: "\/mohawk-craft-visit"/);
});

test("B17 is linked from home, footer, Toronto LP, visit, near-me, info template, and resources", () => {
  assert.match(home, /name: "Mohawk Craft Visit FAQ", href: "\/mohawk-craft-visit"/);
  assert.match(footer, /href="\/mohawk-craft-visit">Mohawk Craft Visit FAQ</);
  assert.match(toronto, /href="\/mohawk-craft-visit"/);
  assert.match(infoTemplate, /href: "\/mohawk-craft-visit", label: "Mohawk Craft Visit FAQ"/);
  assert.match(navbar, /href: "\/mohawk-craft-visit", label: "Mohawk Craft"/);
  assert.match(resources, /href: "\/mohawk-craft-visit"/);
  assert.match(visit, /href="\/mohawk-craft-visit"/);
  assert.match(nearMe, /href="\/mohawk-craft-visit"/);
});

test("B17 copy stays retail visit voice with PROTECTED_NATIVE_WORDING", () => {
  assert.doesNotMatch(brandFaq, INVENTED_NATIVE);
  assert.doesNotMatch(brandFaq, /cultural|clinic|treatment|reserve dispensary|GBP Name|rename/i);
  assert.match(brandFaq, /retail visit copy only/);
  assert.match(brandFaq, /does not add origin stories/);
});
