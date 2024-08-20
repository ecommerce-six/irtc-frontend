import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user-slice";
import authSlice from "./auth-slice";
import themeSlice from "./theme-slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production", // disable devTools in production
});

export type StoreType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
