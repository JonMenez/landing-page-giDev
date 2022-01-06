import React from 'react';

const Navbar = () => {
    return (
        <nav className='navBar'>
          <ul className='navBar__list'>
              <li className='navBar__items'><a className='navBar__links' href="">Home</a></li>
              <li className='navBar__items'><a className='navBar__links' href="">Services</a></li>
              <li className='navBar__items'><a className='navBar__links' href="">Projects</a></li>
              <li className='navBar__items'><a className='navBar__links' href="">Contact</a></li>
          </ul> 
        </nav>
    )
}

export default Navbar
