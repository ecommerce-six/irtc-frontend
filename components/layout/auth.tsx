import { useSelector } from "react-redux";
import { styles } from "../../styles";

import { useRouter } from "next/navigation";
import { StoreType } from "../../store";

const AuthLayout = ({ children }: { children: any }) => {
  const router = useRouter();

  const loggedIn = useSelector((state: StoreType) => state.user.user?.role);

  if (loggedIn) {
    router.push("/");
  }

  return (
    <>
      <span className="purple-gradient" />

      <div className={styles.layout}>{children}</div>
    </>
  );
};
export default AuthLayout;
