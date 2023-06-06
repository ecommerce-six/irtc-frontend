import useAuth from "./useAuth";
import axios from "../modules/axios";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";

const useLogout = () => {
  const { setAuth } = useAuth();

  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await axios("/users/logout", {
        withCredentials: true,
      });

      setAuth({ accessToken: null, rememberMe: false });

      localStorage.removeItem("rememberMe");

      dispatch(userActions.logout());
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
