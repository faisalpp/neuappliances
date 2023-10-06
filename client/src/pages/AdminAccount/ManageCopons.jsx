import React,{useState} from 'react'
import AdminAccount from '../../layout/AdminAccount';
import TextInput from '../../components/TextInput/TextInput'
import ShippingTable from '../../components/AdminDashboard/Shipping/ShippingTable'
import {Link} from 'react-router-dom'

const ManageCopons = () => {
  
  const [tax,setTax] = useState(0);
  
  return (
    <AdminAccount>
    <h3 className='text-center font-semibold text-xl mb-5' >Manage Coupons</h3>
    <div className='flex flex-col space-y-5' >
      {/* Manage Tax */}
      <div className="flex flex-col px-5 py-3 shadow-md rounded-md border-[1px] border-b6 w-full" >
        <div className='flex items-center' >
         <h2 className='font-semibold mb-2' >Coupons</h2>
         <div className='flex space-x-2 justify-end w-full' ><button className='self-end hover:shadow-md bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Copon</button></div>
        </div>
        <ShippingTable/>  
      </div>
      </div>

    </AdminAccount>
  )
}

export default ManageCopons