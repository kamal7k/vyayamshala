import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,

} from "@material-tailwind/react";

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAddTrainerMutation } from './trainersApi';




const AddTrainer = () => {

  const nav = useNavigate();

  const [addTrainer, { isLoading }] = useAddTrainerMutation();






  const { values, handleChange,
    handleSubmit, errors, setFieldValue, touched } = useFormik({

      initialValues: {
        name: '',
        email: '',
        description: '',
        image: null,
        imageReview: ''

      },

      onSubmit: async (val, { resetForm }) => {

        const formData = new FormData();
        formData.append('name', val.name);
        formData.append('email', val.email);
        formData.append('image', val.image);
        formData.append('description', val.description)


        try {

          console.log(formData)

          await addTrainer({body: formData}).unwrap();

          toast.success('trainer added successfully');
          nav(-1);


        } catch (err) {
          toast.error(`${err.data?.message}`);

        }



      },
      // validationSchema: trainerSchema

    });



  return (
    <Card color="transparent" shadow={false} className="max-w-sm  mx-auto mt-4 mb-4">
      <Typography className="bg-blue-gray-500 text-center text-white px-6 py-2 rounded-md mb-4" variant="h4" color="blue-gray">
        Add Trainer
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">

          <Input
            size="lg"
            label="Name"
            name="name"
            onChange={handleChange}
          />
          {errors.name && touched.name && <h1 className='text-pink-700'>{errors.name}</h1>}

          <Input
            size="lg"
            type="email"
            label="Email"
            name="email"
            onChange={handleChange}
          />
          {errors.email && touched.email && <h1 className='text-pink-700'>{errors.email}</h1>}



          <div className='space-y-2'>
            <h1>Select An Image</h1>

            <Input
              label="Image File"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setFieldValue('imageReview', URL.createObjectURL(file));
                  setFieldValue('image', file); // file object assigned here
                }
              }}
              type='file'
              name='image'
              multiple
              accept='image/*'
            />
            {errors.image && touched.image && <h1 className='text-pink-700'>{errors.image}</h1>}
            {values.imageReview && <img src={values.imageReview} alt="" />}
          </div>

          <textarea
            className="border border-gray-300 p-3 rounded-lg h-32 resize-none"
            placeholder="Description"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          {errors.description && touched.description && <h1 className='text-pink-700'>{errors.description}</h1>}


        </div>

        <Button loading={isLoading}type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}

export default AddTrainer