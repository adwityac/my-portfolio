'use client';

import { useCallback, useRef, useState } from 'react';

import { Clock } from '@/components/clock';
import { Status } from '@/components/status';
import { StatusCard } from '@/components/status-card';
import useOutsideClickHandler from '@/hooks/use-outside-click-handler';

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const [status, setStatus] = useState<boolean>(false);

  const toggleStatus = useCallback(() => {
    setStatus((prev) => !prev);
  }, []);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClickHandler(dropdownRef, () => {
    setStatus(false);
  });

  return (
    <div className="relative z-50 flex select-none items-center justify-between bg-gray-950 p-1.5 text-sm text-white">
      <div className="px-2 hover:rounded-full hover:bg-gray-800">
        Activities
      </div>
      <div className="px-2 hover:rounded-full hover:bg-gray-800">
        <Clock />
      </div>
      <div
        className="relative px-2 hover:rounded-full hover:bg-gray-800"
        ref={dropdownRef}
      >
        <div onClick={toggleStatus}>
          <Status />
        </div>
        {status && <StatusCard />}
      </div>
    </div>
  );
};

export { Navbar };
