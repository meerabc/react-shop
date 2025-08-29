import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem'
import './CartPage.css'

const CartPage = () => {

  const carts = useSelector(store=>store.cart.items)

  const cartItemElements = carts.map(item=>
    <CartItem key={item.productId}
              quantity={item.quantity}
              name={item.productName}
              image={item.productImage}
              category={item.productCategory}
              price={item.productPrice} />
  )

  return (
    <div className='cart-page container'>
      <div className='cart-items-container'>
        {cartItemElements}
      </div>
    </div>
  )
}

export default CartPage
