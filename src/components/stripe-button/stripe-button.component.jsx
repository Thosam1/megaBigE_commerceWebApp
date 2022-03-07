import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // stripe wants payments in cent
    const publishableKey = 'sk_test_51Kaj16KEJ0oC7iRJp0oSzlqvm0FLGpZjik1SPiw55nB4uhIuzxVxWMSsdgmeRURAE1WExRywnjZEtkBuj0qsjVGq00jFWeZRp5'

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;