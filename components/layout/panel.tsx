import { ReactNode, useState, useEffect } from "react";

import Navbar from "./navbar";
import Menu from "../menu/menu";
import ScrollToTop from "../scrollToTop";

import { styles } from "../../styles";
import Error404 from "../../pages/404";
import useUser from "../../hooks/useUser";

const PanelLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <Error404 />;
  }

  if (!user?.role || !hasMounted) return <Error404 />;

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
