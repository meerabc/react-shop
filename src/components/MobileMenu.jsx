import React from 'react'
import NavButtons from './NavButtons'
import { useNavigate } from 'react-router-dom'

const MobileMenu = ({setOpen}) => {

  const navigate = useNavigate()

  return (
    <div className='mobile-menu'>
       <div className='menu-buttons'>
        <NavButtons />
       </div>
       <ul className='menu-items'>
           <li onClick = {()=>{navigate('/')
            setOpen(false)}}
           >Home</li>
           <li onClick = {()=>{navigate('/products')
            setOpen(false)}}
           >Products</li>
           <li onClick = {()=>{navigate('/about')
            setOpen(false)}}
           >About</li>
       </ul>
    </div>
  )
}

export default MobileMenu
