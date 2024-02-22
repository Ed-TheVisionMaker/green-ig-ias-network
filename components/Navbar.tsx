import Link from 'next/link';
import React, { FC } from 'react';

const Navbar: FC = () => {
  return (
    <div>
      <div className='bg-black flex justify-end py-4 pr-8 space-x-4'>
        <Link className='text-[#7CEA23]' href='/welcome'>
          welcome
        </Link>
        <Link className='text-[#7CEA23]' href='/invasive'>
          the invasive species
        </Link>
        <Link className='text-[#7CEA23]' href='/community'>
          community
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
