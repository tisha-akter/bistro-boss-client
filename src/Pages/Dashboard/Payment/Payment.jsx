import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../../hooks/useCart";

//todo: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce( (sum, item) => sum + item.price,0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <SectionTitle subHeading="Please Process" heading="PAYMENT"></SectionTitle>
            
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;