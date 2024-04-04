import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex items-center justify-between font-open-sans w-full h-24 mt-8 border-t border-ginBlack'>
      <b className='text-sm text-ginBlack pl-32'>
        &copy; {new Date().getFullYear()} IAS-GIN Network
      </b>
      <div>
        <strong>Contact:</strong> info@ias-gin.com
      </div>
      <div className='text-sm font-bold text-ginBlack pr-32'>
        <Link href='/privacy-policy'>Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
