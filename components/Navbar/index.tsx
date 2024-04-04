'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className='w-full font-ubuntu bg-gradient-to-r from-teaGreen/50 to-ginWhite'>
      <div className='relative flex h-16 justify-between pl-32 pr-32'>
        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>
        <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
          <div className='flex flex-shrink-0 items-center'>
            <img
              className='h-14 rounded-xl border border-teaGreen'
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
        <div className='flex items-center font-ubuntu'>
          <p className='text-ginBlack  text-sm font-medium'>Register your interest</p>
          <Link
            href='#waitlist'
            className='px-3.5 py-2.5 ml-8 text-sm font-semibold text-ginBlack  bg-pistachio border-2 border-teaGreen shadow-teaGreen rounded-xl'
          >
            Go to Waitlist
          </Link>
        </div>
      </div>
    </div>
  );
}
