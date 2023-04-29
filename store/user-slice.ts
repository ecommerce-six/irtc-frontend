import Cookies from "js-cookie";
import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import { userStoreType, userType } from "../types/user";

type initialStateType = {
  user: userStoreType;
};

const initialState: initialStateType = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: initialStateType, action: { payload: userType }) => {
      const user = action.payload;

      // save user info in browser
      // Cookies.set("userID", user.id.toString());

      // set user in redux store
      state.user = user;
    },
    logout: (state: initialStateType) => {
      // Cookies.remove("userID");

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
