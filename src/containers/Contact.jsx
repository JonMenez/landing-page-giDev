import  React from 'react';
import { useNavigate }   from 'react-router-dom'
import Button from '@components/Button';
import '@styles/contact.scss'

const Contact = () => {

  const navigate = useNavigate()
  
  const toContact = () => navigate('/contact')

  return (
         <section className='contact'>
             <h3 className='contact__title'>Let's talk about your project!</h3>
             <Button class='contact__button' name="Contact Me" click={toContact} />
         </section>
  )
};

export default Contact;
