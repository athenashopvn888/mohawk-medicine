import Link from "next/link";
import {
  CORRIDOR_HUB,
  FLOWER_TIER_HUBS,
  VISIT_HUBS,
  isCurrentHubPath,
} from "../lib/parityHub";
import styles from "./ParityHubLinks.module.css";

type ParityHubLinksProps = {
  currentPath?: string;
  includeCorridor?: boolean;
  lead?: string;
};

export default function ParityHubLinks({
  currentPath,
  includeCorridor = false,
  lead = "Use the Scarborough walk-in hubs, the Eglinton East delivery page, and the five Weed flower pages for this shop. Each flower tier keeps its own *-weed URL.",
}: ParityHubLinksProps) {
  const visitLinks = VISIT_HUBS.filter((item) => !isCurrentHubPath(item.href, currentPath));
  const tierLinks = FLOWER_TIER_HUBS.filter((item) => !isCurrentHubPath(item.href, currentPath));
  const showCorridor = includeCorridor && !isCurrentHubPath(CORRIDOR_HUB.href, currentPath);

  return (
    <nav className={styles.hub} aria-label="Scarborough shop and visit hubs">
      <p className={styles.lead}>{lead}</p>
      <div className={styles.group}>
        <p className={styles.groupLabel}>Visit hubs</p>
        <div className={styles.row}>
          {visitLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
          {showCorridor ? (
            <Link href={CORRIDOR_HUB.href} className={styles.link}>
              {CORRIDOR_HUB.label}
            </Link>
          ) : null}
        </div>
      </div>
      <div className={styles.group}>
        <p className={styles.groupLabel}>Flower tiers</p>
        <div className={styles.row}>
          {tierLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
