import React from 'react'
import GallerySlider from '../components/GallerySlider'
import { BsArrowRightShort } from 'react-icons/bs'

const GallerySection = () => {
  return (
    <div className='flex flex-col bg-b3 py-12' >
    <div className='lg:mx-20 mx-5 mt-10' >
      <img src="sitl.png" className='lg:h-96 h-72 w-full' />
      <div>
        <GallerySlider/>
      </div>
    </div>
    <div className='flex justify-center' ><a className='flex items-center border-[1px] border-white w-fit px-4 py-1 rounded-md font-semibold text-white' ><span className='text-sm ' >View All Videos</span><BsArrowRightShort className='text-2xl' /></a></div>
   </div>
  )
}

export default GallerySection