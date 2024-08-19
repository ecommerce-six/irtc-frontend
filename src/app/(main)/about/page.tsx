import React from "react";

import {
  Strategy,
  AboutHero,
  Activities,
  Developers,
  Contributors,
} from "@/features/about";
import { InstagramPage, Testimonials } from "@/components";

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
