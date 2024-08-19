import { useSelector, useDispatch } from "react-redux";

import { StoreType } from "@/store";
import { setAuthType } from "@/types/auth";
import { authActions } from "@/store/auth-slice";

const useAuth = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state: StoreType) => state.auth);

  const setAuth = (newAuth: setAuthType) => {
    dispatch(authActions.setAuth({ ...auth, ...newAuth }));
  };

  const rememberMe = auth.rememberMe;

  return { auth, setAuth, rememberMe };
};

export default useAuth;
