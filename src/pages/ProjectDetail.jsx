import React from 'react';
import BackButton    from '@components/BackButton';
import projectImg from '@images/project.jpeg'
import projectPageImg from '@images/project-page.jpeg'
import '@styles/projectDetail.scss'

const ProjectDetail = () => {
  return (
      <section className='projectDetail'>
        <BackButton/>
          <div className="projectDetail__img">
            <img src={ projectImg } alt='Project image reference' />
          </div>
          <h1 className="projectDetail__title">Project One</h1>
          <p className="projectDetail__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates vel quo aut, tempore pariatur labore at assumenda natus dolore?</p>
          <div className="projectDetail__img2">
            <img src={ projectPageImg } alt='Project image reference' />
          </div>
          <p className="projectDetail__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates vel quo aut, tempore pariatur labore at assumenda natus dolore?</p>
      </section>
  )
};

export default ProjectDetail;
