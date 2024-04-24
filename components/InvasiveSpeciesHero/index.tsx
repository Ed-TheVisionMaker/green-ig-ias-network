import Container from '@/components/Container';

export default function InvasiveSpeciesHero() {
  return (
    <Container>
      <div className='bg-ginWhite rounded-xl my-24'>
        <div className='flex'>
          <div className='h-28 bg-gradient-to-r from-teaGreen/50 to-ginWhite rounded-lg'></div>
          <div className=''>
            <h1 className='mt-2 mb-8 text-5xl font-ubuntu font-bold tracking-tight text-ginBlack'>
              The Invasive Species
            </h1>
            <div className='flex relative'>
              <div className='relative'>
                <div className=''>
                  <img
                    className='rounded-xl shadow-xl shadow-ginBlack/50 ring-1 ring-gray-900/10'
                    src='/green-ig-invasive.jpeg'
                    alt=''
                  />
                </div>
              </div>
              <div className='flex flex-col W-1/2 pl-8 text-xl'>
                <div>
                  <p className='mt-8'>
                    The Green Iguana (Iguana iguana) is a vibrant reptile native
                    to Central and South America, known for its striking green
                    color and unique dewlap.
                  </p>
                  <p className='mt-8'>
                    Introduction to non-native habitats has caused major
                    ecological and economic issues. It's classified as an
                    Invasive
                  </p>
                  <p>
                    Alien Species (IAS) due to:
                    <ul className='ml-8'>
                      <li className='mt-8'>Being introduced as pets</li>
                      <li className='mt-8'>Escapes and releases </li>
                      <li className='mt-8'>
                        Its adaptability to various habitats
                      </li>
                    </ul>
                  </p>
                </div>
                <div className='absolute bottom-2 mt-10 '>
                  <a
                    href='/invasive'
                    className='flex-none rounded-md bg-pistachio px-3.5 py-2.5 text-sm font-semibold text-ginBlack placeholder:text-ginBlack shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
