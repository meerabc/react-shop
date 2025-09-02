import { createContext, useContext, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser, clearUser } from '../stores/cart'
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
    const [user, setUserData] = useState(null)
    const dispatch = useDispatch()

    // Fetches user profile with access token
    const fetchUserProfile = async (token) => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                console.log('failed to fetch user profile')
            }

            const userData = await response.json()
            console.log('User profile fetched:', userData)
            return userData
        } catch (err) {
            console.log('Error fetching user profile:', err)
            return null
        }
    }


    const checkAuthentication = async () => {
        setLoading(true)
        try {
            const token = await getAccessToken()
            
            if (token) {
                // Fetches user profile to get user ID.first we fetch user data then check for authentication
                const userData = await fetchUserProfile(token)
                
                if (userData) {
                    setUserData(userData)
                    setIsAuthenticated(true)
                    // Sets user in cart store to load their cart
                    dispatch(setUser({ userId: userData.id }))
                    console.log('authenticated user:', userData.name)
                } else {
                    // if token is invalid,we remove it
                    await removeAccessToken()
                    setIsAuthenticated(false)
                    setUserData(null)
                    dispatch(clearUser())
                }
            } else {
                setIsAuthenticated(false)
                setUserData(null)
                dispatch(clearUser())
                console.log('unauthenticated user')
            }
        } catch(err) {
            console.log('Error while checking authentication:', err)
            setIsAuthenticated(false)
            setUserData(null)
            dispatch(clearUser())
        } finally {
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
            setUserData(null)
            dispatch(clearUser())
            console.log('logout successful')
            // navigate('/')
        }
        catch(err){
            console.log('Error while logging out: ',err)
        }
    }

    const login = async (token) => {
        try{
            setAccessToken(token)
            //fetches user data after he/she is logged in
            const userData = await fetchUserProfile(token)
            if (userData) {
                setUserData(userData)
                setIsAuthenticated(true)
                // Sets user in cart store to load his/her cart
                dispatch(setUser({ userId: userData.id }))
                console.log('login successful, user:', userData.name)
            }
        }
        catch(err){
            console.log('Error while logging in')
            await removeAccessToken()
            setIsAuthenticated(false)
            setUserData(null)
            dispatch(clearUser())
        }
    }

    return <AuthContext.Provider value = {{isAuthenticated, loading, login, logout, user}}>
        {children}
    </AuthContext.Provider>
}

