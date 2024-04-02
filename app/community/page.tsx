import Waitlist from '@/components/Waitlist.tsx';
import React, { FC } from 'react';

const Community: FC = () => (
  <div className='px-32 py-16'>
    <h2 className='text-6xl text-center font-bold tracking-tight text-ginBlack mt-6 mb-16'>
      Welcome to Our Community Effort<br></br> Against Invasive Green Iguanas!
    </h2>
        <div className='grid grid-cols-2 gap-10 text-2xl'>
          <p className='bg-gradient-to-br from-teaGreen/50 to-ginWhite p-8 mb-8 border-2 border-teaGreen rounded-xl'>
            Welcome to Our Community Effort Against Invasive Green Iguanas! Are
            you concerned about the threat posed by Green Iguanas as an Invasive
            Alien Species (IAS)&#63;
          </p>
          {/* <p className='bg-gradient-to-l from-teaGreen/50 to-ginWhite'> */}
          <p className='bg-gradient-to-br from-teaGreen/50 to-ginWhite p-8 mb-8 border-2 border-teaGreen rounded-xl'>

            Whether you're a concerned citizen, a local farmer, a
            conservationist, or a government official, we invite you to join our
            collective effort to tackle this challenge!
          </p>
        </div>
    <p className='text-2xl mb-8'>
      Our website serves as a hub for sharing information, best practices, and
      resources for reducing or eradicating Green Iguanas in non-native
      habitats. Here&apos;s what you can expect to come from our platform:
    </p>
    <ul className='text-2xl'>
      <li className='mb-8'>
        <strong>Connect with Like-Minded Individuals:</strong> Engage in
        discussions with community members who share your concerns about Green
        Iguanas. Share your experiences, challenges, and solutions to foster a
        collaborative environment.
      </li>
      <li className='mb-8'>
        <strong>Access Educational Materials:</strong> Stay informed about the
        biology, ecology, and behavior of Green Iguanas. Learn about their
        impact on local ecosystems and economies, and how to effectively manage
        their populations.
      </li>
      <li className='mb-8'>
        <strong>Share Success Stories:</strong> Have you successfully managed
        Green Iguana populations in your area? Share your success stories and
        strategies to inspire others and foster a sense of hope and progress.
      </li>
      <li className='mb-8'>
        <strong>Find Local Support:</strong> Locate organizations, government
        agencies, and individuals in your region who are actively involved in
        Green Iguana management. Connect with them for guidance, support, and
        collaboration.
      </li>
      <li className='mb-8'>
        <strong>Stay Updated:</strong> Access the latest news, research, and
        developments related to Green Iguanas as an IAS. Stay informed about
        legislative efforts, control measures, and emerging technologies.
      </li>
      <li className='mb-8'>
        <strong>Contribute to Research:</strong> Participate in citizen science
        initiatives, surveys, and studies aimed at better understanding Green
        Iguana populations and their impacts.
      </li>
    </ul>
    <p className='text-2xl mb-8'>
      By joining our community, you&apos;ll be part of a collective effort to
      protect native ecosystems, preserve agricultural productivity, and
      mitigate the threats posed by Invasive Green Iguanas. Together, we can
      make a difference!
    </p>
    <p className='text-2xl mb-8'>
      Are you ready to join us? Register today and start contributing to our
      shared mission!
    </p>
    <Waitlist />
  </div>
);

export default Community;
