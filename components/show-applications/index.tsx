'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeApplications } from '@/redux/features/ui-slice';
import { openApp } from '@/redux/features/all-apps-slice';

export const ShowApplications = () => {
  const dispatch = useAppDispatch();
  const apps = useAppSelector((state) => state.allApps);
  const [search, setSearch] = useState('');

  // 🔍 Filter apps
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 z-[60]">
      {/* 🔴 Backdrop (click anywhere outside to close) */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={() => dispatch(closeApplications())}
      />

      {/* 🟢 Foreground content */}
      <div className="relative z-10">
        {/* 🔍 Search bar */}
        <div className="flex justify-center px-4 pt-6">
          <input
            type="text"
            placeholder="Type to Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full max-w-xl
              rounded-full
              px-5 py-2
              text-sm text-black
              outline-none
              sm:text-base
            "
            autoFocus
          />
        </div>

        {/* 🧱 Apps grid */}
        <div
          className="
            mx-auto mt-8
            grid grid-cols-3
            gap-6
            px-4
            text-center text-white
            sm:grid-cols-4
            md:mt-10
            md:grid-cols-6
            md:gap-10
          "
        >
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="
                flex cursor-pointer
                flex-col items-center
                gap-2
                transition
                hover:scale-105
              "
              onClick={() => {
                dispatch(openApp(app.id));
                dispatch(closeApplications());
              }}
            >
              <Image
                src={app.imageSrc}
                alt={app.title}
                width={64}
                height={64}
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
              />
              <span className="text-xs leading-tight sm:text-sm">
                {app.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
