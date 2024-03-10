import { Noto_Sans, Shantell_Sans } from 'next/font/google';

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
});

export const shantellSans = Shantell_Sans({
  subsets: ['latin'],
  variable: '--font-shantell-sans',
  display: 'swap',
});