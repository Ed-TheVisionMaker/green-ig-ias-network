'use client';
import React, { FC } from 'react';
import { useLogout } from '@/hooks/useLogout';

const Logout: FC = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };
  return <button
  className='text-[#7CEA23] text-lg border-2 border-transparent hover:border-2 hover:border-white py-1 px-2 rounded-xl' onClick={handleClick}>Logout</button>;
};

export default Logout;
