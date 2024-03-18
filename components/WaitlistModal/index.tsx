import React, { useEffect } from 'react';
import { useWaitlistStore } from '@/store/waitlistStore';

const WaitListModal = () => {
  const { toggleModal } = useWaitlistStore();
  useEffect(() => {
    const hideModal = setInterval(() => {
      toggleModal();
    }, 4000);

    return () => clearInterval(hideModal);
  }, []);
  return (
    <div className='absolute top-24 right-16 bg-lightGreen border-mediumGreen shadow-mediumGreen rounded-lg px-8 py-4'>
      <div className='flex flex-col align-center px-4 py-2 rounded-xl'>
        <h2 className='text-2xl text-ginBlack mb-4'>Community Access coming soon</h2>
        <p className='text-xl text-ginBlack'>
          Join the waitlist to stay updated
        </p>
      </div>
    </div>
  );
};

export default WaitListModal;
