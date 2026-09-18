import { STORE_NAP } from "../lib/nap";
import styles from "./StoreMap.module.css";

export default function StoreMap({ showActions = false }: { showActions?: boolean }) {
  return (
    <>
      <iframe
        title={`Map of ${STORE_NAP.legalName} at ${STORE_NAP.address}`}
        src={STORE_NAP.mapEmbedUrl}
        className={styles.frame}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {showActions && (
        <div className={styles.actions}>
          <a className={styles.action} href={`tel:${STORE_NAP.phoneIntl}`}>
            Call {STORE_NAP.phoneDisplay}
          </a>
          <a
            className={`${styles.action} ${styles.actionSecondary}`}
            href={STORE_NAP.hasMap}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      )}
    </>
  );
}
