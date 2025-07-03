import type { Metadata } from 'next';
import { Ubuntu, Caveat } from 'next/font/google';
import cls from 'classnames';
import './globals.css';

import { Providers } from '@/redux/provider';

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

const caveat = Caveat({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: 'Adwitya | Ubuntu 22.04',
  description:
    'Explore Adwitya’s portfolio showcasing projects and expertise in full-stack development, working with Ubuntu 22.04, React, Next.js, Node.js, and more. Dive into professional experience, innovative solutions, and tech insights on a modern development environment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cls(ubuntu.variable, caveat.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
