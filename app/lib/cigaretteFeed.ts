import { cache } from "react";
import {
  cigarettePublicHeaders,
  decideCigaretteGuide,
  decideCigaretteSurface,
  reconcileSurfaceItems,
  type CigaretteSurfaceDecision,
  type CigaretteWording,
} from "./cigDecision";
import { allItems, type ItemProduct } from "./products";
import { SHOW_CIGARETTES } from "./siteConfig";

export type CigaretteSnapshot = {
  web: CigaretteSurfaceDecision & { wording: CigaretteWording };
  tv: CigaretteSurfaceDecision & { wording: CigaretteWording };
  guides: CigaretteSurfaceDecision;
  wording: CigaretteWording;
  live: boolean;
  items: ItemProduct[];
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

const MENU_FEED_URL =
  (process.env.MENU_FEED_URL || "").trim() ||
  "https://script.google.com/macros/s/AKfycbx09_sDal1eMVF1r-hUck4e7oq_XBHEWhGvA79JuhZNQ6P4CdhCas0xE3FfexWQ3hq4/exec";

function snapshotFrom(cig: unknown, items: ItemProduct[], live: boolean, errored: boolean): CigaretteSnapshot {
  const web = decideCigaretteSurface({ cig, items, surface: "web", errored });
  const tv = decideCigaretteSurface({ cig, items, surface: "tv", errored });
  const guides = decideCigaretteGuide({ cig, items, errored });
  return { web, tv, guides, wording: web.wording, live, items };
}

/** Coded gate stays shut unless the env already shows cigarettes. A feed miss keeps that. */
function codedHidden(): CigaretteSnapshot {
  return snapshotFrom({ on: false, webOn: false, tvOn: false, master: false }, [], false, false);
}

export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  if (!SHOW_CIGARETTES) return codedHidden();
  try {
    const response = await fetch(MENU_FEED_URL, { cache: "no-store", signal: AbortSignal.timeout(2500) });
    if (!response.ok) return snapshotFrom(null, allItems, false, true);
    const data = await response.json() as { cig?: unknown; items?: ItemProduct[] };
    const items = Array.isArray(data.items) && data.items.length ? data.items : allItems;
    const cig = data.cig ?? null;
    return snapshotFrom(cig, items, true, !cig);
  } catch {
    return snapshotFrom(null, allItems, false, true);
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return { web: snap.web.show, tv: snap.tv.show, wording: snap.wording };
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  return cigarettePublicHeaders({ web: snap.web.show, tv: snap.tv.show, wording: snap.wording });
}

export { reconcileSurfaceItems };
