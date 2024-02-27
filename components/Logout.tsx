'use client';
import React, { FC } from 'react';
import { useLogout } from '@/hooks/useLogout';

const Logout: FC = () => {
  const {logout} = useLogout();

  const handleClick = () => {
    logout();
  };
  return <button onClick={handleClick}>Logout</button>;
};

export default Logout;