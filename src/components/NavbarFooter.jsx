import * as React  from 'react';
import { Link }    from 'react-router-dom'
import '@styles/navBar.scss'

const NavbarFooter = () => {

    return (
        <nav className='footer__navBar'>
          <ul className='footer__list'>
              <li className='footer__item'><Link className='footer__links' to="/">Home</Link></li>
              <li className='footer__item'><Link className='footer__links' to="/services">Services</Link></li>
              <li className='footer__item'><Link className='footer__links' to="/projects">Projects</Link></li>
              <li className='footer__item'><Link className='footer__links' to="/contact">Contact</Link></li>
          </ul> 
        </nav>
    )
}

export default NavbarFooter