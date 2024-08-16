import { redirect } from "next/navigation";

import { styles } from "@/styles";
import useUser from "@/hooks/useUser";

const AuthLayout = ({ children }: { children: any }) => {
  const { user } = useUser();

  if (user?.role) {
    redirect("/");
  }

  return (
    <>
      <span className="purple-gradient" />

      <div className={styles.layout}>{children}</div>
    </>
  );
};
export default AuthLayout;
