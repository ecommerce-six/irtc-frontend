import { createSlice } from "@reduxjs/toolkit";

type authStateType = {
  accessToken: string | null;
};

const initialState: authStateType = {
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state: authStateType, actions: { payload: string }) => {
      state.accessToken = actions.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
