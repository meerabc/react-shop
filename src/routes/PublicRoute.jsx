import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate,Outlet } from 'react-router-dom'
 
const PublicRoute = () => {

  const {isAuthenticated,loading} = useAuth()

  if(loading){
    console.log('checking authentication...')
    return null
  }

  if(isAuthenticated){
    return <Navigate to='/' replace/>
  }

  return <Outlet />
}

export default PublicRoute
