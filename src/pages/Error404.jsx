import React from 'react';
import '@styles/error404.scss'
import Slider from '../components/Slider';

const Error404 = () => {
  return (
      <section className="error404">
          <h1 className="error404__title">404</h1>
          <p className="error404__text">We couldn’t find the page you were looking for, but don't worry!</p>
          <button className="error404__button"><a href="#" className="error404__backHome">Back to Home</a></button>
          <p className="error404__text">Or you can have a look at some of my projects</p>
          <Slider 
          idStyle='error404__slider'
          />
      </section>
  );
};

export default Error404;
