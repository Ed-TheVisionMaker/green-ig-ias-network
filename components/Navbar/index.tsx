'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className='relative flex h-16 justify-between'>
        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>
        <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
          <div className='flex flex-shrink-0 items-center'>
            <img
              className='h-14'
              src='/ias-gin-logo-white.png'
              alt='Your Company'
            />
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
            <Link
              className={`inline-flex items-center ${
                pathname === '/' ? 'border-pistachio' : 'border-transparent'
              } border-b-2 hover:border-pistachio px-1 pt-1 text-sm font-medium text-ginBlack`}
              href='/'
            >
              home
            </Link>
            <Link
              className={`inline-flex items-center  ${
                pathname === '/invasive'
                  ? 'border-pistachio'
                  : 'border-transparent'
              } border-b-2 hover:border-pistachio px-1 pt-1 text-sm font-medium text-ginBlack`}
              href='/invasive'
            >
              the invasive species
            </Link>
            <Link
              className={`inline-flex items-center  ${
                pathname === '/community'
                  ? 'border-pistachio'
                  : 'border-transparent'
              } border-b-2 hover:border-pistachio px-1 pt-1 text-sm font-medium text-ginBlack`}
              href='/community'
            >
              community
            </Link>
          </div>
        </div>
        <div className='flex items-center'>
          <p className='mr-4'>Register your interest</p>

          <Link
            href='#waitlist'
            className=' text-xl text-ginWhite bg-ginBlue border-2 border-mediumGreen shadow-mediumGreen pt-1 pb-2 mr-24 px-3 rounded-xl'
          >
            Waitlist
          </Link>
        </div>
      </div>
    </div>
  );
}
