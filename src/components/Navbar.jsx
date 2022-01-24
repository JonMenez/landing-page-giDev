import * as React  from 'react';
import '@styles/navBar.scss'

const Navbar = (props) => {

    return (
        <nav className='navBar'>
          <ul className={props.navBar} id={props.active}>
              <li className={props.navList}><a className={props.navLinks} href="#">Home</a></li>
              <li className={props.navList}><a className={props.navLinks} href="#">Services</a></li>
              <li className={props.navList}><a className={props.navLinks} href="#">Projects</a></li>
              <li className={props.navList}><a className={props.navLinks} href="#">Contact</a></li>
          </ul> 
        </nav>
    )
}

export default Navbar
