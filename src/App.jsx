import React from 'react'
import ThemeContext from './contexts/ThemeContext'
import {useState,useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom' 
import ProductsPage from './pages/ProductsPage/index'
import ProductDetailPage from './pages/ProductDetailPage/index'
import NavBar from './components/NavBar'

const App = () => {

  const getDefaultTheme = () => {
    const defaultTheme = localStorage.getItem('theme')
    return defaultTheme || 'light'
  }

  const [theme,setTheme] = useState(getDefaultTheme)
  
  const toggleTheme = () => {
    setTheme(prevTheme=>
      prevTheme === 'light' ? 'dark' : 'light'
    )
  }

  useEffect(()=>{
      localStorage.setItem('theme', theme)
      document.body.setAttribute('theme',theme)
  },[theme])

  
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}} >
    <Router>
      <NavBar />
      <Routes>
          <Route path='/' element={<ProductsPage />} />
          <Route path='/:productId' element={<ProductDetailPage />} />
      </Routes>
    </Router>
    </ThemeContext.Provider>
  )
}

export default App
 