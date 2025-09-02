import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem'
import { RiShoppingBag4Fill } from "react-icons/ri";
import './CartPage.css'

const CartPage = () => {

  const carts = useSelector(store=>store.cart.items)

  const cartItemElements = carts.map(item=>
    <CartItem key={item.productId}
              productId={item.productId}
              quantity={item.quantity}
              name={item.productName}
              image={item.productImage}
              category={item.productCategory}
              price={item.productPrice} />
  )

  if(carts.length === 0)
    return (
    <div className='cart-page container'>
      <div className='cart-items-container'>
        <p>No items yet</p>
      </div>
    </div>
  )

  return (
    <div className='cart-page container'>
      <h1><RiShoppingBag4Fill />My Cart</h1>
      <div className='cart-items-container'>
        {cartItemElements}
      </div>
    </div>
  )
}

export default CartPage
