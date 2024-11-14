import React from 'react';
import { useGetAllTrainersQuery } from '../features/admin/admin-ui/trainersApi';
import { imageUrl } from '../constants/api_urls';


const Detail = () => {
  const { data } = useGetAllTrainersQuery();
  console.log(data)

  return (
    <div className="p-8 bg-black min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white">All <span className="text-yellow-500">Trainers</span> Detail</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data && data.map((trainer) => (
          <div key={trainer._id} className="p-6 border border-gray-200 rounded-lg bg-gray-300 shadow-md">
            <img
              src={`${imageUrl}${trainer.image}`}
              alt={trainer.name}
              className="h-64 w-full object-contain mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2 text-center">{trainer.name}</h3>
            <h4 className="text-gray-900 mb-1 text-center">Email: {trainer.email}</h4>
            <p className="text-gray-700 mb-1 text-center">{trainer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
