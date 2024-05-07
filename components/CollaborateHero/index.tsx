import React from 'react';
import { IdeaLightbulb, Collaborate, ShareKnowledge } from '@/utils/svgs';

const CollaborateHero = () => {
  return (
      <div className='mb-24'>
        <div className='flex items-center'>
          <div>
            <h1 className='mt-2 mb-8 text-5xl font-ubuntu font-bold tracking-tight text-ginBlack'>
              Collaborate - Share - Connect
            </h1>
            <div className='border border-ginBlack px-16 py-12 rounded-xl'>
              <div className='font-open-sans text-center mb-8'>
                <h2 className='font-bold text-4xl'>
                  Welcome to Our Collaborative Hub
                </h2>
                <p className='text-3xl mt-4'>
                  Join forces to pool knowledge and resources for effective IAS
                  management.
                </p>
              </div>
              <div className='flex'>
                <div className=''>
                  <div className='font-open-sans'>
                    <h2 className='font-bold text-3xl mt-8'>
                      Find Ideas and Solutions
                    </h2>
                    <p className='text-2xl mt-4'>
                      Explore innovative strategies and best practices to tackle
                      IAS populations.
                    </p>
                  </div>
                  <div className='mt-20'>
                    <h2 className='font-bold text-3xl'>Support Each Other</h2>
                    <p className='text-2xl mt-4'>
                      Connect with a supportive community for advice,
                      encouragement, and practical assistance.
                    </p>
                  </div>
                  <div className='mt-20'>
                    <h2 className='font-bold text-3xl'>
                      Connect with Like-Minded Peers
                    </h2>
                    <p className='text-2xl mt-4'>
                      Forge meaningful connections with others passionate about
                      IAS management and biodiversity conservation.
                    </p>
                  </div>
                </div>
                <div className='mt-8 ml-8'>
                  <div>
                    {IdeaLightbulb({
                      className:
                        'h-32 w-32 rounded-full  bg-teaGreen colour-ginBlack shadow-md shadow-ginBlack/50',
                    })}
                  </div>
                  <div>
                    {ShareKnowledge({
                      className:
                        'h-32 w-32 rounded-full mt-8 bg-teaGreen colour-ginBlack shadow-md shadow-ginBlack/50',
                    })}
                  </div>
                  <div>
                    {Collaborate({
                      className:
                        'h-32 w-32 rounded-full  mt-8 bg-teaGreen colour-ginBlack shadow-md shadow-ginBlack/50',
                    })}
                  </div>
                </div>
              </div>
            <div className='flex justify-center w-full mt-24'>
              <a
                href='/collaborate'
                className='rounded-md bg-aquamarine mx-auto px-3.5 py-2.5 text-md font-semibold text-ginBlack placeholder:text-ginBlack shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Learn more
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CollaborateHero;
