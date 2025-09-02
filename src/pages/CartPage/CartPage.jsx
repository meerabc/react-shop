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

  return (
    <div className='cart-page container'>
      <h1><RiShoppingBag4Fill />My Cart</h1>
      <div className='cart-items-container'>
        {carts.length==0 &&  <p>Cart is empty !</p>}
        {carts.length!==0 && cartItemElements}
      </div>
    </div>
  )
}

export default CartPage
