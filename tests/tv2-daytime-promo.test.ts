import assert from "node:assert/strict";
import test from "node:test";

import {
  getCigaretteOfferPromo,
  getTv2DaytimePromo,
  isCigaretteOfferVisible,
  isTv2Daytime,
} from "../app/tv2/tv2Promos.ts";

test("TV2 daytime is fixed to America/Toronto regardless of process timezone", () => {
  assert.equal(isTv2Daytime(new Date("2026-10-07T17:35:00.000Z")), true);
  assert.equal(isTv2Daytime(new Date("2026-10-07T11:59:00.000Z")), false);
  assert.equal(isTv2Daytime(new Date("2026-10-07T21:30:00.000Z")), false);
});

test("daytime Cigarettes card is fully covered by the THC vape art", () => {
  assert.deepEqual(getTv2DaytimePromo("CIGARETTES", true, 0), {
    src: "/banners/22_Mohawk_THC_Vape.webp",
    alt: "Mohawk Crafts & Medicine THC Vape",
  });
  assert.equal(getTv2DaytimePromo("CIGARETTES", true, 10_000)?.src, "/banners/22_Mohawk_THC_Vape.webp");
  assert.equal(getTv2DaytimePromo("CIGARETTES", true, 20_000)?.src, "/banners/22_Mohawk_THC_Vape.webp");
  assert.match(getTv2DaytimePromo("VAPES", true)?.alt || "", /Ultimate Cannabis Collection/);
  assert.equal(getTv2DaytimePromo("CIGARETTES", false), undefined);
});

test("5-second cigarette list overlay runs only outside Toronto daytime", () => {
  assert.equal(isCigaretteOfferVisible(true, 0), false);
  assert.equal(isCigaretteOfferVisible(false, 0), true);
  assert.equal(isCigaretteOfferVisible(false, 4_999), true);
  assert.equal(isCigaretteOfferVisible(false, 5_000), false);
  assert.equal(isCigaretteOfferVisible(false, 30_000), true);
  assert.equal(getCigaretteOfferPromo(true, 0), undefined);
  assert.equal(getCigaretteOfferPromo(false, 0)?.src, "/banners/luxury_mix_match_600_web.webp");
  assert.equal(getCigaretteOfferPromo(false, 30_000)?.src, "/banners/marlboro_belmont_600x600.webp");
});

import { isCigaretteFlashWindow, isNicotineItem } from "../app/tv/flashMessages.ts";

test("cigarette ticker line is off 08:00-16:59 Toronto and on 17:00-07:59", () => {
  assert.equal(isCigaretteFlashWindow(new Date("2026-10-15T11:59:00.000Z")), true);
  assert.equal(isCigaretteFlashWindow(new Date("2026-10-15T12:00:00.000Z")), false);
  assert.equal(isCigaretteFlashWindow(new Date("2026-10-15T20:59:00.000Z")), false);
  assert.equal(isCigaretteFlashWindow(new Date("2026-10-15T21:00:00.000Z")), true);
});

test("nicotine items are recognised for daytime hiding", () => {
  assert.equal(isNicotineItem({ name: "GEEK UNIVERSE 25k PUFFS NVape", category: "VAPE DISPOSABLE" }), true);
  assert.equal(isNicotineItem({ name: "FLAVOUR BEAST e-LIQUID SALT NVAPE", category: "VAPE PENS" }), true);
  assert.equal(isNicotineItem({ name: "GAS GANG DISPO THCVape 1G", category: "VAPE DISPOSABLE" }), false);
});
