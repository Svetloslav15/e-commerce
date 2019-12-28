import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import {selectCartItems} from "../../redux/cart/cart-selectors";

const CartDropdown = ({hidden, cartItems}) => (
    <div className="cart-dropdown" style={{display: `${hidden ? 'none' : ''}`}}>
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    hidden: state.cart.hidden,
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);