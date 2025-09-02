import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { FaSignInAlt } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const NavButtons = () => {

  const {isAuthenticated,logout} = useAuth()

  const navigate = useNavigate()

  //just to check logical flow
  console.log('NavBar render - isAuthenticated:', isAuthenticated)

  return (
    <>
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
    </>
  )
}

export default NavButtons
