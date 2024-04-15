'use client';
import HeroSection from '@/components/HeroSection';
import CommunityHero from '@/components/CommunityHero';
import InvasiveSpeciesHero from '@/components/InvasiveSpeciesHero';
import CollaborateHero from '@/components/CollaborateHero';

export default function Home() {
  return (
    <div className='bg-ginWhite'>
      <div className='relative isolate pt-24'>
          <div className='flex flex-col items-center'>
            <HeroSection />
            <InvasiveSpeciesHero />
            <CommunityHero />
            <CollaborateHero />
          </div>
      </div>
    </div>
  );
}
