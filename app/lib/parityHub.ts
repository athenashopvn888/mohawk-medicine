/** SCC Wave 1 hub graph for MEB01. Keep live *-weed slugs. */

export const FLOWER_TIER_HUBS = [
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
] as const;

export const VISIT_HUBS = [
  { href: "/", label: "Homepage" },
  { href: "/visit", label: "24-Hour Walk-In Guide" },
  { href: "/mohawk-craft-visit", label: "Mohawk Craft Visit FAQ" },
  { href: "/near-me", label: "Dispensary Near Me FAQ" },
  { href: "/weed-dispensary-toronto/", label: "Weed Dispensary Scarborough" },
  { href: "/cannabis-delivery-scarborough", label: "Scarborough Cannabis Delivery" },
] as const;

export const CORRIDOR_HUB = {
  href: "/info/weed-store-near-eglinton-east",
  label: "Weed Store Near Eglinton East",
} as const;

function normalizePath(path: string): string {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
}

export function isCurrentHubPath(href: string, currentPath?: string): boolean {
  if (!currentPath) return false;
  return normalizePath(href) === normalizePath(currentPath);
}
