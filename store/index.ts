// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./user-slice";
// import { createWrapper } from "next-redux-wrapper";

// const makeStore = () =>
//   configureStore({
//     reducer: {
//       user: userSlice.reducer,
//     },

//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: false,
//       }),
//   });

// export type AppStore = ReturnType<typeof makeStore>;

// export type AppState = ReturnType<AppStore["getState"]>;

// export const wrapper = createWrapper<AppStore>(makeStore);

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
