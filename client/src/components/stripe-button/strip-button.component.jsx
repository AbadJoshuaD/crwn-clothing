import React from 'react'
import StripeCheckOut from 'react-stripe-checkout'
import axios from 'axios'
//A simple stripe integration to the application that allow us to access the stripe button and process payment later on
const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_ITcfbEsA7SzTvvkRTEdog9KP006HE0dTUj'
    
    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            alert('Succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ',JSON.parse(error));
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };
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