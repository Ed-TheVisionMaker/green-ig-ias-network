import React, { SVGProps } from 'react';

export function ShareKnowledge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='512'
      height='512'
      viewBox='0 0 512 512'
      // style='color:currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        width='512'
        height='512'
        x='0'
        y='0'
        rx='30'
        fill='transparent'
        stroke='transparent'
        stroke-width='0'
        stroke-opacity='100%'
        paint-order='stroke'
      ></rect>
      <svg
        width='256px'
        height='256px'
        viewBox='0 0 32 32'
        fill='currentColor'
        x='128'
        y='128'
        role='img'
        // style='display:inline-block;vertical-align:middle'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='currentColor'>
          <path
            fill='currentColor'
            d='M27 25h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3zm-7-5a4 4 0 1 0 4-4a4 4 0 0 0-4 4zm6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2zM6 21v-1H4v1a7 7 0 0 0 7 7h3v-2h-3a5 5 0 0 1-5-5zm13-11h7v2h-7zm0-4h10v2H19zm0-4h10v2H19zm-8 9H5a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3zm-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2z'
          />
        </g>
      </svg>
    </svg>
  );
}

export function Collaborate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='512'
      height='512'
      viewBox='0 0 512 512'
      //   style='color:currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        width='512'
        height='512'
        x='0'
        y='0'
        rx='30'
        fill='transparent'
        stroke='transparent'
        stroke-width='0'
        stroke-opacity='100%'
        paint-order='stroke'
      ></rect>
      <svg
        width='256px'
        height='256px'
        viewBox='0 0 32 32'
        fill='currentColor'
        x='128'
        y='128'
        role='img'
        // style='display:inline-block;vertical-align:middle'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='currentColor'>
          <path
            fill='currentColor'
            d='M6 21v-1H4v1a7 7 0 0 0 7 7h3v-2h-3a5 5 0 0 1-5-5zm18-10v1h2v-1a7 7 0 0 0-7-7h-3v2h3a5 5 0 0 1 5 5zm-13 0H5a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3zm-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2zm19 21h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3zm-7-5a4 4 0 1 0 4-4a4 4 0 0 0-4 4zm6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2z'
          />
        </g>
      </svg>
    </svg>
  );
}

export function IdeaLightbulb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='512'
      height='512'
      viewBox='0 0 512 512'
      //   style='color:currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        width='512'
        height='512'
        x='0'
        y='0'
        rx='30'
        fill='transparent'
        stroke='transparent'
        stroke-width='0'
        stroke-opacity='100%'
        paint-order='stroke'
      ></rect>
      <svg
        width='256px'
        height='256px'
        viewBox='0 0 24 24'
        fill='currentColor'
        x='128'
        y='128'
        role='img'
        // style='display:inline-block;vertical-align:middle'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='currentColor'>
          <path
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M21 12h1m-3.5-6.5l1-1M12 3V2M5.5 5.5l-1-1M3 12H2m8 10h4m3-10a5 5 0 1 0-7 4.584V19h4v-2.416A5.001 5.001 0 0 0 17 12z'
          />
        </g>
      </svg>
    </svg>
  );
}

export function Warning(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
      />
    </svg>
  );
}
