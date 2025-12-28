'use client';

import Image from 'next/image';
import { useAppDispatch } from '@/redux/hooks';
import { openAppByTitle } from '@/redux/features/all-apps-slice';
import styles from './desktop-icons-right.module.css';

export default function DesktopIconsRight() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      {/* Trash */}
      <div className={styles.icon}>
        <Image src="/images/trash.png" alt="Trash" width={48} height={48} />
        <span>Trash</span>
      </div>

      {/* Contact Me */}
      <button
        className={styles.icon}
        onClick={() => dispatch(openAppByTitle('contact-me'))}
      >
        <Image
          src="/images/gedit.png"
          alt="Contact Me"
          width={48}
          height={48}
        />
        <span>Contact Me</span>
      </button>

      {/* GitHub */}
      <a
        className={styles.icon}
        href="https://github.com/adwityac"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/images/github.png" alt="GitHub" width={48} height={48} />
        <span>GitHub</span>
      </a>
    </div>
  );
}
