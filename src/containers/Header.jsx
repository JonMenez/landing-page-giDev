import * as React from 'react'
import Navbar     from '@components/Navbar'
import Logo       from '@components/Logo'
import navButton   from '@icons/nav-button.svg'
import closeButton from '@icons/close-button.svg'
import '@styles/header.scss'

const Header = () => {

    const [active, setActive] = React.useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <header className='header'>
            <Logo />
            <Navbar 
              navBar='navBar__list' 
              navList='navBar__items' 
              navLinks='navBar__links' 
              active={active ? 'navBar__hidden' : '' }
              />
            <button 
              onClick={handleClick} 
              className='navBar__button'>
                  <img className='navBar__button-img' src={ active ? closeButton : navButton } alt='navigation button' />
            </button>
        </header>
    )
}

export default Header
