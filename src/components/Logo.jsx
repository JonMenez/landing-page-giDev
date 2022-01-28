import * as React from 'react'
import { Link }   from 'react-router-dom';
import  logo      from '@icons/Joan.svg'
import '@styles/logo.scss';


const Logo = () => {
    return (
        <Link  to='/' className='logo'>
           <img className='logo__img' src={ logo } alt="logo image" />
        </Link>
    )
}

export default Logo
