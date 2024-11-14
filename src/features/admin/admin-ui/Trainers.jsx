import React from 'react'
import { useAddTrainerMutation, useGetAllTrainersQuery, useRemoveTrainerByIdMutation } from './trainersApi'
import { Link } from 'react-router-dom';
import { Avatar, Card, Typography, Button } from "@material-tailwind/react";
import { imageUrl } from '../../../constants/api_urls';
import { toast } from 'react-toastify';

const Trainers = () => {

  const TABLE_HEAD = ["Image", "Name", "Email", "Description", "", ""];

  const { isLoading, data } = useGetAllTrainersQuery();

  const [removeTrainer, { isLoading: isDeleting }] = useRemoveTrainerByIdMutation();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this trainer?");
    if (confirmDelete) {
      try {
        await removeTrainer({ id }).unwrap();
        toast.success("Trainer deleted Successfully");

      } catch (error) {
        toast.error(`Error: ${error.data?.message || "Unable to delete trainer"}`)
      }
    }
  }

  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold">List of Trainers</h1>
        <Link to={'/add-trainer'}>
          <Button className="py-3 px-4" color="deep-purple">Add Trainer</Button>
        </Link>
      </div>

      <Card className="max-w-full overflow-x-auto">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th key={index} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map(({ name, image, email, description, _id }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Avatar src={`${imageUrl}${image}`} alt="avatar" />
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {name}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {email}
                    </Typography>
                  </td>


                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {description}
                    </Typography>
                  </td>
                  <td className={`w-24 ${classes}`}> {/* Set fixed width for Edit column */}
                    <Link to={`/trainer-edit/${_id}`} >
                      <Button className="pl-8 pr-8" color="green" size="md">Edit</Button>
                    </Link>
                  </td>
                  <td className={`w-24 ${classes}`}> {/* Set fixed width for Delete column */}
                    <Button onClick={() => handleDelete(_id)} disabled={isDeleting}
                      //Disable button while deleting 
                      color="red" size="md">{isDeleting ? "Deleting..." : "Delete"}</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default Trainers