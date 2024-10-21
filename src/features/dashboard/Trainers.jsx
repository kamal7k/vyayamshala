import React from 'react'
import { useGetAllTrainersQuery } from '../admin/admin-ui/trainersApi'
import { imageUrl } from '../../constants/api_urls';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Trainers = () => {

  const { data } = useGetAllTrainersQuery();

  console.log(data)

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Meet our Trainers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data && data.map((trainer, index) => {
          return (
            <Card className="w-full max-w-[60rem] flex-col bg-transparent items-center mb-7 cursor-pointer "
              shadow={false}

            >

              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src={`${imageUrl}${trainer.image}`}
                  alt="card-image"
                  className="h-44 w-[60rem] object-cover "
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="blue-gray" className="mb-2 uppercase">
                  {trainer.name}
                </Typography>


              </CardBody>
            </Card>

          )

        })}
      </div>
      <button className="mt-8 border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full">View All</button>
    </section>
  )
}

export default Trainers





/// <img src={trainer.image} alt={trainer.name} className=" mx-auto mb-2  h-70 object-cover" />
