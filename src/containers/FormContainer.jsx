import * as React from 'react';
import Input from '@components/Input';
import TextArea from '@components/TextArea';
import Button from '../components/Button';

const FormContainer = (props) => {

  const form = React.useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current);
    const data = {
      fullName: formData.get('name'),
      eMail:    formData.get('email'),
      message:  formData.get('message')
    }
    console.log(data)
  }


  return (
      <form action={ props.action } className={props.classForm} ref={form}>
          <Input 
            classLabel='form__label'
            classInput='form__input'
            type={'text'}
            title= {'Full Name'} 
            name= {'name'}
            placeholder = {'Enter your name'}
          />
          <Input 
            classLabel={'form__label'}
            classInput={'form__input'}
            type={'email'}
            title= {'eMail'} 
            name= {'email'}
            placeholder = {'Enter your email'}
          />
          <TextArea
            classLabel={'form__label'}
            classInput={'form__textarea'}
            title={'Message'}
            name={'message'}
            placeholder={'Please tell me how I can help you.'}
           />
           <Button
             class={'form__submit'}
             name={'Submit'}
             click={handleSubmit}
           />
      </form>
  )
};

export default FormContainer;
