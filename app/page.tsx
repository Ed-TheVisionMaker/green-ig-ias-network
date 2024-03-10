'use client';

import React, { FC } from 'react';

const Home: FC = () => {
  return (
      <div className='flex flex-col text-left justify-start text-whiteText pt-36 pl-48 h-screen bg-primaryGreen'>
        <h1 className='font-ubuntu text-6xl'>
          Welcome to the<br />IAS Green Iguana Network
        </h1>
        <p className='text-2xl mt-16'>
          A place for people to connect and collaborate to control <br />
          the spread of green iguanas as an Invasive Alien Species
        </p>
      </div>
  );
};

export default Home;
