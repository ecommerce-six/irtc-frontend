import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ScrollToTop from "@/components/scrollToTop";
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
