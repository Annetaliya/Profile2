import React from 'react';
import './navbar.css'

const navItems = [
    {item: 'Home', to: '#home'},
    {item: 'About', to: '#about'},
    {item: 'Portfolio', to: '#portfolio'},
    {item: 'Contact', to: '#contact'},
]

const NavBar = () => {
  return (
    <nav className='navBar'>
        <div className='logo'>AA</div>
        <ul className='list-container'>
            {navItems.length !== 0 ? 
            navItems.map((item, index) => (
                <li key={index}>
                    {item.item}
                </li>
            ))
            :<p>No items found</p> }
        </ul>
    </nav>
  )
}

export default NavBar