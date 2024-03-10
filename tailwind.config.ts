import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontFamily: {
          notoSans: ['var(--font-noto-sans)'],
          shantellSans: ['var(--font-shantell-sans)'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
