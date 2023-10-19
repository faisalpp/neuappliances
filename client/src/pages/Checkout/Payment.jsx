import React,{useState,useEffect} from 'react';
import Checkout from './Checkout';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import ReviewDetail from '../../components/Checkout/Shipping/ReviewDetail';
import PaymentMethod from '../../components/Checkout/Payment/PaymentMethod';
import LeftArrowSvg from '../../svgs/LeftArrowSvg';
import { Link ,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ChkLoader from '../../components/Loader/chkLoader';
import {setPayment} from '../../store/orderSlice'
import TextInput from '../../components/TextInput/TextInput';
import { Checkbox } from "@material-tailwind/react";
import CustomSelect from '../../components/Reusable/CustomSelect';
import {RiQuestionFill} from 'react-icons/ri'
import * as Yup from 'yup';
import Toast from '../../utils/Toast'
import {processOrder} from '../../api/order'

const Payment = () => {

    const [isProcessing,setProcessing] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    
    const deliveryOrders = useSelector((state)=>state.cart.deliveryOrders)
    const pickupOrders = useSelector((state)=>state.cart.pickupOrders)

    if(deliveryOrders.length === 0 && pickupOrders.length === 0){
         navigate('/mycart')
    }

    const {email,address,postalCode,city,country,province} = useSelector((state)=>state.order.orderInfo)
    const deliveryInfo = useSelector((state)=>state.cart.deliveryInfo)

    const Countrys = [
        { name: 'USA', value: 'usa' },
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
    const [bcountry,setCountry] = useState('USA')
    const [bprovince,setProvince] = useState('Alberta')
    const [bpostalCode,setPostalCode] = useState('')
    const [bphone,setPhone] = useState('')
    const [bsaveAddress,setSaveAddress] = useState(false)

    const [errors,setErrors] = useState(false)

    const [changeZip,setChangeZip] = useState(false)

    const Submit = async () => {
        setChangeZip(true);
        const res = await CheckZip({zip:bpostalCode})
        console.log(res)
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

      const [isBilling,setIsBilling] = useState(false)
      const [paymentMod,setPaymentMod] = useState('card_payment')

      const [cardInfo,setCardInfo] = useState({cardNo:'',name:'',expDate:'',code:''})
      const [cardErrors,setCardErrors] = useState([])

      const cardValidationSchema = Yup.object().shape({
        cardNo: Yup.string().matches(/^\d{16}$/, 'Must be exactly 16 digits').required('Card Number is Required!'),
        name: Yup.string().required('Card Holder Name is Required!'),
        expDate: Yup.string().required('Card Expiry Date is Required!'),
        code: Yup.string().required('Security Code is Required!'),
      });

      const [paymentInfo,setPaymentInfo] = useState(null)

      const handleCardPayment = async () => {
        try{
            await cardValidationSchema.validate(cardInfo, { abortEarly: false });   
            // Card Payment Should be Implemented Here
            setPaymentInfo('card')
            return true
        }catch(error){ 
            if (error) {
              let errors = error.errors;
                setCardErrors(errors)
                errors.forEach((item)=>{
                  Toast(item,'error',1000)
                })
                return false
              } else {
                setCardErrors([])
                return false
              }
         }
      }
      
      const handleAffirmPayment = async () => {
        setPaymentInfo('affirm')
        return true
      }
      const handlePaypalPayment = async () => {
        setPaymentInfo('paypal')
        return true
      }

      const SubmitOrder = async (e) => {
         e.preventDefault()
          setProcessing(true)
          if(isBilling){
           
          }
          console.log(paymentMod)
          let PAY_STATUS = false;
          switch(paymentMod){
            case 'card_payment':
             PAY_STATUS = await handleCardPayment();
              break;
            case 'affirm_payment':
             PAY_STATUS = await handleAffirmPayment();
              break;
            case 'paypal_payment':
             PAY_STATUS = await handlePaypalPayment();
              break;
          }
        // After Payment Submit Order
        console.log(PAY_STATUS)
        if(PAY_STATUS){
         const data = {paymentInfo:paymentInfo}
         const res = await processOrder(data);
         console.log(res)
         if(res.status === 200){
            setProcessing(false)
            navigate('/mycart/order-success')
         }else{
            Toast('Order Processing Error!','error',1000)
            setProcessing(false)
         }
        }
      }

    return (
        <>  {isProcessing ? <ChkLoader /> :
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
                    <ReviewDetail title="Method" detail={`Home Delivery · $${deliveryInfo.shipping}`} subtitle="1 to 3 Business Days" textStyle="font-medium" />
                </div>

                {/* Payment Method */}

                <PaymentMethod card={cardInfo} setCard={setCardInfo} cardErrors={cardErrors} payment={paymentMod} setPayment={setPaymentMod} billing={isBilling} setBilling={setIsBilling} />

                {/* Billing Form Start */}
                <div className={`${isBilling ? 'flex flex-col' : 'hidden'} duration-300  border-[1px] border-b31 rounded-md mt-3 px-2 py-2`} >
                    {/* Conatct Information */}
                    <div className='space-y-14px [&>*]:text-b16 [&>*]:text-sm'>
                        <h3 className='text-sm font-medium text-b16'>Billing information</h3>
                        <TextInput width="full" name="Email" title="Email" iscompulsory="false" type="text" value={bemail} onChange={(e) =>setEmail(e.target.value)} error={errors && errors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="abc@gmail.com" />
                        <Checkbox onChange={e=>handleCheckbox(e)} checked={keepUpdates} defaultChecked={false} name="keepUpdates" id='keep-me-update' label="Keep me up to date on news and exclusive offers" className='checked:bg-black border-b31' ripple={false} />
                    </div>
                    {/* Shipping */}
                    <div className='space-y-14px mt-8'>
                        <h3 className='text-lg font-medium text-b16'>Shipping address</h3>
                        <div className='grid grid-cols-2 gap-3'>
                            <TextInput width="full" name="firstName" title="" iscompulsory="false" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} error={errors && errors.includes('First Name is Required!') ? true : false} errormessage="First Name is Required!" placeholder="First Name (optional)" />
                            <TextInput width="full" name="lastName" title="" iscompulsory="false" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} error={errors && errors.includes('Last Name is Required!') ? true : false} errormessage="Last Name is Required!" placeholder="Last Name" />
                            <div className="col-span-2 space-y-3">
                                <TextInput width="full" name="address" title="" iscompulsory="false" type="text" value={address} onChange={(e)=>setAddress(e.target.value)} error={errors && errors.includes('Address is Required!') ? true : false} errormessage="Address is Required!" placeholder="Address" />
                                <TextInput width="full" name="appartment" title="" iscompulsory="false" type="text" value={appartment} onChange={(e)=>setAppartment(e.target.value)} error={errors && errors.includes('Apartment, suite is Required!') ? true : false} errormessage="Apartment, suite is Required!" placeholder="Apartment, suite, etc. (optional)" />
                                <TextInput width="full" name="city" title="" iscompulsory="false" type="text" value={bcity} onChange={(e)=>setCity(e.target.value)} error={errors && errors.includes('City is Required!') ? true : false} errormessage="City is Required!" placeholder="City" />
                                <div className='grid grid-cols-2 md:grid-cols-3 gap-14px'>
                                    <CustomSelect setState={setCountry} id="country_region" label="Country / region" Options={Countrys} />
                                    <CustomSelect setState={setProvince} id="province" label="Province" Options={Province} />
                                    <div className='relative  col-span-2 md:col-span-1 [&>*]:h-full'>
                                     {changeZip?<div className='absolute flex rounded-lg items-center w-full justify-end px-2' ><img src="/loader-bg.gif" className='w-4 h-4' /></div>:null}
                                     <TextInput width="full" name="postalCode" title="" iscompulsory="false" type="text" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
                                    </div>
                                </div>
                                <div className='relative'>
                                    <TextInput width="full" name="phone" title="" iscompulsory="false" type="text" value={bphone} onChange={(e)=>setPhone(e.target.value)} error={errors && errors.includes('Phone is Required!') ? true : false} errormessage="Phone is Required!" placeholder="Phone" />
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
                    <button type="button" onClick={e=>SubmitOrder(e)} className='py-3 px-6 text-xs rounded-lg bg-b3 text-white' >
                        Pay Now
                    </button>
                </div>
            </Checkout>}
        </>
    )
}

export default Payment