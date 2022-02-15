import * as React from 'react'
import { motion } from 'framer-motion'
import '@styles/cardService.scss'

const servicesVariant = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: '100vw'
    }
}

const CardService = ({services}) => {
    return (
        <motion.div className='services__card' variants={servicesVariant} >
            <img className='services__icon' src={ services.icon } alt={ services.name } />
            <h3 className='services__name'>{ services.title }</h3>
            <p className='services__body'>{ services.content }</p>
        </motion.div>
    )
}

export default CardService
