import React from 'react';
import Container from '@/components/Container';

const GlobalImpactHero = () => {
  return (
    <Container>
      <div className=''>
        <div className=''>
          <h1 className='mt-2 mb-8 text-5xl font-ubuntu font-bold tracking-tight text-ginBlack'>
            Global Impact
          </h1>
          <div className='text-center bg-teaGreen rounded-xl pt-8'>
            <p className='text-2xl font-open-sans'>
              See whether a country is impacted and what efforts are ongoing
            </p>
            <p className='text-2xl font-open-sans mt-4 mb-5'>
              Find those countries at-risk and act to prevent an invasive
              incident occuring
            </p>
            <img
              className='rounded-b-xl'
              src='/tropical_regions.jpg'
              alt='tropical regions world map'
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GlobalImpactHero;
