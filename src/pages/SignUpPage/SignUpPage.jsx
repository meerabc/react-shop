import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateEmail, validateFullName1To3Words, validatePassword } from '../../utils/validationHelper'
import { FaUser } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md"; 
import { RiLockPasswordFill } from "react-icons/ri"; 
import FormInput from '../../components/FormInput'
import { ClipLoader } from 'react-spinners'
import './SignUpPage.css'

const SignUpPage = () => {

  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)

  const [formData,setFormData] = useState({
    name : '',
    email : '',
    password : '',
    confirmPassword : ''
  })

  const [errors,setErrors] = useState({
    name : '',
    email : '',
    password : '',
    confirmPassword : ''
  })

  // to display a msg if api response is not okay for any reason
  const [apiError,setApiError] = useState('')
  
  

  const handleFormChange = (key,value) =>{
    setFormData({
        ...formData,
        [key] : value
    })
  }

  const validateField = (field,value) => {
    let error = ''

    switch(field){
      case 'name' :
        if(!value.trim())
          error = 'this field is mandatory'
        else if(!validateFullName1To3Words(value))
          error = 'Please enter 1-3 words, each 2-25 characters long'
        break

      case 'email' :
        if(!value.trim())
          error = 'this field is mandatory'
        else if(!validateEmail(value))
          error = 'please enter a valid email'
        break

      case 'password' :
        if(!value)
          error = 'this field is mandatory'
        else if(!validatePassword(value))
          error = 'password must be 5+ chars with letters & numbers only'
        break
              
      case 'confirmPassword' :
        if(!value)
          error = 'this field is mandatory'
        else if(value !== formData.password)
          error = 'passwords do not match'
        break

      default :
        break
    }
    return error
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = {}

    Object.keys(formData).forEach(field=>{
      const error = validateField(field,formData[field])
      newErrors[field] = error
      if(error) isValid=false
    })

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!validateForm()){
        console.log('Form has errors')
        return
    }

    const payload = {
      name : formData.name,
      email : formData.email,
      password : formData.password,
      avatar : 'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png'
    }

    try{
        setLoading(true)

        const response = await fetch('https://api.escuelajs.co/api/v1/users/',{
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body : JSON.stringify(payload)
        })
        const data = await response.json()

        if(!response.ok){
          console.log('response not okay ',data)
          setApiError(data.message || 'Invalid data')
          return
        }
        
        console.log('user created ' , data)
    }
    catch(err){
        console.log(err)
    }
    finally{
      setLoading(false)
    }
    navigate('/signin')

  }

  return (
    <div className='signup-page container'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
          <FormInput 
            type='text' 
            placeholder='Full name' 
            icon={<FaUser />} 
            value={formData.name} 
            onChange={(e) => handleFormChange('name', e.target.value)}
            error={errors.name}
          />
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
          <FormInput 
            type='password' 
            placeholder='Confirm Password' 
            icon={<RiLockPasswordFill />} 
            value={formData.confirmPassword} 
            onChange={(e) => handleFormChange('confirmPassword', e.target.value)}
            error={errors.confirmPassword}
          />
        <p className='sign-in-div'>Already have an account?<span onClick = {()=>navigate('/signin')}>SIGN IN</span></p>
        <div className='submit-button-container'>
          <button type='submit' disabled={loading}>Submit</button>
          <span><ClipLoader 
                    size={30}
                    color='#ffffff'
                    loading={loading} />
          </span>
        </div>
        {apiError && <div className="error-message">{apiError}</div>}
      </form>
    </div>
  )
}

export default SignUpPage
