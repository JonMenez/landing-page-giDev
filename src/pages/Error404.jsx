import * as React from 'react';
import { Link }   from 'react-router-dom'
import Slider     from '../components/Slider';
import '@styles/error404.scss'

const Error404 = () => {
  return (
      <section className="error404">
          <h1 className="error404__title">404</h1>
          <p className="error404__text">We couldn’t find the page you were looking for, but don't worry!</p>
          <button className="error404__button"><Link to='/' className="error404__backHome">Back to Home</Link></button>
          <p className="error404__text">Or you can have a look at some of my projects</p>
          <Slider 
          idStyle='error404__slider'
          />
      </section>
  );
};

export default Error404;
