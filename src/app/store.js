import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/auth/userApi";
import { userSlice } from "../features/auth/userSlice";
import { adminApi } from "../features/admin/adminApi";
import { trainerApi } from "../features/admin/admin-ui/trainersApi";





export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [trainerApi.reducerPath]: trainerApi.reducer,

    [userSlice.name]: userSlice.reducer,


  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat([

    userApi.middleware,
    adminApi.middleware,
    trainerApi.middleware


  ])
})