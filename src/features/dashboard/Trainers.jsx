import React from 'react'
import { useGetAllTrainersQuery } from '../admin/admin-ui/trainersApi'
import { imageUrl } from '../../constants/api_urls';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,

} from "@material-tailwind/react";
import { useNavigate } from 'react-router';

const Trainers = () => {

  const nav = useNavigate();

  const { data } = useGetAllTrainersQuery();

  // console.log(data)

  return (
    <div className="p-8">
      <div className='text-center mb-12'>
        <h2 className="text-3xl font-bold mb-4">Meet our <span className='text-yellow-500'>Trainers</span></h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {data && data.map((trainer, index) => {
          return (
            <Card key={index} className="w-full max-w-[60rem] flex-col bg-transparent items-center cursor-pointer "
              shadow={false}
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-full shrink-0 rounded-r-none"
              >
                <img
                  src={`${imageUrl}${trainer.image}`}
                  alt="card-image"
                  className="h-64 w-[60rem] object-cover "
                />
              </CardHeader>
              <CardBody>
                <Typography variant="lead" color="white" className="mb-2">
                  {trainer.name}
                </Typography>
              </CardBody>
            </Card>

          )

        })}
      </div>
      <button onClick={() => nav('/details')} className="mt-8 border border-yellow-400 text-yellow-400  px-6 py-2 rounded-full hover:bg-gray-900">View All</button>
    </div>
  )
}

export default Trainers





/// <img src={trainer.image} alt={trainer.name} className=" mx-auto mb-2  h-70 object-cover" />
