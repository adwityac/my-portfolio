'use client';

import cls from 'classnames';
import { FC, ReactNode, useState } from 'react';

interface TooltipProps {
  text: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ text, position = 'top', children }) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getTooltipClassName = () => {
    switch (position) {
      case 'left':
        return 'left-0 transform -translate-x-full top-2';
      case 'right':
        return '-right-1 transform translate-x-full top-2';
      case 'top':
        return 'top-0 transform -translate-y-full';
      case 'bottom':
        return 'bottom-0 transform translate-y-full';
      default:
        return 'top-0 transform -translate-y-full';
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div
          className={cls(
            'absolute whitespace-nowrap rounded bg-slate-800 p-2 text-sm text-white shadow',
            getTooltipClassName(),
          )}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export { Tooltip };
