import React from "react";

import Testimonials from "@/components/testimonials/testimonials";
import InstagramPage from "@/components/instagramPage/instagramPage";
import { AboutHero, Activities, Contributors, Developers, Strategy } from "@/features/about";


function About() {
  return (
    <main>
      <title>IRTC • درباره</title>

      <AboutHero />

      <InstagramPage />

      <Strategy />

      <Activities />

      <Contributors />

      <Developers />

      <Testimonials />
    </main>
  );
}

export default About;
