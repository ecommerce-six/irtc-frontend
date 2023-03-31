import { ReactNode, useState, useEffect } from "react";

import Navbar from "./navbar";
import Menu from "../menu/menu";
import { StoreType } from "../../store";
import ScrollToTop from "../scrollToTop";
import { useSelector } from "react-redux";

import { userStoreType } from "../../types/user";

import { styles } from "../../styles";
import Error404 from "../../pages/404";

const PanelLayout = ({ children }: { children: ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  let loggedIn: userStoreType = useSelector((state: StoreType) => state.user.user);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <Error404 />;
  }

  if (!loggedIn || !hasMounted) return <Error404 />;

  return (
    <>
      <span className="purple-gradient" />
      <Navbar />

      <div className={`${styles.layout} pb-6 flex flex-col lg:flex-row gap-5`}>
        <Menu />

        <div className="w-full">{children}</div>
      </div>

      <ScrollToTop />
    </>
  );
};
export default PanelLayout;
