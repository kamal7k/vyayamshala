import React from 'react'
import * as Yup from "yup";

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useAdminLoginMutation } from './adminApi';
import { addUser } from '../auth/userSlice';

export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

const AdminLogin = () => {

  const [loginAdmin, { isLoading }] = useAdminLoginMutation();

  const nav = useNavigate();
  const dispatch = useDispatch();

  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      email: "",
      password: ''
    },
    onSubmit: async (val) => {
      try {
        const response = await loginAdmin(val).unwrap();
        dispatch(addUser(response));
        toast.success('Successfully Logged In');
        nav("/admin-dashboard")



      } catch (err) {
        toast.error(err.data?.message);
      }
    },

    validationSchema: loginSchema

  },

  )

  return (
    <div className=" p-7 mx-auto w-[30rem] max-w-screen-lg sm:w-96">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>

        <form className="mt-5 mb-2 " onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">


            <Input
              size="lg"
              name="email"
              label="Email"
              onChange={handleChange}
              value={values.email}


            />

            {errors.email && touched.email && <h1 className="text-red-600">{errors.email}</h1>}



            <Input
              type="password"
              size="lg"
              name="password"
              onChange={handleChange}
              value={values.password}
              label="Password"

            />

            {errors.password && touched.password && <h1 className="text-red-600">{errors.password}</h1>}

          </div>

          <Button type="submit" className="mt-6" fullWidth>
            sign In
          </Button>

        </form>
      </Card>
    </div>
  )
}

export default AdminLogin