import * as React   from 'react'
import { motion }   from 'framer-motion'
import CardService  from '@components/CardService'
import { services } from '../services/ListOfServices'
import '@styles/services.scss'

const containerVariant = {
    hidden: {
        x: 500,
        opacity: 0,

    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: 2, when: 'beforeChildren', staggerChildren: 2}
    }
}


const Services = () => {
    return (
        <section  className='services' >
            <motion.h2 className='services__title' variants={containerVariant} whileInView='visible' >What I can do for you</motion.h2>
            <motion.div  className="services__container" variants={containerVariant}>
               {
                 services.map( (service) => <CardService key={service.id} services={service}/>)
               } 
            </motion.div>
        </section>
    )
}

export default Services
