export default function InvasiveSpeciesHero() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
          <p className='text-base font-semibold leading-7 text-indigo-600'>
            Green Iguanas As
          </p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            The Invasive Species
          </h1>
          <div className='mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2'>
            <div>
              <p>
                The Green Iguana (Iguana iguana), known for its vibrant green
                coloration and distinctive dewlap, is a reptile native to
                Central and South America. It is a species of lizard in the
                family Iguanidae, characterized by its long tail, strong limbs,
                and sharp claws.
              </p>
              <p className='mt-8'>
                Historically, it has been a popular pet due to its docile
                nature, but its introduction into non-native habitats has led to
                significant ecological and economic challenges.
              </p>
            </div>
            <div>
              <p>
              Several factors contribute to the Green Iguana's status as an Invasive
          Alien Species (IAS):
              </p>
              <p className='mt-8'>
              Introduction as Pets, Escape and Release and Habitat Adaptability
              </p>
            </div>
          </div>
          <div className='mt-10 flex'>
            <a
              href='/invasive'
              className='rounded-md bg-ginBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className='relative overflow-hidden pt-16 lg:pt-20'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <img
            className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'
            src='/green-ig-invasive.jpeg'
            alt=''
          />
          <div className='relative' aria-hidden='true'>
            <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]' />
          </div>
        </div>
      </div>
    </div>
  );
}
