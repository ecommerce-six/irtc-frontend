import Hero from "../components/home/hero";
import QAndA from "../components/home/Q&A";
import Roadmap from "../components/home/roadmap";
import Testmonials from "../components/home/testimonials";
import LatestArticle from "../components/home/latestArticle";
import LatestCourses from "../components/home/latestCourses";
import InstagramPage from "../components/home/instagramPage";
import GraduatesCompanies from "../components/home/graduatesCompanies";
import MainLayout from "../components/layout/main";
import Head from "next/head";
import Header from "./head";

function Home() {
  return (
    <main className="">
      <Header title="IRTC" />

      <Hero />

      <LatestArticle />

      <Roadmap />

      <LatestCourses />

      <GraduatesCompanies />

      <Testmonials />

      <InstagramPage />

      <QAndA />
    </main>
  );
}

Home.PageLayout = MainLayout;

export default Home;
