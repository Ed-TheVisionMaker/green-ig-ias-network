import React from 'react';
import Container from '@/components/Container';

const CommunityHero = () => {
  return (
    <Container>
      <div className='mb-24'>
        <div>
          <h1 className='mt-2 mb-8 text-5xl font-ubuntu font-bold tracking-tight text-ginBlack'>
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
              className='flex-none rounded-md bg-pistachio px-3.5 py-2.5 text-sm font-semibold text-ginBlack placeholder:text-ginBlack shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              Learn more
            </a>
          </div>
        </div>
        <div>
          <img
            className='mt-8 rounded-xl shadow-2xl shadow-teaGreen ring-1 ring-gray-900/10'
            src='Nino-Souza-Nino-pixabay-group-people.jpg'
            alt='group of people silhouetted at sunset'
          />
        </div>
      </div>
    </Container>
  );
};

export default CommunityHero;
