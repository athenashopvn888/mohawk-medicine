import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const route = readFileSync(
  new URL("../app/nicotine-vape-scarborough/page.tsx", import.meta.url),
  "utf8",
);
const navbar = readFileSync(new URL("../app/components/Navbar.tsx", import.meta.url), "utf8");
const footer = readFileSync(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");

const expectedProducts = [
  ["geek-promax-5-30k-puffs", "GEEK PROMAX – 5% | 30K PUFFS", "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg"],
  ["geek-universe-25k-puffs", "GEEK UNIVERSE 25k PUFFS", "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp"],
  ["nexa-pix-30k-puffs-many-flavors", "NEXA PIX | 30K PUFFS | MANY FLAVORS", "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp"],
  ["ovns-10000-5-10k-puffs", "OVNS 10000 – 5% | 10K PUFFS", "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg"],
  ["ovns-disposable-5-8ml-many-flavors", "OVNS DISPOSABLE – 5% | 8ML | MANY FLAVORS", "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp"],
  ["ovns-pioneer-5-22k-puffs", "OVNS PIONEER – 5% | 22K PUFFS", "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp"],
] as const;

test("Scarborough nicotine page declares exactly six audited products in order", () => {
  const declared = [...route.matchAll(/slug: "([^"]+)",\s*name: "([^"]+)",\s*image: "([^"]+)"/g)]
    .map((match) => [match[1], match[2], match[3]]);
  assert.deepEqual(declared, expectedProducts);
  assert.match(route, /canonical: CANONICAL/);
  assert.match(route, /const CANONICAL = "https:\/\/mohawkmedicine\.com\/nicotine-vape-scarborough"/);
  assert.match(route, /href="\/items\/vapes"/);
  assert.match(route, /Six live-checked product pages only\./);
  assert.match(route, /Adults 19\+\. Nicotine is addictive\./);
  assert.match(route, /<Navbar hideThcVape \/>/);
  assert.match(route, /<Footer hideThcVape \/>/);
  assert.match(route, /href="\/native-cigarettes-scarborough"/);
});

test("stale, image-less and THC products are absent from the curated page", () => {
  for (const excluded of [
    "geek-max-5-20k30k-puffs-many-flavors",
    "2g-dual-chamber-goober-vape-pen",
    "gas-gang-dispo-vape-1g",
    "2g-gas-gang-vol3-hybrid",
    "drizzle-switch-3in1-2g",
    "/items/vape-disposables",
  ]) {
    assert.equal(route.includes(excluded), false, `${excluded} must not appear in the curated route`);
  }
});

test("reduced-card rendering keeps product cards menu-scoped and hides THC vape chrome", () => {
  assert.match(route, /href=\{`\/item\/\$\{item\.slug\}`\}/);
  assert.match(route, /data-product-slug=\{item\.slug\}/);
  assert.match(navbar, /hideThcVape \? ALL_LINKS\.filter\(\(link\) => link\.href !== "\/items\/vape-disposables"\)/);
  assert.match(footer, /!hideThcVape && <Link href="\/items\/vape-disposables">/);
});
