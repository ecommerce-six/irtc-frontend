import { axiosPrivate } from "../modules/axios";
import { userType } from "../types/user";
import { useEffect, useState } from "react";

const useGetDataArray = (URL: string, page: number) => {
  const [data, setData] = useState<userType[]>([]);

  const [fetchedCountPage, setFetchedCountPage] = useState<number>(3);

  useEffect(() => {
    console.log("get articles run");

    const getUsersHandler = async () => {
      try {
        const response = await axiosPrivate.get(`${URL}/?page=${page}`);

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
  }, [URL, page]);

  const fetchedData: { data: any; fetchedCountPage: any } = { data, fetchedCountPage };

  return fetchedData;
};

export default useGetDataArray;
