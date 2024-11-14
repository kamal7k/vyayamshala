import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUser } from "../../hooks/localStorage";



export const adminSlice = createSlice({
  name: "adminSlice",

  initialState: {
    user: getUserFromLocal()
  },
  reducers: {
    addAdmin: (state, action) => {
      state.user = action.payload;
      setUser(state.user);
    }
  }
});

export const { addAdmin } = adminSlice.actions;

