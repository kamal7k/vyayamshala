import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/api_urls';


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/users` }),

  endpoints: (builder) => ({

    addUser: builder.mutation({
      query: (q) => ({
        url: '/',
        body: q,
        method: 'POST',
      })
    }),

    getAllUsers: builder.query({

      query: (q) => ({
        url: '/',
        method: 'GET',
      }),
      providesTags: ['Users']
    }),

    removeUserById: builder.mutation({
      query: (q) => ({
        url: `${q.id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    })






  })




});

export const { useAddUserMutation, useGetAllUsersQuery, useRemoveUserByIdMutation } = userApi;