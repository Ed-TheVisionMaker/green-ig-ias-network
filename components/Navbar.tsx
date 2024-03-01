'use client';
import Link from 'next/link';
import React, { FC } from 'react';
import Logout from './Logout';
import { useAuthContext } from '@/hooks/useAuthContext';
import userProfile from '@/app/(user)/[userProfile]/page';

const Navbar: FC = () => {
  const {
    state: { user },
  } = useAuthContext();

  const id = user?.userId;
  
  return (
    <header className='bg-black flex justify-end py-4 pr-8 space-x-4'>
      <Link
        className='text-[#7CEA23] text-lg border-2 border-transparent hover:border-2 hover:border-white py-1 px-2 rounded-xl'
        href='/welcome'
      >
        welcome
      </Link>
      <Link
        className='text-[#7CEA23] text-lg border-2 border-transparent hover:border-2 hover:border-white py-1 px-2 rounded-xl'
        href='/invasive'
      >
        the invasive species
      </Link>
      <Link
        className='text-[#7CEA23] text-lg border-2 border-transparent hover:border-2 hover:border-white py-1 px-2 rounded-xl'
        href='/community'
      >
        community
      </Link>
      <nav>
        {user && (
          <div>
            <span className='text-[#7CEA23] text-lg'>{user.email}</span>
            <Logout />
            <Link
              href={`/${id}`}
              className='text-[#7CEA23] text-lg border-2 border-transparent hover:border-2 hover:border-white py-1 px-2 rounded-xl'
            >
              User Profile
            </Link>
          </div>
        )}
        {!user && (
          <div>
            <Link
              className='text-[#7CEA23] text-lg border-2 border-transparent hover:border-2 hover:border-white py-1 px-2 rounded-xl'
              href='/login'
            >
              Login
            </Link>
            <Link
              className='text-[#7CEA23] text-lg border-2 border-transparent hover:border-2 hover:border-white py-1 px-2 rounded-xl'
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
