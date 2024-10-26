import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const facilities = [
  {
    id: 1,
    name: "Lockers and towels",
    text: "Clean, Safe and sanitary environment to keep your stuff.",
    image: "https://images.unsplash.com/photo-1641236475922-4537ef0b974e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMGNlbnRlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    name: "Peaceful enviroment",
    text: "Workout in clean peaceful enviroment.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zml0bmVzcyUyMGNlbnRlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    name: "Personal trainer",
    text: "Get the best training with personalized programs.",
    image: "https://plus.unsplash.com/premium_photo-1661284900398-60575fc310e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzcyfHxmaXRuZXNzJTIwY2VudGVyfGVufDB8fDB8fHww"
  },
  {
    id: 4,
    name: "Hightech Gym",
    text: "Build yourself with best available equipment in the market.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGZpdG5lc3MlMjBjZW50ZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5,
    name: "Group Classes",
    text: "Join our fitness group classes for a fun experience.",
    image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZpdG5lc3MlMjBjZW50ZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    name: "Complimentary Drinks",
    text: "We make sure you stay hydrated and push your limit",
    image: "https://images.unsplash.com/photo-1495638488670-437e54b3bab4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDEwfHxmaXRuZXNzJTIwY2VudGVyfGVufDB8fDB8fHww"
  }
]

const Facilities = () => {
  return (
    <div className='my-8 md:my-10 p-4 md:p-8'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl md:text-3xl font-bold'>
          Our <span className='text-yellow-500'>facilities</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {facilities.map((feature) => (
          <Card key={feature.id} className="w-full flex flex-col sm:flex-row rounded-none">
            <CardHeader
              shadow={false}
              floated={false}
              className="relative m-0 rounded-none w-full sm:w-[150px] h-[200px] sm:h-[175px] overflow-hidden shrink-0"
            >
              <img
                src={feature.image}
                alt={feature.name}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className='bg-black flex-1'>
              <Typography className="mb-2 text-gray-300 font-bold">
                {feature.name}
              </Typography>
              <Typography className="text-gray-500">
                {feature.text}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
