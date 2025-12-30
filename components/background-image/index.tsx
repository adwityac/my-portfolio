import React from 'react';

interface BackgroundImageProps {
  backgroundImage: string;
  brightnessLevel: number;
}

const BackgroundImage = ({
  backgroundImage,
  brightnessLevel,
}: BackgroundImageProps) => {
  const minSliderValue = 27;
  const maxSliderValue = 100;
  const minBrightness = 1.54;
  const maxBrightness = 2.0;

  const clampedLevel = Math.max(brightnessLevel, minSliderValue);

  const normalizedValue =
    (clampedLevel - minSliderValue) / (maxSliderValue - minSliderValue);
  const brightness =
    minBrightness + normalizedValue * (maxBrightness - minBrightness);

  console.log('🔆 Brightness level from Redux:', brightnessLevel);
  console.log('🔆 Calculated filter brightness:', brightness);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        filter: `brightness(${brightness})`,
        WebkitFilter: `brightness(${brightness})`,
      }}
      className="bg-ubuntu-img absolute right-0 top-0 -z-10 h-full w-full overflow-hidden"
    ></div>
  );
};

export { BackgroundImage };
