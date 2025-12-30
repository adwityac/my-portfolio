'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { openAppByTitle } from '@/redux/features/all-apps-slice';

interface Props {
  x: number;
  y: number;
  onClose: () => void;
}

export default function ContextMenu({ x, y, onClose }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const close = () => onClose();
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [onClose]);

  return (
    <div
      className="fixed z-[9999] w-56 rounded-md bg-[#1f1f1f] py-2 text-sm text-white shadow-lg"
      style={{ top: y, left: x }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <MenuItem emoji="⭐" text="Star this Project" onClick={() => {
        window.open('https://github.com/adwityac/my-portfolio', '_blank');
        onClose();
      }} />

      <MenuItem emoji="❗" text="Report bugs" onClick={() => {
        window.open('https://github.com/adwityac/my-portfolio/issues', '_blank');
        onClose();
      }} />

      <MenuItem emoji="🤝" text="Follow on LinkedIn" onClick={() => {
        window.open('https://linkedin.com/in/adwityac', '_blank');
        onClose();
      }} />

      <MenuItem emoji="🐙" text="Follow on Github" onClick={() => {
        window.open('https://github.com/adwityac', '_blank');
        onClose();
      }} />

      <hr className="my-1 border-gray-700" />

      <MenuItem emoji="📝" text="Contact Me" onClick={() => {
        dispatch(openAppByTitle('contact-me'));
        onClose();
      }} />

      <MenuItem emoji="🧹" text="Reset Ubuntu" danger onClick={() => {
        localStorage.clear();
        window.location.reload();
      }} />
    </div>
  );
}

function MenuItem({
  emoji,
  text,
  onClick,
  danger,
}: {
  emoji: string;
  text: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 px-4 py-2 text-left
        ${danger ? 'text-red-400 hover:bg-red-500/10' : 'hover:bg-white/10'}
      `}
    >
      <span>{emoji}</span>
      {text}
    </button>
  );
}
