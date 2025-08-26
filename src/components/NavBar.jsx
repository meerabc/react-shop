import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';
import ThemeContext from '../contexts/ThemeContext'
import{ useContext } from 'react'

const NavBar = () => {

  const {toggleTheme} = useContext(ThemeContext)

  return (
    <div className='navbar'>
        <h1>React Shop</h1>
        <ul className='nav-items-container'>
           <li>Home</li>
           <li>Products</li>
           <li>About</li>
        </ul>
        <div className='buttons-container'>
            <div className='nav-buttons'>
            <button className='login-button'>
                <FaSignInAlt /> Login
            </button>
                <button className='signup-button'>
                <MdPersonAdd /> Sign Up
            </button>
            </div>
            <div className='nav-icons'>
                <div className='icon-container'>
                   <FaGithub />
                </div>
                <div className='icon-container'
                     onClick={toggleTheme}>
                   <FaGithub />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
