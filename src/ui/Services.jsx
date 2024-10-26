import React from 'react';
const Services = () => {
  const services = [
    { name: 'Stretch', icon: './icons/stretch.png' },
    { name: 'Yoga', icon: './icons/meditation.png' },
    { name: 'Bodybuilding', icon: './icons/fitness.png' },
    { name: 'Cardio', icon: './icons/squats.png' },
    { name: 'Zumba', icon: './icons/zumba.png' },
    { name: 'Free Weights', icon: './icons/lifting-weight.png' }
  ];
  return (
    <div id='services' className="p-8 md:p-6 lg:p-14">
      {/* Main container with responsive flex direction */}
      <div className="flex flex-col lg:flex-row lg:gap-96">
        {/* Text content section */}
        <div className='w-full lg:w-1/3 mt-8 lg:mb-0 space-y-6'>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            We provide service that fits the best for you.
          </h2>
          <p className="mb-6 text-sm md:text-base leading-loose">
            Strive for greatness with the best, around the best, and in the best fitness environment available in the city
          </p>
          <button className="mt-4 border border-yellow-400 text-black bg-white px-4 md:px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300 ">
            See All
          </button>
        </div>
        {/* Services grid section */}
        <div className="w-full lg:w-1/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 md:p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="mb-2">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-8 h-8 md:w-12 md:h-12 object-contain"
                  />
                </div>
                <span className="text-sm md:text-base font-medium">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;