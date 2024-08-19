import type { Metadata } from "next";

import {
  Hero,
  QAndA,
  Roadmap,
  LatestArticle,
  LatestCourses,
  GraduatesCompanies,
} from "@/features/home";
import { InstagramPage, Testimonials } from "@/components";

export const metadata: Metadata = {
  title: "IRTC",
  description: "IRTC a website for learning trading",
};

function Home() {
  return (
    <main>
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

export default Home;
