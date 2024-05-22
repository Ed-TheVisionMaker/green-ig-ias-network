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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-out': 'fadeOut 1s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
