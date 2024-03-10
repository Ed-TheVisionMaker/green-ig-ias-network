import { Comic_Neue, Noto_Sans, Shantell_Sans } from 'next/font/google';

export const comicNeue = Comic_Neue({
  subsets: ['latin'],
  variable: '--font-comic-neue',
  display: 'swap',
  weight: ['300', '400', '700'], // Add the desired weight here, for example, '400' or ['400', '700']
});

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
