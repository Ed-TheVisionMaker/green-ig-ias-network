import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import './/../styles/globals.css';


export const metadata: Metadata = {
  title: 'IAS-Green Iguana Network',
  description: 'Connect and collaborate with others in the IAS-Green Iguana Network',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
          <Navbar />
          {children}
      </body>
    </html>
  );
}
