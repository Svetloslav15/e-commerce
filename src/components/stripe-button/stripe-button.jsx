import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_1u6J0z2XpZFmahqPiHmmaGls00IPYiJ3JL';

    const onToken = (token) => {
        //Submit actual payment to server
        console.log(token);
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='E-commerce App'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;