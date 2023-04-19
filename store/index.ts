import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user-slice";
import authSlice from "./auth-slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type StoreType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
