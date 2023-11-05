import React,{useState} from 'react'
import AdminAccount from '../../layout/AdminAccount';
import Table from '../../components/AdminDashboard/Table/Table'
import {Link} from 'react-router-dom'
import {BsFillTrashFill} from 'react-icons/bs'
const ManageCopons = () => {

  
  const Row = ({couponCode,description,type,rate,expiry}) => {
    return (
      <tr className="border-b border-l border-r border-b6 text-xs font-semibold">
      <td className="whitespace-nowrap px-5 py-3 ">{couponCode}</td>
      <td className="whitespace-nowrap px-5 py-3 ">{description}</td>
      <td className="whitespace-nowrap px-5 py-3 ">{type}</td>
      <td className="whitespace-nowrap px-5 py-3 ">{rate}</td>
      <td className="whitespace-nowrap px-5 py-3 ">{expiry}</td>
      <td className="whitespace-nowrap px-10 py-3 ">
        <button title="Delete Coupon" className='flex items-center justify-center bg-red-500 text-white hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2' >
          <BsFillTrashFill className="text-base" />
         </button>
      </td>
    </tr>
    )
  }
  
  return (
    <>
    <AdminAccount>
    <h3 className='text-center font-semibold text-xl mb-5' >Manage Coupons</h3>
    <div className='flex items-center' >
     <div className='flex space-x-2 justify-end w-full' ><Link to="/admin/create-coupon" className='self-end hover:shadow-md bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Copon</Link></div>
    </div>

     <Table head={['Coupon Code','Description','Type','Rate','Expiry','Action']} >
       <Row couponCode="mycrfr" description={22} type="2" rate="222" expiry="22" />
     </Table>

    </AdminAccount>
    </>
  )
}

export default ManageCopons