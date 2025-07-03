'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  value: string;
  isAnimating: boolean;
}

const Button = ({
  children,
  onClick,
  className = '',
  value,
  isAnimating,
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={`
      flex h-14 items-center justify-center rounded
      text-xl font-medium text-white transition-colors duration-200
      ${className}
      ${isAnimating ? 'animate-button-press' : ''}
      ${
        value === '='
          ? ' bg-green-600 hover:bg-green-500'
          : 'bg-zinc-700 hover:bg-zinc-600'
      }
    `}
    style={{
      height: value === '=' ? '100%' : '',
    }}
  >
    {children}
  </button>
);

export default Button;
