'use client';
import Link from 'next/link';
import React, { FC } from 'react';
import Logout from './Logout';
import { useAuthStore } from '@/store/authStore';

const Navbar: FC = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <header className='bg-lightGreen shadow-md shadow-blackText flex justify-between py-4 pl-44'>
      <div className='flex space-x-4'>
        <Link
          className=' text-2xl border-transparent py-1 px-2 rounded-xl'
          href='/welcome'
        >
          welcome
        </Link>
        <Link
          className=' text-2xl border-transparent py-1 px-2 rounded-xl'
          href='/invasive'
        >
          the invasive species
        </Link>
        <Link
          className=' text-2xl border-transparent py-1 px-2 rounded-xl'
          href='/community'
        >
          community
        </Link>
      </div>
      <nav className='flex space-x-4 pr-16'>
        {user.token.length > 0 && (
          <div>
            <span className='text-[#7CEA23] text-lg'>{user.email}</span>
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
              className=' text-2xl border-transparent py-1 px-2 rounded-xl'
              href='/login'
            >
              Login
            </Link>
            <Link
              className=' text-2xl border-transparent py-1 px-2 rounded-xl'
              href='/signup'
            >
              Signup
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
