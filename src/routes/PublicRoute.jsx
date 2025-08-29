import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate,Outlet } from 'react-router-dom'
 
const PublicRoute = () => {

  const {isAuthenticated,loading} = useAuth()

   console.log('PublicRoute RENDER - loading:', loading, 'isAuthenticated:', isAuthenticated)

  if(loading){
    console.log('checking authentication...')
    return <div>Loading...</div>
  }

  if(isAuthenticated){
    console.log('PublicRoute: Already authenticated, redirecting to home')
    return <Navigate to='/' replace/>
  }

  console.log(' PublicRoute: Not authenticated, rendering public content')
  return <Outlet />
}

export default PublicRoute
