import assert from "node:assert/strict";
import test from "node:test";

import {
  CIGARETTE_OFFER_CYCLE_MS,
  CIGARETTE_OFFER_VISIBLE_FROM_MS,
  TV2_DAYTIME_END_HOUR,
  TV2_DAYTIME_PROMOS,
  TV2_DAYTIME_START_HOUR,
  getTv2DaytimePromo,
  isCigaretteOfferVisible,
  isTv2Daytime,
} from "../app/tv2/tv2Promos.ts";

function atHour(hour: number) {
  return new Date(2026, 8, 28, hour, 0, 0);
}

test("daytime window is 10:00 through 16:59", () => {
  assert.equal(TV2_DAYTIME_START_HOUR, 10);
  assert.equal(TV2_DAYTIME_END_HOUR, 17);
  assert.equal(isTv2Daytime(atHour(9)), false);
  assert.equal(isTv2Daytime(atHour(10)), true);
  assert.equal(isTv2Daytime(atHour(11)), true);
  assert.equal(isTv2Daytime(atHour(16)), true);
  assert.equal(isTv2Daytime(atHour(17)), false);
  assert.equal(isTv2Daytime(atHour(20)), false);
});

test("daytime replaces only the vapes and cigarettes cards", () => {
  const vapes = getTv2DaytimePromo("VAPES", true);
  const cigarettes = getTv2DaytimePromo("CIGARETTES", true);
  assert.equal(vapes?.alt, "Ultimate Cannabis Collection Promo");
  assert.match(vapes?.src ?? "", /cannabis_banner_mashup_variation_01_600x600\.webp$/);
  assert.equal(vapes?.fallbackSrc, "/banners/cannabis_banner_mashup_variation_01_600x600.webp");
  assert.equal(cigarettes, TV2_DAYTIME_PROMOS.CIGARETTES);
  assert.equal(cigarettes?.src, "/banners/cig-poster-1.png");
  assert.equal(cigarettes?.alt, "Cigarettes Promo");
  assert.equal(getTv2DaytimePromo("EDIBLES", true), undefined);
  assert.equal(getTv2DaytimePromo("VAPES", false), undefined);
  assert.equal(getTv2DaytimePromo("CIGARETTES", false), undefined);
});

test("cigarette overlay covers the last 10 seconds of each 30 second cycle, never in daytime", () => {
  assert.equal(CIGARETTE_OFFER_CYCLE_MS, 30_000);
  assert.equal(CIGARETTE_OFFER_VISIBLE_FROM_MS, 20_000);
  assert.equal(isCigaretteOfferVisible(false, 0), false);
  assert.equal(isCigaretteOfferVisible(false, 19_999), false);
  assert.equal(isCigaretteOfferVisible(false, 20_000), true);
  assert.equal(isCigaretteOfferVisible(false, 29_999), true);
  assert.equal(isCigaretteOfferVisible(false, 30_000), false);
  assert.equal(isCigaretteOfferVisible(false, 50_000), true);
  assert.equal(isCigaretteOfferVisible(true, 25_000), false);
  assert.equal(isCigaretteOfferVisible(false, Number.NaN), false);
  assert.equal(isCigaretteOfferVisible(false, -1), false);
});
