import { axiosPrivate } from "../modules/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
  const { auth } = useAuth();

  const refresh = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          // config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
          config.headers[
            "Authorization"
          ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzAsInBob25lTnVtYmVyIjoiMDk5MDg2NzAyNzQiLCJlbWFpbCI6InZ0aW9AZ21haWwuY29tIiwiaWF0IjoxNjgyMjM4OTc1LCJleHAiOjE2ODIzMjUzNzV9.hn1b-bOG4kyIL9ZY2BPwzVBLC_UG5D-O_eE0-PjLnjY`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          // prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          prevRequest.headers[
            "Authorization"
          ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzAsInBob25lTnVtYmVyIjoiMDk5MDg2NzAyNzQiLCJlbWFpbCI6InZ0aW9AZ21haWwuY29tIiwiaWF0IjoxNjgyMjM4OTc1LCJleHAiOjE2ODIzMjUzNzV9.hn1b-bOG4kyIL9ZY2BPwzVBLC_UG5D-O_eE0-PjLnjY`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
