import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const TourSection = () => {
  return (
    <div id="tour" className='lg:grid grid-cols-12 gap-x-20 flex flex-col items-center justify-center xl:px-20 lg:px-16 lg:py-16 py-10' >
     <iframe className='col-start-1 col-end-6 w-11/12 rounded-2xl xl:h-[470px] xl:w-[550px] lg:w-[400px] h-72 lg:h-96' src="https://www.youtube.com/embed/OzCAGd4YVbI" title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     {/* <img src="tour.png" className='col-start-1 col-end-6 w-full xl:h-[470px] h-72 lg:h-96' /> */}
    {/* <div className=' flex flex-col items-center lg:mt-0 mt-5 h-full' > */}
      <div className='col-start-6 col-end-13 bg-white rounded-xl shadow-xl lg:pb-0 py-5 lg:w-full w-10/12 h-full lg:px-10 px-10 flex flex-col space-y-3 justify-center xl:mt-0 lg:mt-0 mt-5' >
          <h4 className='xl:text-3xl lg:text-2xl text-xl font-bold' >Tour Our Outlet Store</h4>
          <p className='lg:text-[16px] text-sm' >Neu Appliance's retail store is located smack dab in the middle of Austin, Tx. If you live nearby come check us out and meet the team or shop from the comfort of your own home online.</p>
          <div className='flex lg:justify-start justify-center' ><a className='flex cursor-pointer items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold' ><span className='lg:text-sm text-[10px] ' >Shop All 3 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
    </div>
//  </div>
  )
}

export default TourSection