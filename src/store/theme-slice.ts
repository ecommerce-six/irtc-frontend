import { createSlice } from "@reduxjs/toolkit";

import { themeStateType, themeType } from "@/types/theme";

const initialState: themeStateType = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;

      localStorage.setItem("theme", action.payload);
    },
    toggleTheme: (state) => {
      let newTheme: themeType;

      if (state.theme === "light") {
        newTheme = "dark";
      } else {
        newTheme = "light";
      }

      state.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
