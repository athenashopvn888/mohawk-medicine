import { cache } from "react";
import {
  cigarettePublicHeaders,
  decideCigaretteGuide,
  decideCigaretteSurface,
  publicWebsiteCigaretteFlag,
  reconcileSurfaceItems,
  webFollowsWebOnOnly,
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
  const web = webFollowsWebOnOnly(decideCigaretteSurface({ cig, items, surface: "web", errored }));
  const tv = decideCigaretteSurface({ cig, items, surface: "tv", errored });
  const guides = decideCigaretteGuide({ cig, items, errored });
  return { web, tv, guides, wording: web.wording, live, items };
}

/**
 * TV follows a successful feed's tvOn flag (a missing side flag falls back inside cigDecision).
 * A feed error or a missing block hides TV. A recent last-good snapshot is not an error.
 * Web follows webOn only. An explicit env hard-off hides both surfaces.
 * The static SHOW_CIGARETTES gate is applied when the website flag is published.
 */
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
    // Last-good cig stays on the dataset for its cache window.
    // A miss with no saved cig hides TV. The website flag is applied separately and stays off.
    return snapshotFrom(cig, items.length ? items : allItems, live, !live && !cig);
  } catch {
    return snapshotFrom(null, allItems, false, true);
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return {
    web: publicWebsiteCigaretteFlag(snap.web, SHOW_CIGARETTES),
    tv: snap.tv.show,
    wording: snap.wording,
  };
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  const state = toPublicCigaretteState(snap);
  return cigarettePublicHeaders({
    web: SHOW_CIGARETTES ? state.web : false,
    tv: state.tv,
    wording: state.wording,
  });
}

export { reconcileSurfaceItems };
