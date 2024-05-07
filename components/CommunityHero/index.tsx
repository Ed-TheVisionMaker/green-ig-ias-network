import React from 'react';

const CommunityHero = () => {
  return (
      <div className='mt-32'>
        <div>
          <h1 className='mb-8 text-5xl font-ubuntu font-bold tracking-tight text-ginBlack'>
            Community
          </h1>
          <div className='grid grid-cols-2 gap-10 text-2xl'>
            <p className=''>
              Welcome to Our Community Effort Against Invasive Green Iguanas!
              Are you concerned about the threat posed by Green Iguanas as an
              Invasive Alien Species (IAS)&#63;
            </p>
            <p className=''>
              Whether you're a concerned citizen, a local farmer, a
              conservationist, or a government official, we invite you to join
              our collective effort to tackle this challenge!
            </p>
          </div>
          <div className='mt-10 '>
            <a
              href='/community'
              className='flex-none rounded-md bg-aquamarine px-3.5 py-2.5 text-md font-semibold text-ginBlack placeholder:text-ginBlack shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              Learn more
            </a>
          </div>
        </div>
        <div className='flex item-center justify-center rounded-xl bg-gradient-radial from-teaGreen/60 to-ginWhite mt-8 p-16'>
          <img
            className='w-3/4 opacity-90 p-34 rounded-xl shadow-md shadow-ginBlack'
            src='Nino-Souza-Nino-pixabay-group-people.jpg'
            alt='group of people silhouetted at sunset'
          />
        </div>
      </div>
  );
};

export default CommunityHero;
