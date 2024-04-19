import React from 'react';
import Container from '@/components/Container';

const StayUpToDateHero = () => {
  return (
    <Container>
      <div className='flex'>
        <div>
          <h1 className='mt-2 mb-8 text-5xl font-ubuntu font-bold tracking-tight text-ginBlack'>
            The Latest Information
          </h1>
          <p className='text-2xl font-open-sans'>
            Stay up-to-date with the latest information on invasive species
            gathered from the Green Iguana Network.
          </p>

          <div className='flex items-center bg-teaGreen rounded-xl mt-8'>
            <div className='flex justify-center'>
              <img
                className='w-3/4 p-34 rounded-xl bg-ginBlack p-8 m-8 '
                src='./Clker-Free-Vector-Images-graphVectors-pixabay.png'
              />
            </div>
            <div className='flex justify-center'>
              <img
                className='w-4/5 rounded-xl m-8'
                src='./Mohamed-hassan-pixabay-magnifying-glass.png'
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StayUpToDateHero;
