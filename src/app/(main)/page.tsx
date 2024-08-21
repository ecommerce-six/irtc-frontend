import type { Metadata } from "next";

import {
  Hero,
  Roadmap,
  LatestArticles,
  GraduatesCompanies,
  FrequentlyAsked,
} from "@/features/home";
import { InstagramPage, Testimonials, LatestCourses } from "@/components";

export const metadata: Metadata = {
  title: "IRTC",
  description: "IRTC a website for learning trading",
};

function Home() {
  return (
    <main>
      <Hero />

      <LatestArticles />

      <Roadmap />

      <LatestCourses />

      <GraduatesCompanies />

      <Testimonials />

      <InstagramPage />

      <FrequentlyAsked />
    </main>
  );
}

export default Home;
