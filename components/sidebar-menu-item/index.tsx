'use client';

import Image from 'next/image';

import { openApp } from '@/redux/features/all-apps-slice';
import { useAppDispatch } from '@/redux/hooks';

interface SidebarMenuItemProps {
  id: string;
  title: string;
  imageSrc: string;
  isOpen: boolean;
}

const SidebarMenuItem = ({
  imageSrc,
  title,
  id,
  isOpen,
}: SidebarMenuItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="relative m-1 flex w-auto items-center gap-0 rounded p-2 outline-none transition hover:bg-white hover:bg-opacity-10"
      onClick={() => dispatch(openApp(id))}
    >
      {isOpen && <div className="h-1 w-1 rounded-full bg-white" />}
      <Image src={imageSrc} alt={title} height={30} width={30} />
    </div>
  );
};

export { SidebarMenuItem };
