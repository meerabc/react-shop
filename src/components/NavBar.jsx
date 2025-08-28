import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaGithub } from 'react-icons/fa';
import { RiMoonClearLine } from "react-icons/ri";
import { TbBrightnessUp } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeContext from '../contexts/ThemeContext'
import{ useContext,useState,useRef,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const NavBar = () => {

  const navigate = useNavigate()

  const {isAuthenticated,logout} = useAuth()

  const {theme,setTheme} = useContext(ThemeContext)

  //for theme selection drop-down
  const [isOpen,setIsOpen] = useState(false)

  //when user clicks outside the dropdown,isOpen is set to false using this reference
  const dropDownRef = useRef()

  //the theme-button icon state management
  const [icon,setIcon] = useState(theme==='light' ? <TbBrightnessUp /> : <RiMoonClearLine />)

  useEffect(()=>{
    const handleClickOutside = () => {
      if(dropDownRef.current && !dropDownRef.current.contains(event.target))
        setIsOpen(false)
    }

    if(isOpen)
      document.addEventListener('mousedown',handleClickOutside)

    return () => {
      document.removeEventListener('mousedown',handleClickOutside)
    }
  },[isOpen])


  return (
    <div className='navbar'>
        <button className = 'hamburger-menu'>
          <RxHamburgerMenu />
        </button>
        <h1>React Shop</h1>
        <ul className='nav-items-container'>
           <li>Home</li>
           <li>Products</li>
           <li>About</li>
        </ul>
        <div className='buttons-container'>
            {!isAuthenticated ?
              <div  className='nav-buttons'>
                <button className='login-button'
                  onClick = {()=>navigate('/signin')}>
                  <FaSignInAlt /> Login
                </button>
                <button className='signup-button'
                  onClick = {()=>navigate('/signup')}>
                  <MdPersonAdd /> Sign Up
                </button> 
              </div>  :
              <div  className='nav-buttons'>
                <button className='logout-button'
                  onClick = {logout}>
                  <BiLogOut /> Logout
                </button>
              </div>
            }
            <div className='nav-icons'>
                <div className='theme-selection-container'
                     ref={dropDownRef}>
                  <button 
                     className='icon-container' 
                     id = 'theme-icon-container'
                     onClick={()=>setIsOpen(prev=>!prev)}>
                    {icon}
                  </button>
                  {isOpen && 
                     <ul className='drop-down'>
                        <li
                          onClick={()=>{setTheme('dark')
                                        setIsOpen(false)
                                        setIcon(<RiMoonClearLine />)}}
                          className={theme==='dark' ? 'selected' : ''}>
                          <RiMoonClearLine />dark
                        </li>
                        <li
                          onClick={()=>{setTheme('light')
                                       setIsOpen(false)
                                       setIcon(<TbBrightnessUp />)}}
                          className={theme==='light' ? 'selected' : ''}>
                          <TbBrightnessUp />light
                        </li>
                     </ul>
                  }
                </div>
                <button className='icon-container'>
                   <FaGithub />
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavBar
