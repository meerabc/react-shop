import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { RiMoonClearLine } from "react-icons/ri";
import { TbBrightnessUp } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeContext from '../contexts/ThemeContext'
import{ useContext,useState,useRef,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoCart } from "react-icons/io5";
import { useSelector } from 'react-redux'
import NavButtons from './NavButtons'
import MobileMenu from './MobileMenu'

const NavBar = () => {

  const navigate = useNavigate()

  const {theme,setTheme} = useContext(ThemeContext)
  //for theme selection drop-down
  const [isOpen,setIsOpen] = useState(false)
  //for hamburger-menuu (in smaller screens)
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  //when user clicks outside the dropdown,isOpen is set to false using this reference
  const dropDownRef = useRef()
  //the theme-button icon state management
  const [icon,setIcon] = useState(theme==='light' ? <TbBrightnessUp /> : <RiMoonClearLine />)
  //for cart quantity red circle
  const [totalQuantity,setTotalQuantity] = useState(0)

  const carts = useSelector(store=>store.cart.items)

  //updates total quantity each time product added to cart,[carts changes]
  useEffect(()=>{
    let total = 0
    carts.forEach(item => total += item.quantity )
    setTotalQuantity(total)
  },[carts])

  //for outside click handling in case of theme-selection drop-down 
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

  const handleClick = () => {
    setIsMenuOpen(prev=>!prev)
  }

  return (
    <div className='navbar'>
        <button className = 'hamburger-menu'
        onClick={handleClick}>
          <RxHamburgerMenu />
        </button>
        {isMenuOpen && <MobileMenu setOpen={setIsMenuOpen}/>}
        <h1>React Shop</h1>
        <ul className='nav-items-container'>
           <li onClick = {()=>navigate('/')}>Home</li>
           <li onClick = {()=>navigate('/products')}>Products</li>
           <li onClick = {()=>navigate('/about')}>About</li>
        </ul>
        <div className='buttons-container'>
            <NavButtons />
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
                <button className='icon-container' 
                id='cart-icon-container'
                onClick={()=>navigate('/cart')}>
                   <IoCart />
                   {totalQuantity !== 0 && <span className='counter'>{totalQuantity}</span>}
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavBar
