import React, { useState } from "react";
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
} from "lucide-react";

const sections = [
  { name: "Display", icon: <Monitor size={18} /> },
  { name: "Sound", icon: <Volume2 size={18} /> },
  { name: "Power", icon: <Battery size={18} /> },
  { name: "Multitasking", icon: <LayoutDashboard size={18} /> },
  { name: "Appearance", icon: <Palette size={18} /> },
  { name: "Storage", icon: <HardDrive size={18} /> },
  { name: "Apps", icon: <AppWindow size={18} /> },
  { name: "Notifications", icon: <Bell size={18} /> },
  { name: "Search", icon: <Search size={18} /> },
  { name: "Sharing", icon: <Share2 size={18} /> },
  { name: "Mouse & Touchpad", icon: <MousePointer2 size={18} /> },
  { name: "About", icon: <User size={18} /> },
];

export const Settings = () => {
  const [active, setActive] = useState("Appearance");

  return (
    <div className="w-full h-full bg-[#1E1E1E] text-gray-200 flex rounded-lg overflow-hidden select-none">
      {/* Sidebar */}
      <aside className="w-60 bg-[#2B2B2B] border-r border-gray-700 p-2 flex flex-col">
        <h1 className="text-lg font-semibold px-4 py-3 mb-2">Settings</h1>
        <nav className="flex flex-col space-y-1 overflow-y-auto scrollbar-none">
          {sections.map((s) => (
            <button
              key={s.name}
              onClick={() => setActive(s.name)}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm transition ${
                active === s.name
                  ? "bg-[#3A3A3A] text-white"
                  : "text-gray-400 hover:bg-[#353535] hover:text-white"
              }`}
            >
              {s.icon}
              {s.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 bg-[#2E2E2E] p-6 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-6">{active}</h2>

        {active === "Appearance" && (
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-medium mb-2">Theme</h3>
              <div className="flex items-center gap-4">
                <button className="bg-white text-black px-4 py-2 rounded-md">
                  Light
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-md">
                  Dark
                </button>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-medium mb-2">Wallpaper</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[url('/images/wall-1.webp')] bg-cover rounded-md h-24 cursor-pointer hover:ring-2 hover:ring-blue-500"></div>
                <div className="bg-[url('/images/wall-2.webp')] bg-cover rounded-md h-24 cursor-pointer hover:ring-2 hover:ring-blue-500"></div>
                <div className="bg-[url('/images/wall-3.webp')] bg-cover rounded-md h-24 cursor-pointer hover:ring-2 hover:ring-blue-500"></div>
              </div>
            </section>
          </div>
        )}

        {active === "Power" && (
          <div>
            <h3 className="text-lg font-medium mb-3">Power Options</h3>
            <p className="text-gray-400 text-sm">
              Manage screen brightness, sleep, and power-saving features.
            </p>
          </div>
        )}

        {active === "About" && (
          <div className="space-y-3">
            <h3 className="text-lg font-medium">System Information</h3>
            <p className="text-gray-400 text-sm">Ubuntu WebOS 1.0.0 (Adwitya Edition)</p>
            <p className="text-gray-400 text-sm">Made with ❤️ by Adwitya Chakraborty</p>
          </div>
        )}

        {/* Default Fallback */}
        {active !== "Appearance" &&
          active !== "Power" &&
          active !== "About" && (
            <div className="text-gray-400 text-sm">
              {active} settings coming soon...
            </div>
          )}
      </main>
    </div>
  );
};
