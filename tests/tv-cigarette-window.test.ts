import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";
import {
  decideCigaretteSurface,
  reconcileSurfaceItems,
  webFollowsWebOnOnly,
} from "../app/lib/cigDecision.ts";
import { SHOW_CIGARETTES, filterCigaretteItems } from "../app/lib/siteConfig.ts";
import { cigaretteFlashLine, tvCardsForCigaretteFlag } from "../app/lib/tvCigaretteBoard.ts";

const require = createRequire(import.meta.url);
const { getCigaretteDataset, resetTvStockCache } = require("../app/lib/tvStock.js");

const cards = [
  { id: "VAPES" },
  { id: "CIGARETTES" },
  { id: "MAGIC" },
];

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton", sku: "bb", price: "$25" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED", slug: "backwoods-assorted", sku: "bw", price: "$20" };
const cigarillo = { category: "CIGARETTES", name: "CIGARILLO PACK", slug: "cigarillo-pack", sku: "cg", price: "$5" };
const paper = { category: "CIGARETTES", name: "ROLLING PAPER", slug: "rolling-paper", sku: "pa", price: "$2" };
const pouch = { category: "CIGARETTES", name: "VELO POUCH", slug: "velo-pouch", sku: "po", price: "$8" };
const zyn = { category: "CIGARETTES", name: "ZYN POUCH", slug: "zyn-pouch", sku: "zy", price: "$8" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAPS", slug: "hemp-wraps", sku: "wr", price: "$3" };
const vape = { category: "VAPES", name: "Mango Ice", slug: "mango-ice", sku: "va", price: "$30" };
const kept = [backwoods, cigarillo, paper, pouch, zyn, wrap];
const shelf = [carton, ...kept, vape];

function flowers(count = 4) {
  return Array.from({ length: count }, (_, index) => ({
    sku: `flower-${index}`,
    name: `Flower ${index}`,
    isSale: false,
  }));
}

function fetchPayload(cig: Record<string, unknown>) {
  const flowerRows = flowers();
  return {
    fetchImpl: async () => ({
      ok: true,
      status: 200,
      async json() {
        return { flowers: flowerRows, items: shelf, stockDate: "2026-10-23", cig };
      },
    }),
    staticFlowers: flowerRows,
    staticItems: shelf,
    now: 5_000,
  };
}

test("tvOn shows the cigarettes card and items while web stays hidden", async () => {
  resetTvStockCache();
  assert.equal(SHOW_CIGARETTES, false);
  const dataset = await getCigaretteDataset(fetchPayload({ on: true, webOn: false, tvOn: true, master: true }));
  const tv = decideCigaretteSurface({ cig: dataset.cig, items: dataset.items, surface: "tv" });
  const web = decideCigaretteSurface({ cig: dataset.cig, items: dataset.items, surface: "web" });
  assert.equal(dataset.cig.tvOn, true);
  assert.equal(dataset.cig.webOn, false);
  assert.equal(tv.show, true);
  assert.equal(web.show, false);
  assert.deepEqual(tvCardsForCigaretteFlag(cards, tv.show).map((card) => card.id), ["VAPES", "CIGARETTES", "MAGIC"]);
  const shown = reconcileSurfaceItems(shelf, dataset.items, tv.show);
  assert.ok(shown.some((item) => item.slug === carton.slug));
  for (const item of kept) assert.ok(shown.some((row) => row.slug === item.slug), item.slug);
  const webItems = filterCigaretteItems(shelf);
  assert.equal(webItems.some((item) => item.category === "CIGARETTES"), false);
  assert.equal(cigaretteFlashLine(true, "CIGARETTES 2 PACK $5 MIX MATCH !"), "CIGARETTES 2 PACK $5 MIX MATCH !");
  resetTvStockCache();
});

test("tvOn false hides the card and real cigarettes and keeps wraps and pouches", async () => {
  resetTvStockCache();
  const dataset = await getCigaretteDataset(fetchPayload({ on: false, webOn: false, tvOn: false, master: true }));
  const tv = decideCigaretteSurface({ cig: dataset.cig, items: dataset.items, surface: "tv" });
  const web = decideCigaretteSurface({ cig: dataset.cig, items: dataset.items, surface: "web" });
  assert.equal(tv.show, false);
  assert.equal(web.show, false);
  assert.deepEqual(tvCardsForCigaretteFlag(cards, false).map((card) => card.id), ["VAPES", "MAGIC"]);
  const hidden = reconcileSurfaceItems(shelf, dataset.items, false);
  assert.equal(hidden.some((item) => item.slug === carton.slug), false);
  for (const item of kept) assert.ok(hidden.some((row) => row.slug === item.slug), item.slug);
  assert.equal(cigaretteFlashLine(false, "CIGARETTES 2 PACK $5 MIX MATCH !"), "");
  resetTvStockCache();
});

test("a feed miss does not open the website while TV still follows the decision", () => {
  const missed = decideCigaretteSurface({ cig: null, items: [carton], surface: "web" });
  assert.equal(missed.show, true);
  assert.equal(webFollowsWebOnOnly(missed).show, false);
  const errored = decideCigaretteSurface({
    cig: { on: true, webOn: false, tvOn: false },
    items: [carton],
    surface: "web",
    errored: true,
  });
  assert.equal(webFollowsWebOnOnly(errored).show, false);
  const tv = decideCigaretteSurface({ cig: null, items: [carton], surface: "tv" });
  assert.equal(tv.show, true);
  const explicit = decideCigaretteSurface({
    cig: { on: true, webOn: false, tvOn: true },
    items: [carton, backwoods],
    surface: "web",
  });
  assert.equal(webFollowsWebOnOnly(explicit).show, false);
});
