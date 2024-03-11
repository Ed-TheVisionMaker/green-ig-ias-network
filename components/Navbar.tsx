'use client';
import Link from 'next/link';
import React, { FC } from 'react';
import Logout from './Logout';
import { useAuthStore } from '@/store/authStore';

const Navbar: FC = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className='bg-lightGreen shadow-md shadow-ginBlack flex justify-between align-items py-4 pl-44'>
      <div className='flex space-x-4'>
      <Link
          className=' text-2xl px-2 rounded-xl'
          href='/'
        >
          home
        </Link>
        <Link
          className=' text-2xl px-2 rounded-xl'
          href='/invasive'
        >
          the invasive species
        </Link>
        <Link
          className=' text-2xl px-2 rounded-xl'
          href='/community'
        >
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
          <div>
            <Link
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
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
