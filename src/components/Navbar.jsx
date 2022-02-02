import * as React  from 'react';
import { NavLink }    from 'react-router-dom'
import '@styles/navBar.scss'

const Navbar = (props) => {

    const isActive = (navData) => navData.isActive ? "active" : ""

    return (
        <nav className='navBar'>
          <ul className='navBar__list' id={props.active}>
              <li className='navBar__items'><NavLink className={`navBar__links ${isActive}`} to="/">Home</NavLink></li>
              <li className='navBar__items'><a       className={`navBar__links ${isActive}`} href="#services">Services</a></li>
              <li className='navBar__items'><NavLink className={`navBar__links ${isActive}`} to="/projects">Projects</NavLink></li>
              <li className='navBar__items'><NavLink className={`navBar__links ${isActive}`} to="/contact">Contact Me</NavLink></li>
          </ul> 
        </nav>
    )
}

export default Navbar
