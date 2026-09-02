import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const products = read("app/lib/products.ts");
const tiers = read("app/lib/tierSeoContent.ts");
const tierPage = read("app/[tier]/page.tsx");
const redirects = read("next.config.ts");
const sitemap = read("app/sitemap.ts");
const navbar = read("app/components/Navbar.tsx");
const footer = read("app/components/Footer.tsx");
const layout = read("app/layout.tsx");
const delivery = read("app/weed-delivery-toronto/page.tsx");
const deliveryContent = read("app/delivery/DeliveryContent.tsx");
const resources = read("app/resources/resourceData.ts");

const routeMap = [
  ["/exotic", "/exotic-weed"],
  ["/premium", "/premium-weed"],
  ["/aaa", "/aaa-weed"],
  ["/aa", "/aa-weed"],
  ["/budget", "/budget-weed"],
  ["/delivery", "/weed-delivery-toronto"],
  ["/resources/flower-guide", "/resources/weed-flower-guide"],
];

test("every legacy Weed-campaign route has one permanent direct redirect", () => {
  for (const [source, destination] of routeMap) {
    assert.match(redirects, new RegExp(`source: "${source.replaceAll("/", "\\/")}", destination: "${destination.replaceAll("/", "\\/")}", permanent: true`));
  }
  const destinations = new Set(routeMap.map(([, destination]) => destination));
  for (const [, destination] of routeMap) assert.equal(destinations.has(routeMap.find(([source]) => source === destination)?.[1]), false);
});

test("tier routes, labels, metadata and H1s satisfy Weed Standard v2", () => {
  for (const [label, slug] of [
    ["Exotic Weed", "exotic-weed"],
    ["Premium Weed", "premium-weed"],
    ["AAA+ Weed", "aaa-weed"],
    ["AA Weed", "aa-weed"],
    ["Budget Weed", "budget-weed"],
  ]) {
    assert.ok(products.includes(`name: "${label}"`));
    assert.ok(products.includes(`slug: "${slug}"`));
    assert.ok(navbar.includes(`href: "/${slug}", label: "${label}"`));
    assert.ok(footer.includes(`href="/${slug}">${label}`));
  }
  for (const name of ["Exotic", "Premium", "AAA+", "AA", "Budget"]) {
    assert.ok(tiers.includes(`metadataTitle: "${name} Weed & Cannabis Flower Toronto | Mohawk Medicine"`));
    assert.ok(tiers.includes(`h1: "${name} Weed & Cannabis Flower in Toronto"`));
  }
  assert.match(tierPage, /title: \{ absolute: seo\?\.metadataTitle/);
  assert.match(tierPage, /seo\?\.h1 \|\| config\.name/);
});

test("delivery is a single Weed canonical while its operational component remains shared", () => {
  assert.match(delivery, /Weed Delivery Toronto \| Mohawk Medicine/);
  assert.match(delivery, /canonical: "https:\/\/mohawkmedicine\.com\/weed-delivery-toronto"/);
  assert.match(deliveryContent, /<h1>Weed Delivery in Toronto<\/h1>/);
  assert.match(navbar, /href: "\/weed-delivery-toronto", label: "Weed Delivery"/);
  assert.match(footer, /href="\/weed-delivery-toronto">Weed Delivery/);
  assert.match(layout, /href="\/weed-delivery-toronto"/);
  assert.match(sitemap, /\$\{BASE\}\/weed-delivery-toronto/);
  assert.doesNotMatch(sitemap, /\$\{BASE\}\/delivery`/);
});

test("Weed flower guide has a compliant canonical record and no volatile claims", () => {
  const start = resources.indexOf('slug: "weed-flower-guide"');
  const end = resources.indexOf('slug: "value-guide"');
  const guide = resources.slice(start, end);
  assert.ok(start >= 0 && end > start);
  assert.match(guide, /title: "Mohawk Medicine Weed & Flower Guide"/);
  assert.match(guide, /seoTitle: "Weed & Cannabis Flower Guide Toronto \| Mohawk Medicine"/);
  for (const slug of ["exotic-weed", "premium-weed", "aaa-weed", "aa-weed", "budget-weed"]) assert.ok(guide.includes(`href: "/${slug}"`));
  assert.match(guide, /href: "\/weed-dispensary-toronto\/"/);
  assert.doesNotMatch(guide, /\$\d|\b(?:deal|special|in stock|available now|potency|medical|best|#1)\b/i);
  assert.doesNotMatch(resources, /resources\/flower-guide/);
});

test("nicotine and THC vape category separation is preserved", () => {
  assert.match(products, /name: "Nic Vape", slug: "vapes"/);
  assert.match(products, /name: "THC Vape", slug: "vape-disposables"/);
});

test("local runtime exposes canonical pages and one-hop redirects", async () => {
  const base = process.env.MEB01_QA_ORIGIN;
  if (!base) return;

  const canonicals = [
    ["/exotic-weed", "Exotic Weed & Cannabis Flower in Toronto"],
    ["/premium-weed", "Premium Weed & Cannabis Flower in Toronto"],
    ["/aaa-weed", "AAA+ Weed & Cannabis Flower in Toronto"],
    ["/aa-weed", "AA Weed & Cannabis Flower in Toronto"],
    ["/budget-weed", "Budget Weed & Cannabis Flower in Toronto"],
    ["/weed-delivery-toronto", "Weed Delivery in Toronto"],
    ["/resources/weed-flower-guide", "Mohawk Medicine Weed & Flower Guide"],
  ];

  for (const [path, h1] of canonicals) {
    const response = await fetch(base + path, { redirect: "manual" });
    const html = await response.text();
    assert.equal(response.status, 200, path);
    assert.ok(html.includes(`<link rel="canonical" href="https://mohawkmedicine.com${path}"`), path);
    assert.ok(html.includes(h1.replaceAll("&", "&amp;")), path);
  }

  for (const [source, destination] of routeMap) {
    const response = await fetch(base + source, { redirect: "manual" });
    assert.ok([307, 308].includes(response.status), source);
    assert.equal(new URL(response.headers.get("location"), base).pathname, destination, source);
  }
});

