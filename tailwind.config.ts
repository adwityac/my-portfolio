import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'from-[rgb(255,87,34)]',
    'to-[rgb(255,193,7)]',
    'from-[rgb(76,175,80)]',
    'to-[rgb(139,195,74)]',
    'from-[rgb(33,150,243)]',
    'to-[rgb(3,169,244)]',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
