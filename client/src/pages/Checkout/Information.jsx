import React, { useState,useEffect } from 'react';
import { RiQuestionFill } from 'react-icons/ri';
import { Checkbox } from "@material-tailwind/react";
import Checkout from './Checkout';
import BreadCrumb from '../../components/Checkout/BreadCrumb';
import CustomSelect from '../../components/Reusable/CustomSelect';
import TextInput from '../../components/TextInput/TextInput';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setOrder,resetOrder} from '../../store/orderSlice';
import { ChangeDeliveryInfo,resetCart } from '../../store/cartSlice';
import { Link} from 'react-router-dom'
import LeftArrowSvg from '../../svgs/LeftArrowSvg'
import Toast from '../../utils/Toast'
import {CheckZip} from '../../api/frontEnd'
import ExpressCheckout from '../../components/Checkout/ExpressCheckout'
import {getCustomerShippingAddress} from '../../api/frontEnd'
import {IoMdCheckmark} from 'react-icons/io'
import {GoAlert} from 'react-icons/go'

const Information = () => {

    const Countrys = [
        { name: 'US', value: 'US' },
    ]
    const Province = [
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' },
        { name: 'Alberta', value: 'alberta' }
    ]

 
    const orderValidationSchema = Yup.object().shape({
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

    const products = useSelector((state)=>state.cart?.cart.products)
    const orderInfo = useSelector((state)=>state.order.orderInfo)
    
    const navigate = useNavigate()

    useEffect(()=>{
     if(products?.length === 0){
       Toast('Cart is Empty','error',1000)
       navigate('/mycart')
     }
    },[])


    const ordInfo = useSelector((state)=>state.cart?.cart.orderInfo);


    const [email,setEmail] = useState('')
    const [keepUpdates,setKeepUpdates] = useState(false)
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [address,setAddress] = useState('')
    const [appartment,setAppartment] = useState('')
    const [city,setCity] = useState('')
    const [country,setCountry] = useState('usa')
    const [province,setProvince] = useState('alberta')
    const [postalCode,setPostalCode] = useState(ordInfo?.type === 'delivery' ? ordInfo.location : '')
    const [phone,setPhone] = useState('')
    const [saveAddress,setSaveAddress] = useState(false)

    const isAuth = useSelector((state)=>state.user.auth)

    const SetShippingAddress = (data) => {
     setEmail(data.email)
     setKeepUpdates(data.keepUpdates)
     setFirstName(data.firstName)
     setLastName(data.lastName)
     setAddress(data.address)
     setAppartment(data.appartment)
     setCity(data.city)
     setCountry(data.country)
     setProvince(data.province)
     setPostalCode(data.postalCode)
     setPhone(data.phone)
     setSaveAddress(data.saveAddress)
    }

    const userId = useSelector((state)=>state.user._id)
    const getUserAddress = async () => {
     if(isAuth){
      const res = await getCustomerShippingAddress({userId:userId})
      if(res.status === 200){
        if(res.data.shippingAddress){
            SetShippingAddress(res.data.shippingAddress)
        }
      }
     }
    }
    
    useEffect(()=>{
      getUserAddress()
    },[])

    const [errors, setErrors] = useState([])
    
    const dispatch = useDispatch();

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;
        if(name === 'keepUpdates'){
            setKeepUpdates(checked)
        }
        if(name === 'saveAddress'){
            setSaveAddress(checked)
        }
    }

    

    const SubmitInformation = async (e) => {
     e.preventDefault()
     const data = {email:email,firstName:firstName,lastName:lastName,address:address,appartment:appartment,city:city,country:country,state:province,postalCode:postalCode,phone:phone,saveAddress:saveAddress,keepUpdates:keepUpdates,province:province}
     try{
        await orderValidationSchema.validate(data, { abortEarly: false }); 
        dispatch(setOrder(data))  
        navigate('/mycart/shipping')
     }catch(error){ 
        if (error) {
            let errors = error.errors;
            setErrors(errors)
            errors.forEach((item)=>{
              Toast(item,'error',1000)
            })
          } else {
            setErrors([])
          }
     }
    }

    const [changeZip,setChangeZip] = useState(false)
    const [zipSuccess,setZipSuccess] = useState(false)
    const [zipError,setZipError] = useState(false)

    const cartId = useSelector((state)=>state.cart?.cart._id)

    const Submit = async () => {
        setZipSuccess(false);
        setZipError(false);
        setChangeZip(true);
         const res = await CheckZip({zip:postalCode})
         console.log(res)
         if(res.data.status === 500){
            setZipError(true);
            setChangeZip(false);
            Toast('Shipping Not Available!','info',1000)
         }else if(res.status === 200) {   
          const res2 = await dispatch(ChangeDeliveryInfo({cartId:cartId,orderInfo:{...ordInfo,location:postalCode,shipping:res.data.zip.location.rate}}))
          if(res2.payload.status === 200){
          setZipSuccess(true);
          setChangeZip(false);
         }else if(res2.payload.status === 404){
          setZipError(true);
          setChangeZip(false);
          dispatch(resetCart())
          dispatch(resetOrder())
          navigate('/mycart')
          Toast(res2.payload.message,'info',1000)
         }else{
          setZipError(true);
          setChangeZip(false);
          Toast(res2.payload.message,'error',1000)
         }
        }else{        
         setZipError(true);
         setChangeZip(false);
        } 
      };
    
      useEffect(() => {
       if (postalCode?.length === 5 && ordInfo.type === 'delivery') {
         Submit();
       }
      }, [postalCode])

    return (
        <>
            <Checkout>
                {/* Logo */}
                <Link to="/">
                    <img src="/login_logo.webp" alt="" />
                </Link>
                {/* Bread Crumbs Start */}
                <BreadCrumb />
                {/* Bread Crumbs End */}
                {/* <ExpressCheckout/> */}
                {/* Bread Crumbs End */}
                {/* <div className='text_between_line my-8'>OR</div> */}
                <form onSubmit={SubmitInformation} >
                    {/* Conatct Information */}
                    <div className='space-y-14px [&>*]:text-b16 [&>*]:text-sm'>
                        <h3 className='text-sm font-medium text-b16'>Contact information</h3>
                        <TextInput width="full" name="Email" title="Email" iscompulsory="false" type="text" value={email} onChange={(e) =>setEmail(e.target.value)} error={errors && errors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="abc@gmail.com" />
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
                                <TextInput width="full" name="city" title="" iscompulsory="false" type="text" value={city} onChange={(e)=>setCity(e.target.value)} error={errors && errors.includes('City is Required!') ? true : false} errormessage="City is Required!" placeholder="City" />
                                <div className='grid grid-cols-2 md:grid-cols-3 gap-14px'>
                                    <CustomSelect setState={setCountry} id="country_region" label="Country / region" Options={Countrys} />
                                    <CustomSelect setState={setProvince} id="province" label="Province" Options={Province} />
                                    <div className='relative  col-span-2 md:col-span-1 [&>*]:h-full'>
                                     {changeZip?<div className='absolute z-40 flex right-0 rounded-lg items-center w-fit justify-end px-2' ><img src="/loader-bg.gif" className='w-4 h-4' /></div>:null}
                                     {zipSuccess?<div className='absolute z-40 flex rounded-lg items-center w-fit right-0 justify-end px-2 text-xl text-green-500' ><IoMdCheckmark/></div>:null}
                                     {zipError?<div className='absolute z-40 flex rounded-lg items-center w-fit justify-end px-2 right-1 text-xl text-red-500' ><GoAlert/></div>:null}
                                     <TextInput width="full" name="postalCode" title="" iscompulsory="false" type="text" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
                                    </div>
                                </div>
                                <div className='relative'>
                                    <TextInput width="full" name="phone" title="" iscompulsory="false" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} error={errors && errors.includes('Phone is Required!') ? true : false} errormessage="Phone is Required!" placeholder="Phone" />
                                    <div className='absolute right-3 top-3'>
                                        <RiQuestionFill className='text-2xl text-b3' />
                                    </div>
                                </div>
                                <div className='[&>*]:text-b16 [&>*]:text-sm'>
                                    <Checkbox onChange={e=>handleCheckbox(e)} id='save-information' name="saveAddress" checked={saveAddress} defaultChecked={false} label="Save this information for next time" className='checked:bg-black border-b31' ripple={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Next Step */}
                    <div className='flex justify-between items-center w-full mt-5'>
                        <Link to={'/mycart'} className='flex gap-1 items-center'>
                            <LeftArrowSvg />
                            <span className='text-sm font-medium text-b3'>
                                Return to Cart
                            </span>
                        </Link>
                        <button type='submit' className='flex items-center py-3 px-6 text-xs rounded-lg bg-b3 text-white'>
                            Continue to Shipping 
                        </button>
                    </div>
                </form>
            </Checkout>
        </>
    )
}

export default Information