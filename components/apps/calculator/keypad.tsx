'use client';

import React from 'react';
import { X, Minus, Plus, Divide, Equal } from 'lucide-react';
import Button from './button';

interface KeypadProps {
  onNumberClick: (num: string) => void;
  onOperationClick: any;
  onClear: () => void;
  onDecimal: () => void;
  animatingButton: string | null;
}

const Keypad = ({
  onNumberClick,
  onOperationClick,
  onClear,
  onDecimal,
  animatingButton,
}: KeypadProps) => {
  return (
    <div className="grid grid-cols-4 gap-1 p-1">
      <Button
        onClick={onClear}
        value="C"
        className="col-span-2"
        isAnimating={animatingButton === 'C'}
      >
        C
      </Button>
      <Button
        onClick={() => onOperationClick('÷')}
        value="÷"
        isAnimating={animatingButton === '÷'}
      >
        <Divide size={20} />
      </Button>
      <Button
        onClick={() => onOperationClick('×')}
        value="×"
        isAnimating={animatingButton === '×'}
      >
        <X size={20} />
      </Button>
      {[7, 8, 9].map((num) => (
        <Button
          key={num}
          onClick={() => onNumberClick(num.toString())}
          value={num.toString()}
          isAnimating={animatingButton === num.toString()}
        >
          {num}
        </Button>
      ))}
      <Button
        onClick={() => onOperationClick('-')}
        value="-"
        isAnimating={animatingButton === '-'}
      >
        <Minus size={20} />
      </Button>
      {[4, 5, 6].map((num) => (
        <Button
          key={num}
          onClick={() => onNumberClick(num.toString())}
          value={num.toString()}
          isAnimating={animatingButton === num.toString()}
        >
          {num}
        </Button>
      ))}
      <Button
        onClick={() => onOperationClick('+')}
        value="+"
        isAnimating={animatingButton === '+'}
      >
        <Plus size={20} />
      </Button>
      {[1, 2, 3].map((num) => (
        <Button
          key={num}
          onClick={() => onNumberClick(num.toString())}
          value={num.toString()}
          isAnimating={animatingButton === num.toString()}
        >
          {num}
        </Button>
      ))}
      <Button
        onClick={() => onOperationClick('=')}
        value="="
        className="row-span-2"
        isAnimating={animatingButton === '='}
      >
        <Equal size={20} />
      </Button>
      <Button
        onClick={() => onNumberClick('0')}
        value="0"
        className="col-span-2"
        isAnimating={animatingButton === '0'}
      >
        0
      </Button>
      <Button
        onClick={onDecimal}
        value="."
        isAnimating={animatingButton === '.'}
      >
        .
      </Button>
    </div>
  );
};

export { Keypad };
