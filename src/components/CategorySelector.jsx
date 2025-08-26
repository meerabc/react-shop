import React from 'react'
import { TbCategoryPlus } from "react-icons/tb";

const CategorySelector = ({onSelection,selectedCategory}) => {

  const categories = ['All','Clothes','Furniture','Shoes','Electronics','Miscellaneous']

  const listElements = categories.map((category)=>
     <li 
        onClick={()=>onSelection(category.toLowerCase())}
        className={category.toLowerCase() === selectedCategory ? 'selected' : ''}>
        {category}
    </li>
  )
  return (
    <div className='category-selector'>
      <h2>
        <TbCategoryPlus />
        Categories
      </h2>
      <ul className='categories-list'>
        {listElements}
      </ul>
    </div>
  )
}

export default CategorySelector
