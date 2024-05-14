import React, { ButtonHTMLAttributes } from 'react';

const WaitlistButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type='submit'
    
      {...props}>
      Register Me
    </button>
  );
};

export default WaitlistButton;
