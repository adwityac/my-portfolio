'use client';

import Image from 'next/image';
import React from 'react';
import cls from 'classnames';

import { ActiveTab } from '@/interfaces/about-me';
import { sidebarItems } from '@/data/about-me';

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <>
      {sidebarItems.map((item) => (
        <div
          key={item.id}
          onClick={() => setActiveTab(item.id as ActiveTab)}
          className={cls(
            'my-0.5 flex w-28 cursor-pointer items-center justify-start rounded-sm py-1.5 pl-2 outline-none duration-100 focus:outline-none md:w-full md:rounded-none md:pl-2.5',
            activeTab === item.id
              ? 'bg-orange-600 bg-opacity-100 hover:bg-opacity-95'
              : 'hover:bg-gray-50 hover:bg-opacity-5',
          )}
        >
          <Image
            alt={item.title}
            className="w-3 md:w-4"
            src={item.imageSrc}
            height={20}
            width={20}
          />
          <span className="ml-1 text-gray-50 md:ml-2">{item.title}</span>
        </div>
      ))}
    </>
  );
};

export { Sidebar };
