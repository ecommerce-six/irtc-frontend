import axios from "../modules/axios";
import { userType } from "../types/user";
import { useEffect, useState } from "react";

const useGetUsers = (page: number) => {
  const [users, setUsers] = useState<userType[]>([]);

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

  const data: { users: userType[]; fetchedCountPage: any } = { users, fetchedCountPage };

  return data;
};

export default useGetUsers;
