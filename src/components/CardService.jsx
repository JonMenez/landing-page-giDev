import * as React from "react";
import { motion } from "framer-motion";
import useView from "@hooks/useView";
import "@styles/cardService.scss";

const servicesVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
  },
};

const CardService = ({ services }) => {
  const { ref, controls } = useView();

  return (
    <motion.div
      ref={ref}
      className="services__card"
      variants={servicesVariant}
      initial="hidden"
      animate={controls}
    >
      <img className="services__icon" src={services.icon} alt={services.name} />
      <h3 className="services__name">{services.title}</h3>
      <p className="services__body">{services.content}</p>
    </motion.div>
  );
};

export default CardService;
