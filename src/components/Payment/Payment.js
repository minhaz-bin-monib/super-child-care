import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Payment = () => {
    return (
        <div>

            <Elements stripe={stripePromise}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
            </Elements>

        </div>
    );
};

export default Payment;