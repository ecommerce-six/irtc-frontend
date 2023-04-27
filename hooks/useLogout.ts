import useAuth from "./useAuth";
import axios from "../modules/axios";
import useRefreshToken from "./useRefreshToken";

const useLogout = () => {
  const { setAuth } = useAuth();

  // const logout = async () => {
  //   setAuth({});

  //   try {
  //     const response = await axios("/users/logout", {
  //       withCredentials: true,
  //     });
  //     console.log(response);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const logout = useRefreshToken();

  return logout;
};

export default useLogout;
