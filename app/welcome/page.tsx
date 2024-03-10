import React, { FC } from 'react';

const Welcome: FC = () => {
  return (
    <div className='flex flex-col m-36 text-center h-screen bg-primaryGreen'>
      <h1 className='font-bold font-ubuntu text-4xl'>
        Welcome to the IAS Green Iguana Network
      </h1>
      <p className='text-2xl m-12'>
        A place for people to connect and collaborate to control <br />
        the spread of green iguanas as an Invasive Alien Species
      </p>
    </div>
  );
};

export default Welcome;
