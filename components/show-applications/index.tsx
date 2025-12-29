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

  // 🔍 Filter apps based on search
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-md">
      {/* Search bar */}
      <div className="flex justify-center px-4 pt-6">
        <input
          placeholder="Type to Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
      w-full max-w-xl
      rounded-full px-5 py-2
      text-sm sm:text-base
      text-black outline-none
    "
          autoFocus
        />
      </div>

      {/* Apps grid */}
      <div className="
            mx-auto mt-8
            grid
            grid-cols-3
            gap-6
            px-4
            text-center text-white
            sm:grid-cols-4
            md:grid-cols-6
            md:gap-10
            md:px-0
            md:mt-10
          ">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            className="flex cursor-pointer flex-col items-center gap-2 transition hover:scale-105"
            onClick={() => {
              dispatch(openApp(app.id));
              dispatch(closeApplications());
            }}
          >
            <Image src={app.imageSrc} alt={app.title} width={64} height={64} className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
            <span className="text-xs sm:text-sm leading-tight">
  {app.title}
</span>
          </div>
        ))}
      </div>

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={() => dispatch(closeApplications())}
      />
    </div>
  );
};
