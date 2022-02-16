import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useView from "@hooks/useView";
import wave1 from "@icons/p1-wave.svg";
import wave2 from "@icons/p2-wave.svg";
import Slider from "@components/Slider";
import "@styles/projects.scss";

const containerVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const titleVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Projects = () => {
  const { ref, controls } = useView();

  return (
    <motion.div
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={controls}
    >
      <img className="projects__wave1" src={wave1} alt="svg wave" />
      <section className="projects">
        <div className="projects__container">
          <motion.h2 className="projects__title" variants={titleVariant}>
            My lastest Projects
          </motion.h2>
          <Slider idStyle="projects__slider" />
          <Link to="/projects" className="projects__more">
            See all
          </Link>
        </div>
      </section>
      <img className="projects__wave2" src={wave2} alt="svg wave" />
    </motion.div>
  );
};

export default Projects;
