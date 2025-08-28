import { useState, useEffect } from 'react'
import { getAccessToken,setAccessToken, removeAccessToken } from '../utils/localStorage'

export const useAuth = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false)

   const checkAuthentication = () => {
     const token = getAccessToken()
     setIsAuthenticated( token ? true : false)
   }

   useEffect(() => {
    checkAuthentication()
   },[])

   const logout = () => {
     removeAccessToken()
     setIsAuthenticated(false)
   }

   const login = (token) => {
     setAccessToken(token)
     setIsAuthenticated(true)
   }

   return {isAuthenticated, login, logout}
}