import Link from 'next/link';
import React, { FC } from 'react';

const Navbar: FC = () => {
  return (
    <div>
      <div className='bg-black flex justify-end py-4 pr-8 space-x-4'>
        <Link className='text-[#7CEA23] text-lg border-2 border-transparent hover:border-2 hover:border-white py-1 px-2 rounded-xl' href='/welcome'>
          welcome
        </Link>
        <Link className='text-[#7CEA23] text-lg border-2 border-transparent hover:border-2 hover:border-white py-1 px-2 rounded-xl' href='/invasive'>
          the invasive species
        </Link>
        <Link className='text-[#7CEA23] text-lg border-2 border-transparent hover:border-2 hover:border-white py-1 px-2 rounded-xl' href='/community'>
          community
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
