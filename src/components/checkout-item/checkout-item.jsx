import React from 'react';
import {connect} from 'react-redux';

import './checkout-item.scss';
import {addItemToCart, decreaseItemQuantity, removeItemFromCart} from "../../redux/cart/cart-actions";

const CheckoutItem = ({item, removeItemFromCart, addItem, decreaseItemQuantity}) => {
    const {imageUrl, quantity, name, price} = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => decreaseItemQuantity(item)} className="arrow">&#10094;</div>
                   <span className="value">{quantity}</span>
                <div onClick={() => addItem(item)} className="arrow">&#10095;</div>
            </span>
            <span className="price">$ {price}</span>
            <span onClick={() => removeItemFromCart(item)} className="remove-button">&#10005;</span>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
    addItem: (item) => dispatch(addItemToCart(item)),
    decreaseItemQuantity: (item) => dispatch(decreaseItemQuantity(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);