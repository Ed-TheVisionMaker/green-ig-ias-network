'use client';
import React, { useState, useEffect, useRef } from 'react';

const images1 = [
  '/buddhist-3212973_640.jpg',
  '/green-ig-invasive.jpeg',
  '/hike-6487870_640.jpg',
];

const images2 = [
  'Nino-Souza-Nino-pixabay-group-people.jpg',
  'truen_de_jager_pixabay_green_ig.jpg',
  'susan_pixabay_green_ig.jpg',
];

const inDevelopment = () => {
  const [currentIndexLeft, setCurrentIndexLeft] = useState(0);
  const [currentIndexRight, setCurrentIndexRight] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-0');

  useEffect(() => {
    const fadeIn = () => {
      setFadeClass('opacity-100');
    };

    const fadeOut = () => {
      setFadeClass('opacity-0');
    };

    const timer = setInterval(() => {
      fadeOut();
      setTimeout(() => {
        setCurrentIndexLeft((prevIndex) => (prevIndex + 1) % images1.length);
        fadeIn();
      }, 500); // Time for fade-out
    }, 2000); // Total time for each image

    return () => clearInterval(timer);

    //     const intervalIdRight = setInterval(() => {
    //       setCurrentIndexRight((prevIndex) => (prevIndex + 1) % images1.length);
    //     }, 2000);

    //     return () => {
    //       clearInterval(intervalIdLeft);
    //       clearInterval(intervalIdRight);
    //     };
  }, []);

  return (
    <div className='relative h-screen flex items-center justify-center text-unbuntu'>
      <div className='absolute flex justify-center left-48 top-56 h-48 w-96 border border-ginBlack'>
        {images1.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndexLeft ? fadeClass : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className='flex flex-col items-center justify-center text-unbuntu'>
        <img className='h-64' src='/ias-gin-logo-black.png' />
        <h2 className='text-3xl mb-4'>This page is in development</h2>
        <p className='text-xl'>
          We look forward to bringing you insights and updates soon
        </p>
      </div>
      <div className='h-fit'>
        <img
          className='absolute right-48 top-24 h-48 rounded-xl'
          src={images2[currentIndexRight]}
        />
      </div>
    </div>
  );
};

export default inDevelopment;

// 'use client'
// import React, { useEffect, useState } from 'react';

// const images = [
//   '/buddhist-3212973_640.jpg',
//   '/green-ig-invasive.jpeg',
//   '/hike-6487870_640.jpg',
// ];

// const inDevelopment = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [fadeClass, setFadeClass] = useState('opacity-0');

//   useEffect(() => {
//     const fadeIn = () => {
//       setFadeClass('opacity-100');
//     };

//     const fadeOut = () => {
//       setFadeClass('opacity-0');
//     };

//     const timer = setInterval(() => {
//       fadeOut();
//       setTimeout(() => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         fadeIn();
//       }, 500); // Time for fade-out
//     }, 3000); // Total time for each image

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-64 overflow-hidden">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slide ${index}`}
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentImageIndex ? fadeClass : 'opacity-0'}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default inDevelopment;
