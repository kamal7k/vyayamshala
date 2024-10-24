import React from 'react';
import { FaRegPlayCircle } from "react-icons/fa";

const About = () => {
  return (
    <div id='about' className="flex flex-col md:flex-row justify-between items-center p-8">
      <div className="max-w-md mb-8 md:mb-0 text-justify">
        {/* Heading with adjusted margin */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
          Join The World Of Fitness.
        </h1>

        {/* Paragraph with adjusted spacing */}
        <p className="mb-8 md:mb-10 leading-relaxed">
          Our aim is to bring more people into fitness so that every individual, family, society, and the whole nation...
        </p>

        {/* Buttons with spacing adjustment */}
        <div className='flex gap-4 mb-32'>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full">
            Join Now
          </button>
          <button className="flex items-center">
            <FaRegPlayCircle className="mr-2 size-8" /> Watch video
          </button>
        </div>

        {/* Stats with better spacing */}
        <div className="flex justify-around gap-6 ">
          <div className="text-center">
            <div className="text-4xl font-bold mb-1 text-yellow-300">7</div>
            <div className="text-sm">Years experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1 text-yellow-300">25k+</div>
            <div className="text-sm">Happy customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1 text-yellow-300">95</div>
            <div className="text-sm">Expert trainers</div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div>
        <img 
          src="./image/poster.png" 
          alt="Fitness model" 
          className="rounded-lg w-full md:w-auto md:h-auto object-cover" 
        />
      </div>
    </div>
  );
};

export default About;
