import React from 'react'
import { Input, Button } from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useAddUserMutation } from './userApi';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Add = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [addUsers, { isLoading }] = useAddUserMutation();
  
  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      fullname: '',
      number: '',
    },
    onSubmit: async (val) => {
      try {
        const response = await addUsers(val).unwrap();
        toast.success('Congratulations! Your membership form has been submitted. ');
        nav(-1);
      } catch (err) {
        console.error(err);
        const errorMessage = err.data?.message || 'An error occurred';
        toast.error(errorMessage);
      }
    },
  });

  return (
    <div className="h-full flex flex-col justify-center p-6 md:p-8 bg-gray-200">
      <div className='text-black'>
        <h3 className="text-2xl font-bold mb-3">Become a part of our family</h3>
        <p className="mb-6 text-gray-700">Leave your details and we will get back to you!</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Input
                name="fullname"
                onChange={handleChange}
                size="lg"
                value={values.fullname}
                label="Full Name"
                placeholder="Enter your full name"
                className='!w-full'
              />
              {errors.fullname && touched.fullname && 
                <p className='text-red-600 text-sm mt-1'>{errors.fullname}</p>
              }
            </div>

            <div>
              <Input
                type="number"
                size="lg"
                name="number"
                onChange={handleChange}
                value={values.number}
                placeholder="Enter your contact number"
                label="Contact Number"
                className='!w-full'
              />
              {errors.number && touched.number && 
                <p className='text-red-600 text-sm mt-1'>{errors.number}</p>
              }
            </div>
          </div>

          <Button 
            loading={isLoading} 
            type="submit" 
            className="mt-6 bg-yellow-700  hover:bg-yellow-800 transition-colors w-40"
          >
            Join Now
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Add;