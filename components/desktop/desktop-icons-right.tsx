'use client';

import Image from 'next/image';
import { Sidebar } from '@/components/sidebar';
import { useAppDispatch } from '@/redux/hooks';
import { openAppByTitle } from '@/redux/features/all-apps-slice';
import styles from './desktop-icons-right.module.css';
import { useAppSelector } from '@/redux/hooks';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

export default function DesktopIconsRight() {
  const dispatch = useAppDispatch();
  const showStatusMenu = useAppSelector((state) => state.ui.showStatusMenu);

  return (
    <div className={styles.container}>
      {/* Trash */}
      <button
        className={styles.icon}
        onClick={() => dispatch(openAppByTitle('trash'))}
      >
        <Image
          src="/images/user-trash-full.png"
          alt="Trash"
          width={48}
          height={48}
          className="mb-1 w-10"
        />
        <span className="text-xs">Trash</span>
      </button>

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
          className="mb-1 w-10"
        />
        <span className="text-xs">Contact Me</span>
      </button>

      {/* GitHub */}
      <a
        className={styles.icon}
        href="https://github.com/adwityac"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/github.png"
          alt="GitHub"
          width={48}
          height={48}
          className="mb-1 w-10"
        />
        <ArrowTopRightOnSquareIcon className="absolute -bottom-1 -right-1 h-4 w-4 text-white" />
        <span className="text-xs">Github</span>
      </a>
    </div>
  );
}
