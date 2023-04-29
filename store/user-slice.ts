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

      state.user = user;
    },
    logout: (state: initialStateType) => {
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
