import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';

const Cart = ({hidden}) => (
    <div className="cart-dropdown" style={{display: `${hidden ? 'none': ''}`}}>
        <div className="cart-items">
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    </div>
);
const mapStateToProps = ({cart}) => ({
    hidden: cart.hidden
});
export default connect(mapStateToProps)(Cart);