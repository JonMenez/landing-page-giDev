import * as React from 'react';
import FormContainer from '@containers/FormContainer';
import '@styles/form.scss'

const Form = () => {
  return (
      <section className='form'>
          <h1 className="form__title">Contact</h1>
          <p className="form__text">Hello again, this form will help you to give me a brief introduction on how I can help you in your project. Should you have any questions, do not hesitate to write them down. it will <span>only take you less than 3 minutes.</span></p>
          <FormContainer classForm='form__container'/>
      </section>
  )
};

export default Form;
