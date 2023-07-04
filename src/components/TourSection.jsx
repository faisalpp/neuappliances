import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const TourSection = () => {
  return (
    <div id="tour" className='grid grid-cols-1 xl:grid-cols-2 gap-7 max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px w-full mx-auto py-10 lg:py-14 xl:py-24' >
      {/* w-11/12 rounded-2xl xl:h-[651px] xl:w-[640px] lg:w-[400px] h-72 lg:h-96' */}
      {/* <iframe className='w-full h-72 lg:h-96 xl:h-full rounded-[20px]' src="/videos/sample.mp4" title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <video controls src="/videos/sample.mp4" className='w-full object-cover h-72 lg:h-96 xl:h-full rounded-[20px]' />
      {/* <img src="tour.png" className='col-start-1 col-end-6 w-full xl:h-[470px] h-72 lg:h-96' /> */}
      {/* <div className=' flex flex-col items-center lg:mt-0 mt-5 h-full' > */}
      {/* xl:w-[760px]  lg:w-11/12*/}
      <div className='bg-white rounded-[20px] shadow-xl xl:h-[640px] py-5 h-full xl:px-[80px] lg:px-10 px-5 flex flex-col gap-y-5 justify-center lg:mt-0 mt-5' >
        <h4 className='xl:text-3xl lg:text-2xl text-xl font-bold' >Tour Our Outlet Store</h4>
        <p style={{ lineHeight: '24px' }} className='xl:text-[16px] lg:text-sm text-sm' >Neu Appliance's retail store is located smack dab in the middle of Austin, Tx. If you live nearby come check us out and meet the team or shop from the comfort of your own home online.</p>
        <div className='flex lg:justify-start justify-center' ><a href='' className='flex cursor-pointer items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold' ><span className='xl:text-[1rem] lg:text-sm text-[10px] ' >learn more about our Appliance Outlet Store</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
    </div>
    //  </div>
  )
}

export default TourSection