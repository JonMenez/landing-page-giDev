import * as React  from 'react';
import { Link }    from 'react-router-dom'
import '@styles/navBar.scss'

const Navbar = (props) => {

    return (
        <nav className='navBar'>
          <ul className={props.navBar} id={props.active}>
              <li className={props.navList}><Link className={props.navLinks} to="/">Home</Link></li>
              <li className={props.navList}><Link className={props.navLinks} to="#">Services</Link></li>
              <li className={props.navList}><Link className={props.navLinks} to="/projects">Projects</Link></li>
              <li className={props.navList}><Link className={props.navLinks} to="form">Contact</Link></li>
          </ul> 
        </nav>
    )
}

export default Navbar
