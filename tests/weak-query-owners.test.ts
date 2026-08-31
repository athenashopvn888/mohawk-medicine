import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path: string) => readFileSync(path, "utf8");

test("weak-query owner pages keep one canonical title owner", () => {
  const categoryPage = read("app/items/[category]/page.tsx");
  const localPage = read("app/weed-dispensary-toronto/page.tsx");
  const deliveryPage = read("app/delivery/page.tsx");

  assert.match(categoryPage, /title:\s*\{\s*absolute:/);
  assert.match(localPage, /title:\s*\{\s*absolute:\s*gbpLocation\.seoTitle\s*\}/);
  assert.match(deliveryPage, /absolute:\s*"Weed Delivery Menu \| Mohawk Medicine"/);
});

test("existing weed and delivery owners carry the intended query language", () => {
  const localOwner = read("app/components/GBPLandingPage.tsx");
  const deliveryOwner = read("app/delivery/DeliveryContent.tsx");

  assert.match(localOwner, /weed dispensary near me in \{gbpLocation\.city\}/);
  assert.match(deliveryOwner, /<h1>Weed Delivery Menu<\/h1>/);
});
