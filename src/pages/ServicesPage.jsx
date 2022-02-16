import * as React from "react";
import { motion } from "framer-motion";
import "@styles/servicesPage.scss";

const pageVariant = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const ServicesPage = () => {
  return (
    <motion.section
      className="servicesPage"
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="servicesPage__title">Services</h1>
      Work in process
    </motion.section>
  );
};

export default ServicesPage;
