import axios from "../modules/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const [auth, setAuth] = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });

    setAuth(response.data.accessToken);

    return response.data.accessToken;
  };
  
  return refresh;
};

export default useRefreshToken;
