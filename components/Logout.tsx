'use client';
import React, { FC } from 'react';
import { useLogout } from '@/hooks/useLogout';

const Logout: FC = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };
  return <button
  className='text-ginBlack text-xl py-1 px-2 rounded-xl' onClick={handleClick}>Logout</button>;
};

export default Logout;
