'use client';

import React, { FC } from 'react';
import Waitlist from '@/components/Waitlist.tsx';
import Image from 'next/image';
import '../styles/informationPages.css';

const Home: FC = () => {
  return (
    <div className='flex pt-36 pl-48 h-screen bg-darkGreen'>
      <div className='flex flex-col text-left ml-24'>
        <h1 className=''>
          Welcome to the
          <br />
          IAS Green Iguana Network
        </h1>
        <p className=' mt-16'>
          A place for people to connect and collaborate to control <br />
          the spread of green iguanas as an Invasive Alien Species
        </p>
      </div>
      <Waitlist />
    </div>
  );
};

export default Home;
