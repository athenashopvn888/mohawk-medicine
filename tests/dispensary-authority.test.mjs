import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const resources = await readFile(new URL("../app/resources/resourceData.ts", import.meta.url), "utf8");
const route = await readFile(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");

test("MEB01 authority article follows Mohawk Medicine site identity and preserves the local owner", () => {
  assert.match(resources, /slug: "cannabis-dispensary-vs-weed-dispensary"/);
  assert.match(resources, /seoTitle: "Cannabis vs Weed Dispensary \| Mohawk Medicine Toronto"/);
  assert.match(resources, /title: "Cannabis Dispensary vs\. Weed Dispensary in Toronto: What's the Difference\?"/);
  assert.match(resources, /href: "\/weed-dispensary-toronto"/);
  assert.match(resources, /href: "\/resources\/cannabis-dispensary-vs-weed-dispensary"/);
  assert.doesNotMatch(resources, /title: "Mohawk Craft Dispensary/);
  assert.match(route, /title: \{ absolute: page\.seoTitle \}/);
  assert.match(route, /alternates: \{ canonical:/);
});
