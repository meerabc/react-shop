import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
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
        } ,

        changeQuantity(state, action) {
            const { productId, quantity } = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            
            if(indexProductId >= 0) {
                if(quantity <= 0) {
                    // If quantity is 0 or less, remove item
                    state.items.splice(indexProductId, 1)
                } else {
                    // Update quantity
                    state.items[indexProductId].quantity = quantity
                }
            }
        } ,

        removeFromCart(state, action) {
            const { productId } = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            
            if(indexProductId >= 0) {
                state.items.splice(indexProductId, 1)
            }
        } ,

        clearCart(state) {
            state.items = []
        }

    }
})

export const { addToCart, changeQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer