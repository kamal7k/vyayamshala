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
    text: "Clean, Safe and sanitary environment to keep your stuffs."
  },

  {
    id: 2,
    name: "Lockers and towels",
    text: "Clean, Safe and sanitary environment to keep your stuffs."
  },

  {
    id: 3,
    name: "Lockers and towels",
    text: "Clean, Safe and sanitary environment to keep your stuffs."
  },

  {
    id: 4,
    name: "Lockers and towels",
    text: "Clean, Safe and sanitary environment to keep your stuffs."
  },

  {
    id: 5,
    name: "Lockers and towels",
    text: "Clean, Safe and sanitary environment to keep your stuffs."
  },

  {
    id: 6,
    name: "Lockers and towels",
    text: "Clean, Safe and sanitary environment to keep your stuffs."
  }
]

const Facilities = () => {
  return (
    <div className='my-10 p-8'>
      {/* Use grid-cols-3 for large screens, md:grid-cols-1 for medium and smaller screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {facilities.map((feature, id) => (
          <Card key={id} className="w-full max-w-[23rem] max-h-[175px] flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-[150px] h-[175px] shrink-0 rounded-r-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className='bg-black' >
              <Typography className="mb-2 text-gray-300 font-bold ">
                {feature.name}
              </Typography>
              <Typography className=" text-gray-500">
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
