import assert from "node:assert/strict";
import test from "node:test";

import {
  CIGARETTE_OFFER_CYCLE_MS,
  TV2_DAYTIME_END_HOUR,
  TV2_DAYTIME_PROMOS,
  TV2_DAYTIME_START_HOUR,
  getTv2DaytimePromo,
  isCigaretteOfferVisible,
  isTv2Daytime,
} from "../app/tv2/tv2Promos.ts";

test("daytime window is 10:00 through 16:59", () => {
  assert.equal(TV2_DAYTIME_START_HOUR, 10);
  assert.equal(TV2_DAYTIME_END_HOUR, 17);
  assert.equal(isTv2Daytime(new Date("2026-10-07T13:59:59.000Z")), false);
  assert.equal(isTv2Daytime(new Date("2026-10-07T14:00:00.000Z")), true);
  assert.equal(isTv2Daytime(new Date("2026-10-07T15:00:00.000Z")), true);
  assert.equal(isTv2Daytime(new Date("2026-10-07T20:59:59.000Z")), true);
  assert.equal(isTv2Daytime(new Date("2026-10-07T21:00:00.000Z")), false);
  assert.equal(isTv2Daytime(new Date("2026-10-08T00:00:00.000Z")), false);
});

test("daytime replaces only the vapes and cigarettes cards", () => {
  const vapes = getTv2DaytimePromo("VAPES", true);
  const cigarettes = getTv2DaytimePromo("CIGARETTES", true);
  assert.equal(vapes?.alt, "Ultimate Cannabis Collection Promo");
  assert.match(vapes?.src ?? "", /cannabis_banner_mashup_variation_01_600x600\.webp$/);
  assert.equal(vapes?.fallbackSrc, "/banners/cannabis_banner_mashup_variation_01_600x600.webp");
  assert.equal(cigarettes, TV2_DAYTIME_PROMOS.CIGARETTES);
  assert.equal(cigarettes?.src, "/banners/tv2-category-collage.png");
  assert.equal(cigarettes?.alt, "Edibles, concentrates, and pre-rolls collage");
  assert.equal(getTv2DaytimePromo("EDIBLES", true), undefined);
  assert.equal(getTv2DaytimePromo("VAPES", false), undefined);
  assert.equal(getTv2DaytimePromo("CIGARETTES", false), undefined);
});

test("cigarette overlay runs for five seconds only outside Toronto daytime", () => {
  assert.equal(CIGARETTE_OFFER_CYCLE_MS, 30_000);
  assert.equal(isCigaretteOfferVisible(false, 0), true);
  assert.equal(isCigaretteOfferVisible(false, 4_999), true);
  assert.equal(isCigaretteOfferVisible(false, 5_000), false);
  assert.equal(isCigaretteOfferVisible(false, 30_000), true);
  assert.equal(isCigaretteOfferVisible(true, 25_000), false);
  assert.equal(isCigaretteOfferVisible(false, Number.NaN), false);
  assert.equal(isCigaretteOfferVisible(false, -1), false);
});
