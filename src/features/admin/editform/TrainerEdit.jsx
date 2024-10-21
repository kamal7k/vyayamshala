import React from 'react'
import { useParams } from 'react-router';
import { useGetTrainerByIdQuery } from '../admin-ui/trainersApi';
import TrainerEditForm from './TrainerEditForm';

const TrainerEdit = () => {

  const { id } = useParams();
  const { isLoading, data } = useGetTrainerByIdQuery(id);
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  console.log(data)

  return (
    <div>
      <TrainerEditForm trainer={data} />

    </div>
  )
}

export default TrainerEdit

