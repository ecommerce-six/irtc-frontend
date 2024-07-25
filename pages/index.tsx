import Header from "./head";
import {
  Hero,
  QAndA,
  Roadmap,
  Testimonials,
  LatestArticle,
  LatestCourses,
  InstagramPage,
  GraduatesCompanies,
} from "../components/home";
import MainLayout from "../components/layout/main";

function Home() {
  return (
    <main>
      <Header title="IRTC" />

      <Hero />

      <LatestArticle />

      <Roadmap />

      <LatestCourses />

      <GraduatesCompanies />

      <Testimonials />

      <InstagramPage />

      <QAndA />
    </main>
  );
}

Home.PageLayout = MainLayout;

export default Home;
