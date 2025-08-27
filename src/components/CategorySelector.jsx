import React from 'react'
import { TbCategoryPlus } from "react-icons/tb";
import {useEffect,useState} from 'react'
import {BeatLoader} from 'react-spinners'

const CategorySelector = ({onSelection,selectedCategory}) => {

  const [categories,setCategories] = useState([])
  const [loading,setLoading] = useState(false)

  //fetch all categories 
  useEffect(()=>{
    setLoading(true)
    const getCategories = async () => {
      try{
        const response = await fetch('https://api.escuelajs.co/api/v1/categories')
        const result = await response.json()
        setCategories([{ name: "All", slug: "all" },...result])
        
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
    getCategories()       
  },[])

  //only to print categories
  useEffect(()=>{
    console.log('Categories : ',categories)
  },[categories])

  //list item elements to render in ul
  const listElements = categories.map((category)=>
     <li 
        key={category.id}
        onClick={()=>onSelection(category.slug)}
        className={category.slug === selectedCategory ? 'selected' : ''}>
        {category.name}
    </li>
  )
  return (
    <div className='category-selector'>
      <h2>
        <TbCategoryPlus />
        Categories
      </h2>
      <ul className='categories-list'>
        <BeatLoader 
           loading={loading}
           color='#703BF7'
           cssOverride={{margin:"0 auto",display:"block" }}
           size = {10}/>
        {!loading && listElements}
      </ul>
    </div>
  )
}

export default CategorySelector
