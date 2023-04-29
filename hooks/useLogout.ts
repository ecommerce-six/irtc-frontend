import useAuth from "./useAuth";
import axios from "../modules/axios";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({ accessToken: null, rememberMe: false });

    try {
      await axios("/users/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
