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
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
        />
        <span className="text-xs sm:text-sm md:text-base">Trash</span>
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
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
        />
        <span className="text-xs sm:text-sm md:text-base">Contact Me</span>
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
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
        />
        <ArrowTopRightOnSquareIcon className="absolute -bottom-1 -right-1 h-4 w-4 text-white" />
        <span className="text-xs sm:text-sm md:text-base">Github</span>
      </a>
    </div>
  );
}
