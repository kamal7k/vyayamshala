import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal } from "../../hooks/localStorage";



export const adminSlice = createSlice({
   name: "adminSlice"

   initialState: {
    user: getUserFromLocal
   }
})