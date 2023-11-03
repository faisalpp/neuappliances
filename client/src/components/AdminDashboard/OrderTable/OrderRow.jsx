import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import {BsFillTrashFill} from 'react-icons/bs'
import {BsPencil} from 'react-icons/bs'
import {deleteOrderById} from '../../../api/admin/order'
import Toast from '../../../utils/Toast'

const OrderRow = ({id,orderNo,date,orderStatus,paymentStatus,total,refreshOrders}) => {

  const [delOrder,setDelOrder] = useState(false)

  const DeleteOrder = async (e,orderId) => {
    e.preventDefault()
    setDelOrder(true)
    const res = await deleteOrderById({orderId:orderId})
    if(res.status === 200){
      Toast(res.data.msg,'success',1000)
      setDelOrder(false)
      refreshOrders()
    }else{
      Toast(res.data.message,'error',1000)
      setDelOrder(false)
    }

  }

  return (
    <tr className="border-b border-l border-r border-b6 text-xs">
        <td className="whitespace-nowrap px-5 py-3">{orderNo}</td>
        <td className="whitespace-nowrap px-5 py-3 capitalize">{date}</td>
        <td className="whitespace-nowrap px-5 py-3 capitalize">
          { orderStatus === 'pending' ? <span className='bg-yellow-500/20 text-yellow-700 px-2 rounded-2xl py-1' >Pending</span>:null}
          { orderStatus === 'canceled' ? <span className='bg-red-500/20 text-red-500 px-2 rounded-2xl py-1' >Rejected</span>:null}
          { orderStatus === 'completed' ? <span className='bg-b6/20 text-b6 px-2 rounded-2xl py-1' >Completed</span>:null}
          { orderStatus === 'processing' ? <span className='bg-b10/20 text-b10 px-2 rounded-2xl py-1' >Processing</span>:null}
          { orderStatus === 'shipping' ? <span className='bg-b10/20 text-b10 px-2 rounded-2xl py-1' >Processing</span>:null}
        </td>
        <td className="whitespace-nowrap px-5 py-3 capitalize">
          { paymentStatus === 'pending' ? <span className='bg-yellow-500/20 text-yellow-700 px-2 rounded-2xl py-1' >Pending</span>:null}
          { paymentStatus === 'declined' ? <span className='bg-red-500/20 text-red-500 px-2 rounded-2xl py-1' >Rejected</span>:null}
          { paymentStatus === 'completed' ? <span className='bg-b6/20 text-b6 px-2 rounded-2xl py-1' >Completed</span>:null}
        </td>
        <td className="whitespace-nowrap  px-5 py-4 text-b6 font-medium">${total}</td>
        <td className="flex items-center justify-center whitespace-nowrap space-x-1 px-5 py-4">
         <NavLink title="View Order" to={`/admin/update-order/${orderNo}`} className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsPencil className="text-base" /></NavLink>
         <button onClick={e=>DeleteOrder(e,id)} title="Delete Order" className='flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2' >
          <BsFillTrashFill className="text-base" />
         </button>
        </td>
      </tr>
  )
}

export default OrderRow