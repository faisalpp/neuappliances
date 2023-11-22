import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeCoupon,removeTax } from '../../../store/adminCart';
import { IoIosCloseCircle } from "react-icons/io";

const OrderFinance = () => {

  const dispatch = useDispatch()
  const subTotal = useSelector((state)=>state.adminCart.subTotal);
  const tax = useSelector((state)=>state.adminCart.tax);
  const coupons = useSelector((state)=>state.adminCart.coupons);
  const grandTotal = useSelector((state)=>state.adminCart.grandTotal);
  const shipping = useSelector((state)=>state.adminCart.shipping);
  console.log(grandTotal)
  const HandleCouponDelete = (e,id) => {
    e.preventDefault()
    dispatch(removeCoupon(id))
  }

  const RemoveTax = () => {
    dispatch(removeTax())
  }

  return (
   <><tr className='border-b border-l border-r border-b6 text-xs' >
     <td className='px-2 py-3 font-semibold'>${subTotal}</td>
     <td className='flex flex-col items-center w-full justify-center mt-1 border-[1px] rounded-md  my-1' >
     {coupons.length > 0 ? coupons.map((coupon,indx)=><div className='flex items-center w-full text-[10px] justify-center border-b-[1px]' >
      <td key={indx} className='px-2 py-3 font-semibold capitalize'>{coupon.type}</td>|
      <td key={indx} className='px-2 py-3 font-semibold'>-${coupon.amount} <span onClick={e=>HandleCouponDelete(e,indx)} className='text-[8px] underline text-red-500 cursor-pointer' >Remove</span></td>
     </div>)
     :<td className='px-2 py-3 font-semibold'>$0</td>}
     </td>
     {/* <td className='px-2 py-3 font-semibold'>${coupons[0]?.amount}</td> */}
    <td className='px-2 py-3 font-semibold'>{shipping ? shipping.shipping:0}</td>
     <td className='px-2 py-3 font-semibold'><span className='flex items-center justify-center w-full' >${tax}{tax > 0 ?<span onClick={RemoveTax} ><IoIosCloseCircle className='text-red-500 text-sm cursor-pointer' /></span>:null}</span></td>
     <td className='px-2 py-3 font-semibold'>${grandTotal}</td>
     <td className='py-3 font-semibold' ><button className='bg-b6 text-white py-1 px-2 rounded-md' >Calculate</button></td>
   </tr>
   </>
  )
}

export default OrderFinance