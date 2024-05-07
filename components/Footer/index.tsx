import React from 'react';
import Link from 'next/link';
import WaitlistInput from '../WaitlistInput';
import WaitlistButton from '../WaitlistButton';

const Footer = () => {
  return (
    <footer className='flex flex-col font-open-sans w-full mt-24 px-24 bg-ginWhite border-t border-ginBlack/10'>
      <div className='flex w-full items-center justify-between py-8'>
        <div className='flex items-center'>
          <img
            className='h-28'
            src='/ias-gin-logo-black.png'
            alt='IAS-GIN Network'
          />
          {/* <div className='flex flex-col text-ginBlack text-md font-semibold leading-loose'>
            <p className=''>Connect</p>
            <p>Share</p>
            <p>Collaborate</p>
          </div> */}
        </div>
        <div className='flex flex-col mr-40 text-md text-ginBlack font-semibold'>
          <h3 className='text-md mb-2 font-ubuntu font-bold text-ginBlack'>
            Navigate
          </h3>
          <div className='flex'>
            <div className='flex flex-col'>
              <Link
                className='w-fit border-b border-transparent font-medium hover:border-ginBlack'
                href='/community'
              >
                Home
              </Link>
              <Link
                className='w-fit border-b border-transparent font-medium  hover:border-ginBlack'
                href='/community'
              >
                Community
              </Link>
              <Link
                className='w-fit border-b border-transparent font-medium hover:border-ginBlack'
                href='/community'
              >
                The Invasive Species
              </Link>
            </div>
            <div className='flex flex-col ml-4'>
              <Link
                className='w-fit border-b border-transparent font-medium  hover:border-ginBlack'
                href='/community'
              >
                Collaborate
              </Link>
              <Link
                className='w-fit border-b border-transparent font-medium hover:border-ginBlack'
                href='/community'
              >
                Global Impact
              </Link>
              <Link
                className='w-fit border-b border-transparent font-medium  hover:border-ginBlack'
                href='/latestInformation'
              >
                Latest Information
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='text-sm font-ubuntu font-bold tracking-tight text-ginBlack mb-2'>
            Join our waitlist
          </h3>
          <WaitlistInput className=' min-w-0 rounded-md  h-8 border-2 px-3.5 py-2 mb-2 placeholder:text-ginBlack text-ginBlack shadow-sm ring-1 ring-inset ring-ginBlack focus:ring focus:ring-inset focus:ring-darkGreen focus:border-transparent' />
          <WaitlistButton className='rounded-md bg-aquamarine px-3.5 py-2.5 text-sm font-semibold text-ginBlack placeholder:text-ginBlack shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white' />
        </div>
      </div>
      <div className='flex border border-orange-500'>
        <div>
          <strong>Contact:</strong> info@ias-gin.com
        </div>
        <div className='text-sm font-bold text-ginBlack'>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </div>
        <div>
          <b className='text-sm text-ginBlack'>
            &copy; {new Date().getFullYear()} IAS-GIN Network
          </b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
