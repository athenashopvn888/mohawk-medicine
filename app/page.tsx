import HomePageClient from "./HomePageClient";
import { getLiveMenu } from "./lib/liveMenu";
import { storeTierRange, tierRangeText } from "./lib/tierPriceRanges";

export const dynamic = "force-dynamic";

export default async function Page() {
  const { flowers } = await getLiveMenu();
  const initialTierRanges = Object.fromEntries(
    ["EXOTIC", "PREMIUM", "AAA+", "AA", "BUDGET"].map((tier) => [
      tier,
      tierRangeText(storeTierRange(flowers, tier)),
    ]),
  );
  return <HomePageClient initialTierRanges={initialTierRanges} />;
}
