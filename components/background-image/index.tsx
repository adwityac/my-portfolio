import React from 'react';

interface BackgroundImageProps {
  backgroundImage: string;
}

const BackgroundImage = ({ backgroundImage }: BackgroundImageProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
      }}
      className="bg-ubuntu-img absolute right-0 top-0 -z-10 h-full w-full overflow-hidden"
    ></div>
  );
};

export { BackgroundImage };
