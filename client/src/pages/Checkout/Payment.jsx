import React,{useState,useEffect} from 'react';
import Checkout from './Checkout';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import ReviewDetail from '../../components/Checkout/Shipping/ReviewDetail';
import PaymentMethod from '../../components/Checkout/Payment/PaymentMethod';
import LeftArrowSvg from '../../svgs/LeftArrowSvg';
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ChkLoader from '../../components/Loader/chkLoader';
import TextInput from '../../components/TextInput/TextInput';
import { Checkbox } from "@material-tailwind/react";
import CustomSelect from '../../components/Reusable/CustomSelect';
import {RiQuestionFill} from 'react-icons/ri'
import {FiAlertTriangle} from 'react-icons/fi'
import * as Yup from 'yup';
import Toast from '../../utils/Toast'
import {processOrder,confirmOrder} from '../../api/order'
import {resetOrder, setOrderNo,setOrderErrors,setPaymentIntent,setOrderStatus,setProcessing,setBillingAddress} from '../../store/orderSlice'
import { resetCart } from '../../store/cartSlice';
import { createPaymentIntent } from '../../api/order';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import {CardNumberElement,CardExpiryElement,CardCvcElement} from '@stripe/react-stripe-js'
import isAdmin from '../../services/isAdmin'
import useCheckout from '../../services/checkout';

const Payment = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.cart?.cart.products)

    const {ConfirmOrder,handleCardPayment,handleAffirmPayment,handlePaypalPayment} = useCheckout();

    const location = useLocation()

    const GetQueryParams = () => {
      // Create a URLSearchParams object from the query string
      const queryParams = new URLSearchParams(location.search);
      // Create an object to store the query parameters
      const queryParamsObject = {};
    
      // Iterate through the query parameters and store them in the object
      for (const [key, value] of queryParams.entries()) {
        queryParamsObject[key] = value;
      }
      
      if(queryParamsObject.callback === 'affirm'){
        dispatch(setProcessing(true))
        dispatch(setOrderErrors({payment:true}))
        dispatch(setOrderStatus({payment:false}))
        ConfirmOrder({id:queryParamsObject.payment_intent,created:Date.now(),payment_method_types:['affirm']},queryParamsObject.order_number)
      }else{
        dispatch(setProcessing(false))
      }

    }  

    useEffect(()=>{
      GetQueryParams()
    },[])

    const {email,address,postalCode,city,country,province} = useSelector((state)=>state.order.orderInfo) || {};
    const ordInfo = useSelector((state)=>state.cart?.cart.orderInfo)

    const Countrys = [
        { name: 'USA', value: 'us' },
    ]
    const Province = [
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' }
    ]

    const [bemail,setEmail] = useState('')
    const [keepUpdates,setKeepUpdates] = useState(false)
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [baddress,setAddress] = useState('')
    const [appartment,setAppartment] = useState('')
    const [bcity,setCity] = useState('')
    const [bcountry,setCountry] = useState('usa')
    const [bprovince,setProvince] = useState('alberta')
    const [bpostalCode,setPostalCode] = useState('')
    const [bphone,setPhone] = useState('')
    const [bsaveAddress,setSaveAddress] = useState(false)

    const billingValidationSchema = Yup.object().shape({
      email: Yup.string().required('Email is Required!'),
      firstName: Yup.string().nullable(),
      lastName: Yup.string().required('Last Name is Required!'),
      address: Yup.string().required('Address is Required!'),
      appartment: Yup.string().nullable(),
      city: Yup.string().required('City is Required!'),
      country: Yup.string().required('Country is Required!'),
      province: Yup.string().required('Province is Required!'),
      postalCode: Yup.string().required('Postal Code is Required!'),
      phone: Yup.string().required('Phone is Required!'),
    });

    const [changeZip,setChangeZip] = useState(false)

    const Submit = async () => {
        setChangeZip(true);
        const res = await CheckZip({zip:bpostalCode})
        
        if (res.status == 200) {
          setChangeZip(false);
        } else {
          setChangeZip(false);
        }
      };
    
      useEffect(() => {
       if (bpostalCode.length === 5) {
         Submit();
       }
      }, [bpostalCode])

      const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        if(name === 'keepUpdates'){
            setKeepUpdates(checked)
        }
        if(name === 'saveAddress'){
            setSaveAddress(checked)
        }
    }

      const [isBilling,setIsBilling] = useState(false)
      const [paymentMod,setPaymentMod] = useState('card')


      const [billingErrors,setBillingErrors] = useState(false)
      const [newsEmail,setNewsEmail] = useState([])

      const handleBillingAddress = async () => {
        try{
          const data = {email:bemail,firstName:firstName,lastName:lastName,address:baddress,appartment:appartment,city:bcity,country:bcountry,state:bprovince,postalCode:postalCode,phone:bphone}
          await billingValidationSchema.validate(data, { abortEarly: false });   
          // Card Payment Should be Implemented Here
          if(keepUpdates){
            newsEmail.push(bemail)
          }
          return {status:true,data:data}
      }catch(error){ 
          if (error) {
            let errors = error.errors;
              setBillingErrors(errors)
              errors.forEach((item)=>{
                Toast(item,'error',1000)
              })
              return {status:false}
            } else {
              setBillingErrors([])
            }
       }
      }

      const orderInfo = useSelector((state)=>state.order.orderInfo)
      const grandTotal = useSelector((state)=>state.cart?.cart.grandTotal)
      const cartId = useSelector((state)=>state.cart?.cart._id)
      const userId = useSelector((state)=>state.user._id)
      const isAuth = useSelector((state)=>state.user.auth)
      const orderErrors = useSelector((state)=>state.order.orderErrors)
      const orderStatus = useSelector((state)=>state.order.orderStatus)
      const isAdmin2 = isAdmin()
      const elements = useElements()
      const stripe = useStripe()

      const orderNo = useSelector((state)=>state.order.orderNo)
      const paymentIntent = useSelector((state)=>state.order.paymentIntent)
      const billingAddress = useSelector((state)=>state.order.billingAddress)
      
      
      const handlePayment = async (ordNo,bilAdr) => {
       if(orderErrors.payment || !orderStatus.payment ){
        if(!stripe && !elements){
         Toast('Stripe Not Loaded!','error',100)
         dispatch(setOrderErrors({payment:true}))
         dispatch(setOrderStatus({payment:false}))
         dispatch(setProcessing(false))
         return
        }

        const CardNumber = elements.getElement(CardNumberElement)
        const CardExpiry = elements.getElement(CardExpiryElement)
        const CardCvc = elements.getElement(CardCvcElement)

        switch(paymentMod){
          case 'card':
           handleCardPayment(CardNumber,CardExpiry,CardCvc,grandTotal.toFixed(2),orderInfo,ordNo);
            break;
          case 'paypal':
           handlePaypalPayment(grandTotal.toFixed(2),ordNo);
            break;
          case 'affirm':
              handleAffirmPayment(orderInfo,grandTotal.toFixed(2),ordNo,billingAddress?.email ? billingAddress : bilAdr);
            break;
        }
      
       }else{
        ConfirmOrder(paymentIntent,orderNo)
       }
      }

      const HandleOrder = async (e) => {
        e.preventDefault()
         dispatch(setProcessing(true))
        if(orderErrors.order || !orderStatus.order){
         let billingAddress = {status:false};
         if(isBilling){
            if(orderInfo?.keepUpdates){
             newsEmail.push(orderInfo.email)
            }
           billingAddress = await handleBillingAddress()
          }else{
            if(orderInfo?.keepUpdates){
              newsEmail.push(orderInfo.email)
            }
            billingAddress = {status:true,data:{...orderInfo}}
          }
          if(billingAddress.status){
            dispatch(setBillingAddress(billingAddress.data))
            const  data = {userId:userId,isAdmin:isAdmin2,isAuth:isAuth,cartId:cartId,shippingAddress:orderInfo,billingInfo:billingAddress.data,newsEmail:newsEmail}
            // console.log(data)
             const res = await processOrder(data);
           if(res.status === 200){
            dispatch(setOrderErrors({order:false}))
            dispatch(setOrderStatus({order:true}))
            dispatch(setOrderNo(res.data.orderNo))
            handlePayment(res.data.orderNo,billingAddress.data)
           }else{
            dispatch(setOrderErrors({order:true}))
            dispatch(setOrderStatus({order:false}))
            Toast(res.data.message,'error',1000)
            dispatch(setProcessing(false))
         }
        }else{
            Toast("Billing Address Not Found!",'error',1000)
            dispatch(setProcessing(false))
        }
       }else{
        Toast('Order Already Placed...','success',1000)
         handlePayment(orderNo)
       }
      }

      const processing = useSelector((state)=>state.order.processing)

    return (
        <>  
        {processing ? <ChkLoader /> :null} 
            <Checkout>
                {/* Logo */}
                <img src="/login_logo.webp" alt="" />
                
                {/* Bread Crumbs Start */}
                <BreadCrumb />
                {/* Bread Crumbs End */}

                {/* Shipping */}

                <div className='border border-b31 p-3 flex flex-col gap-3 rounded-md'>
                    <ReviewDetail title="Contact" detail={email} textStyle="font-medium" />
                    <hr />
                    <ReviewDetail title="Ship to" detail={`${address},${city} ,${province}, ${country},${postalCode}`} textStyle="font-medium" />
                    <hr />
                    {ordInfo?.type === 'delivery' ? <ReviewDetail title="Method" detail={`Home Delivery · $${ordInfo.shipping}`} subtitle="2 to 3 Business Days" textStyle="font-medium" />:null}
                    {ordInfo?.type === 'pickup' ? <ReviewDetail title="Method" detail="Self Pickup · Free" subtitle="Always Ready!" textStyle="font-medium" />:null}
                </div>

                {/* Payment Method */}


                <PaymentMethod CardNumber={CardNumberElement} CardExpiry={CardExpiryElement} CardCvc={CardCvcElement} handleCardPayment={handleCardPayment} payment={paymentMod} setPayment={setPaymentMod} billing={isBilling} setBilling={setIsBilling} />
                {/* Billing Form Start */}
                <div className={`${isBilling ? 'flex flex-col' : 'hidden'} duration-300  border-[1px] border-b31 rounded-md mt-3 px-4 py-4`} >
                    {/* Conatct Information */}
                    <div className='space-y-14px [&>*]:text-b16 [&>*]:text-sm'>
                    <h3 className='!text-lg font-medium text-b16'>Billing information</h3>
                        <TextInput width="full" name="Email" title="Email" iscompulsory="false" type="text" value={bemail} onChange={(e) =>setEmail(e.target.value)} error={billingErrors && billingErrors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="abc@gmail.com" />
                        <Checkbox onChange={e=>handleCheckbox(e)} checked={keepUpdates} defaultChecked={false} name="keepUpdates" id='keep-me-update' label="Keep me up to date on news and exclusive offers" className='checked:bg-black border-b31' ripple={false} />
                    </div>
                    {/* Shipping */}
                    <div className='space-y-14px mt-8'>
                        <h3 className='text-sm font-medium text-b16'>Shipping address</h3>
                        <div className='grid grid-cols-2 gap-3'>
                            <TextInput width="full" name="firstName" title="" iscompulsory="false" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} error={billingErrors && billingErrors.includes('First Name is Required!') ? true : false} errormessage="First Name is Required!" placeholder="First Name (optional)" />
                            <TextInput width="full" name="lastName" title="" iscompulsory="false" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} error={billingErrors && billingErrors.includes('Last Name is Required!') ? true : false} errormessage="Last Name is Required!" placeholder="Last Name" />
                            <div className="col-span-2 space-y-3">
                                <TextInput width="full" name="address" title="" iscompulsory="false" type="text" value={baddress} onChange={(e)=>setAddress(e.target.value)} error={billingErrors && billingErrors.includes('Address is Required!') ? true : false} errormessage="Address is Required!" placeholder="Address" />
                                <TextInput width="full" name="appartment" title="" iscompulsory="false" type="text" value={appartment} onChange={(e)=>setAppartment(e.target.value)} error={billingErrors && billingErrors.includes('Apartment, suite is Required!') ? true : false} errormessage="Apartment, suite is Required!" placeholder="Apartment, suite, etc. (optional)" />
                                <TextInput width="full" name="city" title="" iscompulsory="false" type="text" value={bcity} onChange={(e)=>setCity(e.target.value)} error={billingErrors && billingErrors.includes('City is Required!') ? true : false} errormessage="City is Required!" placeholder="City" />
                                <div className='grid grid-cols-2 md:grid-cols-3 gap-14px'>
                                    <CustomSelect setState={setCountry} id="country_region" label="Country / region" Options={Countrys} />
                                    <CustomSelect setState={setProvince} id="province" label="Province" Options={Province} />
                                    <div className='relative  col-span-2 md:col-span-1 [&>*]:h-full'>
                                     {changeZip?<div className='absolute flex rounded-lg items-center w-full justify-end px-2' ><img src="/loader-bg.gif" className='w-4 h-4' /></div>:null}
                                     <TextInput width="full" name="postalCode" title="" iscompulsory="false" type="text" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} error={billingErrors && billingErrors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
                                    </div>
                                </div>
                                <div className='relative'>
                                    <TextInput width="full" name="phone" title="" iscompulsory="false" type="text" value={bphone} onChange={(e)=>setPhone(e.target.value)} error={billingErrors && billingErrors.includes('Phone is Required!') ? true : false} errormessage="Phone is Required!" placeholder="Phone" />
                                    <div className='absolute right-3 top-3'>
                                        <RiQuestionFill className='text-2xl text-b3' />
                                    </div>
                                </div>
                                <div className='[&>*]:text-b16 [&>*]:text-sm'>
                                    <Checkbox onChange={e=>handleCheckbox(e)} id='save-information' name="saveAddress" checked={bsaveAddress} defaultChecked={false} label="Save this information for next time" className='checked:bg-black border-b31' ripple={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Billing Form End */}


                {/* Payment Step */}
                <div className='flex justify-between items-center w-full mt-5'>
                    <Link to="/mycart/shipping" className='flex gap-1 items-center'>
                        <LeftArrowSvg />
                        <span className='text-sm font-medium text-b3'>
                            Return to shipping
                        </span>
                    </Link>
                    <button type="button" onClick={HandleOrder} className={`flex space-x-1 cursor-pointer py-3 px-6 text-xs rounded-lg ${orderErrors.order || orderErrors.payment || orderErrors.confirm ? 'bg-red-500' : 'bg-b3'} text-white`} >
                      {orderErrors.order || orderErrors.payment || orderErrors.confirm ? <div className='flex space-x-1 items-center' ><span>Try Again</span> <FiAlertTriangle className="text-white text-sm" /></div> : <span>Pay Now</span >}
                    </button>
                </div>
            </Checkout>
        </>
    )
}

export default Payment