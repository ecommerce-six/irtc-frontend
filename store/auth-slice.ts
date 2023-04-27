import { createSlice } from "@reduxjs/toolkit";

import { setAuthType } from "../types/auth";

type authStateType = {
  rememberMe?: boolean;
  accessToken?: string | null;
};

const rememberMe = typeof window !== "undefined" && localStorage?.getItem("rememberMe");

const initialState: authStateType = {
  rememberMe: rememberMe === "true",
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state: authStateType, actions: { payload: setAuthType }) => {
      const payload = actions.payload;
      
      state.accessToken = payload.accessToken ?? state.accessToken;

      state.rememberMe = payload.rememberMe ?? state.rememberMe;

      if (payload.rememberMe) {
        localStorage.setItem("rememberMe", payload.rememberMe.toString());
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
