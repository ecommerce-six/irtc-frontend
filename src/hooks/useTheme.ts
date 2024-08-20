import { useDispatch, useSelector } from "react-redux";

import { StoreType } from "@/store";
import { themeActions } from "@/store/theme-slice";

const useTheme = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state: StoreType) => state.theme.theme);

  const toggleTheme = () => {
    dispatch(themeActions.toggleTheme());
  };

  const changeTheme = (newTheme: "light" | "dark") => {
    dispatch(themeActions.setTheme(newTheme));
  };

  return { theme, toggleTheme, changeTheme };
};

export default useTheme;
