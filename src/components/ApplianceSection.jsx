import React from 'react'
import SProductCard from '../components/SProductCard'
import {BsArrowRightShort} from 'react-icons/bs'

const ApplianceSection = () => {
  return (
     <div className='flex flex-col items-center py-20 bg-b8' >
     <h4 className='xl:text-4xl text-xl font-bold text-center' >Shop By Appliance Type</h4>
     <div className='lg:grid grid-cols-3 grid-rows-2 flex flex-col gap-x-10 gap-y-10 mt-10' >
      <SProductCard cat="Refrigerators" />
      <SProductCard cat="Washer & Dryers" />
      <SProductCard cat="Ranges" />
      <SProductCard cat="Dishwashers" />
      <SProductCard cat="Microwaves" />
      <SProductCard cat="All Appliances" />
     </div>
     <div className='flex justify-center mt-10' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold' ><span className='xl:text-[16px] lg:text-sm' >View All Categories</span><BsArrowRightShort className='text-2xl' /></a></div>
    </div>
  )
}

export default ApplianceSection