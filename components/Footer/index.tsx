import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-between font-open-sans w-full h-24 mt-8'>
      <div>
        <div className='ml-32 border border-teaGreen rounded-xl w-max'>
          <img
            className='h-14 rounded-xl'
            src='/ias-gin-logo-white.png'
            alt='Your Company'
          />
        </div>
      </div>
      <div className='h-24 mx-32 border-t border-ginBlack'></div>
      <div className='flex items-center justify-between py-8'>
        <div>
          <b className='text-sm text-ginBlack pl-32'>
            &copy; {new Date().getFullYear()} IAS-GIN Network
          </b>
        </div>
        <div>
          <strong>Contact:</strong> info@ias-gin.com
        </div>
        <div className='text-sm font-bold text-ginBlack pr-32'>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
