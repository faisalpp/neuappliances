import React, { useEffect,useState } from 'react'
import AdminAccount from '../../layout/AdminAccount'
// import TextInput from '../../components/TextInput/TextInput'
import { Link, useParams } from 'react-router-dom'
import {getOrderById} from '../../api/admin/order'
import Table from '../../components/AdminDashboard/Table/Table'
import SelectInput from '../../components/TextInput/SelectInput'
import {BsPencil} from 'react-icons/bs'

const UpdateOrder = () => {

  const params = useParams()

  const [order,setOrder] = useState({})
  const [products,setProducts] = useState([])
  const [shippingInfo,setShippingInfo] = useState({})
  const [billingInfo,setBillingInfo] = useState({})
  const [paymentInfo,setPaymentInfo] = useState({})

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

  const GetOrder = async () => {
   const res = await getOrderById({orderNo:params.id})
  //  console.log(res.data)
   if(res.status === 200){
     setOrder(res.data.order)
     setProducts(AddRedundentProductCount(res.data.order.orders))
     setShippingInfo(res.data.order.shippingAddress)
     setBillingInfo(res.data.order.billingAddress)
     setPaymentInfo(res.data.order.paymentInfo)
   }
  }

  useEffect(()=>{
    GetOrder()
  },[params])


  
  const Row = ({image,title,price,quantity}) => {
    return (
      <tr className="border-b border-l border-r border-b6 text-xs font-semibold">
      <td className="whitespace-nowrap flex justify-center px-5 py-3"><img src={image} className='w-10' /></td>
      <td className="whitespace-nowrap px-5 py-3"><Link to={`/product/${title.toLowerCase().replace(/\s/g,'-')}`} className='underline text-b6' >{title}</Link></td>
      <td className="whitespace-nowrap px-5 py-3 text-b7 ">${price}</td>
      <td className="whitespace-nowrap px-5 py-3">x</td>
      <td className="whitespace-nowrap px-5 py-3">{quantity}</td>
      <td className="whitespace-nowrap px-5 py-3 text-red-500">${quantity * price}</td>
      {/* <td className="whitespace-nowrap px-5 py-3 capitalize">{date}</td>
      <td className="whitespace-nowrap px-5 py-3 capitalize">
        { status === 'Pending' ? <span className='bg-yellow-500/20 text-yellow-500 px-2 rounded-2xl py-1' >Pending</span>:null}
        { status === 'Rejected' ? <span className='bg-red-500/20 text-red-500 px-2 rounded-2xl py-1' >Rejected</span>:null}
        { status === 'Completed' ? <span className='bg-b6/20 text-b6 px-2 rounded-2xl py-1' >Completed</span>:null}
        { status === 'Processing' ? <span className='bg-b10/20 text-b10 px-2 rounded-2xl py-1' >Processing</span>:null}
      </td>
      <td className="whitespace-nowrap  px-5 py-4 text-b6 font-medium">${total}</td>
      <td className="flex items-center justify-center whitespace-nowrap space-x-1 px-5 py-4">
       <NavLink title="View Section Item" to={`/admin/update-order/${orderNo}`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></NavLink>
       <NavLink title="View Section Item" to={`/admin/delete-section`} className='flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsFillTrashFill className="text-base" /></NavLink>
      </td> */}
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
  
  return (
    <AdminAccount>
      {/* Order Meta Data */}
      <div className='flex w-full' >
        <div className='w-full' >
         <h3 className='text-lg font-semibold' >Order # <span className='text-red-500' >{order.orderNo}</span> details</h3>
        </div>

        {/* Order Status */}
        <div className='flex space-x-2 mr-4 justify-center items-center' >
         <h3 className='text-sm font-semibold mb-2 mt-2' >Order&nbsp;Details:</h3>
         { order.orderStatus === 'pending' ? <span className='bg-yellow-500/30 text-yellow-700 px-2 rounded-lg py-1 text-sm' >Pending</span>:null}
         { order.orderStatus === 'rejected' ? <span className='bg-red-500/30 text-red-500 px-2 rounded-lg py-1 text-sm' >Rejected</span>:null}
         { order.orderStatus === 'completed' ? <span className='bg-b6/30 text-b6 px-2 rounded-lg py-1 text-sm' >Completed</span>:null}
         { order.orderStatus === 'processing' ? <span className='bg-b10/30 text-b10 px-2 rounded-lg py-1 text-sm' >Processing</span>:null}
        </div>
        {/* Payment Status */}
        <div className='flex space-x-2 justify-center items-center' >
         <h3 className='text-sm font-semibold mb-2 mt-2' >Payment&nbsp;Details:</h3>
         { order.orderStatus !== 'pending' ? <span className='bg-yellow-500/30 text-yellow-700 px-2 rounded-lg py-1 text-sm' >Pending</span>:null}
         { order.orderStatus !== 'rejected' ? <span className='bg-red-500/30 text-red-500 px-2 rounded-lg py-1 text-sm' >Rejected</span>:null}
         { order.orderStatus === 'completed' ? <span className='bg-b6/30 text-b6 px-2 rounded-lg py-1 text-sm' >Completed</span>:null}
         { order.orderStatus === 'processing' ? <span className='bg-b10/30 text-b10 px-2 rounded-lg py-1 text-sm' >Processing</span>:null}
        </div>

      </div>
      
      <div className='flex space-x-3 mt-5' >
                 {/* General Information */}
       <div className='flex flex-col w-1/2' >
       <h3 className='text-sm font-semibold mb-2' >Order Details</h3>
        <div className='flex flex-col space-y-2 px-5 py-5 rounded-lg border-[1px]' >
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Order Type:&nbsp;</span> {order.orderType}</h3>
          {order.orderType === 'pickup' ? <h3 className='text-xs text-gray-500' ><span className='text-black' >Pickup Location:&nbsp;</span> {shippingInfo?.postalCode}</h3>:null}
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Customer IP:&nbsp;</span> 192.0.0.1</h3>
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Placed On:&nbsp;</span> 24 October 2023</h3>
        <div className='border-[1px] px-2 py-2 rounded-lg space-y-1' >
           <div className='flex text-xs text-gray-500 w-full' ><span className='text-black w-full' >Customer:&nbsp;</span><div className='flex space-x-2' ><a className='underline text-b6 cursor-pointer' >Customer&nbsp;Profile</a><a className='underline text-b6 cursor-pointer' >View&nbsp;Other&nbsp;Orders</a></div></div>
           <h3 className='text-xs text-gray-500' >gagan seo (gagan@gmail.com)</h3>
          </div>
          <form className='flex space-x-4 items-center' >
           <h3 className='text-xs ' >Order Status:</h3>
           <SelectInput height="h-8" textSize="text-xs" />
           <button className='text-xs bg-b6 h-fit w-fit px-3 py-1 rounded-xl text-white' >Save</button>
          </form>
        </div>
       </div>

        {/* General Information */}
       <div className='flex flex-col w-1/2' >
       <h3 className='text-sm font-semibold mb-2' >Payment Details</h3>
        <div className='flex flex-col space-y-2 px-5 py-5 rounded-lg border-[1px]' >
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Payment Type:&nbsp;</span> {paymentInfo.name}</h3>
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Payment Method:&nbsp;</span> Card</h3>
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Customer IP:&nbsp;</span> 192.0.0.1</h3>
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Paid On:&nbsp;</span> 24 October 2023</h3>
          <h3 className='text-xs text-gray-500' ><span className='text-black' >Payment Intent:&nbsp;</span><a className='underline text-b6 cursor-pointer ' >q1evwx98bz-q1evwx98bz</a></h3>
          <form className='flex space-x-4 items-center' >
           <h3 className='text-xs ' >Payment&nbsp;Status:</h3>
           <SelectInput height="h-8" textSize="text-xs" />
           <button className='text-xs bg-b6 h-fit w-fit px-3 py-1 rounded-xl text-white' >Save</button>
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
  )
}

export default UpdateOrder