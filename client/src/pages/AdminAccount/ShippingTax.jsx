import React,{useState} from 'react'
import AdminAccount from '../../layout/AdminAccount';
import { NavLink } from 'react-router-dom';
import {AiFillSave} from 'react-icons/ai'
import { Switch } from "@material-tailwind/react";

const ShippingTax = () => {
  
  const [isEnabled,setIsEnabled] = useState(false);
  
  return (
    <AdminAccount>
     

      {/* Table Start */}
      <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center text-sm font-light">
          <thead
            className="border-b bg-b3 font-medium text-white">
            <tr>
              <th scope="col" className=" px-6 py-4">Zip&nbsp;Code</th>
              <th scope="col" className=" px-6 py-4">Shipping Fee</th>
              <th scope="col" className=" px-6 py-4">Tax Rate</th>
              <th scope="col" className=" px-6 py-4">Status</th>
              <th scope="col" className=" px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="px-2 py-4 font-medium">78602</td>
              <td className="whitespace-nowrap font-medium px-2 py-4 capitalize">$20.00</td>
              <td className="whitespace-nowrap font-medium px-2 py-4 capitalize">$5.00</td>
              <td className="py-4"><Switch onChange={(e)=>setIsEnabled(e.target.checked)} ripple={false} className={`${isEnabled ? 'bg-green-500 border-green-500' : 'bg-red-500 border-red-500'} border-[1px] `} /></td>
              <td className="flex items-center justify-center space-x-2 whitespace-nowrap px-6 py-4 " title="Update, Create & View Section Items">
                <NavLink title="Create Section Items" to='' className='flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 py-2 rounded-full cursor-pointer' ><AiFillSave className="text-lg"/></NavLink>
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      {/* Table End */}


    </AdminAccount>
  )
}

export default ShippingTax