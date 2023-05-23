import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const MobMapForm = () => {
  return (
    <div className='lg:hidden absolute flex justify-center bottom-10 w-full' >
     <div className='flex flex-col space-y-1 bg-b7 px-4 py-4 rounded-lg w-10/12' >
        <h4 className='text-white text-sm' >Check Your Zip Code</h4>
        <div className='flex items-center bg-white rounded-sm py-1 px-2 space-x-2'><AiOutlineSearch className='text-gray-400' /><input className='text-xs' placeholder='Enter ZIP Code' /></div>
       </div>
    </div>
  )
}

export default MobMapForm