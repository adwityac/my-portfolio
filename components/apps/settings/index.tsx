import React, { useState } from 'react';
import {
  Monitor,
  Volume2,
  Battery,
  LayoutDashboard,
  Palette,
  HardDrive,
  AppWindow,
  Bell,
  Search,
  Share2,
  MousePointer2,
  User,
} from 'lucide-react';

const sections = [
  { name: 'Display', icon: <Monitor size={18} /> },
  { name: 'Sound', icon: <Volume2 size={18} /> },
  { name: 'Power', icon: <Battery size={18} /> },
  { name: 'Multitasking', icon: <LayoutDashboard size={18} /> },
  { name: 'Appearance', icon: <Palette size={18} /> },
  { name: 'Storage', icon: <HardDrive size={18} /> },
  { name: 'Apps', icon: <AppWindow size={18} /> },
  { name: 'Notifications', icon: <Bell size={18} /> },
  { name: 'Search', icon: <Search size={18} /> },
  { name: 'Sharing', icon: <Share2 size={18} /> },
  { name: 'Mouse & Touchpad', icon: <MousePointer2 size={18} /> },
  { name: 'About', icon: <User size={18} /> },
];

export const Settings = () => {
  const [active, setActive] = useState('Appearance');

  return (
    <div className="flex h-full w-full flex-col md:flex-row select-none overflow-hidden rounded-lg bg-[#1E1E1E] text-gray-200">

      {/* Sidebar */}
      <aside className="flex w-full md:w-60 flex-col border-b md:border-b-0 md:border-r border-gray-700 bg-[#2B2B2B] p-2 max-h-[40vh] md:max-h-none overflow-y-auto">
        <h1 className="mb-2 px-4 py-3 text-lg font-semibold">Settings</h1>
        <nav className="scrollbar-none flex flex-col space-y-1 overflow-y-auto">
          {sections.map((s) => (
            <button
              key={s.name}
              onClick={() => setActive(s.name)}
              className={`flex items-center gap-3 rounded-md px-4 py-2 text-sm transition ${
                active === s.name
                  ? 'bg-[#3A3A3A] text-white'
                  : 'text-gray-400 hover:bg-[#353535] hover:text-white'
              }`}
            >
              {s.icon}
              {s.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 overflow-y-auto bg-[#2E2E2E] p-4 md:p-6">
        <h2 className="mb-6 text-xl font-semibold">{active}</h2>

        {active === 'Appearance' && (
          <div className="space-y-6">
            <section>
              <h3 className="mb-2 text-lg font-medium">Theme</h3>
              <div className="flex items-center gap-4">
                <button className="rounded-md bg-white px-4 py-2 text-black">
                  Light
                </button>
                <button className="rounded-md bg-black px-4 py-2 text-white">
                  Dark
                </button>
              </div>
            </section>

            <section>
              <h3 className="mb-2 text-lg font-medium">Wallpaper</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="h-24 cursor-pointer rounded-md bg-[url('/images/wall-1.webp')] bg-cover hover:ring-2 hover:ring-blue-500"></div>
                <div className="h-24 cursor-pointer rounded-md bg-[url('/images/wall-2.webp')] bg-cover hover:ring-2 hover:ring-blue-500"></div>
                <div className="h-24 cursor-pointer rounded-md bg-[url('/images/wall-3.webp')] bg-cover hover:ring-2 hover:ring-blue-500"></div>
              </div>
            </section>
          </div>
        )}

        {active === 'Power' && (
          <div>
            <h3 className="mb-3 text-lg font-medium">Power Options</h3>
            <p className="text-sm text-gray-400">
              Manage screen brightness, sleep, and power-saving features.
            </p>
          </div>
        )}

        {active === 'About' && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium">System Information</h3>
            <p className="text-sm text-gray-400">
              Ubuntu WebOS 1.0.0 (Adwitya Edition)
            </p>
            <p className="text-sm text-gray-400">
              Made with ❤️ by Adwitya Chakraborty
            </p>
          </div>
        )}

        {/* Default Fallback */}
        {active !== 'Appearance' &&
          active !== 'Power' &&
          active !== 'About' && (
            <div className="text-sm text-gray-400">
              {active} settings coming soon...
            </div>
          )}
      </main>
    </div>
  );
};
