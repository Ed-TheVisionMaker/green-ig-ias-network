import React, { FC } from 'react';

const Welcome: FC = () => {
  return (
    <div className='flex flex-col m-48 text-center h-screen'>
      <h1 className='font-bold text-3xl'>
        Welcome to the IAS Green Iguana Network
      </h1>
      <p className='text-xl m-12'>
        A place for people to connect and collaborate to control <br />
        the spread of green iguanas as an Invasive Alien Species
      </p>
    </div>
  );
};

export default Welcome;
