import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate,Outlet } from 'react-router-dom'
 
const ProtectedRoute = () => {

  const {isAuthenticated,loading} = useAuth()

  if(loading){
    console.log('checking authentication...')
    return null
  }
  
  if(!isAuthenticated){
    return <Navigate to='/signup' replace/>
  }

  return <Outlet />
}

export default ProtectedRoute

