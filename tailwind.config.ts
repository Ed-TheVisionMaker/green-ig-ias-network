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
        halant: ['var(--font-halant)'],
        'nunit-sans': ['var(--font-nunito-sans)'],
        'open-sans': ['var(--font-open-sans)'],
        ubuntu: ['var(--font-ubuntu)'],
      },
    },
    colors: {
      primaryGreen: '#3c5a3e',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
