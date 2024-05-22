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
      colors: {
        darkGreen: '#1D3932',
        aquamarine: '#9FFFCB', // CTA colour
        pistachio: '#9CCD76',
        teaGreen: '#CBE8BA',
        ginWhite: '#ffffff',
        ginBlack: '#021A04',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
