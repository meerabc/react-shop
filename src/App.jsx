import React from 'react'
import ThemeContext from './contexts/ThemeContext'
import {useState,useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom' 
import ProductsPage from './pages/ProductsPage/index'
import SignUpPage from './pages/SignUpPage/index'
import SignInPage from './pages/SignInPage/index'
import CartPage from './pages/CartPage/index'
import ProductDetailPage from './pages/ProductDetailPage/index'
import NavBar from './components/NavBar'
import PublicRoute from './routes/PublicRoute'
import ProtectedRoute from './routes/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContext' 
import { Provider } from 'react-redux'
import { store } from './stores'

const App = () => {

  const getDefaultTheme = () => {
    const defaultTheme = localStorage.getItem('theme')
    return defaultTheme || 'light'
  }

  const [theme,setTheme] = useState(getDefaultTheme)

  useEffect(()=>{
      localStorage.setItem('theme', theme)
      document.body.setAttribute('theme',theme)
  },[theme])

  
  return (
    <AuthProvider>
    <Provider store={store}>
    <ThemeContext.Provider value={{theme,setTheme}} >
    <Router>
      <NavBar />
      <Routes>

        <Route path='/' element={<ProductsPage />} />
        <Route path='/:productId' element={<ProductDetailPage />} />

        <Route element={<PublicRoute />} >
           <Route path='/signin' element={<SignInPage />} />
           <Route path='/signup' element={<SignUpPage />} />
        </Route>

        <Route element={<ProtectedRoute />} >
          <Route path='/cart' element={<CartPage />} />
        </Route>

      </Routes>
    </Router>
    </ThemeContext.Provider>
    </Provider>
    </AuthProvider>
  )
}

export default App
 