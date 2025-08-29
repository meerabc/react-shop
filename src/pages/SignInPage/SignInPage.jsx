import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { validateEmail } from '../../utils/validationHelper'
import { MdEmail } from "react-icons/md"; 
import { RiLockPasswordFill } from "react-icons/ri"; 
import FormInput from '../../components/FormInput'
import './SignInPage.css'

const SignInPage = () => {

  const navigate = useNavigate()

  const {login} = useAuth()

  const [formData,setFormData] = useState({
    email : '',
    password : ''
  })

  const [errors,setErrors] = useState({
    email : '',
    password : ''
  })

  const handleFormChange = (key,value) =>{
    setFormData({
        ...formData,
        [key] : value
    })
  }

  const validateEmailField = (value) => {
    if (!value.trim()) {
      return 'Email is required'
    } else if (!validateEmail(value)) {
      return 'Please enter a valid email'
    }
    return ''
  }

  const validateForm = () => {
    const newErrors = {}
    let isValid = true

    const emailError = validateEmailField(formData.email)
    newErrors.email = emailError
    if (emailError) isValid = false

    // Checks if password is empty (no error message, just red border)
    newErrors.password = !formData.password.trim() 
    if (!formData.password.trim()) isValid = false

    setErrors(newErrors)
    return isValid
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      console.log('Form has errors')
      return
    }

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
        await login(data.access_token)
        // navigate('/')
    }
    catch(err){
        console.log(err)
    }

  }

  return (
    <div className='signin-page container'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
          <FormInput 
            type='email' 
            placeholder='abc@email.com' 
            icon={<MdEmail />} 
            value={formData.email} 
            onChange={(e) => handleFormChange('email', e.target.value)}
            error={errors.email}
          />
          <FormInput 
            type='password' 
            placeholder='Your Password' 
            icon={<RiLockPasswordFill />} 
            value={formData.password} 
            onChange={(e) => handleFormChange('password', e.target.value)}
            error={errors.password}
          />
        <p className='sign-up-div'>Don't have an account?<span onClick = {()=>navigate('/signup')}>SIGN UP</span></p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignInPage

