import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: localStorage.getItem('carts') ? 
           JSON.parse(localStorage.getItem('carts')) : []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {productId, quantity, productName, productImage, productCategory, productPrice} = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            }
            else{
                state.items.push({
                    productId, 
                    quantity,
                    productName,
                    productImage,
                    productCategory,
                    productPrice
                })
            }
            //so data remains even when page is refreshed
            localStorage.setItem("carts", JSON.stringify(state.items))
        } ,

        changeQuantity(state, action) {
            const { productId, quantity } = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            
            if(indexProductId >= 0) {
                if(quantity <= 0) {
                    // If quantity is 0 or less, remove item(even tho i have handled that I cant select 
                    // quantity to be 0 but just to be on safe side
                    state.items.splice(indexProductId, 1)
                } else {
                    // Update quantity
                    state.items[indexProductId].quantity = quantity
                }
            }
            localStorage.setItem("carts", JSON.stringify(state.items))
        } ,

        removeFromCart(state, action) {
            const { productId } = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            
            if(indexProductId >= 0) {
                state.items.splice(indexProductId, 1)
            }
            localStorage.setItem("carts", JSON.stringify(state.items))
        } ,

        clearCart(state) {
            state.items = []
            localStorage.setItem("carts", JSON.stringify(state.items))
        }

    }
})

export const { addToCart, changeQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer