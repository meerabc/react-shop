import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
 
const ProtectedRoute = ({children}) => {

  const {isAuthenticated} = useAuth()

  if(!isAuthenticated){
    return <Navigate to='/signup' replace/>
  }

  return children
}

export default ProtectedRoute

