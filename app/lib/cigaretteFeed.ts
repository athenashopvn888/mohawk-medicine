import { cache } from "react";
import {
  cigarettePublicHeaders,
  decideCigaretteGuide,
  decideCigaretteSurface,
  publicCigaretteFlags,
  reconcileSurfaceItems,
  type CigaretteSurfaceDecision,
  type CigaretteWording,
} from "./cigDecision";
import { allFlowers, allItems, type ItemProduct } from "./products";
import { cigaretteEnvHardOff, SHOW_CIGARETTES } from "./siteConfig";
import { getCigaretteDataset } from "./tvStock";

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

function snapshotFrom(cig: unknown, items: ItemProduct[], live: boolean, errored: boolean): CigaretteSnapshot {
  const web = decideCigaretteSurface({ cig, items, surface: "web", errored });
  const tv = decideCigaretteSurface({ cig, items, surface: "tv", errored });
  const guides = decideCigaretteGuide({ cig, items, errored });
  return { web, tv, guides, wording: web.wording, live, items };
}

export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  if (cigaretteEnvHardOff()) return snapshotFrom(null, [], false, false);
  try {
    const dataset = await getCigaretteDataset({
      staticFlowers: allFlowers,
      staticItems: allItems,
    });
    const live = dataset?.source === "live";
    const items = Array.isArray(dataset?.items) ? dataset.items as ItemProduct[] : allItems;
    const cig = dataset?.cig ?? null;
    // Last-good cig is kept on the dataset. A miss with no saved cig fails open.
    return snapshotFrom(cig, items.length ? items : allItems, live, !live && !cig);
  } catch {
    return snapshotFrom(null, allItems, false, true);
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

/** TV follows the feed. Website clients stay behind the static coded gate. */
export function toPublicCigaretteState(snap: CigaretteSnapshot, codedWeb: boolean = SHOW_CIGARETTES): PublicCigaretteState {
  return { ...publicCigaretteFlags({ web: snap.web.show, tv: snap.tv.show }, codedWeb), wording: snap.wording };
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  return cigarettePublicHeaders({ web: snap.web.show, tv: snap.tv.show, wording: snap.wording });
}

export { reconcileSurfaceItems };
