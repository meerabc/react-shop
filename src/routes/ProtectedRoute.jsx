import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate,Outlet } from 'react-router-dom'
 
const ProtectedRoute = () => {
  const {isAuthenticated, loading} = useAuth()
  
  console.log('ProtectedRoute RENDER - loading:', loading, 'isAuthenticated:', isAuthenticated)
  
  if(loading){
    console.log('checking authentication...')
    return <div>Loading...</div> // Changed from null to see what happens
  }
   
  if(!isAuthenticated){
    console.log('Private Route : Not authenticated, redirecting...')
    return <Navigate to='/signup' replace/>
  }
 
  console.log('Private Route : Authenticated, showing protected content')
  return <Outlet />
}

export default ProtectedRoute

