import * as React from 'react';
import Hero       from '@containers/Hero'
import Services   from '@containers/Services'
import Projects   from '@containers/Projects'
import Feedback   from '@containers/Feedback'
import Contact    from '@containers/Contact'

const Home = () => {
  return (
    <>
        <Hero />
        <Services />
        <Projects />
        <Feedback />
        <Contact />
    </>
  )
};

export default Home;
