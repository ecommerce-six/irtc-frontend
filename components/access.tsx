import { redirect } from "next/navigation";

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

  redirect("/404");
}

export default Access;
