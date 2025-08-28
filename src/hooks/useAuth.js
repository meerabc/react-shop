import { useState, useEffect } from 'react'
import { getAccessToken,setAccessToken, removeAccessToken } from '../utils/localStorage'

export const useAuth = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false)
   const [loading, setLoading] = useState(false)

   const checkAuthentication = async () => {
     setLoading(true)
     try{
        const token = getAccessToken()
        setIsAuthenticated( token ? true : false)
     }
     catch(err){
        console.log('Error while checking authentication')
        setIsAuthenticated(false)
     }
     finally{
      setLoading(false)
     }
   }

   useEffect(() => {
    checkAuthentication()
   },[])

   const logout = async () => {
     try{
      await removeAccessToken()
      setIsAuthenticated(false)
     }
     catch(err){
      console.log('Error while logging out')
     }
   }

   const login = async (token) => {
     try{
      setAccessToken(token)
      setIsAuthenticated(true)
     }
     catch(err){
      console.log('Error while logging in')
     }
   }

   return {isAuthenticated,loading, login, logout}
}