import React, { useEffect,useState } from 'react'
import AdminAccount from '../../layout/AdminAccount'
// import TextInput from '../../components/TextInput/TextInput'
import { Link, useParams } from 'react-router-dom'
import {getOrderById,updateOrderStatus} from '../../api/admin/order'
import Table from '../../components/AdminDashboard/Table/Table'
import SelectInput from '../../components/TextInput/SelectInput'
import {BsPencil} from 'react-icons/bs'
import moment from 'moment'
import BtnLoader from '../../components/Loader/BtnLoader'
import Toast from '../../utils/Toast'
import Popup from '../../components/AdminDashboard/Popup'
import * as Yup from 'yup';

const UpdateOrder = () => {

  const params = useParams()

  const [orderId,setOrderId] = useState('')
  const [order,setOrder] = useState({})
  const [products,setProducts] = useState([])
  const [shippingInfo,setShippingInfo] = useState({})
  const [billingInfo,setBillingInfo] = useState({})

  const AddRedundentProductCount = (arr) => {
    let i;
    let uniqueOrders = [];
    for(i=0;i<arr.length;i++){
      const findIndex = uniqueOrders.findIndex(item => item.pid === arr[i].pid);
      if (findIndex !== -1) {
          uniqueOrders[findIndex].count += 1;
      } else {
          uniqueOrders.push({ ...arr[i], count: 1 });
      }
    }
    
    return uniqueOrders
  }

  const ordStatus = ['pending','rejected','completed','processing']
  const pymStatus = ['pending','declined','completed']
  const [orderStatuses,setOrderStatuses] = useState([])
  const [orderStatus,setOrderStatus] = useState('')
  const [paymentStatuses,setPaymentStatuses] = useState([])
  const [paymentStatus,setPaymentStatus] = useState('')

  const GetOrder = async () => {
   const res = await getOrderById({orderNo:params.id})
  //  console.log(res.data)
   if(res.status === 200){
     setOrderId(res.data.order._id)
     setOrder(res.data.order)
     setProducts(AddRedundentProductCount(res.data.order.orders))
     setShippingInfo(res.data.order.shippingAddress)
     setBillingInfo(res.data.order.billingAddress)
     setPaymentInfo(res.data.order.paymentInfo)
     const filt = ordStatus.filter((item)=>item !== res?.data?.order?.orderStatus)
     setOrderStatuses([res?.data?.order?.orderStatus,...filt])
     const filt2 = pymStatus.filter((item)=>item !== res?.data?.order?.paymentStatus)
     setPaymentStatuses([res?.data?.order?.paymentStatus,...filt2])
   }
  }

  useEffect(()=>{
    GetOrder()
  },[params])

  const [uLoad,setUload] = useState(false)

  const UpdateOrderStatus = async (e) => {
    if(!uLoad){
      e.preventDefault()
      setUload(true)
    const res = await updateOrderStatus({orderId:orderId,type:'order',status:orderStatus})
    if(res.status === 200){
      setUload(false)
      Toast(res.data.msg,'success',1000)
      GetOrder()
    }else{
      setUload(false)
      Toast(res.data.message,'error',1000)
    }
   }
  }

  const [pLoad,setPload] = useState(false)

  const UpdatePaymentStatus = async (e) => {
    if(!pLoad){
      e.preventDefault()
      setPload(true)
    const res = await updateOrderStatus({orderId:orderId,type:'payment',status:paymentStatus})
    if(res.status === 200){
      setPload(false)
      Toast(res.data.msg,'success',1000)
      GetOrder()
    }else{
      setPload(false)
      Toast(res.data.message,'error',1000)
    }
   }
  }


  
  const Row = ({image,title,price,quantity}) => {
    return (
      <tr className="border-b border-l border-r border-b6 text-xs font-semibold">
      <td className="whitespace-nowrap flex justify-center px-5 py-3"><img src={image} className='w-10' /></td>
      <td className="whitespace-nowrap px-5 py-3"><Link to={`/product/${title.toLowerCase().replace(/\s/g,'-')}`} className='underline text-b6' >{title}</Link></td>
      <td className="whitespace-nowrap px-5 py-3 text-b7 ">${price}</td>
      <td className="whitespace-nowrap px-5 py-3">x</td>
      <td className="whitespace-nowrap px-5 py-3">{quantity}</td>
      <td className="whitespace-nowrap px-5 py-3 text-red-500">${quantity * price}</td>
    </tr>
    )
  }

  const OrderFinance = ({total,shipping,tax,grandTotal,coupen }) => {
    return (
      <><tr className='border-b border-l border-r border-b6 text-xs' >
        <td className='px-2 py-3 font-semibold' >${total}</td>
        <td className='px-2 py-3 font-semibold' >{coupen}</td>
        <td className='px-2 py-3 font-semibold' >{shipping}</td>
        <td className='px-2 py-3 font-semibold' >${tax}</td>
        <td className='px-2 py-3 font-semibold' >${grandTotal}</td>
      </tr>
      </>
    )
  }

  const updateShippingSchema = Yup.object().shape({
    addressId: Yup.string().required('Address Id is Required!'),
    email: Yup.string().required('Email is Required!'),
    firstName: Yup.string().nullable(),
    lastName: Yup.string().required('Last Name is Required!'),
    address: Yup.string().required('Address is Required!'),
    appartment: Yup.string().nullable(),
    city: Yup.string().required('City is Required!'),
    country: Yup.string().required('Country is Required!'),
    state: Yup.string().required('Province is Required!'),
    postalCode: Yup.string().required('Postal Code is Required!'),
    phone: Yup.string().required('Phone is Required!'),
  });

  // console.log(window)

  const [sLoading,setSloading] = useState(false)
  const [shippingPopup,setShippingPopup] = useState(false)

  const [addressId,setAddressId] = useState(order.shippingAddress ? order?.shippingAddress?._id : '')
  const [email,setEmail] = useState(order.shippingAddress ? order?.shippingAddress?.email : '')
  const [firstName,setFirstName] = useState(order.shippingAddress ? order?.shippingAddress?.firstName : '')
  const [lastName,setLastName] = useState(order.shippingAddress ? order?.shippingAddress?.lastName : '')
  const [address,setAddress] = useState(order.shippingAddress ? order?.shippingAddress?.address : '')
  const [appartment,setAppartment] = useState(order.shippingAddress ? order?.shippingAddress?.appartment : '')
  const [city,setCity] = useState(order.shippingAddress ? order?.shippingAddress?.city : '')
  const [country,setCountry] = useState(order.shippingAddress ? order?.shippingAddress?.country : 'usa')
  const [province,setProvince] = useState(order.shippingAddress ? order?.shippingAddress?.province : 'alberta')
  const [postalCode,setPostalCode] = useState(order.shippingAddress ? order?.shippingAddress?.postalCode : '')
  const [phone,setPhone] = useState(order.shippingAddress ? order?.shippingAddress?.phone : '')

  const UpdateAddress = async (e) => {
    e.preventDefault()
    setSloading(true)
   try{
    const data = {addressId:addressId,email:email,firstName:firstName,lastName:lastName,address:address,appartment:appartment,city:city,country:country,state:province,postalCode:postalCode,phone:phone}
    await updateShippingSchema.validate(data, { abortEarly: false });
    const res = await updateShippingAddress({...data,id:uiD})
    if(res.status === 200){
     GetOrder()
     setShippingPopup(false)
     setSloading(false)
     Toast(res.data.msg,'success',1000)
    }else{
     setSloading(false)
     Toast(res.data.message,'error',1000)
    }
   }catch(error){ 
    setSloading(false)
    if (error) {
     let errors = error.errors;
     setuErrors(errors)
     errors.forEach((item)=>{Toast(item,'error',1000)})
    } else {
     setuErrors([])
    }
   } 
  }
  
  const [pLoading,setPloading] = useState(false)
  const [paymentPopup,setPaymentPopup] = useState(false)

  const [paddressId,setpAddressId] = useState(order?.billingAddress ? order?.billingAddress?._id : '')
  const [pemail,setpEmail] = useState(order?.billingAddress ? order?.billingAddress?.email : '')
  const [pfirstName,setpFirstName] = useState(order?.billingAddress ? order?.billingAddress?.firstName : '')
  const [plastName,setpLastName] = useState(order?.billingAddress ? order?.billingAddress?.lastName : '')
  const [paddress,setpAddress] = useState(order?.billingAddress ? order?.billingAddress?.address : '')
  const [pappartment,setpAppartment] = useState(order?.billingAddress ? order?.billingAddress?.appartment : '')
  const [pcity,setpCity] = useState(order?.billingAddress ? order?.billingAddress?.city : '')
  const [pcountry,setpCountry] = useState(order?.billingAddress ? order?.billingAddress?.country : 'usa')
  const [pprovince,setpProvince] = useState(order?.billingAddress ? order?.billingAddress?.province : 'alberta')
  const [ppostalCode,setpPostalCode] = useState(order?.billingAddress ? order?.billingAddress?.postalCode : '')
  const [pphone,setpPhone] = useState(order?.billingAddress ? order?.billingAddress?.phone : '')

  const UpdatePaddress = async (e) => {
    e.preventDefault()
    setPloading(true)
   try{
    const data = {addressId:paddressId,email:pemail,firstName:pfirstName,lastName:plastName,address:paddress,appartment:pappartment,city:pcity,country:pcountry,state:pprovince,postalCode:ppostalCode,phone:pphone}
    await updateShippingSchema.validate(data, { abortEarly: false });
    const res = await updateShippingAddress({...data,id:uiD})
    if(res.status === 200){
     GetOrder()
     setPaymentPopup(false)
     setPloading(false)
     Toast(res.data.msg,'success',1000)
    }else{
     setPloading(false)
     Toast(res.data.message,'error',1000)
    }
   }catch(error){ 
    setPloading(false)
    if (error) {
     let errors = error.errors;
     setuErrors(errors)
     errors.forEach((item)=>{Toast(item,'error',1000)})
    } else {
     setuErrors([])
    }
   } 
  }
  
  return (
   <>
    <Popup state={shippingPopup} setState={setShippingPopup} >
    <form onSubmit={UpdateAddress} >
     <h3 className='font-semibold text-center' >Create Shipping Address</h3>
      {/* Conatct Information */}
      <div className='space-y-14px [&>*]:text-b16 [&>*]:text-sm'>
       <h3 className='text-sm font-medium text-b16'>Contact information</h3>
       <TextInput width="full" name="Email" title="Email" iscompulsory="false" type="text" value={email} onChange={(e) =>setEmail(e.target.value)} error={errors && errors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="abc@gmail.com" />
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
          <div className='relative flex items-center col-span-2 md:col-span-1 [&>*]:h-full'>
           <TextInput width="full" name="postalCode" title="" iscompulsory="false" type="text" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
          </div>
         </div>
         <div className='relative'>
          <TextInput width="full" name="phone" title="" iscompulsory="false" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} error={errors && errors.includes('Phone is Required!') ? true : false} errormessage="Phone is Required!" placeholder="Phone" />
          <div className='absolute right-3 top-3'>
           <RiQuestionFill className='text-2xl text-b3' />
          </div>
         </div>
        </div>
       </div>
       <div className='flex w-full justify-center' >
       {sLoading ? <BtnLoader style="w-5" />
         :<button type='submit' className='bg-b6 text-white px-3 text-sm py-2 rounded-2xl' >Save Addresss</button>
          }
       </div>
      
      </div>
     </form>
    </Popup>
    <Popup state={paymentPopup} setState={setPaymentPopup} >
    <form onSubmit={UpdatePaddress} >
     <h3 className='font-semibold text-center' >Create Shipping Address</h3>
      {/* Conatct Information */}
      <div className='space-y-14px [&>*]:text-b16 [&>*]:text-sm'>
       <h3 className='text-sm font-medium text-b16'>Contact information</h3>
       <TextInput width="full" name="Email" title="Email" iscompulsory="false" type="text" value={pemail} onChange={(e) =>setpEmail(e.target.value)} error={errors && errors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="abc@gmail.com" />
      </div>
      {/* Shipping */}
      <div className='space-y-14px mt-8'>
       <h3 className='text-lg font-medium text-b16'>Shipping address</h3>
       <div className='grid grid-cols-2 gap-3'>
        <TextInput width="full" name="firstName" title="" iscompulsory="false" type="text" value={pfirstName} onChange={(e)=>setpFirstName(e.target.value)} error={errors && errors.includes('First Name is Required!') ? true : false} errormessage="First Name is Required!" placeholder="First Name (optional)" />
        <TextInput width="full" name="lastName" title="" iscompulsory="false" type="text" value={plastName} onChange={(e)=>setpLastName(e.target.value)} error={errors && errors.includes('Last Name is Required!') ? true : false} errormessage="Last Name is Required!" placeholder="Last Name" />
        <div className="col-span-2 space-y-3">
         <TextInput width="full" name="address" title="" iscompulsory="false" type="text" value={paddress} onChange={(e)=>setpAddress(e.target.value)} error={errors && errors.includes('Address is Required!') ? true : false} errormessage="Address is Required!" placeholder="Address" />
         <TextInput width="full" name="appartment" title="" iscompulsory="false" type="text" value={pappartment} onChange={(e)=>setpAppartment(e.target.value)} error={errors && errors.includes('Apartment, suite is Required!') ? true : false} errormessage="Apartment, suite is Required!" placeholder="Apartment, suite, etc. (optional)" />
         <TextInput width="full" name="city" title="" iscompulsory="false" type="text" value={pcity} onChange={(e)=>setpCity(e.target.value)} error={errors && errors.includes('City is Required!') ? true : false} errormessage="City is Required!" placeholder="City" />
         <div className='grid grid-cols-2 md:grid-cols-3 gap-14px'>
          <CustomSelect setState={setpCountry} id="country_region" label="Country / region" Options={Countrys} />
          <CustomSelect setState={setpProvince} id="province" label="Province" Options={Province} />
          <div className='relative flex items-center col-span-2 md:col-span-1 [&>*]:h-full'>
           <TextInput width="full" name="postalCode" title="" iscompulsory="false" type="text" value={ppostalCode} onChange={(e)=>setpPostalCode(e.target.value)} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
          </div>
         </div>
         <div className='relative'>
          <TextInput width="full" name="phone" title="" iscompulsory="false" type="text" value={pphone} onChange={(e)=>setpPhone(e.target.value)} error={errors && errors.includes('Phone is Required!') ? true : false} errormessage="Phone is Required!" placeholder="Phone" />
          <div className='absolute right-3 top-3'>
           <RiQuestionFill className='text-2xl text-b3' />
          </div>
         </div>
        </div>
       </div>
       <div className='flex w-full justify-center' >
       {pLoading ? <BtnLoader style="w-5" />
         :<button type='submit' className='bg-b6 text-white px-3 text-sm py-2 rounded-2xl' >Save Addresss</button>
          }
       </div>
      
      </div>
     </form>
    </Popup>


    <AdminAccount>
      {/* Order Meta Data */}
      <div className='flex w-full' >
        <div className='w-full' >
         <h3 className='text-base font-semibold' >Order # <span className='text-red-500' >{order.orderNo}</span> details</h3>
        </div>

        {/* Order Status */}
        <div className='flex space-x-2 mr-4 justify-center items-center' >
         <h3 className='text-xs font-semibold mb-2 mt-2' >Order&nbsp;Details:</h3>
         { order.orderStatus === 'pending' ? <span className='bg-yellow-500/30 text-yellow-700 px-2 rounded-lg py-1 text-xs' >Pending</span>:null}
         { order.orderStatus === 'rejected' ? <span className='bg-red-500/30 text-red-500 px-2 rounded-lg py-1 text-xs' >Rejected</span>:null}
         { order.orderStatus === 'completed' ? <span className='bg-b6/30 text-b6 px-2 rounded-lg py-1 text-xs' >Completed</span>:null}
         { order.orderStatus === 'processing' ? <span className='bg-b10/30 text-b10 px-2 rounded-lg py-1 text-xs' >Processing</span>:null}
        </div>
        {/* Payment Status */}
        <div className='flex space-x-2 justify-center items-center' >
         <h3 className='text-xs font-semibold mb-2 mt-2' >Payment&nbsp;Details:</h3>
         { order.paymentStatus === 'pending' ? <span className='bg-yellow-500/30 text-yellow-700 px-2 rounded-lg py-1 text-xs' >Pending</span>:null}
         { order.paymentStatus === 'declined' ? <span className='bg-red-500/30 text-red-500 px-2 rounded-lg py-1 text-xs' >Declined</span>:null}
         { order.paymentStatus === 'completed' ? <span className='bg-b6/30 text-b6 px-2 rounded-lg py-1 text-xs' >Completed</span>:null}
        </div>

      </div>
      
      <div className='flex space-x-3 mt-5' >
                 {/* General Information */}
       <div className='flex flex-col w-1/2' >
       <h3 className='text-sm font-semibold mb-2' >Order Details</h3>
        <div className='flex flex-col space-y-2 px-5 py-5 rounded-lg border-[1px]' >
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Order Type:&nbsp;</span><span className='capitalize' > {order.orderType}</span></h3>
          {order.orderType === 'pickup' ? <h3 className='text-xs text-gray-500' ><span className='text-black' >Pickup Location:&nbsp;</span> {order?.shipping}</h3>:null}
          {order.orderType === 'delivery' ? <h3 className='text-xs text-gray-500' ><span className='text-black' >Delivery Location:&nbsp;</span> {order?.shipping}</h3>:null}
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Customer IP:&nbsp;</span>{order?.customerIp}</h3>
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Placed On:&nbsp;</span>{moment(order.createdAt).format('DD MMMM YYYY')}</h3>
        <div className='border-[1px] px-2 py-2 rounded-lg space-y-1' >
           <div className='flex text-xs text-gray-500 w-full' ><span className='text-black w-full' >Customer:&nbsp;</span><div className='flex space-x-2' ><a className='underline text-b6 cursor-pointer' >Customer&nbsp;Profile</a><a className='underline text-b6 cursor-pointer' >View&nbsp;Other&nbsp;Orders</a></div></div>
           <h3 className='text-xs text-gray-500' >{order?.customerId?.firstName} {order?.customerId?.lastName} ({order?.customerId?.email})</h3>
          </div>
          <form onSubmit={UpdateOrderStatus} className='flex space-x-4 items-center' >
           <h3 className='text-xs ' >Order Status:</h3>
           <SelectInput height="h-8" onChange={e=>setOrderStatus(e.target.value)} textSize="text-xs capitalize" options={orderStatuses}  />
           <button className='text-xs bg-b6 h-fit w-fit px-3 py-1 rounded-lg text-white' >{uLoad ? <BtnLoader style="w-4" />: <span>Save</span> }</button>
          </form>
        </div>
       </div>

        {/* General Information */}
       <div className='flex flex-col w-1/2' >
       <h3 className='text-sm font-semibold mb-2' >Payment Details</h3>
        <div className='flex flex-col space-y-2 px-5 py-5 rounded-lg border-[1px]' >
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Payment Method:&nbsp;</span>Card</h3>
          {/* <h3 className='text-xs text-gray-500' ><span className='text-black' >Customer IP:&nbsp;</span>{order?.customerIp}</h3> */}
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Paid On:&nbsp;</span>{moment(moment.unix(order?.paymentInfo?.created)).format('DD MMMM YYYY')}</h3>
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Payment Intent:&nbsp;</span><a target='_blank' href={`https://dashboard.stripe.com/test/payments/${order?.paymentInfo?.id}`} className='underline text-b6 cursor-pointer ' >{order?.paymentInfo?.id}</a></h3>
          <form onSubmit={UpdatePaymentStatus} className='flex space-x-4 items-center' >
           <h3 className='text-xs ' >Payment&nbsp;Status:</h3>
           <SelectInput height="h-8" onChange={e=>setPaymentStatus(e.target.value)} textSize="text-xs capitalize" options={paymentStatuses} />
           <button className='text-xs bg-b6 h-fit w-fit px-3 py-1 rounded-lg text-white' >{pLoad ? <BtnLoader style="w-4" />: <span>Save</span> }</button>
          </form>
        </div>
       </div>
      
      </div>


      {/* Customer Details */}
      <div className='flex space-x-5 mt-5 w-full' >
        {/* Shipping Address */}
        {shippingInfo ? <div className='flex flex-col space-y-2 w-1/2' >
        <h3 className='text-sm font-semibold' >Shipping Address</h3>
         <div className='relative border-[1px] rounded-lg px-4 py-4 w-full' >
         <button type="button" title="Edit Shipping Info" className='absolute right-2 flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-xs px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-sm" /></button>
           <h4 className='text-xs text-gray-500' >{shippingInfo.firstName} {shippingInfo.lastName}</h4>
           <p className='text-xs flex flex-wrap' >{shippingInfo.address} {shippingInfo.city} {shippingInfo.state} {shippingInfo.country}</p>
           <p className='text-xs flex flex-wrap' >{shippingInfo.postalCode}</p>
           <div className='flex flex-col mt-2' >
            <h3 className="text-xs" >Email Address:</h3>
            <a href={`mailto:${shippingInfo.email}`} className="text-xs underline text-b6" >{shippingInfo.email}</a>
           </div>
           <div className='flex flex-col mt-2' >
            <h3 className="text-xs" >Phone:</h3>
            <a href={`tel:${shippingInfo.phone}`} className="text-xs underline text-b6" >{shippingInfo.phone}</a>
           </div>
         </div>
        </div>:null}
        {/* Billing Address */}
        {billingInfo ? <div className='flex flex-col space-y-2 w-1/2' >
        <h3 className='text-sm font-semibold' >Billing Address</h3>
         <div className='relative border-[1px] rounded-lg px-4 py-4 w-full' >
           <button type="button" title="Edit Billing Info" className='absolute right-2 flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-xs px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-sm" /></button>
           <h4 className='text-xs text-gray-500' >{billingInfo.firstName} {billingInfo.lastName}</h4>
           <p className='text-xs flex flex-wrap' >{billingInfo.address} {billingInfo.city} {billingInfo.state} {shippingInfo.country}</p>
           <p className='text-xs flex flex-wrap' >{billingInfo.postalCode}</p>
           <div className='flex flex-col mt-2' >
            <h3 className="text-xs" >Email Address:</h3>
            <a href={`mailto:${billingInfo.email}`} className="text-xs underline text-b6" >{billingInfo.email}</a>
           </div>
           <div className='flex flex-col mt-2' >
            <h3 className="text-xs" >Phone:</h3>
            <a href={`tel:${billingInfo.phone}`} className="text-xs underline text-b6" >{billingInfo.phone}</a>
           </div>
         </div>
        </div>:null}
      </div>

      <div className='mt-5' >
        <h3 className='text-sm font-semibold' >Order Products</h3>
        <Table head={['Image','Title','Price','','QTY','Total']} >
          {products && products?.map((product)=><Row image={product.image} title={product.title} price={product.salePrice ? product.salePrice : product.regPrice} quantity={product.count} />)}
        </Table>
      </div>
      <div >
        <Table head={['Sub Total','Coupen','Shipping','Tax','Grand Total']} >
         <OrderFinance coupen='N/A' total={order.total} shipping={order.orderType === 'pickup' ? 'Free' : `$${order.shipping}`} tax={order.tax} grandTotal={order.grandTotal} />
        </Table>
      </div>

    </AdminAccount>
    </>
  )
}

export default UpdateOrder