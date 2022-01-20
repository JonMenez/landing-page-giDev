import * as React from 'react';
import CTAButton from '@components/CTAButton';
import '@styles/contact.scss'

const Contact = () => {
  return (
         <section className='contact'>
             <h3 className='contact__title'>Let's talk about your project!</h3>
             <CTAButton class='cta__button' />
         </section>
  )
};

export default Contact;
