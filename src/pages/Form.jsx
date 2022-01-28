import * as React from 'react';
import '@styles/form.scss'

const Form = () => {
  return (
      <section className='form'>
          <h1 className="form__title">Contact</h1>
          <form action="" className="form__container">
              <input type="text" className="form__input" />
              <label htmlFor="#" className="form__label">Full Name</label>
              <input type="text" className="form__input" />
              <label htmlFor="#" className="form__label">eMail</label>
              <textarea name="" id="" className="form__textarea"></textarea>
              <label htmlFor="#" className="form__title">Message</label>
          </form>
      </section>
  )
};

export default Form;
