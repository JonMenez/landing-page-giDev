import * as React from "react";
import { motion } from "framer-motion";

const buttonVariant = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 1.5, type: "spring", duration: 0.5 },
  },
  exit: {
    scale: 0,
  },
};

const Button = (props) => {
  return (
    <motion.button
      className={props.class}
      variants={buttonVariant}
      type={props.type}
      onClick={props.click}
    >
      {props.name}
    </motion.button>
  );
};

export default Button;
