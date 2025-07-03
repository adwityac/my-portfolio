interface SpotifyProps {
  id: string;
}
const Spotify = ({ id }: SpotifyProps) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/37i9dQZF1DXdPcuTtZNPGI?utm_source=generator&theme=0`}
      frameBorder="0"
      title="Spotify"
      className="bg-ub-cool-grey h-full w-full"
    ></iframe>
  );
};

export { Spotify };
