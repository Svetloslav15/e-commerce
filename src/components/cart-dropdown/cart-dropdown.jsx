import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import {selectCartHidden, selectCartItems} from "../../redux/cart/cart-selectors";
import {toggleCartHidden} from "../../redux/cart/cart-actions";

const CartDropdown = ({hidden, cartItems, history, dispatch}) => (
    <div className="cart-dropdown" style={{display: `${hidden ? 'none' : ''}`}}>
        <div className="cart-items">
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem}/>
                        )
                    )
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )

            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>Go to Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));