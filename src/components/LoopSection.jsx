import React from 'react'
import StayLoopSlider from './StayLoopSlider'
import { BsArrowRightShort } from 'react-icons/bs'

const LoopSection = () => {
  return (
    <div className='flex flex-col mt-10' >
    <h4 className='text-2xl font-bold text-center' >Stay In The Loop</h4>
    <p className='text-sm text-center' >Keep up with our videos about appliances we sell, New stock at our outlet store, product reviews,  sales and much more!</p>
    
    <div className='lg:mx-20 mx-5 mt-10 lg:mb-0 mb-5' >
      <img src="sitl.png" className='lg:h-96 h-72 w-full' />
      <div>
        <StayLoopSlider/>
      </div>
      <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >View All Videos</span><BsArrowRightShort className='text-2xl' /></a></div>
    </div>

   </div>
  )
}

export default LoopSection