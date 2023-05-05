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
      if (actions.payload.accessToken) {
        state.accessToken = actions.payload.accessToken?.toString();
      }

      if (actions.payload.rememberMe) {
        state.rememberMe = actions.payload.rememberMe ?? state.rememberMe;

        localStorage.setItem("rememberMe", actions.payload.rememberMe.toString());
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
