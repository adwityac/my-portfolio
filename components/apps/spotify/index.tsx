import React from "react";

const Spotify = () => {
  return (
    <div className="w-full h-full bg-[#121212] flex items-center justify-center rounded-2xl overflow-hidden shadow-lg">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPcuTtZNPGI?utm_source=generator"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export { Spotify };
