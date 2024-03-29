import { useStripe } from '@stripe/react-stripe-js';
import { createPaymentIntent,confirmOrder } from '../api/order';
import {setOrderErrors,setPaymentIntent,setOrderStatus,resetOrder,setProcessing} from '../store/orderSlice'
import Toast from '../utils/Toast'
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';


const useCheckout = () => {

  const stripe = useStripe();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const orderErrors = useSelector((state)=>state.order.orderErrors)
  const orderStatus = useSelector((state)=>state.order.orderStatus)
  const cartId = useSelector((state)=>state.cart?.cart._id)
  const billingAddress = useSelector((state)=>state.order.billingAddress)


  const ConfirmOrder = async (intent,ordNo) => {
    if(orderErrors.confirm || !orderStatus.confirm){
     console.log('confiremd1')
     const res = await confirmOrder({orderNo:ordNo,intent:intent,cartId:cartId})
     if(res.status === 200){
       Toast(res.data.msg,'success',1000)
       setOrderErrors({confirm:false})
       setOrderStatus({confirm:true})
       dispatch(resetCart())
       dispatch(resetOrder())
       dispatch(setProcessing(false))
       navigate('/mycart/order-success')
     }else{
       Toast(res.data.message,'error',1000)
       setOrderErrors({confirm:true})
       setOrderStatus({confirm:false})
       dispatch(setProcessing(false))
     }
     //  (223) 456-7893
   }
  //  else{
  //   console.log('confiremd2')
  //    Toast('Order Already Complete!','success',1000)
  //    dispatch(resetCart())
  //    dispatch(resetOrder())
  //    dispatch(setProcessing(false))
  //    navigate('/mycart/order-success')
  //   }
   }


  const handleCardPayment = async (cardNumber,cardExpiry,cardCvc,grandTotal,orderInfo,orderNo) => {
    const CardNumber = cardNumber;
    const CardExpiry = cardExpiry;
    const CardCvc = cardCvc;
    const getPayIntent = await createPaymentIntent({price:grandTotal*100,mode:['card'],currency:'usd',description:"Neuappliance Outlet Card Transaction"}) 
    if(getPayIntent){
      const paymentIntent =  await stripe.confirmCardPayment(getPayIntent.data.payIntent.client_secret,{
        payment_method:{
          card: CardNumber,
          billing_details:{
           name: `${orderInfo.firstName} ${orderInfo.lastName}`,
           email:orderInfo.email,
           address:{line1:orderInfo.address,city:orderInfo.city,country:'us',postal_code:orderInfo.postalCode,state:orderInfo.state}
          },
         },
       });


       if(paymentIntent?.error){
         dispatch(setOrderErrors({payment:true}))
         dispatch(setOrderStatus({payment:false}))
         dispatch(setProcessing(false))
         Toast(paymentIntent.error.code,'error',1000)
       }else{
         dispatch(setOrderErrors({payment:false}))
         dispatch(setOrderStatus({payment:true}))
         dispatch(setPaymentIntent(paymentIntent.paymentIntent))
         ConfirmOrder(paymentIntent.paymentIntent,orderNo)
       }

    }else{
       dispatch(setOrderErrors({payment:true}))
       dispatch(setOrderStatus({payment:false}))
       dispatch(setProcessing(false))
       Toast('Payment Intent Error!','error',1000)
    }
 }



const handleAffirmPayment = async (orderInfo,grandTotal,ordNo,billAdr) => {
  // const REDIRECT_URL = `http://localhost:5173/mycart/payment/?callback=affirm&order_number=${ordNo}`;
  const REDIRECT_URL = `https://neuoutletapp-03ffb1b9719f.herokuapp.com/mycart/payment/?callback=affirm&order_number=${ordNo}`;
  const getPayIntent = await createPaymentIntent({price:grandTotal*100,mode:['affirm'],currency:'usd',description:"Neuappliance Outlet Affirm Transaction"}) 
  const shippingName = `${orderInfo.firstName} ${orderInfo.lastName}`;
  const billingName = `${billAdr.firstName} ${billAdr.lastName}`;
  if(getPayIntent){
   try{
   const paymentIntent = await stripe.confirmAffirmPayment(
    getPayIntent.data.payIntent.client_secret,{
      payment_method: {
      // Billing information is optional but recommended to pass in.
      billing_details: {
        email: billAdr.email,
        name: billingName,
        address: {
          line1: billAdr.address,
          city: billAdr.city,
          state: 'CA',
          country: 'US',
          postal_code: billAdr.postalCode,
        },
      },
      },

      // Shipping information is optional but recommended to pass in.
      shipping: {
      name: shippingName,
      address: {
        line1: orderInfo.address,
        city: orderInfo.city,
        state: 'CA',
        country: 'US',
        postal_code: orderInfo.postalCode,
      },
      },
      return_url:REDIRECT_URL
    })  
  
  // console.log(a)
    // console.log(billingAddress)
   }catch(error){
    console.log(error)
     Toast('Affirm Payment Failed!','error',1000)
     dispatch(setOrderErrors({payment:true}))
     dispatch(setOrderStatus({payment:false}))
     dispatch(setProcessing(false))
   }  

 }else{
   Toast('Affirm Payment Failed!','error',1000)
   dispatch(setOrderErrors({payment:true}))
   dispatch(setOrderStatus({payment:false}))
   dispatch(setProcessing(false))
 }
}


const handlePaypalPayment = async (grandTotal,ordNo) => {
  // const REDIRECT_URL = `http://localhost:5173/mycart/payment/?callback=paypal&order_number=${ordNo}`;
  const REDIRECT_URL = `https://neuoutletapp-03ffb1b9719f.herokuapp.com/mycart/payment/?callback=paypal&order_number=${ordNo}`;
  const getPayIntent = await createPaymentIntent({price:grandTotal*100,mode:['paypal'],currency:'usd',description:"Neuappliance Outlet Paypal Transaction"}) 
  console.log(getPayIntent)
  if(getPayIntent.data.status === 200){
    const paymentIntent = await stripe.confirmPayPalPayment(
      getPayIntent.data.payIntent.client_secret,
      {
        return_url: REDIRECT_URL,
      }
    );
     console.log(paymentIntent)
    // if(paymentIntent?.error){
    //   dispatch(setOrderErrors({payment:true}))
    //   dispatch(setOrderStatus({payment:false}))
    //   dispatch(setProcessing(false))
    //   Toast(paymentIntent.error.code,'error',1000)
    // }else{
    //   dispatch(setOrderErrors({payment:false}))
    //   dispatch(setOrderStatus({payment:true}))
    //   dispatch(setPaymentIntent(paymentIntent.paymentIntent))
    //   ConfirmOrder(paymentIntent.paymentIntent,orderNo)
    // }

 }else{
   Toast(getPayIntent.data.message,'error',1000)
   dispatch(setProcessing(false))
 }
}

return {handlePaypalPayment,handleAffirmPayment,ConfirmOrder,handleCardPayment  };
  
}

export default useCheckout