import * as React from 'react'
import projectImg from '@images/project.jpeg'
import '@styles/cardProject.scss'

const CardProject = (props) => {
    return (
        <div className={`projects__card ${props.class}`}>
            <img className='projects__img' src={ projectImg } alt='' />
            <h3 className="projects__name">Project One</h3>
            <p className="projects__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    )
}

export default CardProject
