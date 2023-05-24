import React from 'react'
import {AiOutlineSearch,AiOutlineCheckCircle} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'

const MapForm = () => {
  return (
    <div className='absolute left-20 lg:flex hidden h-fit py-10 w-[380px] rounded-2xl bg-white shadow-2xl z-30 ' >
      <div className='flex flex-col  justify-center px-10 space-y-5' >
       <h4 className='font-bold text-xl' >Delivery & Installation</h4>
       <p className='text-sm' >We make getting your appliance delivered and installed easy! We offer delivery and installation services to the greater Austin and surrounding areas! Input your Zipcode to see if we offer delivery and installation services in your area! </p>
       <div className='flex flex-col space-y-1 bg-b7 px-4 py-4 rounded-lg' >
        <h4 className='text-white text-sm' >Check Your Zip Code</h4>
        <div className='flex items-center bg-white rounded-sm py-1 px-2 space-x-2'><AiOutlineSearch className='text-gray-400' /><input className='text-xs' placeholder='Enter ZIP Code' /></div>
       </div>
        <div className='flex justify-center' ><a className='flex items-center cursor-pointer bg-b3 w-full justify-center px-4 py-1 rounded-md text-white font-semibold' ><span className='text-xs' >Get Our Best Deals</span><BsArrowRightShort className='text-2xl' /></a></div>
        <div className='hidden justify-center' ><a className='flex items-center cursor-pointer bg-b12 w-full px-4 py-2 justify-center space-x-2 rounded-2xl text-white font-semibold' ><AiOutlineCheckCircle className='text-sm' /><span className='text-xs' >Delivery Available</span></a></div>
        <div className='hidden justify-center' ><a className='flex items-center cursor-pointer bg-red-500 w-max px-4 py-2 justify-center space-x-2 rounded-2xl text-white font-semibold' ><AiOutlineCheckCircle className='text-sm' /><span className='text-xs' >Delivery Not Available - Pickup Only</span></a></div>
      </div>
	</div>      
  )
}

export default MapForm