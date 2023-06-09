import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, actions) => {
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
