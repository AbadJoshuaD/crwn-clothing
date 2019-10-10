//Here are the utility functions available in cart

//Add item cart takes the current items and the cart item to add given by the action payload
//We declare an existingCartItem so that we can find if the item already exist.
//If it exist we will on add quanity to its current quantity and if not we will add it to the card items and add a props of 
//quanity + 1
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
//RemoveItem from cart it is basically same with add item but instead it will reduce the quanity.
//We only add on case that if the existing cart item quanity is 1 we have to filter it from the current cartItems.
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}