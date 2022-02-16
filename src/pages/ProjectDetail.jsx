import * as React from "react";
import { motion } from "framer-motion";
import BackButton from "@components/BackButton";
import projectImg from "@images/project.jpeg";
import projectPageImg from "@images/project-page.jpeg";
import "@styles/projectDetail.scss";

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
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const ProjectDetail = () => {
  return (
    <motion.section
      className="projectDetail"
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <BackButton
        style={{
          filter: "invert(100%)",
          marginTop: ".5rem",
        }}
      />
      <div className="projectDetail__img">
        <img src={projectImg} alt="Project image reference" />
      </div>
      <h1 className="projectDetail__title">Project One</h1>
      <p className="projectDetail__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates
        vel quo aut, tempore pariatur labore at assumenda natus dolore?
      </p>
      <div className="projectDetail__img2">
        <img src={projectPageImg} alt="Project image reference" />
      </div>
      <p className="projectDetail__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates
        vel quo aut, tempore pariatur labore at assumenda natus dolore?
      </p>
    </motion.section>
  );
};

export default ProjectDetail;
