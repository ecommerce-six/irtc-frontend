import Error404 from "../pages/404";

type props = {
  user?: true;
  admin?: true;
  author?: true;
  children: any;
};

function Access({ admin, author, user, children }: props) {
  const role: string = "admin";

  if (role === "admin" && admin) {
    return children;
  }
  if (role === "author" && author) {
    return children;
  }
  if (role === "user" && user) {
    return children;
  }

  return <Error404 />;
}

export default Access;
