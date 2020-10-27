import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js/pure';
import {PaymentEdit} from '../components/Payment';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HgOFFGpu9CoIOCABKXsM3KrlBs9rtNbRfvXokvOzPI6UVlmiJRxfRBAp9dDkwj5wxvA2YN98qnVSkABA6VHC5z600clEWHzu6');

const CheckoutWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
        <PaymentEdit />
    </Elements>
  );
};

export default CheckoutWrapper