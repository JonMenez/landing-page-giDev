import * as React  from 'react';
import { motion }  from 'framer-motion'
import BackButton  from '@components/BackButton';
import CardProject from '@components/CardProject'
import '@styles/slider.scss'
import '@styles/projectsPage.scss'

const pageVariant = {
  hidden: {
    x: 100,
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


const ProjectsPage = () => {
  return (
      <motion.section 
        className='projectsPage'
        variants={pageVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <BackButton/>
          <h1 className='projectsPage__title'>Projects</h1>
          <div className='projectsPage__container'>
            <CardProject class={'projectsPage__card'}/>
            <CardProject class={'projectsPage__card'}/>
            <CardProject class={'projectsPage__card'}/>
          </div>
      </motion.section>
  );
};

export default ProjectsPage;
