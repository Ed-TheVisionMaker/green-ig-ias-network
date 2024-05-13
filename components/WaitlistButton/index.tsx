import React, { ButtonHTMLAttributes } from 'react';

const WaitlistButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type='submit'
    //   className='flex-none rounded-md bg-pistachio px-3.5 py-2.5 ml-8 text-sm font-semibold text-ginBlack placeholder:text-ginBlack shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
    
      {...props}>
      Register Me
    </button>
  );
};

export default WaitlistButton;
