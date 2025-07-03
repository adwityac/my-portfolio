import { HTMLProps } from 'react';

interface SliderProps extends HTMLProps<HTMLInputElement> {}

const Slider = (props: SliderProps) => {
  return (
    <input
      type="range"
      min={0}
      max={100}
      {...props}
      className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
    />
  );
};

export { Slider };
