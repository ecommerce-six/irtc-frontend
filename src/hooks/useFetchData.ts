"use client";
import { useEffect, useState } from "react";

import useAuth from "./useAuth";
import { axiosPrivate } from "@/configs/axios";

const useFetchData = (URL: string, page: number = 1, limit?: number) => {
  const [data, setData] = useState<any | null>(null);

  const { auth } = useAuth();

  const [fetchedCountPage, setFetchedCountPage] = useState<number>(3);

  useEffect(() => {
    const getUsersHandler = async () => {
      try {
        const response = await axiosPrivate.get(`${URL}`, {
          params: {
            page: page,
            limit: limit ?? 10,
          },
        });

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
  }, [URL, page, auth.accessToken, limit]);

  const fetchedData: { data: any; fetchedCountPage: any } = {
    data,
    fetchedCountPage,
  };

  return fetchedData;
};

export default useFetchData;
