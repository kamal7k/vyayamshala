import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,

} from "@material-tailwind/react";

import { useFormik } from 'formik';
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useUpdateTrainerByIdMutation } from '../admin-ui/trainersApi';
import * as Yup from "yup"
import { imageUrl } from '../../../constants/api_urls';

export const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

// const trainerSchema = Yup.object({
//   name: Yup.string().required(),
//   email: Yup.string().email().required(),
//   image: Yup.mixed().required().test('fileType', 'invalid image', (e) => {
//     return ['image/jpg', 'image/png', 'image/jpeg'].includes(e.type);
//   })
// });

const TrainerEditForm = ({ trainer }) => {
  const nav = useNavigate();

  const [editTrainer, { isLoading }] = useUpdateTrainerByIdMutation();


  const { values, handleChange,
    handleSubmit, errors, setFieldValue, touched } = useFormik({

      initialValues: {
        name: trainer.name,
        email: trainer.email,
        image: null,
        imageReview: trainer.image

      },

      onSubmit: async (val, { resetForm }) => {

        const formData = new FormData();
        formData.append('name', val.name);
        formData.append('email', val.email);



        try {
          if (val.image === null) {
            await editTrainer({
              body: formData,
              id: trainer._id
            }).unwrap();
            toast.success("Trainer added successfully")
            nav(-1);
          } else {
            if (validTypes.includes(val.image.type)) {
              formData.append('image', val.image);

              await editTrainer({
                body: formData,
                id: trainer._id
              }).unwrap();
              toast.success("Trainer Updated Successfully");
              nav(-1);
            } else {
              console.log('Please Provide Image');
            }
          }
        } catch (err) {
          toast.error(`${err.data?.message}`);
        }



      },
      // validationSchema: trainerSchema

    });



  return (
    <Card color="transparent" shadow={false} className="max-w-sm  mx-auto mt-4 mb-4">
      <Typography className="bg-blue-gray-500 text-center text-white px-6 py-2 rounded-md mb-4" variant="h4" color="blue-gray">
        Edit Trainer
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">

          <Input
            size="lg"
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && <h1 className='text-pink-700'>{errors.name}</h1>}

          <Input
            size="lg"
            type="email"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && <h1 className='text-pink-700'>{errors.email}</h1>}



          <div className='space-y-2'>
            <h1>Select An Image</h1>

            <Input
              label="Image File"
              onChange={(e) => {
                const file = e.target.files[0];
                setFieldValue('imageReview', URL.createObjectURL(file))
                setFieldValue('image', file);

              }}
              type='file'
              name='image'

              multiple
              accept='image/*'
            />
            {errors.image && touched.image && <h1 className='text-pink-700'>{errors.image}</h1>}
            {values.imageReview && <img src={values.image === null ? `${imageUrl}${values.imageReview}` : values.imageReview} alt="" />}
          </div>


        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}

export default TrainerEditForm