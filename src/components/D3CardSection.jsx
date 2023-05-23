import React from 'react'
import { BsPiggyBank,BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import D3Cards from './DeskComp/D3Cards'

const D3CardSection = () => {
  return (
    <div className='lg:grid flex flex-col grid-cols-12 py-16 lg:px-10 px-5 ' >
    <div className='col-start-1 col-end-6 flex flex-col space-y-5 ' >
      <div className='flex space-x-2' ><BsPiggyBank className='text-3xl' /><p className='text-sm' >We provide our Austin neighbors the best savings on  floor models , returns and scratch and dent appliances. </p></div>
      <div className='flex space-x-2' ><AiOutlineCheckCircle className='text-5xl' /><p className='text-sm' >Every appliance we sell is tested with our 100-point inspection process. We ensure every appliance functions the way it is supposed to and provide you the best discounts possible.</p></div>
      <div className='flex space-x-2' ><IoLocationOutline className='text-5xl' /><p className='text-sm' >Discover why our Austin neighbors trust us to provide great appliances at better savings. Lets find the perfect appliance for your needs at an unbeatable price by clicking below.</p></div>
      <div className='flex lg:justify-start justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Get Our Best Deals</span><BsArrowRightShort className='text-2xl' /></a></div>
    </div>
    <div className='col-start-7 col-end-13 lg:mt-0 mt-10 relative flex justify-center items-center w-full' >
     {/* <D3Cards/> */}
     <img src="3d1.png" className='w-48 h-56' />
     <img src="3d2.png" className='absolute -top-3 w-56 h-72' />
     <img src="3d3.png" className='w-56 h-56' />
    </div>
   </div>
  )
}

export default D3CardSection