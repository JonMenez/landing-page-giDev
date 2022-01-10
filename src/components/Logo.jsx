import * as React from 'react'
import  logo from '@icons/Joan.svg'
import '@styles/logo.scss';


const Logo = () => {
    return (
        <a className='logo'>
           <img className='logo__img' src={ logo } alt="logo image" />
        </a>
    )
}

export default Logo
