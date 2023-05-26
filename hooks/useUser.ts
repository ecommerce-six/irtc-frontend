import { StoreType } from "../store";
import { userType } from "../types/user";
import useAxiosPrivate from "./useAxiosPrivate";
import { userActions } from "../store/user-slice";
import { useDispatch, useSelector } from "react-redux";

const useUser = () => {
  const dispatch = useDispatch();

  const axiosPrivate = useAxiosPrivate();

  const user: userType | null | undefined = useSelector((state: StoreType) => state.user.user);

  const loading: boolean = useSelector((state: StoreType) => state.user.loading);

  const setUser = (user: userType) => {
    dispatch(userActions.login(user));
  };

  const setLoading = (loading: boolean) => {
    dispatch(userActions.setLoading(loading));
  };

  const getUser = async () => {
    try {
      setLoading(true);

      const response = await axiosPrivate.get("/users/me");

      setUser(response.data.data);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return { user, setUser, getUser, loading, setLoading };
};

export default useUser;
