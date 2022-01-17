import * as React from 'react'
import CardProject from '@components/CardProject'
import wave1 from '@icons/p1-wave.svg'
import wave2 from '@icons/p2-wave.svg'
import '@styles/projects.scss'

const Projects = () => {
    return (
        <section className='projects'>
            <img className='projects__wave' src={ wave1 } alt="svg wave" />
            <h2 className='projects__title'>My lastest Projects</h2>
            <div className='projects__slider'>
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
            </div>
            <a href='#' className="projects__more">See all</a>
            <img className='projects__wave' src={ wave2 } alt="svg wave" />
        </section>
    )
}

export default Projects
