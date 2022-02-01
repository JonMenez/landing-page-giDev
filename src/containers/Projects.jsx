import * as React from 'react'
import { Link } from 'react-router-dom'
import wave1 from '@icons/p1-wave.svg'
import wave2 from '@icons/p2-wave.svg'
import Slider from '@components/Slider'
import '@styles/projects.scss'

const Projects = () => {
    return (
        <>
            <img className='projects__wave1' src={ wave1 } alt="svg wave" />
        <section className='projects'>
            <div className='projects__container'>
              <h2 className='projects__title'>My lastest Projects</h2>
              <Slider idStyle='projects__slider'/>
              <Link to='/projects' className="projects__more">See all</Link>
            </div>
        </section>
            <img className='projects__wave2' src={ wave2 } alt="svg wave" />
        </>
    )
}

export default Projects
