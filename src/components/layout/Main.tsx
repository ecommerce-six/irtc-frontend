import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "../ScrollToTop";

import { styles } from "@/styles";

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
