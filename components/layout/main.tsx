import Footer from "./footer";
import Navbar from "./navbar";
import ScrollToTop from "../scrollToTop";

import { styles } from "../../styles";

const MainLayout = ({ children }: { children: any }) => {
  return (
    <>
      <span className="purple-gradient" />
      <Navbar />

      <div className={styles.layout}>{children}</div>

      <ScrollToTop />

      <Footer />
    </>
  );
};
export default MainLayout;
