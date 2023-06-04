import React, { useState } from 'react'
import GallerySlider from '../components/GallerySlider'
import { BsArrowRightShort } from 'react-icons/bs'

const GallerySection = () => {
  const [img,setImg] = useState('sitl.png');
  return (
    <div className='flex flex-col bg-b3 py-12 xl:px-[120px]' >
    <div className=' lg:mt-10 xl:mt-10 mt-5' >
      <img src={img} className='xl:h-[565px] lg:h-[400px] h-52 w-full' />
      <div>
        <GallerySlider setState={setImg} state={img} />
      </div>
    </div>
    <div className='flex justify-center' ><a className='flex items-center border-[1px] border-white w-fit px-4 xl:py-2 py-1 rounded-md font-semibold text-white' ><span className='text-sm xl:text-[16px]' >Shop Now</span><BsArrowRightShort className='text-2xl xl:text-3xl' /></a></div>
   </div>
  )
}

export default GallerySection