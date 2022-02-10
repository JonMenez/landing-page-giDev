import * as React from 'react';
import { motion } from 'framer-motion'
import Hero       from '@containers/Hero'
import Services   from '@containers/Services'
import Projects   from '@containers/Projects'
import Feedback   from '@containers/Feedback'
import Contact    from '@containers/Contact'

const pageVariant = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: .8, 
      delay: .5, 
      ease: 'easeInOut',
      delayChildren: 0.5,
      staggerChildren: 1
     }
    },
    exit: {
      x: -100,
      opacity: 0
    }
  }


const Home = () => {
  return (
    <motion.div
      variants={pageVariant}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
        <Hero />
        <Services />
        <Projects />
        <Feedback />
        <Contact />
    </motion.div>
  )
};

export default Home;
