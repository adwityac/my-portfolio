'use client';

import Image from 'next/image';
import styles from './trash.module.css';

export function Trash() {
  return (
    <div className={styles.container}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <span>Trash</span>
        <div className={styles.actions}>
          <button>Restore</button>
          <button className={styles.danger}>Empty</button>
        </div>
      </div>

      {/* Files */}
      <div className={styles.grid}>
        <div className={styles.item}>
          <Image src="/images/php.png" alt="php" width={48} height={48} />
          <span>php</span>
        </div>

        <div className={styles.item}>
          <Image src="/images/js.png" alt="Angular.js" width={48} height={48} />
          <span>Angular.js</span>
        </div>

        <div className={styles.item}>
          <Image
            src="/images/folder.png"
            alt="project_final"
            width={48}
            height={48}
          />
          <span>project_final</span>
        </div>

        <div className={styles.item}>
          <Image
            src="/images/zip.png"
            alt="assignment.zip"
            width={48}
            height={48}
          />
          <span>18BCP127 assignment name.zip</span>
        </div>
      </div>
    </div>
  );
}
