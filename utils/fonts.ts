import {
  Halant,
  Nunito_Sans,
  Open_Sans,
  Ubuntu,
} from 'next/font/google';

// Elegant paring Halant 'Nunito Sans'
// title
export const halant = Halant({
  subsets: ['latin'],
  variable: '--font-halant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// paragraph
export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

// Modern pairing Ubuntu 'Open Sans'
// title
export const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

//paragraph
export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});