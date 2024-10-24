import React from 'react'

const Services = () => {
  return (
    <div id='services' className="p-10 flex gap-20">
      <div className='md:w-30% text-justify'>
        <h2 className="text-3xl font-bold mb-4">We provide service that fits the best for you.</h2>
        <p className="mb-6">Strive for greatness with the best, around the best, and in the best fitness environment available in the city</p>
        <button className="mt-8 border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full">See All</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { name: 'Stretch', icon: './icons/stretch.png' },
          { name: 'Yoga', icon: './icons/meditation.png' },
          { name: 'Bodybuilding', icon: './icons/fitness.png' },
          { name: 'Cardio', icon: './icons/squats.png' },
          { name: 'Zumba', icon: './icons/zumba.png' },
          { name: 'Free Weights', icon: './icons/lifting-weight.png' }
        ].map((service, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img src={service.icon} alt={service.name} className="w-12 h-12" />
            <span>{service.name}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Services