import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from '../../Components/StripeCheckOutForm';
const stripePromise = loadStripe(
  'pk_test_51HFF8bFYHbXxM4QyMVsFylhJIM1mlpFbJlpB91d6FGrLEx7jCoJJOmMfGcCa17NQplRuxaQctdjggM5jzSGmK76S00mJhxOEkS'
);

function Stripe() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </div>
  );
}

export default Stripe;
