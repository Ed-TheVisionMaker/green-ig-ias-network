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
              <div className='relative overflow-hidden'>
                <div className=''>
                  <img
                    className='rounded-xl shadow-2xl shadow-teaGreen ring-1 ring-gray-900/10'
                    src='/green-ig-invasive.jpeg'
                    alt=''
                  />
                </div>
              </div>
              <div className='flex flex-col W-1/2 pl-8 text-xl'>
                <div>
                  <p>
                    The Green Iguana (Iguana iguana), known for its vibrant
                    green coloration and distinctive dewlap, is a reptile native
                    to Central and South America. It is a species of lizard in
                    the family Iguanidae, characterized by its long tail, strong
                    limbs, and sharp claws.
                  </p>
                  <p className='mt-8'>
                    Historically, it has been a popular pet due to its docile
                    nature, but its introduction into non-native habitats has
                    led to significant ecological and economic challenges.
                  </p>
                </div>
                <div>
                  <p>
                    Several factors contribute to the Green Iguana's status as
                    an Invasive Alien Species (IAS):
                  </p>
                  <p className='mt-8'>
                    Introduction as Pets, Escape and Release and Habitat
                    Adaptability
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
