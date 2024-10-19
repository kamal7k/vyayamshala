import React from 'react';
import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAddUserMutation } from "./userApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const loginSchema = Yup.object({
  fullname: Yup.string().required('Full name is required'),
  number: Yup.string().required('Contact number is required'),
});

const Login = () => {
  const [addUser, { isLoading }] = useAddUserMutation();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      fullname: '',
      number: '', // Update to number
    },
    onSubmit: async (val) => {
      try {
        const response = await addUser(val).unwrap();
        dispatch(addUser(response)); // Ensure you have a proper action for this
        toast.success('Successfully Logged In');
        nav(-1);
      } catch (err) {
        console.error(err);
        const errorMessage = err.data?.message || 'An error occurred';
        toast.error(errorMessage);
      }
    },
    validationSchema: loginSchema,
  });

  return (
    <div className="p-4 w-80 max-w-screen-lg sm:w-96">
      <div color="white" shadow={false}>
        <h3 className="text-xl font-bold mb-4">Become a part of our family</h3>
        <p className="mb-4">Leave your details and we will get back to you!</p>

        <form className="mt-5 mb-2" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              name="fullname"
              onChange={handleChange}
              size="lg"
              value={values.fullname}
              label="Full Name"
              placeholder="Enter your full name"
            />
            {errors.fullname && touched.fullname && <h1 className='text-red-600'>{errors.fullname}</h1>}

            <Input
              type="text" // Changed to text
              size="lg"
              name="number" // Update to number
              onChange={handleChange}
              value={values.number} // Update to reflect number
              placeholder="Enter your contact number"
              label="Contact Number"
            />
            {errors.number && touched.number && <h1 className='text-red-600'>{errors.number}</h1>}
          </div>

          <Button loading={isLoading} type="submit" className="mt-4 bg-yellow-900" fullWidth>
            Join
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
