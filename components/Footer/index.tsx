import React from 'react';
import Link from 'next/link';
import WaitlistInput from '../WaitlistInput';
import WaitlistButton from '../WaitlistButton';

const Footer = () => {
  return (
    <footer className='flex flex-col font-open-sans w-full mt-24 shadow-xl shadow-ginBlack'>
      <div className='flex items-center justify-between py-8 bg-gradient-to-b from-teaGreen/50 to-ginWhite'>
        <div className='flex items-center ml-32 rounded-xl w-max'>
          <img
            className='h-14 rounded-xl border border-teaGreen'
            src='/ias-gin-logo-white.png'
            alt='IAS-GIN Network'
          />
          <div className='flex flex-col ml-4 leading-snug text-ginBlack text-xs font-semibold'>
            <p className=''>Connect</p>
            <p className=''>Share</p>
            <p className=''>Collaborate</p>
          </div>
        </div>
        <div className='flex mr-32'>
          <WaitlistInput className=' min-w-0 rounded-md  border-2 px-3.5 py-2 ml-4 placeholder:text-ginBlack text-ginBlack shadow-sm ring-1 ring-inset ring-ginBlack focus:ring focus:ring-inset focus:ring-darkGreen focus:border-transparent' />
          <WaitlistButton className='flex-none rounded-md bg-pistachio px-3.5 py-2.5 ml-8 text-sm font-semibold text-ginBlack placeholder:text-ginBlack shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white' />
        </div>
      </div>
      <div className='h-2 mx-32 border-t border-ginBlack'></div>
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
