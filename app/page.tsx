'use client';
import InvasiveSpeciesHero from '@/components/InvasiveSpeciesHero';
// import { useState } from 'react';
import Waitlist from '@/components/Waitlist.tsx';
// import Image from 'next/image';
// import { Dialog } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ];

export default function Home() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        {/* <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav> */}
        {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog> */}
      </header>
      <main>
        <div className='relative isolate'>
          <svg
            className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'
              >
                <path d='M.5 200V.5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              <path
                d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
            />
          </svg>
          <div
            className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
            aria-hidden='true'
          >
            <div
              className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className='overflow-hidden'>
            <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
              <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
                <div className='relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
                  <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
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
                      {/* <Image
                        width={176}
                        height={176}
                        src='/public/buddhist-3212973_640.jpg'
                        alt=''
                        className='aspect w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      /> */}
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
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <img
                        src='/scott_pixabay_green_ig.jpg'
                        alt='/scott_pixabay_green_ig'
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                  <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                    <div className='relative'>
                      <img
                        src='/susan_pixabay_green_ig.jpg'
                        alt='/susan_pixabay_green_ig.jpg'
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <img
                        src='/truen_de_jager_pixabay_green_ig.jpg'
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                </div>
              </div>
              <InvasiveSpeciesHero />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
