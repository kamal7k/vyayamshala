import React from 'react';
import { FaRegPlayCircle } from "react-icons/fa";

const About = () => {
  const scrollToJoin = () => {
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id='about' className="flex flex-col lg:flex-row justify-between items-center p-4 md:p-8 gap-8">
      <div className="w-full lg:w-1/2 max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
          Join The World Of Fitness.
        </h1>

        <p className="mb-6 md:mb-8 leading-relaxed text-left">
          Our aim is to bring more people into fitness so that every individual, family, society, and the whole nation...
        </p>

        <div className='flex gap-12 mb-8 md:mb-12'>
        <button 
          onClick={scrollToJoin}
          className="bg-yellow-400 text-black px-4 md:px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors"
        >
          Join Now
        </button>
          <button className="flex items-center hover:text-yellow-400 transition-colors">
            <FaRegPlayCircle className="mr-2 h-6 w-6 md:h-8 md:w-8" /> Watch video
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-6">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold mb-1 text-yellow-300">7</div>
            <div className="text-xs md:text-sm">Years experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold mb-1 text-yellow-300">25k+</div>
            <div className="text-xs md:text-sm">Happy customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold mb-1 text-yellow-300">95</div>
            <div className="text-xs md:text-sm">Expert trainers</div>
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
