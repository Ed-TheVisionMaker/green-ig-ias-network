import { IdeaLightbulb, Warning } from '@/utils/svgs';
export default function InvasiveSpeciesHero() {
  return (
      <div className='bg-ginWhite rounded-xl mt-32'>
        <div className='flex'>
          <div className='h-28 bg-gradient-to-r from-teaGreen/50 to-ginWhite rounded-lg'></div>
          <div className=''>
            <h1 className='w-fit mt-2 mb-8 text-5xl font-ubuntu font-bold tracking-tight text-ginBlack rounded-sm border-b-2 border-transparent hover:border-pistachio'>
              <a href='/invasive'>The Invasive Species</a>
            </h1>
            <div className='relative flex items-start'>
              <div className='w-fit'>
                <div className=''>
                  <img
                    className='rounded-xl shadow-xl shadow-ginBlack/50 ring-1 ring-gray-900/10'
                    src='/green-ig-invasive.jpeg'
                    alt=''
                  />
                </div>
              </div>
              <div className='flex flex-col pl-8 text-xl'>
                <div>
                  <p className=''>
                    The Green Iguana (Iguana iguana) is a vibrant reptile native
                    to Central and South America, known for its striking green
                    color and unique dewlap.
                  </p>
                  <p className='mt-4'>
                    Introduction to non-native habitats has caused major
                    ecological and economic issues.
                  </p>
                  <p className='mt-4'>
                    It's classified as an Invasive Alien Species (IAS) due to:
                  </p>
                  <ul className='ml-12'>
                    <li className='flex items-center mt-4'>
                      <span>
                      {Warning({
                          className: 'h-10 w-10 mr-4',
                        })}
                      </span>
                      Being introduced as pets
                    </li>
                    <li className='flex items-center mt-4'>
                      <span>
                        {Warning({
                          className: 'h-10 w-10 mr-4',
                        })}
                      </span>
                      Escapes and releases{' '}
                    </li>
                    <li className='flex items-center mt-4'>
                      <span>
                        {Warning({
                          className: 'h-10 w-10 mr-4',
                        })}
                      </span>
                      Its adaptability to various habitats
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
