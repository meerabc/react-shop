import { createContext, useContext, useState, useEffect } from 'react'
import { getAccessToken,setAccessToken, removeAccessToken } from '../utils/localStorage'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be used inside Auth Provider')
    }
    return context
}

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    const checkAuthentication = async () => {
        setLoading(true)
        try{
        const token = await getAccessToken()
        setIsAuthenticated( token ? true : false)
        console.log(token ? 'authenticated user' : 'unauthenticated user')
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
        console.log('logout successful')
        // navigate('/')
        }
        catch(err){
        console.log('Error while logging out')
        }
    }

    const login = async (token) => {
        try{
        setAccessToken(token)
        setIsAuthenticated(true)
        console.log('login successful , authentucation token: ', token)
        }
        catch(err){
        console.log('Error while logging in')
        }
    }

    return <AuthContext.Provider value = {{isAuthenticated,loading, login, logout}}>
        {children}
    </AuthContext.Provider>
}

