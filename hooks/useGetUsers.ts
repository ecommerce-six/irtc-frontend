import { useEffect, useState } from "react";

import axios from "../modules/axios";
import { userType } from "../types/user";

const useGetUsers = (page: number) => {
  const [users, setUsers] = useState<userType[] | null>(null);

  const [fetchedCountPage, setFetchedCountPage] = useState<number>(3);

  useEffect(() => {
    const getUsersHandler = async () => {
      try {
        const response = await axios.get(`/users/?page=${page}`);

        const data = response.data.data;

        if (response.status === 200) {
          setUsers(data.users);

          setFetchedCountPage(data.pageCount);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getUsersHandler();
  }, [page]);

  return { users, fetchedCountPage };
};

export default useGetUsers;
