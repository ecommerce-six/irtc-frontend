import { StoreType } from "../store";
import { userType } from "../types/user";
import useAxiosPrivate from "./useAxiosPrivate";
import { userActions } from "../store/user-slice";
import { useDispatch, useSelector } from "react-redux";

const useUser = () => {
  const dispatch = useDispatch();

  const axiosPrivate = useAxiosPrivate();

  const user = useSelector((state: StoreType) => state.user.user);

  const setUser = (user: userType) => {
    dispatch(userActions.login(user));
  };

  const getUser = async () => {
    try {
      const response = await axiosPrivate.get("/users/me");

      setUser(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return { user, setUser, getUser };
};

export default useUser;
