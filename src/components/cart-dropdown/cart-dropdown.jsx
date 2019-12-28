import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';

const CartDropdown = ({hidden, cartItems}) => (
    <div className="cart-dropdown" style={{display: `${hidden ? 'none': ''}`}}>
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    </div>
);

const mapStateToProps = ({cart}) => ({
    hidden: cart.hidden,
    cartItems: cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);