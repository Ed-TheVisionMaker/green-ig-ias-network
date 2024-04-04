'use client';
import React, { useState, InputHTMLAttributes } from 'react';

const WailistInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <label htmlFor='email-address' className='sr-only'>
        Email address
      </label>
      <input
        id='email-address'
        name='email'
        autoComplete='email'
        value={email}
        className=' min-w-0 flex-auto rounded-md  border-2 px-3.5 py-2 placeholder:text-ginBlack text-ginBlack shadow-sm ring-1 ring-inset ring-ginBlack focus:ring focus:ring-inset focus:ring-darkGreen focus:border-transparent'
        placeholder='Enter your email here'
        onChange={(e) => setEmail(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default WailistInput;
