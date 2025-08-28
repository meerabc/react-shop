import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUpPage.css'

const SignUpPage = () => {

  const navigate = useNavigate()

  const [formData,setFormData] = useState({
    name : '',
    email : '',
    password : '',
    avatar : 'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png'
  })

  const handleFormChange = (key,value) =>{
    setFormData({
        ...formData,
        [key] : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const response = await fetch('https://api.escuelajs.co/api/v1/users/',{
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body : JSON.stringify(formData)
        })
        const data = await response.json()
        console.log('user created ' , data)
    }
    catch(err){
        console.log(err)
    }
    navigate('/signin')

  }

  return (
    <div className='signup-page container'>
      <form onSubmit={handleSubmit}>
        <input 
            type='text'
            value={formData.name}
            onChange={(e)=>handleFormChange('name', e.target.value)}
            placeholder='name'
        />
        <input 
            type='text'
            value={formData.email}
            onChange={(e)=>handleFormChange('email', e.target.value)}
            placeholder='email'
        />
        <input 
            type='text'
            value={formData.password}
            onChange={(e)=>handleFormChange('password', e.target.value)}
            placeholder='password'
        />
        <p>Already have an account?<span onClick = {()=>navigate('/signin')}>SIGN IN</span></p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUpPage
