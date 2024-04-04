import React from 'react';
import Link from 'next/link';
import WailistInput from '../WaitlistInput';
import WaitlistButton from '../WaitlistButton';

const Footer = () => {
  return (
    <footer className='flex flex-col font-open-sans w-full h-24 mt-8'>
      <div className='flex items-center mb-8'>
        <div className='ml-32 rounded-xl w-max'>
          <img
            className='h-14 rounded-xl'
            src='/ias-gin-logo-white.png'
            alt='IAS-GIN Network'
          />
        </div>
        <WailistInput className=' min-w-0 rounded-md  border-2 px-3.5 py-2 ml-4 placeholder:text-ginBlack text-ginBlack shadow-sm ring-1 ring-inset ring-ginBlack focus:ring focus:ring-inset focus:ring-darkGreen focus:border-transparent' />
        <WaitlistButton className='flex-none rounded-md bg-pistachio px-3.5 py-2.5 ml-8 text-sm font-semibold text-ginBlack placeholder:text-ginBlack shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white' />
      </div>
      <div className='h-24 mx-32 border-t border-ginBlack'></div>
      <div className='flex items-center justify-between py-8 bg-gradient-to-t from-teaGreen/50 to-ginWhite'>
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
