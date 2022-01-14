import * as React from 'react'
import CardService from '@components/CardService'
import { services } from '../services/ListOfServices'
import '@styles/services.scss'

const Services = () => {
    return (
        <section className='services'>
            <h2 className='services__title'>What I can to for you</h2>
            {
              services.map( service => <CardService key={service.id} services={service}/>)
           } 
        </section>
    )
}

export default Services