import React from "react";
import { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { error } from "daisyui/src/colors";
import axios from "axios";
const Checkout = ({price}) => {
   const [carderror, setCarderror] = useState(null)
  const stripe = useStripe();
  const elements = useElements();
  const [clientsecreat,setClientsecreat]=useState('');
  useEffect(() => {
    axios.post("http://localhost:5000/create-payment-intent",{price:price})
    .then(res=>{
      setClientsecreat(res.data.clientSecret)
    })
  }, [price])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCarderror(error.message)
    } else {
        setCarderror(null)
        //Confirm card payment
        const {paymentIntent,error: intentError} = await stripe.confirmCardPayment(clientsecreat,{
          payment_method:{
            card:card,
            billing_details:{
              email:"ayt.ullah.dev@gmail.com",
            }
          },
        });
        if(intentError){
          setCarderror(intentError?.message);
        }else{
          setCarderror('');
          console.log("Sucessfully Payment");
        }
    }
  };

  return (
    <div className="mx-10 rounded p-5">
      <form className=" bg-white p-5" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn bg-green-500 border-none hover:bg-green-600"
          disabled={!stripe || !clientsecreat}
        >
          Pay
        </button>
        {carderror && <p className="text-sm text-red-400">{carderror}</p>}
      </form>
      
    </div>
  );
};

export default Checkout;
