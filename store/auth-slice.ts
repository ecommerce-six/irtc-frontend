import { createSlice } from "@reduxjs/toolkit";
import { setAuthType } from "../types/auth";

type authStateType = {
  role?: string | null;
  accessToken?: string | null;
};

const initialState: authStateType = {
  role: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state: authStateType, actions: { payload: setAuthType }) => {
      state = actions.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
