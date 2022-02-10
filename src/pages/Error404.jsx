import * as React            from 'react';
import { motion }            from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import Slider                from '@components/Slider';
import Button                from '@components/Button';
import '@styles/error404.scss'

const pageVariant = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: .5, delay: .3 }
    },
    exit: {
      x: 100,
      opacity: 0
    }
  }


const Error404 = () => {

  const navigate = useNavigate()

  const backToHome = () => navigate('/')

  return (
      <motion.section 
        className="error404"
        variants={pageVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
          <h1 className="error404__title">404</h1>
          <p className="error404__text">We couldn't find the page you were looking for, but don't worry!</p>
          <Button 
            class="error404__button" 
            name='Back to Home'
            click={backToHome} 
            />
          <p className="error404__text">Or you can have a look at some of my projects</p>
          <div className="error404__projects">  
            <Slider  />
            <Link to='/projects' className='error404__link'>See All</Link>
          </div>
      </motion.section>
  );
};

export default Error404;
