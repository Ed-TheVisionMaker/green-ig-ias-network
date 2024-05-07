'use client';
import 'dotenv/config';
import HeroSection from '@/components/HeroSection';
import CommunityHero from '@/components/CommunityHero';
import InvasiveSpeciesHero from '@/components/InvasiveSpeciesHero';
import CollaborateHero from '@/components/CollaborateHero';
import LatestInformation from '@/components/LatestInformationHero';
import GlobalImpactHero from '@/components/GlobalImpactHero';
import Container from '@/components/Container';

export default function Home() {
  return (
    <div className='bg-ginWhite'>
      <div className='relative pt-20'>
        <Container>
          <div className='flex flex-col items-center'>
            <HeroSection />
            <InvasiveSpeciesHero />
            <CommunityHero />
            <CollaborateHero />
            <GlobalImpactHero />
            <LatestInformation />
          </div>
        </Container>
      </div>
    </div>
  );
}
