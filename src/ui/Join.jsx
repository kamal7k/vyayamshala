import React from 'react';
import Add from '../features/auth/Add';

const Join = () => {
  return (
    <div className="p-8">
      <div className="mb-8 flex justify-center">
        <h2 className="text-4xl font-bold mb-4">What's <span className="text-yellow-600">Stopping</span> you?</h2>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 w-full">
        
        {/* Image section */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
          <img 
            src="./image/regi.jpg" 
            alt="Fitness motivation" 
            className="w-full h-96 object-cover" 
          />
        </div>

        {/* Form section */}

          <Add />

      </div>
    </div>
  );
}

export default Join;
