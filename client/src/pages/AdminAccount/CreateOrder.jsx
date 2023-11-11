import React, { useEffect, useState } from 'react';
import AdminAccount from '../../layout/AdminAccount';
import { Link, useNavigate } from 'react-router-dom';
import Popup from '../../components/AdminDashboard/Popup';
import * as Yup from 'yup';
import TextInput from '../../components/TextInput/TextInput'
import SelectInput from '../../components/TextInput/SelectInput'
import Table from '../../components/AdminDashboard/Table/Table';
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from 'react-icons/bs'
import SearchProduct from '../../components/AdminDashboard/PopupForms/SearchProduct';
import Toast from '../../utils/Toast';
import Accordion from '../../components/FaqAccordion2'
import { searchCustomerWithEmail } from '../../api/admin/customer';
import { getCustomerBillingAddress, getCustomerShippingAddress } from '../../api/frontEnd';
import UsStates from '../../services/states'
import BtnLoader from '../../components/Loader/BtnLoader';
import {createAdminOrder} from '../../api/admin/order'
import { useDispatch, useSelector } from 'react-redux';
import { DecrementCart, IncrementCart,GetCart, resetCart } from '../../store/adminSlice';
import { Checkbox } from '@material-tailwind/react';
import {IoMdCheckmark} from 'react-icons/io'
import {GoAlert} from 'react-icons/go'


const CreateOrder = () => {
  const shippingValidationSchema = Yup.object().shape({
    email: Yup.string().required('Shipping Address Email is Required!'),
    firstName: Yup.string().nullable(),
    lastName: Yup.string().required('Shipping Address Last Name is Required!'),
    address: Yup.string().required('Shipping Address Address is Required!'),
    appartment: Yup.string().nullable(),
    city: Yup.string().required('Shipping Address City is Required!'),
    country: Yup.string().required('Shipping Address Country is Required!'),
    state: Yup.string().required('Shipping Address State is Required!'),
    postalCode: Yup.string().required('Shipping Address Postal Code is Required!'),
    phone: Yup.string().required('Shipping Address Phone is Required!'),
});

const billingValidationSchema = Yup.object().shape({
  email: Yup.string().required('Billing Address Email is Required!'),
  firstName: Yup.string().nullable(),
  lastName: Yup.string().required('Billing Address Last Name is Required!'),
  address: Yup.string().required('Billing Address Address is Required!'),
  appartment: Yup.string().nullable(),
  city: Yup.string().required('Billing Address City is Required!'),
  country: Yup.string().required('Billing Address Country is Required!'),
  state: Yup.string().required('Billing Address Province is Required!'),
  postalCode: Yup.string().required('Billing Address Postal Code is Required!'),
  phone: Yup.string().required('Billing Address Phone is Required!'),
});


     const navigate = useNavigate()
     const dispatch = useDispatch()
    // Form states
    const [errors,setErrors] = useState([])
    const [orderStatuses,setOrderStatuses] = useState(['pending Payment','processing','on hold','completed','cancelled','refunded','failed','draft'])
    const [payStatuses,setPayStatuses] = useState(['card','paypal','affirm','google pay','cash'])
    const [orderStatus,setOrderStatus] = useState('pending-payment')

    const [orderDate,setOrderDate] = useState(new Date().toJSON().slice(0, 10))
    const [paymentMethod,setPaymentMethod] = useState('card')
    const [orderType,setOrderType] = useState('pickup')
    const [transactionId,setTransactionId] = useState('')

    const [addProductPopup,setAddProductPopup] = useState(false)

    const [tax,setTax] = useState({type:'percentage',percent:0,amount:0})
    const [subTotal,setSubTotal] = useState(0)
    const [grandTotal,setGrandTotal] = useState(0)
    const [shipping,setShipping] = useState({type:'pickup',location:'Georgtown, Tx',shipping:'Free'})
    const [coupon,setCoupon] = useState(0)
    const cartId = useSelector((state)=>state?.admin?.cart?._id)

    const CalculateGrandTotal = () => {
      if(tax.type === 'percentage' && tax.amount > 0){
        if(shipping.type === 'delivery'){
          let am = parseInt(subTotal) + parseInt(shipping.shipping) + parseInt(coupon);
          const calcTax = (taxAmount * 100)/am
          setTax({...tax,amount:calcTax.toFixed(2)})
          const grndTotal1 = parseFloat(subTotal)+parseFloat(coupon)+parseFloat(calcTax)+parseFloat(shipping.shipping)
          setGrandTotal(grndTotal1.toFixed(2))
        }else{
          let am = parseInt(subTotal) + parseInt(coupon);
          const calcTax = (taxAmount * 100)/am
          setTax({...tax,amount:calcTax.toFixed(2)})
          const grndTotal1 = parseFloat(subTotal)+parseFloat(coupon)+parseFloat(calcTax)
          setGrandTotal(grndTotal1.toFixed(2))
        }
      }else{
        if(shipping.type === 'delivery'){
          const grndTotal = parseFloat(subTotal)+parseFloat(coupon)+parseFloat(tax.amount)+parseFloat(shipping.shipping)
          setGrandTotal(grndTotal.toFixed(2))
        }else{
          const grndTotal = parseFloat(subTotal)+parseFloat(coupon)+parseFloat(tax.amount)
          setGrandTotal(grndTotal.toFixed(2))
        }
      }
      Toast('Grand Total Recalculated!','info',1000)
    }
    
    const IncQty = async (e,id) => {
        e.preventDefault()
       const res = await dispatch(IncrementCart({cartId:cartId,productId:id}))
      //  console.log(res)
       if(res.payload.status === 200){
        Toast('Product Quantity Incremented!','success',1000)
       }else if(res.payload.status === 500){
         Toast(res.payload.data.message,'error',1000)
        } else{
          Toast('Internal Server Error!','error',1000)
       }
    }

    const DecQty = async (e, id,quantity) => {
        e.preventDefault();
        const res = await dispatch(DecrementCart({cartId:cartId,productId:id,count:quantity}))
      //  console.log(res)
       if(res.payload.status === 200){
        Toast('Product Quantity Decremented!','success',1000)
       }else if(res.payload.status === 500){
         Toast(res.payload.data.message,'error',1000)
        } else{
          Toast('Internal Server Error!','error',1000)
       }
      };


    const Row = ({item}) => {
        return (
          <tr className="border-b border-l border-r border-b6 text-xs font-semibold">
          <td className="whitespace-nowrap flex justify-center px-5 py-3"><img src={item.image} className='w-10' /></td>
          <td className="whitespace-nowrap px-5 py-3"><Link to={`/product/${item.title.toLowerCase().replace(/\s/g,'-')}`} className='underline text-b6' >{item.title}</Link></td>
          <td className="whitespace-nowrap px-5 py-3 text-b7 ">${item.isSale ? item.salePrice : item.regPrice}</td>
          <td className="whitespace-nowrap px-5 py-3">x</td>
          <td className="whitespace-nowrap px-1 py-3"><div className='flex justify-between w-14 items-center border-[1px] border-b6 rounded-md ml-5' ><BsFillArrowLeftSquareFill onClick={e=>DecQty(e,item.pid,item.count)} className='text-b6 text-lg cursor-pointer' /> <span>{item.count}</span> <BsFillArrowRightSquareFill onClick={e=>IncQty(e,item.pid)} className='cursor-pointer text-lg text-b6' /></div></td>
          <td className="whitespace-nowrap px-5 py-3 text-red-500">${item.salePrice}</td>
        </tr>
        )
      }

    const NoRow = ({message}) => {
        return (
         <tr className="border-b border-l border-r border-b6 text-xs font-semibold">
          <td className='py-2' >{message}</td>
         </tr>
        )
    }

    const [coupenPopup,setCoupenPopup] = useState(false)
    const [taxPopup,setTaxPopup] = useState(false)
    const [shippingPopup,setShippingPopup] = useState(false)

    const AddProduct = () => {
        return (
         <tr className="border-b border-l border-r border-b6 text-xs font-semibold">
          <td className='py-2' ><button type="button" onClick={()=>setAddProductPopup(true)} className='bg-orange-500 px-2 text-white py-1 rounded-xl shadow-lg' >Add Product</button></td>
          <td className='py-2' ><button type="button" onClick={()=>{subTotal > 0 ? setCoupenPopup(true):null}} className={`${subTotal > 0 ? 'bg-green-500':'bg-green-500/40'} px-2 text-white py-1 rounded-xl shadow-lg`} >Add Coupon</button></td>
          <td className='py-2' ><button type="button" onClick={()=>{subTotal > 0 ? setTaxPopup(true):null}} className={`${subTotal > 0 ? 'bg-red-500':'bg-red-500/40'} px-2 text-white py-1 rounded-xl shadow-lg`} >Add Tax</button></td>
          <td className='py-2' ><button type="button" onClick={()=>{subTotal > 0 && orderType === 'delivery' ? setShippingPopup(true) : null }} className={`${subTotal > 0 && orderType === 'delivery' ? 'bg-black':'bg-black/40'} px-2 text-white py-1 rounded-xl shadow-lg`} >Add Shipping</button></td>
         </tr>
        )
      }

    const OrderFinance = ({total,shipping,tax,grandTotal,coupon }) => {
        return (
          <><tr className='border-b border-l border-r border-b6 text-xs' >
            <td className='px-2 py-3 font-semibold' >${total}</td>
            <td className='px-2 py-3 font-semibold' >{coupon}</td>
            <td className='px-2 py-3 font-semibold' >{shipping}</td>
            <td className='px-2 py-3 font-semibold' >{tax?.type === 'percentage' ? `${tax?.percent}% / +$${tax.amount}` : `$${tax.amount}` } </td>
            <td className='px-2 py-3 font-semibold' >${grandTotal}</td>
            <td className='py-3 font-semibold' ><button onClick={CalculateGrandTotal} className='bg-b6 text-white py-1 px-2 rounded-md' >Calculate</button></td>
          </tr>
          </>
        )
      }

    //   Address States 
    const [shippingAddress,setShippingAddress] = useState({email:'',firstName:'',lastName:'',address:'',appartment:'',city:'',country:'usa',state:'alberta',postalCode:'',phone:''})
    const [billingAddress,setBillingAddress] = useState({email:'',firstName:'',lastName:'',address:'',appartment:'',city:'',country:'usa',state:'alberta',postalCode:'',phone:''})
    const [changeZip,setChangeZip] = useState(false)
    const [zipSuccess,setZipSuccess] = useState(false)
    const [zipError,setZipError] = useState(false)

    const GetShippingFee = async () => {
      setZipSuccess(false);
      setZipError(false);
      setChangeZip(true);
       const res = await CheckZip({zip:postalCode})
       if(res.data.status === 200){
          setZipError(false);
          setChangeZip(false);
          setZipSuccess(true);
       }else{   
        setZipSuccess(false);  
        setZipError(true);
        setChangeZip(false);
      } 
    };

    useEffect(() => {
      if (shippingAddress.postalCode?.length === 5 && shipping.type === 'delivery') {
        GetShippingFee();
      }
     }, [shippingAddress.postalCode])

    const ShippingAddressComp = () => {
        return (
        <div className='w-1/2' >
     <h3 className='font-semibold text-center' >Shipping Address</h3>
      {/* Conatct Information */}
       <TextInput width="full" name="Email" title="Email" iscompulsory="false" type="text" value={shippingAddress.email} onChange={(e) =>setShippingAddress({...shippingAddress,email:e.target.value})} error={errors && errors.includes('Shipping Address Email is Required!') ? true : false} errormessage="Shipping Address Email is Required!" placeholder="abc@gmail.com" />
      {/* Shipping */}
      <div className='space-y-14px mt-2'>
       <div className='grid grid-cols-2 gap-3'>
        <TextInput width="full" name="firstName" title="" iscompulsory="false" type="text" value={shippingAddress.firstName} onChange={(e) =>setShippingAddress({...shippingAddress,firstName:e.target.value})} error={errors && errors.includes('Shipping Address First Name is Required!') ? true : false} errormessage="Shipping Address First Name is Required!" placeholder="First Name (optional)" />
        <TextInput width="full" name="lastName" title="" iscompulsory="false" type="text" value={shippingAddress.lastName} onChange={(e) =>setShippingAddress({...shippingAddress,lastName:e.target.value})} error={errors && errors.includes('Shipping Address Last Name is Required!') ? true : false} errormessage="Shipping Address Last Name is Required!" placeholder="Last Name" />
        <div className="col-span-2 space-y-3">
         <TextInput width="full" name="address" title="" iscompulsory="false" type="text" value={shippingAddress.address} onChange={(e) =>setShippingAddress({...shippingAddress,address:e.target.value})} error={errors && errors.includes('Shipping Address Address is Required!') ? true : false} errormessage="Shipping Address Address is Required!" placeholder="Address" />
         <TextInput width="full" name="appartment" title="" iscompulsory="false" type="text" value={shippingAddress.appartment} onChange={(e) =>setShippingAddress({...shippingAddress,apparment:e.target.value})} error={errors && errors.includes('Shipping Address Apartment, suite is Required!') ? true : false} errormessage="Shipping Address Apartment, suite is Required!" placeholder="Apartment, suite, etc. (optional)" />
         <TextInput width="full" name="city" title="" iscompulsory="false" type="text" value={shippingAddress.city} onChange={(e) =>setShippingAddress({...shippingAddress,city:e.target.value})}error={errors && errors.includes('Shipping Address City is Required!') ? true : false} errormessage="Shipping Address City is Required!" placeholder="City" />
         <div className='flex items-center space-x-5'>
          <SelectInput name="us_states" widthFull="true" onChange={(e) =>setShippingAddress({...shippingAddress,state:e.target.value})} id="province" label="Province" options={UsStates} />
          <SelectInput name="us_states" widthFull="true" onChange={(e) =>setShippingAddress({...shippingAddress,country:e.target.value})} id="country_region" label="Country / region" options={[{title:'United States',abbreviation:'US'}]} />
         </div>
         <div className='flex space-x-5'>
          <div className='relative  col-span-2 md:col-span-1 [&>*]:h-full w-full'>
           {changeZip?<div className='absolute z-40 flex right-0 rounded-lg items-center w-fit justify-end px-2' ><img src="/loader-bg.gif" className='w-4 h-4' /></div>:null}
           {zipSuccess?<div className='absolute z-40 flex rounded-lg items-center w-fit right-0 justify-end px-2 text-xl text-green-500' ><IoMdCheckmark/></div>:null}
           {zipError?<div className='absolute z-40 flex rounded-lg items-center w-fit justify-end px-2 right-1 text-xl text-red-500' ><GoAlert/></div>:null}
           <TextInput width="full" name="postalCode" title="" iscompulsory="false" type="text" value={shippingAddress.postalCode} onChange={(e)=>setShippingAddress({...shippingAddress,postalCode:e.target.value})} error={errors && errors.includes('Shipping Address Postal Code is Required!') ? true : false} errormessage="Shipping Address Postal Code is Required!" placeholder="Postal Code" />
          </div>
          <TextInput width="full" name="phone" title="" iscompulsory="false" type="text" value={shippingAddress.phone} onChange={(e) =>setShippingAddress({...shippingAddress,phone:e.target.value})} error={errors && errors.includes('Shipping Address Phone is Required!') ? true : false} errormessage="Shipping Address Phone is Required!" placeholder="Phone" />
         </div>
        </div>
       </div>
      
      </div>
     </div>
        )
    }

    const BillingAddressComp = () => {
        return (
        <div className='relative w-1/2' >
     <h3 className='font-semibold text-center' >Billing Address</h3>
     <h3 onClick={e=>{e.preventDefault();setBillingAddress(shippingAddress)}} className='absolute cursor-pointer right-0 text-blue-500 underline font-semibold text-[10px] text-end' >Copy Shipping Address</h3>
      {/* Conatct Information */}
       <TextInput width="full" name="Email" title="Email" iscompulsory="false" type="text" value={billingAddress.email} onChange={(e) =>setBillingAddress({...billingAddress,email:e.target.value})} error={errors && errors.includes('Billing Address Email is Required!') ? true : false} errormessage="Billing Address Email is Required!" placeholder="abc@gmail.com" />
      {/* Shipping */}
      <div className='space-y-14px mt-2'>
       <div className='grid grid-cols-2 gap-3'>
        <TextInput width="full" name="bfirstName" title="" iscompulsory="false" type="text" value={billingAddress.firstName} onChange={(e) =>setBillingAddress({...billingAddress,firstName:e.target.value})} error={errors && errors.includes('Billing Address First Name is Required!') ? true : false} errormessage="Billing Address First Name is Required!" placeholder="First Name (optional)" />
        <TextInput width="full" name="blastName" title="" iscompulsory="false" type="text" value={billingAddress.lastName} onChange={(e) =>setBillingAddress({...billingAddress,lastName:e.target.value})} error={errors && errors.includes('Billing Address Last Name is Required!') ? true : false} errormessage="Billing Address Last Name is Required!" placeholder="Last Name" />
        <div className="col-span-2 space-y-3">
         <TextInput width="full" name="baddress" title="" iscompulsory="false" type="text" value={billingAddress.address} onChange={(e) =>setBillingAddress({...billingAddress,address:e.target.value})} error={errors && errors.includes('Billing Address Address is Required!') ? true : false} errormessage="Billing Address Address is Required!" placeholder="Address" />
         <TextInput width="full" name="bappartment" title="" iscompulsory="false" type="text" value={billingAddress.appartment} onChange={(e) =>setBillingAddress({...billingAddress,apparment:e.target.value})} placeholder="Apartment, suite, etc. (optional)" />
         <TextInput width="full" name="bcity" title="" iscompulsory="false" type="text" value={billingAddress.city} onChange={(e) =>setBillingAddress({...billingAddress,city:e.target.value})}error={errors && errors.includes('Billing Address City is Required!') ? true : false} errormessage="Billing Address City is Required!" placeholder="City" />
         <div className='flex items-center space-x-5'>
          <SelectInput name="us_states" widthFull="true" onChange={(e) =>setBillingAddress({...billingAddress,state:e.target.value})} id="province" label="Province" options={UsStates} />
          <SelectInput name="us_states" widthFull="true" onChange={(e) =>setBillingAddress({...billingAddress,country:e.target.value})} id="country_region" label="Country / region" options={[{title:'United States',abbreviation:'US'}]} />
         </div>
         <div className='flex space-x-5 w-full'>
          <TextInput width="full" name="bpostalCode" title="" iscompulsory="false" type="text" value={billingAddress.postalCode} onChange={(e) =>setBillingAddress({...billingAddress,postalCode:e.target.value})} error={errors && errors.includes('Billing Address Postal Code is Required!') ? true : false} errormessage="Billing Address Postal Code is Required!" placeholder="Postal Code" />
          <TextInput width="full" name="bphone" title="" iscompulsory="false" type="text" value={billingAddress.phone} onChange={(e) =>setBillingAddress({...billingAddress,phone:e.target.value})} error={errors && errors.includes('Billing Address Phone is Required!') ? true : false} errormessage="Billing Address Phone is Required!" placeholder="Phone" />
         </div>
        </div>
       </div>
      
      </div>
     </div>
        )
    }


    // Customer Details
    const [selectedUser,setSelectedUser] = useState({email:'Guest'})
    const [selectUser,setSelectUser] = useState(false)
    const [userList,setUserList] = useState([{email:'Guest'}])
    const [query,setQuery] = useState('')
    const [custLoader,setCustLoader] = useState(false)

    const SearchCustomers = async () => {
      setCustLoader(true)
      const res = await searchCustomerWithEmail({email:query})
      if(res.status === 200){
        setCustLoader(false)
        setUserList([{email:'Guest'},...res?.data?.customers])
      }else{
        setCustLoader(false)
        Toast(res.data.message,'error',1000)
      }
    }

    useEffect(()=>{
      if(query?.length >= 6){
        SearchCustomers()
      }

    },[query])

    const GetShippingAddress = async () => {
      const res = await getCustomerShippingAddress({userId:selectedUser?._id})
      if(res.status === 200){
        if(res?.data?.shippingAddress){
          setShippingAddress({email:res.data.shippingAddress.email,firstName:res.data.shippingAddress.firstName,lastName:res.data.shippingAddress.lastName,address:res.data.shippingAddress.address,appartment:res.data.shippingAddress.appartment,city:res.data.shippingAddress.city,country:res.data.shippingAddress.country,state:res.data.shippingAddress.state,postalCode:res.data.shippingAddress.postalCode,phone:res.data.shippingAddress.phone})
          Toast('Shipping Address Fetched!','success',1000)
        }else{
          Toast('Shipping Address Not Set!','error',1000)
        }
      }else{
        Toast('Internal Server Error!','success',1000)
      }
    }

    const GetBillingAddress = async () => {
      const res = await getCustomerBillingAddress({userId:selectedUser?._id})
      if(res.status === 200){
        if(res?.data?.billingAddress){
          setBillingAddress({email:res.data.billingAddress.email,firstName:res.data.billingAddress.firstName,lastName:res.data.billingAddress.lastName,address:res.data.billingAddress.address,appartment:res.data.billingAddress.appartment,city:res.data.billingAddress.city,country:res.data.billingAddress.country,state:res.data.billingAddress.state,postalCode:res.data.billingAddress.postalCode,phone:res.data.billingAddress.phone})
          Toast('Shipping Address Fetched!','success',1000)
        }else{
          Toast('Shipping Address Not Set!','error',1000)
        }
      }else{
        Toast('Internal Server Error!','success',1000)
      }
    }

    const [selectShippingFee,setSelectShippingFee] = useState(0)

    const ApplyShipping = () => {
      setShipping(selectShippingFee)
      setSelectShippingFee(0)
      setShippingPopup(false)
    }

    const [taxType,setTaxType] = useState('percentage')
    const [taxAmount,setTaxAmount] = useState(0)
    const ApplyTax = () => {
      if(taxType === 'percentage'){
        if(shipping.type === 'delivery'){
        let am = parseInt(subTotal) + parseInt(shipping) + parseInt(coupon);
        const calcTax = (taxAmount * 100)/am
        setTax({type:taxType,percent:taxAmount,amount:calcTax.toFixed(2)})
        const grnd1 = parseInt(subTotal)+parseInt(coupon)+parseInt(calcTax)+parseInt(shipping)
        setGrandTotal(grnd1.toFixed(2))
       }else{
        let am = parseInt(subTotal) + parseInt(coupon);
        const calcTax = (taxAmount * 100)/am
        setTax({type:taxType,percent:taxAmount,amount:calcTax.toFixed(2)})
        const grnd1 = parseInt(subTotal)+parseInt(coupon)+parseInt(calcTax)
        setGrandTotal(grnd1.toFixed(2))
       }
      }else{
        setTax({type:taxType,amount:taxAmount.amount})
        if(shipping.type === 'delivery'){
          setGrandTotal(parseInt(subTotal)+parseInt(coupon)+parseInt(tax.amount)+parseInt(shipping.shipping))
        }else{
          setGrandTotal(parseInt(subTotal)+parseInt(coupon)+parseInt(tax.amount)+parseInt(shipping))
        }
      }
      setTaxPopup(false)
      Toast('Tax Added!','info',1000)
      Toast('Grand Total Recalculated!','info',1000)
    }
    const CART = useSelector((state)=>state?.admin?.cart?.products);
    const CART_COUNT = useSelector((state)=>state?.admin?.cart?.cartCount);
    const SubmitOrder = async (e) => {
      e.preventDefault()
      try{
        await shippingValidationSchema.validate(shippingAddress, { abortEarly: false }); 
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
      try{
        await billingValidationSchema.validate(billingAddress, { abortEarly: false }); 
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
      const data = {orderDate:orderDate,orderStatus:orderStatus,orderType:orderType,transactionId:transactionId,paymentMethod:paymentMethod,shippingAddress:shippingAddress,billingAddress:billingAddress,tax:tax,subTotal:subTotal,shipping:shipping,coupon:coupon,grandTotal:grandTotal,products:CART,selectedUser:selectedUser,cartCount:CART_COUNT}
      const res = await createAdminOrder(data)
      if(res.status === 200){
        dispatch(resetCart())
        navigate('/admin/manage-orders')
        Toast(res.data.msg,'success',1000)
      }else{
        Toast(res.data.message,'error',1000)
      }
    }

    
    const CART_ID = useSelector((state)=>state?.admin?.cart?._id);
    
    const GetCart1 = async () => {
      setTransactionId(`py-${Math.floor(Math.pow(10, 10-1) + Math.random() * (Math.pow(10, 10) - Math.pow(10, 10-1) - 1))}`)
      if(CART_ID){
      const res = await dispatch(GetCart({cartId:CART_ID}))
      if(res.payload.status === 200){
        Toast(res.payload.msg,'info',1000)
      }else if(res.payload.status === 404){
        dispatch(resetCart())
        Toast(res.payload.data.message,'info',1000)
      }else{
        Toast(res.payload.data.message,'error',1000)
      }
     }
    }

    useEffect(()=>{
      GetCart1() 
    },[])

    const CalculateSubTotal = () => {
      if(CART?.length > 0){
       let sb =0;
       for(let i=0;i<CART?.length;i++){
        let price = CART[i].isSale ? CART[i].salePrice : CART[i].regPrice
        let stotal = (price * CART[i].count)
        sb = sb+stotal
      }
      setSubTotal(sb.toFixed(2))
      if(shipping.type === 'delivery'){
        setGrandTotal(tax.amount + shipping.shipping + sb)
      }else{
        setGrandTotal(tax.amount + sb)
      }
    }else{
      setSubTotal(0)
      setGrandTotal(0)
    }
    
    }

    useEffect(()=>{
      CalculateSubTotal()
    },[CART,shipping,tax])

    const handleCheckbox = (e) => {
      const { name, checked } = e.target;
      if(name === 'georgtown' && checked){
        setShipping({type:'pickup',location:'Georgtown, Tx',shipping:'Free'})
      }
      if(name === 'austin' && checked){
        setShipping({type:'pickup',location:'Austin, Tx',shipping:'Free'})
      }
  }

    return (
        <>
         {/* Add Product Form Popup */}
         <SearchProduct sstate={addProductPopup} setsState={setAddProductPopup} />
         <Popup state={shippingPopup} setState={setShippingPopup} zindex="z-[99]" >
          <div className=' w-full' >
           <h3 className='text-center font-semibold' >Add Shipping</h3>
           <div className='flex space-x-5 w-full' >
            <div className='flex flex-col w-1/2 space-y-2 items-center justify-center space-x-2 mt-2' >
             <TextInput width="full" value={selectShippingFee} onChange={(e)=>setSelectShippingFee(e.target.value)} title="Shipping Fee" iscompulsory="false" type="number" placeholder="0" /> 
             <button onClick={ApplyShipping} className='text-xs bg-b6 px-3 py-1 rounded-lg text-white' >Apply</button>
            </div>
            <div className='flex flex-col w-1/2 space-y-2 items-center justify-center space-x-2 mt-2' >
             <TextInput width="full" value={shipping.type === 'delivery' ? shipping.shipping : 0} disabled title="Current Shipping Fee" iscompulsory="false" type="number" placeholder="0" /> 
             <button onClick={()=>{setShipping(0);Toast('Shipping Fee Reset Successfully!','info',1000);}} className='text-xs bg-b6 px-3 py-1 rounded-lg text-white' >Reset</button>
            </div>
           </div>
          </div> 
         </Popup>
         <Popup state={taxPopup} setState={setTaxPopup} zindex="z-[99]" >
          <div className=' w-full' >
           <h3 className='text-center font-semibold' >Add Tax</h3>
           <div className='flex items-center space-x-2 mt-2' >
            <SelectInput widthFull="true" title="Tax Type" height="h-8" onChange={e=>setTaxType(e.target.value)} textSize="text-xs capitalize" options={['percentage','flat rate']}  />
            <TextInput width="full" name="postalCode" title="Tax Rate" iscompulsory="false" type="number" value={taxAmount} onChange={(e) =>setTaxAmount(e.target.value)} placeholder="0" /> 
           </div>
           <button type="button" onClick={ApplyTax} className='text-xs bg-b6 px-3 py-1 rounded-lg text-white' >Apply</button>
          </div> 
         </Popup>
         <Popup state={coupenPopup} setState={setCoupenPopup} zindex="z-[99]" >
          <div className='w-full' >
           <h3 className='text-center font-semibold' >Add Coupen</h3>
            
           <div className='flex mt-3' >
          
            <div className='flex flex-col space-y-2 items-center w-1/2' >
            <TextInput width="full" name="postalCode" title="Coupon Code" iscompulsory="false" type="text" value={billingAddress.postalCode} onChange={(e) =>setBillingAddress({...billingAddress,postalCode:e.target.value})} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
            <button className='text-xs bg-b6 px-3 py-1 rounded-lg text-white' >Apply</button>
            </div>
            <div className='flex items-center text-sm px-2 font-semibold ' >
              <h3>Or</h3>
            </div>
            <div className='flex flex-col space-y-2 items-center w-1/2' >
             <TextInput width="full" name="postalCode" title="Flat Rate" iscompulsory="false" type="text" value={billingAddress.postalCode} onChange={(e) =>setBillingAddress({...billingAddress,postalCode:e.target.value})} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
             <button className='text-xs bg-b6 px-3 py-1 rounded-lg text-white' >Apply</button>
            </div>
          
           </div>
          
          
          </div> 
         </Popup>
         {/* Main Components */}
         <AdminAccount>
         <div className='flex flex-col space-y-5' >
         {/* Container Start */}
         <div className='flex space-x-3 mt-5' >
          
         {/* General */}
          <div className='flex flex-col w-1/2' >
           <h3 className='text-sm font-semibold mb-2' >Order Details</h3>
           <div className='flex flex-col space-y-2 px-5 py-5 rounded-lg border-[1px]' >
           <TextInput value={orderDate} onChange={(e)=>setOrderDate(e.target.value)} width="full" title="Order Date" iscompulsory="false" type="date" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" />
           <div className='flex space-x-2' >
            <SelectInput title="Order Status" height="h-8" onChange={e=>setOrderStatus(e.target.value)} textSize="text-xs capitalize" options={orderStatuses}  />
            <SelectInput title="Order Type" height="h-8" onChange={e=>{e.target.value === 'pickup' ? setShipping({type:"pickup",location:'Georgtown, Tx',shipping:'Free'}) : setShipping({type:'delivery',location:'',shipping:0})}} textSize="text-xs capitalize" options={['Pickup','Delivery']}  />
           </div>
           {shipping.type === 'pickup'?
           <div className='flex space-x-2' >
           <Checkbox onChange={e=>handleCheckbox(e)} checked={shipping.location === 'Austin, Tx' ? true : false} defaultChecked={true} name="austin" id='keep-me-update' label="Austin, Tx" className='checked:bg-black border-b31' ripple={false} />
           <Checkbox onChange={e=>handleCheckbox(e)} checked={shipping.location === 'Georgtown, Tx' ? true : false} defaultChecked={false} name="georgtown" id='keep-me-update' label="Georgtown, Tx" className='checked:bg-black border-b31' ripple={false} />
           </div>:null}
           <div className='flex items-center space-x-5' >
             <TextInput value={transactionId} onChange={(e)=>setTransactionId(e.target.value)} title="Transaction Id" iscompulsory="false" type="text" error={errors && errors.includes('Date is Required!') ? true : false} errormessage="Date is Required!" placeholder="pi_emszflwrof349" />
            <SelectInput title="Payment Method" height="h-8" onChange={e=>setPaymentMethod(e.target.value)} textSize="text-xs capitalize" options={payStatuses}  />
           </div>
           </div>
          </div>
         {/* General */}
          <div className='flex flex-col w-1/2' >
           <h3 className='text-sm font-semibold mb-2' >Select Customer</h3>
           <div className='flex flex-col space-y-2 px-5 py-5 rounded-lg border-[1px] h-full' >
            {selectUser ?
            <>
              <div className='flex space-x-2' >
               <TextInput value={query} onChange={(e)=>setQuery(e.target.value)} width="full" title="Customer Email" iscompulsory="false" type="text"placeholder="jhon@gmail.com (Type 6 Characters to Search)" />
              </div>
              <div className='flex flex-col border-[1px] border-b31 rounded-md px-2 py-2 h-full' >
                <h3 className='font-semibold text-xs border-b-[1px] border-b31' >Search Result:</h3>
                <div className='relative flex flex-col space-y-2 px-2 py-2 h-full overflow-x-hidden overflow-y-scroll' >
                 {custLoader ?  <div className='flex items-center justify-center w-full h-full' ><BtnLoader style="w-5" /></div> : userList.map((user)=>
                 <h3 onClick={()=>{setSelectUser(false);setSelectedUser(user);setQuery('');setUserList([{email:'Guest'}])}} className='font-semibold bg-gray-100 px-2 rounded-sm py-1 hover:bg-gray-200 cursor-pointer text-xs shadow-md w-full' >{user.email}</h3>)}
                </div>
              </div>
            </>: 
            <div className='flex flex-col h-full justify-center items-center space-y-2' >
              <div className='flex flex-col space-y-1 items-center text-md font-semibold' ><h3>Selected User:</h3><h3 className='font-semibold text-red-500' >{selectedUser.email}</h3></div>
              {selectedUser.email !== 'Guest' ? <div className='flex space-x-2' ><h3 onClick={GetShippingAddress} className='text-xs underline text-b6 hover:text-b6/80 cursor-pointer ' >Fetch Shipping Address</h3><h3 onClick={GetBillingAddress} className='text-xs underline text-b6 hover:text-b6/80 cursor-pointer' >Fetch Billing Address</h3></div> : null }
              <button onClick={()=>setSelectUser(true)} className='bg-b6 text-xs px-2 text-white py-1 rounded-xl' >{selectedUser.email !== 'Guest' ? 'Change User' : 'Choose User'}</button>
            </div>}
           </div>
          </div>

         </div>
         {/* Container End */}

         {/* Addresses */}
         <Accordion title="Order Address Info" parent='w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0' icon='text-xl' textStyle='font-bold text-sm' child='justify-center w-full [&>p]:text-sm !mt-0'
         answer={
          <div className='flex w-full space-x-5' >
           <ShippingAddressComp/>
           <BillingAddressComp/>
          </div>
         }
         
         />

         <Table head={['Image','Title','Price','','QTY','Total']} >
          {CART?.length > 0 ? CART?.map((product)=><Row item={product} />):
           <NoRow message="No Product Added!" />
          }
        <AddProduct/>
         </Table>

         {/* Product Finance */}
         <Table head={['Sub Total','Coupon','Shipping','Tax','Grand Total','Action']} >
          <OrderFinance coupon={`-$${coupon}`} total={subTotal} shipping={shipping.type === 'delivery' ? `$${shipping.shipping}` : shipping.shipping } tax={tax} grandTotal={grandTotal} />
         </Table>
         {/* End */}
                    
         <button type="button" onClick={SubmitOrder} className='bg-b6 w-fit self-center px-2 py-1 text-sm text-white rounded-md' >Place Order</button>
        </div>
         </AdminAccount>
        </>
    )
}

export default CreateOrder