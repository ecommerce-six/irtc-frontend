import Cookies from "js-cookie";
import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import { userStoreType, userType } from "../types/user";

type initialStateType = {
  user: userStoreType;
};

const user = Cookies.get("user");

const initialState: initialStateType = {
  user: user ? JSON.parse(user) : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: initialStateType, action: { payload: userType }) => {
      const user = action.payload;

      // save user info in browser
      Cookies.set("user", JSON.stringify(user));

      // set user in redux store
      state.user = user;
    },
    logout: (state: initialStateType) => {
      Cookies.remove("user");

      state.user = null;
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

export default userSlice.reducer;
