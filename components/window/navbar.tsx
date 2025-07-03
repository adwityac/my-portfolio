'use client';

import cls from 'classnames';

import { Close, Maximize } from '@/components/icons';
import { useAppDispatch } from '@/redux/hooks';
import { Minimize } from '../icons/minimize';
import {
  changePosition,
  closeApp,
  maximizeApp,
  minimizeApp,
} from '@/redux/features/all-apps-slice';
import { useRef } from 'react';

interface NavbarProps {
  id: string;
  title: string;
  className: string;
}

const Navbar = ({ title, id, className }: NavbarProps) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const onMinimize = () => {
    dispatch(minimizeApp(id));
  };

  const onMaximize = () => {
    dispatch(maximizeApp(id));
  };

  const onClose = () => {
    dispatch(closeApp(id));
  };

  return (
    <div className={cls(className)} ref={dragRef}>
      <div className="flex items-center justify-between px-3 py-2">
        <div></div>
        <p className="font-bold text-white">{title}</p>
        <div className="flex items-center gap-1">
          <div
            className="mx-1.5 mt-1 flex h-5 w-5 cursor-default items-center justify-center rounded-full bg-zinc-700 bg-opacity-90 shadow-lg hover:bg-opacity-100 focus:outline-none"
            onClick={onMinimize}
            onTouchStart={onMinimize}
          >
            <Minimize />
          </div>
          {title !== 'Calculator' && (
            <div
              className="mx-1.5 mt-1 flex h-5 w-5 cursor-default items-center justify-center rounded-full bg-zinc-700 bg-opacity-90 shadow-lg hover:bg-opacity-100 focus:outline-none"
              onClick={onMaximize}
              onTouchStart={onMaximize}
            >
              <Maximize />
            </div>
          )}
          <div
            className="mx-1.5 mt-1 flex h-5 w-5 cursor-default items-center justify-center rounded-full bg-zinc-700 bg-opacity-90 shadow-lg hover:bg-opacity-100 focus:outline-none"
            onClick={onClose}
            onTouchStart={onClose}
          >
            <Close />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
