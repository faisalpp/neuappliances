import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'
import MainLayout from '../../layout/MainLayout'
import { Link} from 'react-router-dom'


const orderSuccess = () => {
  return (
    <MainLayout>
    <div style={{height:'calc(100vh - 135px)'}} className='flex items-center justify-center w-full z-40 bg-white/80' >
      <div className='flex flex-col space-y-5 items-center' >
        <BsCheckCircle className='text-7xl text-b6' />
        <h4 className='font-bold text-xl' >Your order has been placed!</h4>
        <div className='flex space-x-5' >
         <Link className='bg-b6 text-xs rounded-xl px-5 py-3 font-medium text-white' >Continue Shopping</Link>
         <Link className=' text-xs rounded-xl px-5 py-3 text-b6 font-medium bg-white border-[1px] border-b6' >View Order</Link>
        </div>
      </div>
    </div>
    </MainLayout>
  )
}

export default orderSuccess