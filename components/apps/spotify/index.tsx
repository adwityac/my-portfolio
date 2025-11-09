import React from 'react';

const Spotify = () => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[#121212] shadow-lg">
      <iframe
        style={{ borderRadius: '12px' }}
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
