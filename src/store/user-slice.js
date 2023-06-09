import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const user = action.payload;

      state.user = user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
