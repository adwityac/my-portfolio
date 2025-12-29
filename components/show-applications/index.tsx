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
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-md">
      {/* Search bar */}
      <div className="flex justify-center pt-6">
        <input
          placeholder="Type to Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 rounded-full px-5 py-2 text-black outline-none"
          autoFocus
        />
      </div>

      {/* Apps grid */}
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-6 gap-10 text-center text-white">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            className="flex cursor-pointer flex-col items-center gap-2 transition hover:scale-105"
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
            />
            <span className="text-sm">{app.title}</span>
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
