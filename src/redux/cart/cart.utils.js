export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ?
            {...cartItem, quantity: cartItem.quantity + 1}
            :
            { cartItem }
            )
    }

    // if not found in the array :
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }] // gets attached first time since the if block doesn't run if new item

};


// import this in reducer




