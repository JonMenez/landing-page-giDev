import * as React from "react";
import { motion } from "framer-motion";
import Hero from "@containers/Hero";
import Services from "@containers/Services";
import Projects from "@containers/Projects";
import Feedback from "@containers/Feedback";
import Contact from "@containers/Contact";

const pageVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeInOut",
      delayChildren: 5,
      staggerChildren: 5,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Hero />
      <Services />
      <Projects />
      <Feedback />
      <Contact />
    </motion.div>
  );
};

export default Home;
