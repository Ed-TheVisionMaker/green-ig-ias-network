'use client';
import InvasiveSpeciesHero from '@/components/InvasiveSpeciesHero';
import Waitlist from '@/components/Waitlist.tsx';

export default function Home() {
  return (
    <div className='bg-ginWhite'>
      <div className='relative isolate px-8 pt-24'>
          <div className='flex flex-col items-center'>
            <div className='w-full max-w-2xl lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
              <div className='relative w-full'>
                <h1 className='text-4xl font-bold tracking-tight text-ginBlack sm:text-6xl'>
                  Welcome to the IAS Green Iguana Network
                </h1>
                <p className='mt-6 text-2xl leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                  A place for people to connect and collaborate to control{' '}
                  <br />
                  the spread of green iguanas as an Invasive Alien Species
                </p>
                <div className='mt-10 flex items-center gap-x-6'>
                  <Waitlist />
                </div>
              </div>
              <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                  <div className='relative'>
                    <img
                      src='/buddhist-3212973_640.jpg'
                      alt=''
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
                <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                  <div className='relative'>
                    <img
                      src='/hike-6487870_640.jpg'
                      alt=''
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                  </div>
                  <div className='relative'>
                    <img
                      src='/scott_pixabay_green_ig.jpg'
                      alt='/scott_pixabay_green_ig'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                  </div>
                </div>
                <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                  <div className='relative'>
                    <img
                      src='/susan_pixabay_green_ig.jpg'
                      alt='/susan_pixabay_green_ig.jpg'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                  </div>
                  <div className='relative'>
                    <img
                      src='/truen_de_jager_pixabay_green_ig.jpg'
                      alt=''
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                  </div>
                </div>
              </div>
            </div>
            <InvasiveSpeciesHero />
          </div>
      </div>
    </div>
  );
}
