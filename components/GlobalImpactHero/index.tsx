import MapContainer from '../Map';

const GlobalImpactHero = () => {
  return (
      <div className='w-full mt-32'>
          <h1 className='mb-8 text-5xl font-ubuntu font-bold tracking-tight text-ginBlack'>
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
          </div>
          <MapContainer />
      </div>
  );
};

export default GlobalImpactHero;
