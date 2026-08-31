import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const tierPage = await readFile(new URL("../app/[tier]/page.tsx", import.meta.url), "utf8");
const categoryPage = await readFile(new URL("../app/items/[category]/page.tsx", import.meta.url), "utf8");

test("tier metadata emits a self-canonical and matching Open Graph URL", () => {
  assert.match(tierPage, /const SITE_ORIGIN = "https:\/\/mohawkmedicine\.com"/);
  assert.match(tierPage, /canonical: `\$\{SITE_ORIGIN\}\/\$\{tierSlug\}`/);
  assert.match(tierPage, /url: `\$\{SITE_ORIGIN\}\/\$\{tierSlug\}`/);
});

test("banner-backed category pages retain exactly one H1 branch", () => {
  const bannerBranch = categoryPage.match(/\{config\.banner \? \(\s*<>[\s\S]*?<\/>(?=\s*\) : \()/)?.[0];
  assert.ok(bannerBranch, "expected the banner-backed hero branch");
  assert.equal((bannerBranch.match(/<h1\b/g) || []).length, 1);
  assert.match(bannerBranch, /\{config\.name\}/);
});

test("category metadata keeps canonical and Open Graph URLs aligned", () => {
  assert.match(categoryPage, /canonical: `\$\{SITE_ORIGIN\}\/items\/\$\{catSlug\}`/);
  assert.match(categoryPage, /url: `\$\{SITE_ORIGIN\}\/items\/\$\{catSlug\}`/);
});
