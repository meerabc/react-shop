import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux' 
import { addToCart } from '../stores/cart'

const ProductCard = ({id,image,title,description,category,price}) => {

  const navigate = useNavigate()

  //just to view current cart
  const carts = useSelector(store=>store.cart.items)
  console.log('carts', carts)
  
  const dispatch = useDispatch()

  const onClick = (productId) => {
    navigate(`/${productId}`)
  }

  const handleAddToCart = () => {
      dispatch(addToCart({
        productId : id ,
        quantity: 1
      }))
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
        <button onClick = {handleAddToCart}>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard

