import * as React from 'react'
import '@styles/cardService.scss'

const CardService = ({services}) => {
    return (
        <div className='services__card'>
            <img className='services__icon' src={ services.icon } alt={ services.name } />
            <h3 className='services__name'>{ services.title }</h3>
            <p className='services__body'>{ services.content }</p>
        </div>
    )
}

export default CardService
