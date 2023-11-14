import React,{useEffect, useState} from 'react'
import AdminAccount from '../../layout/AdminAccount';
import Table from '../../components/AdminDashboard/Table/Table'
import {BsFillTrashFill} from 'react-icons/bs'
import { deleteCoupon, getCoupons } from '../../api/admin/coupon';
import BtnLoader from '../../components/Loader/BtnLoader';
import { NavLink } from 'react-router-dom';

const ManageCopons = () => {

  const GetCoupons = async () => {
    setLoading(true)
    const res = await getCoupons()
    if(res.status === 200){
      setCoupons(res.data.coupons)
      setLoading(false)
    }else{
      setLoading(false)
    }
  }

  useEffect(()=>{
    GetCoupons()
  },[])

  const [delLoading,setDelLoading] = useState('')
  const DeleteCoupon = async (e,id) => {
    e.preventDefault()
    setLoading(id)
    const res = await deleteCoupon({cid:id})
    if(res.status === 200){
      GetCoupons()
      setDelLoading('')
    }else{
      setDelLoading('')
    }
  }

  
  const Row = ({id,couponCode,description,type,rate,expiry}) => {
    return (
      <tr className="border-b border-l border-r border-b6 text-xs font-semibold">
      <td className="whitespace-nowrap px-5 py-3 ">{couponCode}</td>
      <td className="whitespace-nowrap px-5 py-3 ">{description}</td>
      <td className="whitespace-nowrap px-5 py-3 capitalize">{type.replace(/\-/g,' ')}</td>
      {type === 'percentage-discount' ? <td className="whitespace-nowrap px-5 py-3 ">{rate}%</td>
      :<td className="whitespace-nowrap px-5 py-3 ">${rate}</td>}
      <td className="whitespace-nowrap px-5 py-3 ">{expiry}</td>
      <td className="whitespace-nowrap px-5 py-3 ">
      {delLoading === id ? <button type="button" title="Deleting..." className='bg-red-500 rounded-full px-1 py-1 w-fit h-fit' ><BtnLoader style="w-4" /></button>
       : <button  type='button' onClick={e=>DeleteCoupon(e,id)} title="Delete Coupon" className='flex items-center justify-center bg-red-500 text-white hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2' ><BsFillTrashFill className="text-base" /></button>}
      </td>
    </tr>
    )
  }


  const [loading,setLoading] = useState(false)
  const [coupons,setCoupons] = useState(false)
  

  

  
  return (
    <AdminAccount>
    <h3 className='text-center font-semibold text-xl mb-5' >Manage Coupons</h3>
    <div className='flex items-center' >
     <div className='flex space-x-2 justify-end w-full' ><NavLink to="/admin/create-coupon" className='self-end hover:shadow-md bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Coupon</NavLink></div>
    </div>

     {loading ? <div><BtnLoader/></div> : coupons.length > 0 ? <Table head={['Coupon Code','Description','Type','Amount','Expiry','Action']} >
       {coupons.map((coupon,indx)=><Row key={indx} id={coupon._id} couponCode={coupon.code} description={coupon.description} type={coupon.type} rate={coupon.amount} expiry={coupon.expiry.date} />)}
     </Table>:<div className='flex w-full justify-center items-center h-52' ><img src="/not-found.webp" className='w-32' /></div>}

    </AdminAccount>
  )
}

export default ManageCopons