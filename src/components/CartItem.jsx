import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {changeQuantity} from '../stores/cart'

const CartItem = ({quantity,name,image,category,price}) => {

  const dispatch = useDispatch()

  const [productQuantity,setProductQuantity] = useState(quantity)

  const handleMinusQuantity = () => {
    setProductQuantity(quantity-1 < 1 ? 1 : quantity-1)
  }

  const handlePlusQuantity = () => {
    setProductQuantity(quantity + 1)
  }

  return (
    <div className='cart-item'>
      <div className='product-img-container'>
        <img src={image} alt='product-image' />
      </div>
      <div className='detail'>
          <p className='name'>{name}</p>
          <div className='detail-sub-div'>
            <div className='info'>
              <p className='category'>{category}</p>
              <p className='price'>price : <span>{`$ ${price}`}</span></p>
            </div>
            <div className='quantity-selection-div'>
              <button onClick={handleMinusQuantity}>-</button>
              <span>{productQuantity}</span>
              <button onClick={handlePlusQuantity}>+</button>
            </div>
          </div>
      </div>
      <button className='delete-button'>delete</button>
    </div>
  )
}

export default CartItem
