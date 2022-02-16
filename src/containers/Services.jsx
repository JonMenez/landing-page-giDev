import * as React   from 'react'
import { motion }   from 'framer-motion'
import CardService  from '@components/CardService'
import { services } from '../services/ListOfServices'
import '@styles/services.scss'

const containerVariant = {
    hidden: {
        y: 500,
        opacity: 0,

    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { 
            duration: .5, 
            delay: 1, 
            when: 'beforeChildren', 
            staggerChildren: .5
        }
    }
}


const Services = () => {
    return (
        <motion.section  
        className='services' 
        variants={containerVariant} 
        >
            <h2 
            className='services__title' 
             >What I can do for you
            </h2>
            <div  className="services__container" >
               {
                 services.map( (service) => <CardService key={service.id} services={service}/>)
               } 
            </div>
        </motion.section>
    )
}

export default Services
