import * as React from "react";
import { motion } from "framer-motion";
import FormContainer from "@containers/FormContainer";
import BackButton from "@components/BackButton";
import "@styles/form.scss";

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

const Form = () => {
  return (
    <motion.section
      className="form"
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <BackButton />
      <h1 className="form__title">Contact</h1>
      <p className="form__text">
        Hello again, this form will help you to give me a brief introduction on
        how I can help you in your project. Should you have any questions, do
        not hesitate to write them down. it will{" "}
        <span>only take you less than 3 minutes.</span>
      </p>
      <FormContainer classForm="form__container" />
    </motion.section>
  );
};

export default Form;
