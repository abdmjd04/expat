"use client";

import { motion } from "framer-motion";
import AboutPreview from "./components/sections/AboutPreview";
import ContactCTA from "./components/sections/ContactCTA";
import Hero from "./components/sections/Hero";
import Newsletter from "./components/sections/Newsletter";
import ServiceHighlights from "./components/sections/ServiceHighlights";
import Testimonials from "./components/sections/Testimonials";

const Home = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="w-full"
    >
      <Hero />
      <ServiceHighlights />
      <AboutPreview />
      <Testimonials />
      <ContactCTA />
      <Newsletter />
    </motion.div>
  );
};
export default Home;
