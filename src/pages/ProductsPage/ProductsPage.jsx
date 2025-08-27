import React from 'react'
import { useEffect,useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchField from '../../components/SearchField'
import ProductCard from '../../components/ProductCard'
import CategorySelector from '../../components/CategorySelector'
import {ScaleLoader} from 'react-spinners'
import './ProductsPage.css'

const ProductsPage = () => {

    const [searchParams,setSearchParams] = useSearchParams()
    const newParams = new URLSearchParams(searchParams)
    //for search field 
    const [searchQuery,setSearchQuery] = useState('')
    //for categoryselector
    const [category,setCategory]= useState('all')
    //products with filters(if applied)
    const [filteredProducts,setFilteredProducts] = useState([])
    const [loading,setLoading] = useState(false)

    //for search field
    const handleSearchChange = (input) => {
      if(input)
        newParams.set('search',input)
      else
        newParams.delete('search')
      setSearchParams(newParams)
    }

    const handleCategoryChange = (category) => {
      if(category === 'all')
        newParams.delete('category')
      else
        newParams.set('category',category)
      setSearchParams(newParams)
    }

    //set search query value each time the search/query parameters change in url,so we can filter results
    //accordingly
    useEffect(()=>{
      const fetchData = async () =>{
        try{
          setLoading(true)

          const searchQueryParam = searchParams.get('search') || ''
          const categoryParam = searchParams.get('category') || 'all'
          setSearchQuery(searchQueryParam)
          setCategory(categoryParam)

          let apiURL
          if (searchQueryParam && categoryParam!=='all') {
            apiURL = `https://api.escuelajs.co/api/v1/products/?title=${searchQueryParam}&categorySlug=${categoryParam}` 
          }
          else if(searchQueryParam){
            apiURL = `https://api.escuelajs.co/api/v1/products/?title=${searchQueryParam}` 
          }
          else if(categoryParam!=='all'){
             apiURL = `https://api.escuelajs.co/api/v1/products/?categorySlug=${categoryParam}` 
          }
          else {
            apiURL = 'https://api.escuelajs.co/api/v1/products'   
          }
          const response = await fetch(apiURL)
          const result = await response.json()
          setFilteredProducts(result)
          if(!response.ok)
            console.log('response not OK')
        }
        catch(err){
            console.log(err)
        }
        finally{
          setLoading(false)
        }
      }
      fetchData()
    },[searchParams])

    //only to print the products we are getting from api
    useEffect(()=>{
      console.log('Filtered Products : ',filteredProducts)
    },[filteredProducts])

    const productCardElements = filteredProducts.map((product)=>
      <ProductCard 
         key={product.id}
         id={product.id}
         image={product.images[0]}
         title={product.title}
         description={product.description}
         category={product.category.name}
         price={product.price}
      />
    )

    return (
    <div className='products-page container'>
      <div className='search-container'>
           <SearchField 
             onSearch={handleSearchChange} 
             currentValue={searchQuery}/>
      </div>
      <div className='main-container'>
        <div className='products-container'>
            <ScaleLoader 
               loading={loading}
               color='#703BF7'
               cssOverride={{ margin: "40px auto", display: "block" }}
            />
            {!loading && productCardElements}
        </div>
        <div className='categories-container'>
            <CategorySelector 
               onSelection={handleCategoryChange}
               selectedCategory={category}/>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage