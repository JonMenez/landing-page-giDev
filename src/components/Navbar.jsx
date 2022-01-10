import * as React  from 'react';
import navButton   from '@icons/nav-button.svg'
import closeButton from '@icons/close-button.svg'
import '@styles/navBar.scss'

const Navbar = () => {

    const [active, setActive] = React.useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <nav className='navBar'>
        <button onClick={handleClick} className='navBar__button'><img className='navBar__button-img' src={ active ? closeButton : navButton } alt='navigation button' /></button>
          <ul className='navBar__list' id={active ? 'navBar__hidden' : '' }>
              <li className='navBar__items'><a className='navBar__links' href="#">Home</a></li>
              <li className='navBar__items'><a className='navBar__links' href="#">Services</a></li>
              <li className='navBar__items'><a className='navBar__links' href="#">Projects</a></li>
              <li className='navBar__items'><a className='navBar__links' href="#">Contact</a></li>
          </ul> 
        </nav>
    )
}

export default Navbar
