import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  assertCollectionPageItemListContract,
  buildCollectionPageItemListJsonLd,
  collectSchemaKeysAndTypes,
  FLOWER_TIER_COLLECTION_PATHS,
  flowerCanonicalUrl,
  SCHEMA_STORE_ID,
  SCHEMA_WEBSITE_ID,
  SITE_ORIGIN,
  TIER_COLLECTION_SCHEMA_CONTRACT,
} from "../app/lib/collectionPageSchema.ts";
import { STORE_NAP, storeJsonLd, websiteJsonLd } from "../app/lib/nap.ts";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";

const read = (path: string) => readFileSync(path, "utf8");

const pricedFlowers = [
  {
    name: "Sale First",
    slug: "sale-first",
    sku: "X1",
    tier: "EXOTIC",
    type: "hybrid" as const,
    isHot: false,
    isSale: true,
    thc: "36%",
    price3g: { regular: 40, sale: 32 },
    price5g: null,
    price14g: { regular: 140, sale: 95 },
    price28g: null,
    image: "/flowers/sale-first.webp",
  },
  {
    name: "Regular Second",
    slug: "regular-second",
    sku: "X2",
    tier: "EXOTIC",
    type: "indica" as const,
    isHot: false,
    isSale: false,
    thc: "34%",
    price3g: { regular: 40, sale: null },
    price5g: null,
    price14g: null,
    price28g: null,
    image: "/flowers/regular-second.webp",
  },
];

test("tier collection schema preserves visible product order without volatile offer fields", () => {
  const jsonLd = buildCollectionPageItemListJsonLd({
    canonicalPath: "/exotic-weed",
    name: "Exotic Weed in Scarborough on Eglinton East",
    description: "Exotic flower collection. Posted prices can change.",
    items: pricedFlowers,
    itemUrl: (flower) => flowerCanonicalUrl(flower.slug),
  });

  assertCollectionPageItemListContract(jsonLd, {
    canonicalPath: "/exotic-weed",
    expectedItemUrls: [
      flowerCanonicalUrl("sale-first"),
      flowerCanonicalUrl("regular-second"),
    ],
  });

  const collection = jsonLd["@graph"][0];
  const list = jsonLd["@graph"][1];

  assert.equal(collection["@type"], "CollectionPage");
  assert.deepEqual(collection.about, { "@id": SCHEMA_STORE_ID });
  assert.deepEqual(collection.isPartOf, { "@id": SCHEMA_WEBSITE_ID });
  assert.equal(list["@type"], "ItemList");
  assert.equal(list.numberOfItems, 2);
  assert.deepEqual(list.itemListElement, [
    {
      "@type": "ListItem",
      position: 1,
      name: "Sale First",
      url: "https://mohawkmedicine.com/flower/sale-first",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Regular Second",
      url: "https://mohawkmedicine.com/flower/regular-second",
    },
  ]);

  const { keys, types } = collectSchemaKeysAndTypes(jsonLd);
  for (const forbidden of TIER_COLLECTION_SCHEMA_CONTRACT.forbiddenTypes) {
    assert.equal(types.has(forbidden), false, `leaked type ${forbidden}`);
  }
  for (const forbidden of TIER_COLLECTION_SCHEMA_CONTRACT.forbiddenKeys) {
    assert.equal(keys.has(forbidden), false, `leaked key ${forbidden}`);
  }
  assert.equal(keys.has("price3g"), false);
  assert.equal(keys.has("price14g"), false);
});

test("all five flower tier slugs emit the CollectionPage + ItemList contract", () => {
  const products = read("app/lib/products.ts");
  for (const canonicalPath of FLOWER_TIER_COLLECTION_PATHS) {
    const slug = canonicalPath.slice(1);
    assert.match(products, new RegExp(`slug: "${slug}"`));
  }

  for (const canonicalPath of FLOWER_TIER_COLLECTION_PATHS) {
    const jsonLd = buildCollectionPageItemListJsonLd({
      canonicalPath,
      name: canonicalPath,
      description: "Tier collection.",
      items: pricedFlowers,
      itemUrl: (flower) => flowerCanonicalUrl(flower.slug),
    });
    assertCollectionPageItemListContract(jsonLd, {
      canonicalPath,
      expectedItemUrls: pricedFlowers.map((flower) => flowerCanonicalUrl(flower.slug)),
    });
    assert.match(jsonLd["@graph"][1].itemListElement[0].url, /\/flower\/sale-first$/);
  }
});

test("layout Store/WebSite @ids match the tier collection identity refs", () => {
  const layout = read("app/layout.tsx");
  const nap = read("app/lib/nap.ts");
  assert.match(layout, /websiteJsonLd/);
  assert.match(layout, /storeJsonLd/);
  assert.match(nap, /"@id": "https:\/\/mohawkmedicine\.com\/#website"/);
  assert.match(nap, /"@id": "https:\/\/mohawkmedicine\.com\/#store"/);
  assert.equal(SITE_ORIGIN, "https://mohawkmedicine.com");
  assert.equal(STORE_NAP.website, "https://mohawkmedicine.com/");
  assert.equal(STORE_NAP.streetAddress, "2655 Eglinton Ave E");
  assert.equal(STORE_NAP.phoneIntl, "+14375249335");
  assert.equal(SCHEMA_WEBSITE_ID, `${SITE_ORIGIN}/#website`);
  assert.equal(SCHEMA_STORE_ID, `${SITE_ORIGIN}/#store`);
  assert.equal(websiteJsonLd["@id"], SCHEMA_WEBSITE_ID);
  assert.equal(storeJsonLd["@id"], SCHEMA_STORE_ID);
});

test("tier page wires the contract through a native JSON-LD script", () => {
  const page = read("app/[tier]/page.tsx");
  const builder = read("app/lib/tierStructuredData.ts");
  assert.match(builder, /buildCollectionPageItemListJsonLd/);
  assert.match(builder, /flowerCanonicalUrl/);
  assert.match(page, /buildTierCollectionJsonLd/);
  assert.match(page, /serializeJsonLd\(tierJsonLd\)/);
  assert.match(page, /type="application\/ld\+json"/);
  assert.match(page, /displayFlowers/);
  assert.doesNotMatch(page, /"@type": "Offer"/);
  assert.doesNotMatch(page, /from "next\/script"/);
  assert.doesNotMatch(page, /flowers\.json|items\.json|delivery-menu\.json/);
});

test("schema contract stays out of the menu swimlane and uses existing catalog cards", () => {
  const schema = read("app/lib/collectionPageSchema.ts");
  const builder = read("app/lib/tierStructuredData.ts");
  assert.doesNotMatch(schema, /flowers\.json|items\.json|prebuild-stock|delivery-menu/);
  assert.doesNotMatch(builder, /flowers\.json|items\.json|prebuild-stock|delivery-menu/);

  const catalog = JSON.parse(read("app/lib/flowers.json")) as Array<{
    name: string;
    slug: string;
    tier: string;
    isSale: boolean;
  }>;
  const slugToKey: Record<(typeof FLOWER_TIER_COLLECTION_PATHS)[number], string> = {
    "/exotic-weed": "EXOTIC",
    "/premium-weed": "PREMIUM",
    "/aaa-weed": "AAA+",
    "/aa-weed": "AA",
    "/budget-weed": "BUDGET",
  };

  for (const canonicalPath of FLOWER_TIER_COLLECTION_PATHS) {
    const key = slugToKey[canonicalPath];
    const seo = TIER_SEO[key];
    assert.ok(seo, `${key} SEO is required`);
    const flowers = catalog.filter((flower) => flower.tier.toUpperCase() === key.toUpperCase());
    const saleFlowers = flowers.filter((flower) => flower.isSale);
    const regularFlowers = flowers.filter((flower) => !flower.isSale);
    const displayFlowers = [...saleFlowers, ...regularFlowers];
    const jsonLd = buildCollectionPageItemListJsonLd({
      canonicalPath,
      name: seo.h1,
      description: seo.seoIntro,
      items: displayFlowers,
      itemUrl: (flower) => flowerCanonicalUrl(flower.slug),
    });
    assertCollectionPageItemListContract(jsonLd, {
      canonicalPath,
      expectedItemUrls: displayFlowers.map((flower) => flowerCanonicalUrl(flower.slug)),
    });
    assert.equal(jsonLd["@graph"][0].name, seo.h1);
    for (const item of jsonLd["@graph"][1].itemListElement) {
      assert.ok(
        flowers.some((flower) => flower.name === item.name && flower.slug === item.url.split("/").pop()),
        `ItemList must use an existing ${key} catalog card, not invented stock: ${item.name}`,
      );
    }
  }
});
