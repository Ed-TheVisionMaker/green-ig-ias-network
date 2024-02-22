import Link from 'next/link';
import React, { FC } from 'react';

const Navbar: FC     = () => {
  return (
      <div>
      <Link href='/welcome'>welcome</Link>
      <Link href='/invasive'>the invasive species</Link>
      <Link href='/community'>community</Link>
    </div>
  );
};

export default Navbar;
