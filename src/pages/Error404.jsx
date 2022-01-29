import * as React from 'react';
import { Link, useNavigate }   from 'react-router-dom'
import Slider     from '@components/Slider';
import Button     from '@components/Button';
import '@styles/error404.scss'

const Error404 = () => {

  const navigate = useNavigate()

  const backToHome = () => navigate('/')

  return (
      <section className="error404">
          <h1 className="error404__title">404</h1>
          <p className="error404__text">We couldn't find the page you were looking for, but don't worry!</p>
          <Button 
            class="error404__button" 
            name='Back to Home'
            click={backToHome} 
            />
          <p className="error404__text">Or you can have a look at some of my projects</p>
          <Slider 
          idStyle='error404__slider'
          />
          <Link to='/projects' className='error404__link'>See All</Link>
      </section>
  );
};

export default Error404;
