import React from 'react'
import { useEffect,useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchField from '../../components/SearchField'
import ProductCard from '../../components/ProductCard'
import CategorySelector from '../../components/CategorySelector'
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
    useEffect(() => {
        const searchQueryParam = searchParams.get('search');
        setSearchQuery(searchQueryParam || '');
        const categoryParam = searchParams.get('category')
        setCategory(categoryParam || 'all')
    }, [searchParams]); 

    //gets filtered products based on applied filters
    useEffect(()=>{
      const fetchData = async () =>{
        try{
          setLoading(true)
          let apiURL
          if (searchQuery && category!=='all') {
            apiURL = `https://api.escuelajs.co/api/v1/products/?title=${searchQuery}&categorySlug=${category}` 
          }
          else if(searchQuery){
            apiURL = `https://api.escuelajs.co/api/v1/products/?title=${searchQuery}` 
          }
          else if(category!=='all'){
             apiURL = `https://api.escuelajs.co/api/v1/products/?categorySlug=${category}` 
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
    },[searchQuery,category])

    //only to print the products we are getting from api
    useEffect(()=>{
      console.log(filteredProducts)
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
           <SearchField onSearch={handleSearchChange} />
      </div>
      <div className='main-container'>
        <div className='products-container'>
            {productCardElements}
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