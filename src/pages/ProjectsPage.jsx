import * as React  from 'react';
import BackButton  from '@components/BackButton';
import CardProject from '@components/CardProject'
import '@styles/slider.scss'
import '@styles/projectsPage.scss'

const ProjectsPage = () => {
  return (
      <section className='projectsPage'>
        <BackButton/>
          <h1 className='projectsPage__title'>Projects</h1>
          <div className='projectsPage__container'>
            <CardProject class={'projectsPage__card'}/>
            <CardProject class={'projectsPage__card'}/>
            <CardProject class={'projectsPage__card'}/>
          </div>
      </section>
  );
};

export default ProjectsPage;
