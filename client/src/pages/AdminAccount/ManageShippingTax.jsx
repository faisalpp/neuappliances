import React,{useState} from 'react'
import AdminAccount from '../../layout/AdminAccount';
import TextInput from '../../components/TextInput/TextInput'
import ShippingTable from '../../components/AdminDashboard/Shipping/ShippingTable'
import {Link} from 'react-router-dom'

const ManageShippingTax = () => {
  
  const [tax,setTax] = useState(0);
  
  return (
    <AdminAccount>
    <h3 className='text-center font-semibold text-xl mb-5' >Manage Shipping & Taxe's</h3>
    <div className='flex flex-col space-y-5' >
      {/* Manage Tax */}
      <div className="flex flex-col px-5 py-3 shadow-md rounded-md border-[1px] border-b6 w-full" >
        <div className='flex items-center' >
         <h2 className='font-semibold mb-2' >Shipping&nbsp;Zones</h2>
         <div className='flex space-x-2 justify-end w-full' ><button className='self-end hover:shadow-md bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Create&nbsp;Zone</button><Link to="/admin/manage-shipping-classes" className='self-end hover:shadow-md bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold' >Shipping&nbsp;Classes</Link></div>
        </div>
        <ShippingTable/>  
      </div>
      {/* Manage Tax */}
      <div>
        <h2 className='font-semibold mb-2' >Taxe's</h2>
        <div className='grid grid-cols-3 px-5 py-3 shadow-md rounded-md border-[1px] border-b6 w-full' >
        {/* <TextInput name="title" title="Title" iscompulsory="true" type="text" value={values.title} onChange={(e)=>handleTitle(e)} error={errors && errors.includes('Title is Required!') ? true : false} errormessage="Title is Required!" placeholder="Enter Product Title" /> */}
          <TextInput title="Tax Rate" iscompulsory="true" type="number" value={tax} onChange={(e)=>setTax(e.target.value)}  errormessage="Tax Rate is Required!" placeholder="Enter Tax Rate: 30" />
          
        </div>  
      </div>
      </div>

    </AdminAccount>
  )
}

export default ManageShippingTax