import React, { useEffect,useState } from 'react'
import AdminAccount from '../../layout/AdminAccount'
import { Link, useParams } from 'react-router-dom'
import {getOrderById,updateOrderStatus,updateOrderAddresses} from '../../api/admin/order'
import Table from '../../components/AdminDashboard/Table/Table'
// import SelectInput from '../../components/TextInput/SelectInput'
import {BsPencil} from 'react-icons/bs'
import {RiQuestionFill} from 'react-icons/ri'
import moment from 'moment'
import BtnLoader from '../../components/Loader/BtnLoader'
import Toast from '../../utils/Toast'
import Popup from '../../components/AdminDashboard/Popup'
import * as Yup from 'yup';
import TextInput from '../../components/TextInput/TextInput'
import SelectInput from '../../components/TextInput/SelectInput'

const UpdateOrder = () => {

  const params = useParams()

  const [orderId,setOrderId] = useState('')
  const [order,setOrder] = useState({})
  const [products,setProducts] = useState([])
  

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

  const ordStatus = ['Pending Payment','Processing','On Hold','Completed','Failed','Cancelled','Refunded']
  const [orderStatuses,setOrderStatuses] = useState([])
  const [orderStatus,setOrderStatus] = useState('')
  const [paymentInfo,setPaymentInfo] = useState('')

  // Order Shipping Address States
  const [shippingAddress,setShippingAddress] = useState({id:'',email:'',firstName:'',lastName:'',address:'',appartment:'',city:'',country:'usa',state:'alberta',postalCode:'',phone:''})
  const [billingAddress,setBillingAddress] = useState({id:'',email:'',firstName:'',lastName:'',address:'',appartment:'',city:'',country:'usa',state:'alberta',postalCode:'',phone:''})

  const GetOrder = async () => {
   const res = await getOrderById({orderNo:params.id})
   if(res.status === 200){
     setOrderId(res.data.order._id)
     setOrder(res.data.order)
     setProducts(AddRedundentProductCount(res.data.order.orders))
     setPaymentInfo(res.data.order.paymentInfo)
     const filt = ordStatus.filter((item)=>item !== res?.data?.order?.orderStatus)
     const filt2 = [res?.data?.order?.orderStatus,...filt]
     setOrderStatuses(filt2)
     setShippingAddress({id:res.data.order?.shippingAddress?._id,email:res.data.order?.shippingAddress?.email,firstName:res.data.order?.shippingAddress?.firstName,lastName:res.data.order?.shippingAddress?.lastName,address:res.data.order?.shippingAddress?.address,appartment:res.data.order?.shippingAddress?.appartment,city:res.data.order?.shippingAddress?.city,country:res.data.order?.shippingAddress?.country,state:res.data.order?.shippingAddress?.state,postalCode:res.data.order?.shippingAddress?.postalCode,phone:res.data.order?.shippingAddress?.phone})
     setBillingAddress({id:res.data.order?.billingAddress?._id,email:res.data.order?.billingAddress?.email,firstName:res.data.order?.billingAddress?.firstName,lastName:res.data.order?.billingAddress?.lastName,address:res.data.order?.billingAddress?.address,appartment:res.data.order?.billingAddress?.appartment,city:res.data.order?.billingAddress?.city,country:res.data.order?.billingAddress?.country,state:res.data.order?.billingAddress?.state,postalCode:res.data.order?.billingAddress?.postalCode,phone:res.data.order?.billingAddress?.phone})
    }else{
      Toast(res.data.message,'error',1000)
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
      setOrderId(res.data.order._id)
      setOrder(res.data.order)
      setProducts(AddRedundentProductCount(res.data.order.orders))
      setPaymentInfo(res.data.order.paymentInfo)
      const filt = ordStatus.filter((item)=>item !== res?.data?.order?.orderStatus)
      setOrderStatuses([res?.data?.order?.orderStatus,...filt])
      const filt2 = pymStatus.filter((item)=>item !== res?.data?.order?.paymentStatus)
      setPaymentStatuses([res?.data?.order?.paymentStatus,...filt2])
      setShippingAddress({id:res.data.order?.shippingAddress?._id,email:res.data.order?.shippingAddress?.email,firstName:res.data.order?.shippingAddress?.firstName,lastName:res.data.order?.shippingAddress?.lastName,address:res.data.order?.shippingAddress?.address,appartment:res.data.order?.shippingAddress?.appartment,city:res.data.order?.shippingAddress?.city,country:res.data.order?.shippingAddress?.country,state:res.data.order?.shippingAddress?.state,postalCode:res.data.order?.shippingAddress?.postalCode,phone:res.data.order?.shippingAddress?.phone})
      setBillingAddress({id:res.data.order?.billingAddress?._id,email:res.data.order?.billingAddress?.email,firstName:res.data.order?.billingAddress?.firstName,lastName:res.data.order?.billingAddress?.lastName,address:res.data.order?.billingAddress?.address,appartment:res.data.order?.billingAddress?.appartment,city:res.data.order?.billingAddress?.city,country:res.data.order?.billingAddress?.country,state:res.data.order?.billingAddress?.state,postalCode:res.data.order?.billingAddress?.postalCode,phone:res.data.order?.billingAddress?.phone})
    }else{
      setUload(false)
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
    id: Yup.string().required('Id is Required!'),
    email: Yup.string().required('Email is Required!'),
    firstName: Yup.string().nullable(),
    lastName: Yup.string().required('Last Name is Required!'),
    address: Yup.string().required('Address is Required!'),
    appartment: Yup.string().nullable(),
    state: Yup.string().required('State is Required!'),
    city: Yup.string().required('City is Required!'),
    country: Yup.string().required('Country is Required!'),
    postalCode: Yup.string().required('Postal Code is Required!'),
    phone: Yup.string().required('Phone is Required!'),
  });

  // console.log(window)

  const [errors,setErrors] = useState([])
  const [sLoading,setSloading] = useState(false)
  const [shippingPopup,setShippingPopup] = useState(false)
  const [billingPopup,setBillingPopup] = useState(false)

  const UpdateAddress = async (e,address) => {
    e.preventDefault()
    setSloading(true)
   try{
    await updateShippingSchema.validate(address, { abortEarly: false });
    const res = await updateOrderAddresses(address)
    if(res.status === 200){
     setShippingAddress({id:res?.data?.address?._id,email:res?.data?.address?.email,firstName:res?.data?.address?.firstName,lastName:res?.data?.address?.lastName,address:res?.data?.address?.address,appartment:res?.data?.address?.appartment,city:res?.data?.address?.city,country:res?.data?.address?.country,state:res?.data?.address?.state,postalCode:res?.data?.address?.postalCode,phone:res?.data?.address?.phone})
     setShippingPopup(false)
     setBillingPopup(false)
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
     setErrors(errors)
     errors.forEach((item)=>{Toast(item,'error',1000)})
    } else {
     setErrors([])
    }
   } 
  }
  
  return (
   <>
    <Popup state={shippingPopup} setState={setShippingPopup} zindex="z-[99]" >
    <div >
     <h3 className='font-semibold text-center' >Update Shipping Address</h3>
      {/* Conatct Information */}
      <div className='space-y-14px [&>*]:text-b16 [&>*]:text-sm'>
       <h3 className='text-sm font-medium text-b16'>Contact information</h3>
       <TextInput width="full" name="Email" title="Email" iscompulsory="false" type="text" value={shippingAddress.email} onChange={(e) =>setShippingAddress({...shippingAddress,email:e.target.value})} error={errors && errors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="abc@gmail.com" />
      </div>
      {/* Shipping */}
      <div className='space-y-14px mt-8'>
       <h3 className='text-lg font-medium text-b16'>Shipping address</h3>
       <div className='grid grid-cols-2 gap-3'>
        <TextInput width="full" name="firstName" title="" iscompulsory="false" type="text" value={shippingAddress.firstName} onChange={(e) =>setShippingAddress({...shippingAddress,firstName:e.target.value})} error={errors && errors.includes('First Name is Required!') ? true : false} errormessage="First Name is Required!" placeholder="First Name (optional)" />
        <TextInput width="full" name="lastName" title="" iscompulsory="false" type="text" value={shippingAddress.lastName} onChange={(e) =>setShippingAddress({...shippingAddress,lastName:e.target.value})} error={errors && errors.includes('Last Name is Required!') ? true : false} errormessage="Last Name is Required!" placeholder="Last Name" />
        <div className="col-span-2 space-y-3">
         <TextInput width="full" name="address" title="" iscompulsory="false" type="text" value={shippingAddress.address} onChange={(e) =>setShippingAddress({...shippingAddress,address:e.target.value})} error={errors && errors.includes('Address is Required!') ? true : false} errormessage="Address is Required!" placeholder="Address" />
         <TextInput width="full" name="appartment" title="" iscompulsory="false" type="text" value={shippingAddress.appartment} onChange={(e) =>setShippingAddress({...shippingAddress,apparment:e.target.value})} error={errors && errors.includes('Apartment, suite is Required!') ? true : false} errormessage="Apartment, suite is Required!" placeholder="Apartment, suite, etc. (optional)" />
         <TextInput width="full" name="city" title="" iscompulsory="false" type="text" value={shippingAddress.city} onChange={(e) =>setShippingAddress({...shippingAddress,city:e.target.value})}error={errors && errors.includes('City is Required!') ? true : false} errormessage="City is Required!" placeholder="City" />
         <div className='grid grid-cols-2 md:grid-cols-3 items-center gap-14px'>
          <SelectInput widthFull="true" onChange={(e) =>setShippingAddress({...shippingAddress,state:e.target.value})} id="province" label="Province" options={['Alberta']} />
          <SelectInput widthFull="true" onChange={(e) =>setShippingAddress({...shippingAddress,country:e.target.value})} id="country_region" label="Country / region" options={['USA']} />
          <div className='relative flex items-center col-span-2 md:col-span-1 [&>*]:h-full'>
           <TextInput width="full" name="postalCode" title="" iscompulsory="false" type="text" value={shippingAddress.postalCode} onChange={(e) =>setShippingAddress({...shippingAddress,postalCode:e.target.value})} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
          </div>
         </div>
         <div className='relative'>
          <TextInput width="full" name="phone" title="" iscompulsory="false" type="text" value={shippingAddress.phone} onChange={(e) =>setShippingAddress({...shippingAddress,phone:e.target.value})} error={errors && errors.includes('Phone is Required!') ? true : false} errormessage="Phone is Required!" placeholder="Phone" />
          <div className='absolute right-3 top-3'>
           <RiQuestionFill className='text-2xl text-b3' />
          </div>
         </div>
        </div>
       </div>
       <div className='flex w-full justify-center' >
       {sLoading ? <BtnLoader style="w-5" />
         :<button type='button' onClick={e=>UpdateAddress(e,shippingAddress)} className='bg-b6 text-white px-3 text-sm py-2 rounded-2xl' >Save Addresss</button>
          }
       </div>
      
      </div>
     </div>
    </Popup>
    <Popup state={billingPopup} setState={setBillingPopup} zindex="z-[99]" >
    <div >
     <h3 className='font-semibold text-center' >Update Billing Address</h3>
      {/* Conatct Information */}
      <div className='space-y-14px [&>*]:text-b16 [&>*]:text-sm'>
       <h3 className='text-sm font-medium text-b16'>Contact information</h3>
       <TextInput width="full" name="Email" title="Email" iscompulsory="false" type="text" value={billingAddress.email} onChange={(e) =>setBillingAddress({...billingAddress,email:e.target.value})} error={errors && errors.includes('Email is Required!') ? true : false} errormessage="Email is Required!" placeholder="abc@gmail.com" />
      </div>
      {/* Shipping */}
      <div className='space-y-14px mt-8'>
       <h3 className='text-lg font-medium text-b16'>Billing address</h3>
       <div className='grid grid-cols-2 gap-3'>
        <TextInput width="full" name="firstName" title="" iscompulsory="false" type="text" value={billingAddress.firstName} onChange={(e) =>setBillingAddress({...billingAddress,firstName:e.target.value})} error={errors && errors.includes('First Name is Required!') ? true : false} errormessage="First Name is Required!" placeholder="First Name (optional)" />
        <TextInput width="full" name="lastName" title="" iscompulsory="false" type="text" value={billingAddress.lastName} onChange={(e) =>setBillingAddress({...billingAddress,lastName:e.target.value})} error={errors && errors.includes('Last Name is Required!') ? true : false} errormessage="Last Name is Required!" placeholder="Last Name" />
        <div className="col-span-2 space-y-3">
         <TextInput width="full" name="address" title="" iscompulsory="false" type="text" value={billingAddress.address} onChange={(e) =>setBillingAddress({...billingAddress,address:e.target.value})} error={errors && errors.includes('Address is Required!') ? true : false} errormessage="Address is Required!" placeholder="Address" />
         <TextInput width="full" name="appartment" title="" iscompulsory="false" type="text" value={billingAddress.appartment} onChange={(e) =>setBillingAddress({...billingAddress,apparment:e.target.value})} error={errors && errors.includes('Apartment, suite is Required!') ? true : false} errormessage="Apartment, suite is Required!" placeholder="Apartment, suite, etc. (optional)" />
         <TextInput width="full" name="city" title="" iscompulsory="false" type="text" value={billingAddress.city} onChange={(e) =>setBillingAddress({...billingAddress,city:e.target.value})}error={errors && errors.includes('City is Required!') ? true : false} errormessage="City is Required!" placeholder="City" />
         <div className='grid grid-cols-2 md:grid-cols-3 items-center gap-14px'>
          <SelectInput widthFull="true" onChange={(e) =>setBillingAddress({...billingAddress,state:e.target.value})} id="province" label="Province" options={['Alberta']} />
          <SelectInput widthFull="true" onChange={(e) =>setBillingAddress({...billingAddress,country:e.target.value})} id="country_region" label="Country / region" options={['USA']} />
          <div className='relative flex items-center col-span-2 md:col-span-1 [&>*]:h-full'>
           <TextInput width="full" name="postalCode" title="" iscompulsory="false" type="text" value={billingAddress.postalCode} onChange={(e) =>setBillingAddress({...billingAddress,postalCode:e.target.value})} error={errors && errors.includes('Postal Code is Required!') ? true : false} errormessage="Postal Code is Required!" placeholder="Postal Code" />
          </div>
         </div>
         <div className='relative'>
          <TextInput width="full" name="phone" title="" iscompulsory="false" type="text" value={billingAddress.phone} onChange={(e) =>setBillingAddress({...billingAddress,phone:e.target.value})} error={errors && errors.includes('Phone is Required!') ? true : false} errormessage="Phone is Required!" placeholder="Phone" />
          <div className='absolute right-3 top-3'>
           <RiQuestionFill className='text-2xl text-b3' />
          </div>
         </div>
        </div>
       </div>
       <div className='flex w-full justify-center' >
       {sLoading ? <BtnLoader style="w-5" />
         :<button type='button' onClick={e=>UpdateAddress(e,billingAddress)} className='bg-b6 text-white px-3 text-sm py-2 rounded-2xl' >Save Addresss</button>
          }
       </div>
      
      </div>
     </div>
    </Popup>

    <AdminAccount>
      {/* Order Meta Data */}
      <div className='flex w-full' >
        <div className='w-full' >
         <h3 className='text-base font-semibold' >Order # <span className='text-red-500' >{order.orderNo}</span> details</h3>
        </div>

        {/* Order Status */}
        <div className='flex space-x-2 mr-4 justify-center items-center' >
         <span className='bg-b6/30 text-b6 px-2 rounded-md py-1 text-xs font-semibold' >{order.orderStatus}</span>
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
           <div className='flex text-xs text-gray-500 w-full' ><span className='text-black w-full' >Customer:&nbsp;</span><div className='flex space-x-2' ><Link to={`/admin/update-customer/${order?.customerId?._id}`} className='underline text-b6 cursor-pointer' >Customer&nbsp;Profile</Link><a className='underline text-b6 cursor-pointer' >View&nbsp;Other&nbsp;Orders</a></div></div>
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
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Paid On:&nbsp;</span>{moment(moment.unix(paymentInfo?.created)).format('DD MMMM YYYY')}</h3>
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Payment Intent:&nbsp;</span><a target='_blank' href={`https://dashboard.stripe.com/test/payments/${paymentInfo?.id}`} className='underline text-b6 cursor-pointer ' >{paymentInfo?.id}</a></h3>
        </div>
       </div>
      
      </div>


      {/* Customer Details */}
      <div className='flex space-x-5 mt-5 w-full' >
        {/* Shipping Address */}
        {shippingAddress ? <div className='flex flex-col space-y-2 w-1/2' >
        <h3 className='text-sm font-semibold' >Shipping Address</h3>
         <div className='relative border-[1px] rounded-lg px-4 py-4 w-full' >
         <button type="button" onClick={()=>setShippingPopup(true)} title="Edit Shipping Info" className='absolute right-2 flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-xs px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-sm" /></button>
           <h4 className='text-xs text-gray-500' >{shippingAddress.firstName} {shippingAddress.lastName}</h4>
           <p className='text-xs flex flex-wrap' >{shippingAddress.address} {shippingAddress.city} {shippingAddress.state} {shippingAddress.country}</p>
           <p className='text-xs flex flex-wrap' >{shippingAddress.postalCode}</p>
           <div className='flex flex-col mt-2' >
            <h3 className="text-xs" >Email Address:</h3>
            <a href={`mailto:${shippingAddress.email}`} className="text-xs underline text-b6" >{shippingAddress.email}</a>
           </div>
           <div className='flex flex-col mt-2' >
            <h3 className="text-xs" >Phone:</h3>
            <a href={`tel:${shippingAddress.phone}`} className="text-xs underline text-b6" >{shippingAddress.phone}</a>
           </div>
         </div>
        </div>:null}
        {/* Billing Address */}
        {billingAddress ? <div className='flex flex-col space-y-2 w-1/2' >
        <h3 className='text-sm font-semibold' >Billing Address</h3>
         <div className='relative border-[1px] rounded-lg px-4 py-4 w-full' >
           <button type="button" onClick={()=>setBillingPopup(true)} title="Edit Billing Info" className='absolute right-2 flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-xs px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-sm" /></button>
           <h4 className='text-xs text-gray-500' >{billingAddress.firstName} {billingAddress.lastName}</h4>
           <p className='text-xs flex flex-wrap' >{billingAddress.address} {billingAddress.city} {billingAddress.state} {billingAddress.country}</p>
           <p className='text-xs flex flex-wrap' >{billingAddress.postalCode}</p>
           <div className='flex flex-col mt-2' >
            <h3 className="text-xs" >Email Address:</h3>
            <a href={`mailto:${billingAddress.email}`} className="text-xs underline text-b6" >{billingAddress.email}</a>
           </div>
           <div className='flex flex-col mt-2' >
            <h3 className="text-xs" >Phone:</h3>
            <a href={`tel:${billingAddress.phone}`} className="text-xs underline text-b6" >{billingAddress.phone}</a>
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