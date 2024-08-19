import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";

import { userStoreType, userType } from "@/types/user";

type userStateType = {
  user: userStoreType;
  loading: boolean;
};

const initialState: userStateType = {
  user: undefined,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: userStateType, action: { payload: userType }) => {
      const user = action.payload;

      state.user = user;
    },
    logout: (state: userStateType) => {
      state.user = null;
    },
    setLoading: (
      state: userStateType,
      action: {
        payload: boolean;
      }
    ) => {
      state.loading = action.payload;
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
