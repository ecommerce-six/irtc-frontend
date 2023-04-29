import axios from "../modules/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/users/refresh", {
      withCredentials: true,
    });

    setAuth({ accessToken: response.data.data.token });

    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
