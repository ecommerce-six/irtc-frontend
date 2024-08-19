import { ScrollToTop } from "@/components";
import { Footer, Navbar } from "@/components/layout";

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
