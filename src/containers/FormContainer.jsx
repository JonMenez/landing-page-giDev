import * as React from "react";
import { motion } from "framer-motion";
import Input from "@components/Input";
import TextArea from "@components/TextArea";
import Button from "@components/Button";

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
      delay: 1,
    },
  },
};

const FormContainer = (props) => {
  const form = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      fullName: formData.get("name"),
      eMail: formData.get("email"),
      message: formData.get("message"),
    };
    console.log(data);
  };

  return (
    <motion.form
      className={props.classForm}
      variants={containerVariant}
      action={props.action}
      ref={form}
    >
      <Input
        classLabel="form__label"
        classInput="form__input"
        type={"text"}
        title={"Full Name"}
        name={"name"}
        placeholder={"Enter your name"}
      />
      <Input
        classLabel={"form__label"}
        classInput={"form__input"}
        type={"email"}
        title={"eMail"}
        name={"email"}
        placeholder={"Enter your email"}
      />
      <TextArea
        classLabel={"form__label"}
        classInput={"form__textarea"}
        title={"Message"}
        name={"message"}
        placeholder={"Please tell me how I can help you."}
      />
      <Button class={"form__submit"} name={"Submit"} click={handleSubmit} />
    </motion.form>
  );
};

export default FormContainer;
