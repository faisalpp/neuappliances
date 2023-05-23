import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const TourSection = () => {
  return (
    <div id="tour" className='lg:grid grid-cols-12 flex flex-col items-center lg:px-16 lg:py-16 py-10' >
    <div className='col-start-1 col-end-6 ' >
      <img src="tour.png" className='h-72 lg:h-96' />
    </div>
    <div className='col-start-7 col-end-13 flex flex-col items-center lg:mt-0 mt-5 h-full' >
      <div className='bg-white rounded-xl shadow-xl lg:pb-0 pb-5 lg:w-full w-11/12 h-full lg:px-10 px-5 flex flex-col space-y-3 justify-center' >
          <h4 className='lg:text-2xl text-xl font-bold' >Tour Our Outlet Store</h4>
          <p className='lg:text-[16px] text-sm' >Neu Appliance's retail store is located smack dab in the middle of Austin, Tx. If you live nearby come check us out and meet the team or shop from the comfort of your own home online.</p>
          <div className='flex lg:justify-start justify-center' ><a className='flex cursor-pointer items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='lg:text-sm text-[10px] ' >Shop All 3 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
    </div>
 </div>
  )
}

export default TourSection