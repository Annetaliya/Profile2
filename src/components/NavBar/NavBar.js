import React, {useState} from 'react';
import './navbar.css';
import { MdMenu } from "react-icons/md";

const navItems = [
    {item: 'Home', to: '#home'},
    {item: 'About', to: '#about'},
    {item: 'Portfolio', to: '#portfolio'},
    {item: 'Contact', to: '#contact'},
]

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);


    const handleToggleMenu = () => {
        setShowMenu(!showMenu)
        console.log(showMenu)
    }
  return (
    <nav className='navBar'>
        <div className='logo'>
            <p>AA</p>
        </div>
        <ul className={`list-container ${showMenu ? 'open' : ''}`}>
            {navItems.length !== 0 ? 
            navItems.map((item, index) => (
                <li key={index}>
                    {item.item}
                </li>
            ))
            :<p>No items found</p> }
        </ul>
        <div className='menu' onClick={handleToggleMenu}>
            <MdMenu size={30} />
        </div>
        
    </nav>
  )
}

export default NavBar