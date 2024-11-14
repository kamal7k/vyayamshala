import React from 'react';
import Add from '../features/auth/Add';

const Join = () => {
  return (
    <div id='join' className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          What's <span className="text-yellow-600">Stopping</span> you?
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row items-stretch justify-center shadow-2xl rounded-lg overflow-hidden">
        {/* Image section */}
        <div className="md:w-1/2">
          <img
            src="./image/regi.jpg"
            alt="Fitness motivation"
            className="w-full h-full object-cover min-h-[400px]"
          />
        </div>
        
        {/* Form section */}
        <div className="md:w-1/2">
          <Add />
        </div>
      </div>
    </div>
  );
}

export default Join;