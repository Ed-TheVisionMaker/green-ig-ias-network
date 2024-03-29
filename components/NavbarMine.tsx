'use client';
import Link from 'next/link';
import React, { FC } from 'react';
import Logout from './Logout';
import WaitlistModal from './WaitlistModal';
import { useAuthStore } from '@/store/authStore';
import { useWaitlistStore } from '@/store/waitlistStore';

const NavbarMine: FC = () => {
  const user = useAuthStore((state) => state.user);
  const { showModal, toggleModal } = useWaitlistStore();

  return (
    <header className='bg-lightGreen shadow-md shadow-ginBlack flex justify-between align-items py-4 pl-44'>
      <div className='flex w-full justify-between'>
        <div className='flex space-x-4'>
        <Link className=' text-2xl px-2 rounded-xl' href='/'>
            home
          </Link>
          <Link className=' text-2xl px-2 rounded-xl' href='/invasive'>
            the invasive species
          </Link>
          <Link className=' text-2xl px-2 rounded-xl' href='/community'>
            community
          </Link>
        </div>
        <nav className='flex space-x-4 pr-16'>
          {user.token.length > 0 && (
            <div>
              <span className='text-ginBlack text-xl mr-3'>{user.email}</span>
              <Logout />
              <Link
                href={`/${user.userId}`}
                className=' text-xl border-transparent py-1 px-2 rounded-xl'
              >
                User Profile
              </Link>
            </div>
          )}
          {user.token.length === 0 && (
            <div className='flex'>
              <div className='flex items-center'>
                <p className='text-ginBlack text-2xl mr-4'>Register your interest</p>
              <Link
              href='#waitlist'
                className=' text-xl text-ginWhite bg-ginBlue border-2 border-mediumGreen shadow-mediumGreen pt-1 pb-2 mr-24 px-3 rounded-xl'
              >
                Waitlist
              </Link>
              </div>
              {/* <button
                className=' text-xl text-ginWhite bg-ginBlue border-2 border-mediumGreen shadow-mediumGreen pt-1 pb-2 mr-3 px-3 rounded-xl'
                onClick={toggleModal}
              >
                Log In
              </button>
              <button
                className=' text-xl text-ginWhite bg-ginBlue border-2 border-mediumGreen shadow-mediumGreen pt-1 pb-2 mr-3 px-3 rounded-xl'
                onClick={toggleModal}
              >
                Sign Up
              </button> */}
              {/* <Link
              className=' text-xl text-ginWhite bg-ginBlue border-2 border-mediumGreen shadow-mediumGreen pt-1 pb-2 mr-3 px-3 rounded-xl'
              href='/login'
            >
              Log In
            </Link>
            <Link
              className=' text-xl text-ginWhite bg-ginBlue border-2 border-mediumGreen shadow-mediumGreen pt-1 pb-2 px-3 rounded-xl'
              href='/signup'
            >
              Sign Up
            </Link> */}
              {showModal && <WaitlistModal />}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavbarMine;
