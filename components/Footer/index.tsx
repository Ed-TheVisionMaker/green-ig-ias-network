import React from 'react';
import Link from 'next/link';
import WaitlistInput from '../WaitlistInput';
import WaitlistButton from '../WaitlistButton';

const Footer = () => {
  return (
    <footer className='flex flex-col font-open-sans w-full mt-24 shadow-xl shadow-ginBlack'>
      <div className='flex items-center justify-between py-8 bg-gradient-to-r from-teaGreen/50 to-ginWhite'>
        <div className='flex flex-col ml-32 px-12 py-8 border-2 border-ginWhite rounded-xl'>
          <h3
          className='text-3xl font-ubuntu font-bold tracking-tight text-ginBlack mb-4'>Join our waitlist</h3>
          <div className='flex'>
            <WaitlistInput className=' min-w-0 rounded-md  border-2 px-3.5 py-2 placeholder:text-ginBlack text-ginBlack shadow-sm ring-1 ring-inset ring-ginBlack focus:ring focus:ring-inset focus:ring-darkGreen focus:border-transparent' />
            <WaitlistButton className='flex-none rounded-md bg-pistachio px-3.5 py-2.5 ml-8 text-sm font-semibold text-ginBlack placeholder:text-ginBlack shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white' />
          </div>
        </div>
        <div className='flex items-center rounded-xl w-max'>
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
          <div className='flex ml-48 text-sm text-ginBlack font-semibold'>
            <div className=' flex flex-col'>
              <Link
                className='w-fit border-b border-transparent hover:border-ginBlack mb-2'
                href='/community'
              >
                Home
              </Link>
              <Link
                className='w-fit border-b border-transparent hover:border-ginBlack'
                href='/community'
              >
                The Invasive Species
              </Link>
            </div>
            <div className=' flex flex-col ml-4'>
              <Link
                className='w-fit border-b border-transparent hover:border-ginBlack mb-2'
                href='/community'
              >
                Community
              </Link>
              <Link
                className='w-fit border-b border-transparent hover:border-ginBlack'
                href='/community'
              >
                Collaborate
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-dotted border-ginBlack'></div>
      <div className='flex items-center justify-between py-4 bg-gradient-to-r from-teaGreen/50 to-ginWhite'>
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
