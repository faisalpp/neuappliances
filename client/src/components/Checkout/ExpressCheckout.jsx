import React, { useEffect, useState } from 'react';
import { useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';

const ExpressCheckout = () => {
  const [paymentReq, setPaymentReq] = useState(null);
  const stripe = useStripe();
  const elements = useElements();


  const handleApplePayment = async () => {
    if (!stripe || !elements) {
        console.log('Stripe or elements not found');
        return;
      }
  
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Neuappliance Outlet Online Purchase Payment',
          amount: 200
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });
      console.log(pr)
  
       const resp = await pr.canMakePayment()
       if (resp) {
         // Show Apple pay button
         setPaymentReq(pr);
       }
  }

  useEffect(() => {
    handleApplePayment()
  }, [stripe, elements]);

  return (
    <fieldset className='border border-b31 rounded-md pb-5 px-5 pt-2'>
      <legend className='mx-auto text-b16 font-medium text-sm px-3'>Express checkout</legend>
      <div className='grid grid-cols-3 gap-2'>
        <button className='rounded text-white flex justify-center p-3 bg-[#5A31F4]'>
          <img src='/payment/shoppay.webp' alt='shoppay' className='h-[23px] object-contain' />
        </button>
        <button className='rounded text-white flex justify-center p-3 bg-[#113984]'>
          <img src='/payment/paypal.webp' alt='shoppay' className='h-[23px] object-contain' />
        </button>
        {paymentReq && <PaymentRequestButtonElement options={{ paymentRequest: paymentReq }} />}
      </div>
    </fieldset>
  );
};

export default ExpressCheckout;
