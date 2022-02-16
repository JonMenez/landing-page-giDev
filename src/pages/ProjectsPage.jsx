import * as React from "react";
import { motion } from "framer-motion";
import BackButton from "@components/BackButton";
import CardProject from "@components/CardProject";
import "@styles/slider.scss";
import "@styles/projectsPage.scss";

const pageVariant = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const containerVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 1,
    },
  },
};

const ProjectsPage = () => {
  return (
    <motion.section
      className="projectsPage"
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <BackButton />
      <h1 className="projectsPage__title">Projects</h1>
      <motion.div
        className="projectsPage__container"
        variants={containerVariant}
      >
        <CardProject class={"projectsPage__card"} />
        <CardProject class={"projectsPage__card"} />
        <CardProject class={"projectsPage__card"} />
      </motion.div>
    </motion.section>
  );
};

export default ProjectsPage;
