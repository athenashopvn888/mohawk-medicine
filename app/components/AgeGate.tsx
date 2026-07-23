"use client";

import { useEffect, useState } from "react";
import styles from "./AgeGate.module.css";

export default function AgeGate() {
  const [show, setShow] = useState(false);
  const [underage, setUnderage] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/staff-photo")) {
      return;
    }

    const verified = localStorage.getItem("mohawk_medicine_age_verified");
    if (verified !== "true") {
      // This client-only gate must initialize from browser storage after hydration.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("mohawk_medicine_age_verified", "true");
    setShow(false);
  };

  const handleUnderage = () => {
    setUnderage(true);
  };

  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {underage ? (
          <div className={styles.underageState}>
            <span className={styles.warningIcon}>⚠️</span>
            <h2 className={styles.title}>Access Denied</h2>
            <p className={styles.text}>
              You must be 19 years of age or older to enter this website.
            </p>
            <a href="https://www.google.com" className={styles.exitBtn}>
              Exit to Google
            </a>
          </div>
        ) : (
          <div className={styles.promptState}>
            <div className={styles.logoWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mohawk-ribbon-logo.png"
                alt="Mohawk Medicine"
                className={styles.logo}
              />
            </div>
            <h2 className={styles.title}>Age Verification</h2>
            <p className={styles.text}>
              Mohawk Medicine requires all visitors to be of legal age.
              Are you <strong>19 years of age or older</strong>?
            </p>
            <div className={styles.btnRow}>
              <button
                type="button"
                className={styles.yesBtn}
                onClick={handleVerify}
              >
                YES, I AM 19+
              </button>
              <button
                type="button"
                className={styles.noBtn}
                onClick={handleUnderage}
              >
                No, I am not
              </button>
            </div>
            <span className={styles.disclaimer}>
              By entering this site you agree to our Terms of Service &amp; Privacy Policy.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
