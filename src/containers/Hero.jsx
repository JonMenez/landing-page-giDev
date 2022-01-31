import * as React      from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@components/Button'
import '@styles/hero.scss'

const Hero = () => {

  const navigate = useNavigate()
  
  const toContact = () => navigate('/contact')

    return (
        <section className='hero'>
            <h1 className='hero__title'>Hey there,<span>I'm Joan</span></h1>
            <p className='hero__body'>I'm a Front-end Web Developer who is gonna help you with your business</p>
            <Button class='hero__button' name="Contact Me" click={toContact} />
        </section>
    )
}

export default Hero
