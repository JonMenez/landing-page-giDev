import * as React from 'react'
import Navbar     from '@components/Navbar'
import Logo       from '@components/Logo'
import '@styles/header.scss'

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header
