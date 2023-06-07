import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const CheckOutForm = ({ price }) => {

    const stripe = useStripe();
    const element = useElements();
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCartError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const[processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }, [])


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
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if(confirmError){
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent);

        setProcessing(false)

        if(paymentIntent.status === "succeeded"){
            setTransactionId(paymentIntent.id);
            // const transactionId = paymentIntent.id;
            // todo next step 
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
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600 ml-8">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-600">Transaction complete with transactionId: {transactionId}</p>
            }
        </>
    );
};

export default CheckOutForm;