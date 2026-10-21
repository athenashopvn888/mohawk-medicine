import { SHOW_CIGARETTES } from "./siteConfig";

export { SHOW_CIGARETTES };

export function isGrabbaText(value: string | null | undefined): boolean {
  return /grabba/i.test(value || "");
}

export function isGrabbaItem(item: { name?: string | null; slug?: string | null }): boolean {
  return isGrabbaText(`${item.slug || ""} ${item.name || ""}`);
}

/** Native-cigarette and Grabba paths hidden while SHOW_CIGARETTES is off. */
export function isHiddenSmokePath(href: string): boolean {
  if (SHOW_CIGARETTES) return false;
  const path = (href.split(/[?#]/)[0] || "").toLowerCase();
  if (/^\/native-cigarettes(?:-|$)/.test(path)) return true;
  if (/^\/info\/native-cigarettes(?:-|$)/.test(path)) return true;
  if (/^\/guides\/grabba(?:\/|$|-)/.test(path)) return true;
  if (/^\/item\/grabba(?:\/|$|-)/.test(path)) return true;
  return false;
}
