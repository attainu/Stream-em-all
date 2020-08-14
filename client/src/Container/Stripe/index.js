import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripekey =
  'pk_test_51HFF8bFYHbXxM4QyMVsFylhJIM1mlpFbJlpB91d6FGrLEx7jCoJJOmMfGcCa17NQplRuxaQctdjggM5jzSGmK76S00mJhxOEkS';
const Stripe = () => {
  const [product, setProduct] = useState({
    name: 'Package Price',
    price: 450,
    productBy: 'Netflix',
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    return fetch('http://localhost:5000/paymemt', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('Response ', response);
        const { status } = response;
        console.log('Status', status);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log();
  return (
    <StripeCheckout
      image='https://dwglogo.com/wp-content/uploads/2019/02/Netflix_N_logo.png'
      token={makePayment}
      stripeKey={stripekey}
      name='Netflix 450'
      currency='INR'
      amount={product.price * 100}
      key={stripekey}
      email='akashdutta1993official@gmail.com'
      allowRememberMe={false}
    >
      <button className='btn'>Pay</button>
    </StripeCheckout>
  );
};

export default Stripe;
