import { useDispatch, useSelector } from "react-redux";

import useAuth from "./useAuth";
import { StoreType } from "../store";
import { userType } from "../types/user";
import { userActions } from "../store/user-slice";
import useAxiosPrivate from "./useAxiosPrivate";

const useUser = () => {
  const dispatch = useDispatch();

  const axiosPrivate = useAxiosPrivate();

  const { auth } = useAuth();

  const user = useSelector((state: StoreType) => state.user.user);

  const setUser = (user: userType) => {
    dispatch(userActions.login(user));
  };

  const getUser = async () => {
    try {
      const response = await axiosPrivate.get("/users/me");
      console.log(auth);

      setUser(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return { user, setUser, getUser };
};

export default useUser;
