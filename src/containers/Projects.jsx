import * as React from 'react'
import wave1 from '@icons/p1-wave.svg'
import wave2 from '@icons/p2-wave.svg'
import Slider from '../components/Slider'
import '@styles/projects.scss'

const Projects = () => {
    return (
        <section className='projects'>
            <img className='projects__wave1' src={ wave1 } alt="svg wave" />
              <h2 className='projects__title'>My lastest Projects</h2>
              <Slider idStyle='projects__slider'/>
              <a href='#' className="projects__more">See all</a>
            <img className='projects__wave2' src={ wave2 } alt="svg wave" />
        </section>
    )
}

export default Projects
