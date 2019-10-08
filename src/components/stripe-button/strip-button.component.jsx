import React from 'react'
import StripeCheckOut from 'react-stripe-checkout'

const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_ITcfbEsA7SzTvvkRTEdog9KP006HE0dTUj'
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckOut
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image=''
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel ='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        >

        </StripeCheckOut>
    )
}
export default StripeCheckOutButton;