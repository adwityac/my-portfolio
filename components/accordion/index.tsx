'use client';

import cls from 'classnames';
import { ReactNode, useState } from 'react';

import { Arrow } from '@/components/icons/arrow';

interface AccordionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

const Accordion = ({ title, children, icon: Icon }: AccordionProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <div
        className={cls(
          'flex items-center gap-2 rounded-sm p-2 hover:bg-slate-800',
          show ? 'bg-slate-800' : '',
        )}
        onClick={() => setShow((prev) => !prev)}
      >
        {Icon ? Icon : null}
        <div className="flex flex-1 items-center justify-between">
          <p>{title}</p>
          <Arrow direction={show ? 'down' : 'right'} />
        </div>
      </div>
      {show && (
        <>
          <hr className="h-px border-0 bg-gray-700" />
          <div className="rounded-b-sm bg-slate-800">{children}</div>
        </>
      )}
    </div>
  );
};

export { Accordion };
