'use client';
import HeroSection from '@/components/HeroSection';
import CommunityHero from '@/components/CommunityHero';
import InvasiveSpeciesHero from '@/components/InvasiveSpeciesHero';
import CollaborateHero from '@/components/CollaborateHero';
import LatestInformation from '@/components/LatestInformationHero';
import WorldImpactHero from '@/components/WorldImpactHero';

export default function Home() {
  return (
    <div className='bg-ginWhite'>
      <div className='relative isolate pt-20'>
          <div className='flex flex-col items-center'>
            <HeroSection />
            <InvasiveSpeciesHero />
            <CommunityHero />
            <CollaborateHero />
            <LatestInformation/>
            <WorldImpactHero />
          </div>
      </div>
    </div>
  );
}
