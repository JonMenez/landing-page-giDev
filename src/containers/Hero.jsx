import * as React      from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '@components/Button'
import PersonImg from '@images/person.png'
import '@styles/hero.scss'

const textVariant = {
    hidden: {
        x: '-100vw',
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 1, type: "tween", duration: 1}
    }
}

const bannerVariant = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: .5, type: "tween", duration: .5}
    }
}

const Hero = () => {

  const navigate = useNavigate()
  
  const toContact = () => navigate('/contact')

    return (
        <motion.section 
        
        >
            <motion.h1 
              className='hero__title' 
              variants={textVariant}
                   >Hey there,<span>I'm Joan</span></motion.h1>
            <motion.p 
              className='hero__body'
              variants={textVariant}
            >I'm a Front-end Web Developer who is gonna help you with your business</motion.p>
            <Button class='hero__button' name="Contact Me" click={toContact} />
            <motion.div className="hero__img" variants={bannerVariant}>
              <motion.img src={PersonImg} alt="person img"  />
            </motion.div>
        </motion.section>
    )
}

export default Hero
