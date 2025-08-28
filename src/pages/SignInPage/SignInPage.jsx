import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import './SignInPage.css'

const SignInPage = () => {

  const navigate = useNavigate()

  const {login} = useAuth()

  const [formData,setFormData] = useState({
    email : '',
    password : ''
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
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/login',{
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body : JSON.stringify(formData)
        })
        const data = await response.json()

        if (!response.ok){
          console.log('response not okay',data)
          return
        }
       
        console.log('sign in response ' , data)
        login(data.access_token)
        navigate('/')
    }
    catch(err){
        console.log(err)
    }

  }

  return (
    <div className='signin-page container'>
      <form onSubmit={handleSubmit}>
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
        <p>Don't have an account?<span onClick = {()=>navigate('/signup')}>SIGN UP</span></p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignInPage

