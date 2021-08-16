import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JP42DDwFcrkEGVNSgO6T3EJUv9IKxr7muFrcdmzLOvbD8LdWXKT9crBP0b51Rjcl7zwUnclHAmXKiZAJH3SUmeE00irvKcpHV'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
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
    token={onToken}
    stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;