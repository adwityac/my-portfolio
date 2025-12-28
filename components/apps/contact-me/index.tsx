'use client';

import styles from './contact-me.module.css';

export function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Send a Message to Me</span>
        <button>Send</button>
      </div>

      <div className={styles.body}>
        <div className={styles.line}>
          <span className={styles.number}>1</span>
          <span>Your Email / Name :</span>
        </div>

        <div className={styles.line}>
          <span className={styles.number}>2</span>
          <span>subject (may be a feedback for this website!)</span>
        </div>

        <div className={styles.line}>
          <span className={styles.number}>3</span>
          <span>Message</span>
        </div>
      </div>
    </div>
  );
}
