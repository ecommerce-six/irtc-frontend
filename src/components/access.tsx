"use client";

import Error404 from "@/components/404";

import useUser from "@/hooks/useUser";

type props = {
  admin?: true;
  author?: true;
  children: any;
  normalUser?: true;
};

function Access({ admin, author, normalUser, children }: props) {
  const { user } = useUser();

  const role: string | undefined = user?.role;

  if (role === "admin" && admin) {
    return children;
  }
  if (role === "author" && author) {
    return children;
  }
  if (role === "user" && normalUser) {
    return children;
  }

  return <Error404 />;
}

export default Access;
