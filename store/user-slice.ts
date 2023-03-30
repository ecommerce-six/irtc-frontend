import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { HYDRATE } from "next-redux-wrapper";

type initialStateType = {
  user: string | null | undefined;
};

const initialState: initialStateType = {
  user: Cookies.get("user") ? Cookies.get("user") : null,
};

const userSlice = createSlice({
  name: "taskbar",
  initialState,
  reducers: {
    login: (state) => {
      state.user = "hello";

      Cookies.set("user", JSON.stringify({ role: "user" }));
    },
    logout: (state) => {
      state.user = "hello";

      Cookies.remove("user");
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
