import type { Metadata, ResolvingMetadata } from "next";
import HomePageClient from "./HomePageClient";
import { CODED_BANNERS } from "./lib/fleet/config";
import { HOME_DOC_TITLE, HOME_PAGE_TITLE } from "./lib/homeDelivery";
import { getFleetContent } from "./lib/fleetContent";
import { getLiveMenu } from "./lib/liveMenu";
import { storeTierRange, tierRangeText } from "./lib/tierPriceRanges";

export const dynamic = "force-dynamic";

export async function generateMetadata(_: unknown, parent: ResolvingMetadata): Promise<Metadata> {
  const resolved = await parent;
  const metadata: Metadata = { title: { absolute: HOME_PAGE_TITLE } };
  if (resolved.openGraph?.title.absolute === HOME_DOC_TITLE) {
    metadata.openGraph = { ...resolved.openGraph, title: HOME_PAGE_TITLE };
  }
  if (resolved.twitter?.title.absolute === HOME_DOC_TITLE) {
    const { description, ...twitter } = resolved.twitter;
    metadata.twitter = description
      ? { ...twitter, title: HOME_PAGE_TITLE, description }
      : { ...twitter, title: HOME_PAGE_TITLE };
  }
  return metadata;
}

export default async function Page() {
  const [{ flowers }, fleet] = await Promise.all([getLiveMenu(), getFleetContent()]);
  const initialTierRanges = Object.fromEntries(
    ["EXOTIC", "PREMIUM", "AAA+", "AA", "BUDGET"].map((tier) => [
      tier,
      tierRangeText(storeTierRange(flowers, tier)),
    ]),
  );
  const contentBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : undefined;
  return <HomePageClient initialTierRanges={initialTierRanges} contentBanners={contentBanners} />;
}
