import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({id,image,title,description,category,price}) => {

  const navigate = useNavigate()

  const onClick = (productId) => {
    navigate(`/${productId}`)
  }

  return (
    <div className='product-card'>
      <div className='product-img-container'
           onClick={()=>onClick(id)}>
           <img src={image} alt='product image'/>
      </div>
      <h2>{title}</h2>
      <div className='desc-container'>
        <p className='product-desc'>{description}</p>
        <span  onClick={()=>onClick(id)} >Read More</span>
      </div>
      <div className='product-category'>
        {category}
      </div>
      <div className='price-container'>
        <div className='price'>
          <p className='price-header'>price</p>
          <p className='price-value'>{`$ ${price}`}</p>
        </div>
        <button onClick = {()=>navigate('/cart')}>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard

