import axios from "../modules/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/users/refresh", {
      withCredentials: true,
    });
    console.log("refresh", response);

    setAuth({ accessToken: response.data.accessToken });

    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
