import { axiosPrivate } from "../modules/axios";
import { userType } from "../types/user";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useGetDataArray = (URL: string, page: number, limit?: number) => {
  const [data, setData] = useState<userType[]>([]);

  const { auth } = useAuth();

  const [fetchedCountPage, setFetchedCountPage] = useState<number>(3);

  useEffect(() => {
    console.log("get articles run");

    const getUsersHandler = async () => {
      try {
        const response = await axiosPrivate.get(`${URL}/?page=${page}`);
        // const response = await axiosPrivate.get(`${URL}/?page=${page}&limit=${limit}`);

        console.log(response);

        const data = response.data.data;

        if (response.status === 200) {
          setData(data);

          setFetchedCountPage(data.pageCount);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getUsersHandler();
  }, [URL, page, auth.accessToken]);

  const fetchedData: { data: any; fetchedCountPage: any } = { data, fetchedCountPage };

  return fetchedData;
};

export default useGetDataArray;
