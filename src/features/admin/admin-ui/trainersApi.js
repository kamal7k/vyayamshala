import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../constants/api_urls';



export const trainerApi = createApi({
  reducerPath: 'trainerApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/trainer` }),

  endpoints: (builder) => ({

    addTrainer: builder.mutation({
      query: (q) => ({
        url: '/',
        body: q.body,
        method: 'POST',
      }),
      invalidatesTags: ['Trainers']
    }),

    getAllTrainers: builder.query({

      query: (q) => ({
        url: '/',
        method: 'GET',
      }),
      providesTags: ['Trainers']
    }),

    removeTrainerById: builder.mutation({
      query: (q) => ({
        url: `/${q.id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Trainers']
    })



  })


});

export const { useGetAllTrainersQuery, useAddTrainerMutation, useRemoveTrainerByIdMutation } = trainerApi;