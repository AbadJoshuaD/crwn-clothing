import CartActionTypes from '../cart/cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils'
//Creating a reducer for the cart and setting its initial states
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //The first case was only checking if the state of the drop down cart or toggling the cart icon
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        //This was an add item reducer wherein we use a addItemToCart utility function that takes in the current state of the cart items
        //And the action payload that is comming in. It will enable adding items to our cart 
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        //This was an clear item reducer that utilizes ES6 filter function that allow us to filter cart item that are not equal to
        // action payload.id coming in, meaning to say the clicked item from the app will be filtered out on the array of cart items
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        //This is the opposite of remove item it will decrease the quanity of your item if you have multiple and will remove the item cart if
        // you still click it until its last quantity.
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;