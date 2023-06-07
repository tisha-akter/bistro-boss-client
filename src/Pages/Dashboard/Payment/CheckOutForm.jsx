import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckOutForm = ({ price }) => {

    const stripe = useStripe();
    const element = useElements();
    const [cardError, setCartError] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !element) {
            return
        }

        const card = element.getElement(CardElement);
        if (card === null) {
            return
        }

        // console.log('card', card)

        // use your card element with other stripe.js apis 
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error);
            setCartError(error.message)
        }
        else {
            setCartError('');
            console.log('payment method', paymentMethod)
        }
    }

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
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
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError &&  <p className="text-red-600 ml-8">{cardError}</p>
            }
        </>
    );
};

export default CheckOutForm;