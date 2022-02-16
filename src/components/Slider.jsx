import * as React from "react";
import { motion } from "framer-motion";
import CardProject from "@components/CardProject";
import "@styles/slider.scss";

const sliderVariant = {
  hidden: {
    x: 10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};

const Slider = (props) => {
  return (
    <motion.div className="slider" id={props.idStyle} variants={sliderVariant}>
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
    </motion.div>
  );
};

export default Slider;
