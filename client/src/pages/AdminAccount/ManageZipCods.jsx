import React, { useState } from 'react'
import AdminAccount from '../../layout/AdminAccount'
import Table from '../../components/AdminDashboard/ShippingZipCods/Table'
import TextInput from '../../components/TextInput/TextInput'
import SelectInput from '../../components/TextInput/SelectInput'
import Calander from '../../components/AdminDashboard/ShippingZipCods/Calander'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const ManageZipCods = () => {

  const [directions,setDirections] = useState(['North','South','East','West'])
  const [uZipCode,setUzipCode] = useState(73301)
  const [uDirection,setUdirection] = useState('North')

  return (
    <AdminAccount>
    <h4 className='text-center font-semibold text-xl' >Manage Zip Codes</h4>
     <div className='flex space-x-5 justify-between ' >
      <Table/>
      <div className='flex flex-col px-3 space-y-5 border-[1px] mt-2 w-full h-[600px]' >
        <h4 className='px-2 py-2 text-red-500 text-sm ' >No Zip Code Selected!</h4>
        <TextInput width="full" title="Zip Code" iscompulsory="true" type="number" value={uZipCode} onChange={(e)=>setUzipCode(e.target.value)}  />
        <div className='flex space-x-2 w-full h-2/3' >
         <div className='flex flex-col items-center space-y-5 w-1/2 ' >
          <SelectInput name="categor" widthFull="true" title="Select Direction" iscompulsory="true" onChange={e =>setUdirection(e.target.value)} options={directions} />
          <Calander/>
          <button className='bg-b6 rounded-2xl font-semibold text-white py-1 w-6/12' >Save</button>
         </div>
         
         <div className='flex flex-col items-center border-[1px] w-1/2 rounded-md overflow-x-hidden overflow-y-scroll' >
            <h4 className='text-center text-sm font-semibold py-2' >Time Slots</h4>
            <div className='flex items-center border-[1px] w-10/12 rounded-2xl shadow-md text-sm justify-center py-1 font-medium space-x-3 text-b6 border-b6 ' >
             <span className='flex space-x-1 text-xs' >
              <span>12 AM</span><span>To</span><span>5 PM</span>
             </span>
             <button type='button' title="Delete Zip Code" className='flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-xs px-[5px] w-fit rounded-full cursor-pointer py-[5px]' ><BsFillTrashFill className="text-xs" /></button>
            </div>
             <button type='button' title="Add Time Slot" className=' my-3 flex items-center justify-center bg-b6 text-white hover:bg-white hover:text-b6 border-2 border-b6 hover:border-b6 text-xs px-[5px] w-fit rounded-full cursor-pointer py-[5px]' ><AiOutlinePlusCircle className="text-2xl" /></button>
         </div>
        </div> 
      
      </div>
     </div>
    </AdminAccount>
  )
}

export default ManageZipCods