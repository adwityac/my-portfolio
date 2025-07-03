'use client';

import { ReactNode, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import cls from 'classnames';

import { Navbar } from './navbar';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { changePosition, zIndexApp } from '@/redux/features/all-apps-slice';

interface WindowProps {
  id: string;
  title: string;
  children: ReactNode;
  zIndex: number;
}

const Window = ({ id, title, children, zIndex }: WindowProps) => {
  const dispatch = useAppDispatch();
  const apps = useAppSelector((state) => state.allApps);
  const app = apps.find((item) => item.id === id);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [deltaPosition, setDeltaPosition] = useState<{
    x: number;
    y: number;
  }>(app?.position || { x: 0, y: 0 });

  const handleStart: DraggableEventHandler = () => {
    setIsDragging(true);
  };

  const handleDrag: DraggableEventHandler = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };

  const handleStop: DraggableEventHandler = () => {
    setIsDragging(false);
    dispatch(
      changePosition({
        id,
        position: deltaPosition,
      }),
    );
  };

  return (
    <Draggable
      handle=".handle"
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
      bounds="parent"
      position={app?.maximized ? { x: 0, y: 0 } : app?.position}
    >
      <div
        className={cls(
          'absolute left-20 top-10 flex  flex-col rounded-lg bg-zinc-800 shadow-lg',
          isDragging ? '' : 'transition-transform duration-300 ease-out',
          app?.maximized ? 'h-full w-full' : '',
          'overflow-hidden',
          app?.slug === 'calculator'
            ? 'h-3/4  w-3/4 md:h-2/4  md:w-1/4 '
            : 'h-3/4  w-3/4',
        )}
        style={{
          top: app?.maximized ? '32px' : '',
          left: app?.maximized ? '58px' : '',
          right: app?.maximized ? '0px' : '',
          bottom: app?.maximized ? '0px' : '',
          overflow: app?.maximized ? 'hidden' : '',
          width: app?.maximized ? 'calc(100vw - 58px)' : '',
          height: app?.maximized ? 'calc(100vh - 32px)' : '',
          zIndex: app?.zIndex,
        }}
        onClick={(e) => {
          dispatch(zIndexApp(id));
        }}
      >
        <Navbar
          title={title}
          id={id}
          className={app?.maximized ? '' : 'handle'}
        />
        <div className="flex-grow overflow-auto">{children}</div>
      </div>
    </Draggable>
  );
};

export { Window };
