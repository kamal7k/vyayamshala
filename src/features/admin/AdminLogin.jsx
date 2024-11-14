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
import { addAdmin } from './adminSlice';

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
        dispatch(addAdmin(response));
        toast.success('Successfully Logged In');
        nav("/admin-dashboard");
      } catch (err) {
        toast.error(err.data?.message);
      }
    },
    validationSchema: loginSchema
  });

  return (
    <div className="p-4 mx-auto mt-20 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
      <Card color="transparent" shadow={true}>
        <div className="bg-black p-4 rounded-md">
          <Typography
            variant="h4"
            color="white"
            className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Admin Login
          </Typography>
        </div>

        <form className="mt-6 mb-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-8">
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
              label="Password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password && <h1 className="text-red-600">{errors.password}</h1>}
          </div>

          <Button type="submit" className="mt-8 hover:bg-gray-900" fullWidth>
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AdminLogin;
