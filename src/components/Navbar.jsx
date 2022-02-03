import * as React  from 'react';
import { NavLink }    from 'react-router-dom'
import '@styles/navBar.scss'

const Navbar = (props) => {

    const isActive = (navData) => navData.isActive ? "active" : ""

    return (
        <nav className='navBar'>
          <ul className='navBar__list' onClick={props.onClick} id={props.active}>
              <li className='navBar__items'><NavLink className={`navBar__links ${isActive}`} to="/">Home</NavLink></li>
              <li className='navBar__items'><NavLink className={`navBar__links ${isActive}`} to="/services">Services</NavLink></li>
              <li className='navBar__items'><NavLink className={`navBar__links ${isActive}`} to="/projects">Projects</NavLink></li>
              <li className='navBar__items'><NavLink className={`navBar__links ${isActive}`} to="/contact">Contact</NavLink></li>
          </ul> 
        </nav>
    )
}

export default Navbar
