import { STORE_NAP } from "../lib/nap";
import styles from "./StoreNap.module.css";

export default function StoreNap() {
  return (
    <div className={styles.wrap}>
      <div className={styles.item}>
        <span className={styles.label}>Store Name</span>
        <span className={styles.value}>{STORE_NAP.legalName}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>Address</span>
        <span className={styles.value}>
          {STORE_NAP.address}
          <br />
          {STORE_NAP.neighborhoodLabel}
        </span>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>Phone</span>
        <span className={styles.value}>
          <a href={`tel:${STORE_NAP.phoneIntl}`}>{STORE_NAP.phoneDisplay}</a>
        </span>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>Website</span>
        <span className={styles.value}>
          <a href={STORE_NAP.website}>{STORE_NAP.website}</a>
        </span>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>Hours</span>
        <span className={styles.value}>{STORE_NAP.hoursLong}</span>
      </div>
    </div>
  );
}
