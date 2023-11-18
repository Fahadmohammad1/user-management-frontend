import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: null,
    first_name: null,
    last_name: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload.email;
      state.user.first_name = action.payload.first_name;
      state.user.last_name = action.payload.last_name;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
