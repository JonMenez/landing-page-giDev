import * as React  from 'react';
import '@styles/navBar.scss'

const Navbar = (props) => {

    return (
        <nav className='navBar'>
          <ul className='navBar__list' id={props.active}>
              <li className='navBar__items'><a className='navBar__links' href="#">Home</a></li>
              <li className='navBar__items'><a className='navBar__links' href="#">Services</a></li>
              <li className='navBar__items'><a className='navBar__links' href="#">Projects</a></li>
              <li className='navBar__items'><a className='navBar__links' href="#">Contact</a></li>
          </ul> 
        </nav>
    )
}

export default Navbar
