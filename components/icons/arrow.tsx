import { FC } from 'react';

interface ArrowProps {
  direction: 'left' | 'right' | 'up' | 'down';
}

const Arrow: FC<ArrowProps> = ({ direction }) => {
  const arrowPaths: { [key: string]: string } = {
    left: 'M11 2L4 9 11 16',
    right: 'M4 2l7 7-7 7',
    up: 'M2 11l7-7 7 7',
    down: 'M2 4l7 7 7-7',
  };

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={arrowPaths[direction]} />
    </svg>
  );
};

export { Arrow };
