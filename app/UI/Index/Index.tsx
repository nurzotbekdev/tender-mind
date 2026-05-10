"use client";

import Blog from "./Blog/blog";
import Contact from "./Contact/contact";
import Faqs from "./Faqs/faqs";
import Features from "./Features/features";
import Hero from "./Hero/hero";
import HowItWorks from "./HowItWorks/howItWorks";
import Marquee from "./Marquee/marquee";
import Pricing from "./Pricing/pricing";
import Testimonials from "./Testimonials/testimonials";

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <Features />
      <HowItWorks />
      <Pricing />
      <Faqs />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}

export default Index;
