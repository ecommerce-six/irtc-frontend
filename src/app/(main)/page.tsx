import {
  Hero,
  Roadmap,
  LatestArticles,
  GraduatesCompanies,
  FrequentlyAsked,
} from "@/features/home";
import { InstagramPage, Testimonials, LatestCourses } from "@/components";

function Home() {
  return (
    <main>
      <title>IRTC</title>
      <meta name="description" content="IRTC a website for learning trading" />

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
