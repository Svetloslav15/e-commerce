export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        item => item.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(item =>
            item.id === cartItemToAdd.id
                ? {...item, quantity: item.quantity + 1} : item)
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(item => item.id !== itemToRemove.id);
};

export const decreaseItemQuantity = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
        item => item.id === itemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id);
    }

    return cartItems.map(
        cartItem =>
            cartItem.id === itemToRemove.id
                ? {...cartItem, quantity: cartItem.quantity - 1}
                : cartItem
    );
};