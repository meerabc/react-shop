import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'
 
const PublicRoute = ({children}) => {

  const {isAuthenticated} = useAuth()

  if(isAuthenticated){
    return <Navigate to='/cart' replace/>
  }

  return children
}

export default PublicRoute
