import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../constants/api_urls";

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/admin` }),

  endpoints: (builder) => ({

    adminLogin: builder.mutation({
      query: (q) => ({
        url: '/',
        body: q,
        method: 'POST'
      })
    })
  }),
})

export const { useAdminLoginMutation } = adminApi;