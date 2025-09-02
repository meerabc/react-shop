import { createSlice } from '@reduxjs/toolkit'

const getCartKey = (userId) => {
    return userId ? `carts_user_${userId}` : 'carts_guest'
}

const getCartFromStorage = (userId) => {
    const key = getCartKey(userId)
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : []
}

const saveCartToStorage = (items, userId) => {
    const key = getCartKey(userId)
    localStorage.setItem(key, JSON.stringify(items))
}

const initialState = {
    items: [],
    userId: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setUser(state, action) {
            const { userId } = action.payload
            state.userId = userId
            state.items = getCartFromStorage(userId)
        },

        clearUser(state) {
            state.userId = null
            state.items = []
        },

        addToCart(state, action) {
            const {productId, quantity, productName, productImage, productCategory, productPrice} = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            
            if(indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({
                    productId, 
                    quantity,
                    productName,
                    productImage,
                    productCategory,
                    productPrice
                })
            }
            // So we can fetch user-specific cart from local storage
            saveCartToStorage(state.items, state.userId)
        },

        changeQuantity(state, action) {
            const { productId, quantity } = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            
            if(indexProductId >= 0) {
                if(quantity <= 0) {
                    state.items.splice(indexProductId, 1)
                } else {
                    state.items[indexProductId].quantity = quantity
                }
            }
            saveCartToStorage(state.items, state.userId)
        },

        removeFromCart(state, action) {
            const { productId } = action.payload
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            
            if(indexProductId >= 0) {
                state.items.splice(indexProductId, 1)
            }
            saveCartToStorage(state.items, state.userId)
        },

        clearCart(state) {
            state.items = []
            saveCartToStorage(state.items, state.userId)
        },
    }
})

export const { addToCart, changeQuantity, removeFromCart, clearCart, setUser, clearUser } = cartSlice.actions
export default cartSlice.reducer