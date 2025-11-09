import React from "react";

const Settings = () => {
  return (
    <div className="p-6 text-white bg-[#1a1a1a] h-full overflow-y-auto">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-medium mb-2">Appearance</h2>
          <div className="space-y-2 text-gray-300">
            <p>• Change wallpaper</p>
            <p>• Toggle dark/light mode</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-2">System</h2>
          <div className="space-y-2 text-gray-300">
            <p>• View system info</p>
            <p>• Manage performance settings</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-2">About</h2>
          <div className="space-y-2 text-gray-300">
            <p>• Created by Adwitya ❤️</p>
            <p>• Version 1.0.0</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export { Settings };
