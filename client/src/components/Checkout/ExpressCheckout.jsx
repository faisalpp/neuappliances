import React, { useEffect, useState } from 'react';
import { useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { GetStripePublishKey,createPaymentIntent } from '../../api/order';
import Toast from '../../utils/Toast'

const ExpressCheckout = () => {
  const [paymentReq, setPaymentReq] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleCardPayment = async (e) => {
    e.preventDefault()
        if(!stripe && !elements){
         Toast('Stripe Not Loaded!','error',100)
         return
        }
     const getPayIntent = await createPaymentIntent({price:200*100,mode:['card'],currency:'usd',description:"Neuappliance Outlet Card Transaction"}) 
     console.log(getPayIntent.data)
     if(getPayIntent.status === 200){
        stripe
        .confirmPayPalPayment(getPayIntent.data.payIntent.client_secret, {
          // Return URL where the customer should be redirected after
          // the authorization.
          return_url: "https://example.com/setup/complete",
        })
        .then(function(result) {
          if (result.error) {
            // Inform the customer that there was an error.
          }
          console.log(result)
        });
        
     }else{
        Toast('Payment Intent Error!','error',1000)
     }
  }


  return (
    <fieldset className='border border-b31 rounded-md pb-5 px-5 pt-2'>
      <legend className='mx-auto text-b16 font-medium text-sm px-3'>Express checkout</legend>
      <div className='grid grid-cols-3 gap-2'>
        <button className='rounded text-white flex justify-center p-3 bg-[#5A31F4]'>
          <img src='/payment/shoppay.webp' alt='shoppay' className='h-[23px] object-contain' />
        </button>
        <button onClick={handleCardPayment} className='rounded text-white flex justify-center p-3 bg-[#113984]'>
          <img src='/payment/paypal.webp' alt='shoppay' className='h-[23px] object-contain' />
        </button>
        {paymentReq && <PaymentRequestButtonElement options={{ paymentRequest: paymentReq }} />}
      </div>
    </fieldset>
  );
};

export default ExpressCheckout;
