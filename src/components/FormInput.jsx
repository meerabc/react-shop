import React from 'react'
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const FormInput = ({icon, type, placeholder, value, onChange, error}) => {
  const [isHidden, setIsHidden] = React.useState(true)

  const InputType = type === 'password' ? (isHidden ? 'password' : 'text') : type 
  const eyeIcon = isHidden ? <IoMdEyeOff /> : <IoEye />

  function toggleVisibility() {
    setIsHidden(prev => !prev)
  }

  return (
    <div className="form-input-container">
      <div className={`input-div ${error ? 'error' : ''}`}>
        {icon && <span className='left-icon'>{icon}</span>} 
        <input 
          type={InputType} 
          placeholder={placeholder} 
          value={value} 
          onChange={onChange}
        />
        {type === 'password' && (
          <span className="eye-icon-container" onClick={toggleVisibility}>
            {eyeIcon}
          </span>
        )}
      </div>
      {/* do not show error msg if error value is 'error', only set border to red */}
      {error &&  error!='error' && <div className='error-msg'>{error}</div>}
    </div>
  )
}

export default FormInput