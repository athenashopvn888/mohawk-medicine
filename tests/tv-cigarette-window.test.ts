import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  cigarettePublicHeaders,
  CIG_WORDING_FALLBACK,
  publicCigaretteFlags,
  reconcileSurfaceItems,
} from "../app/lib/cigDecision.ts";
import { visibleTvCards } from "../app/lib/tvCigaretteBoard.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED", slug: "backwoods" };
const cigarillo = { category: "CIGARETTES", name: "CIGARILLO", slug: "cigarillo" };
const paper = { category: "CIGARETTES", name: "ROLLING PAPER", slug: "paper" };
const pouch = { category: "CIGARETTES", name: "ZYN POUCH", slug: "pouch" };
const velo = { category: "CIGARETTES", name: "VELO", slug: "velo" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAP", slug: "wrap" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };
const menu = [vape, carton, backwoods, cigarillo, paper, pouch, velo, wrap];

const cards = [
  { id: "VAPES" },
  { id: "CIGARETTES" },
  { id: "MAGIC" },
];

test("TV card is shown only while the live TV flag is on", () => {
  assert.deepEqual(visibleTvCards(cards, true).map((card) => card.id), ["VAPES", "CIGARETTES", "MAGIC"]);
  assert.deepEqual(visibleTvCards(cards, false).map((card) => card.id), ["VAPES", "MAGIC"]);
});

test("TV on keeps cigarette items and TV off drops real cigarettes but keeps wraps", () => {
  const shown = reconcileSurfaceItems(menu, menu, true);
  assert.ok(shown.some((item) => item.slug === carton.slug));
  assert.deepEqual(
    reconcileSurfaceItems(menu, menu, false).map((item) => item.slug),
    [vape.slug, backwoods.slug, cigarillo.slug, paper.slug, pouch.slug, velo.slug, wrap.slug],
  );
});

test("website stays off when TV is on and the coded web gate is shut", () => {
  const closed = publicCigaretteFlags({ web: true, tv: true }, false);
  assert.equal(closed.tv, true);
  assert.equal(closed.web, false);
  const open = publicCigaretteFlags({ web: true, tv: true }, true);
  assert.equal(open.web, true);
  assert.equal(open.tv, true);
  const offAir = publicCigaretteFlags({ web: false, tv: false }, true);
  assert.equal(offAir.web, false);
  assert.equal(offAir.tv, false);
  const headers = cigarettePublicHeaders({ web: false, tv: true, wording: CIG_WORDING_FALLBACK });
  assert.equal(headers["x-tv-data-cig-tv"], "1");
  assert.equal(headers["x-tv-data-cig-web"], "0");
});

test("TV surfaces read the feed flag and website surfaces keep the static gate", () => {
  const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const feed = read("app/lib/cigaretteFeed.ts");
  const route = read("app/api/tv-data/route.ts");
  const tv2 = read("app/tv2/page.tsx");
  const tv = read("app/tv/page.tsx");
  assert.match(feed, /getCigaretteDataset/);
  assert.match(feed, /cigaretteEnvHardOff\(\)/);
  assert.match(feed, /publicCigaretteFlags/);
  assert.doesNotMatch(feed, /codedHidden/);
  assert.match(route, /snapshotHeaders/);
  assert.match(route, /reconcileSurfaceItems/);
  assert.match(route, /x-tv-data-cig-tv|snapshotHeaders/);
  assert.doesNotMatch(route, /SHOW_CIGARETTES/);
  assert.match(tv2, /readCigaretteTvHeader/);
  assert.match(tv2, /visibleTvCards/);
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
  assert.match(tv, /readCigaretteTvHeader/);
  assert.match(read("app/sitemap.ts"), /SHOW_CIGARETTES/);
  assert.match(read("app/components/Footer.tsx"), /SHOW_CIGARETTES/);
});
