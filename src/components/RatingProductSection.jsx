import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import CosmaticSlider from '../components/CosmaticSlider'

const RatingProductSection = () => {
  return (
    <div className='flex flex-col lg:mx-10 mx-5 py-10' >
    <div className='flex flex-col items-center' >
     <h4 className='lg:text-2xl text-xl font-bold' >Shop By Cosmetic Rating</h4>
     <h4 className='lg:text-lg text-md font-bold' >Cosmetic Rating: <span className='font-normal' >5 Stars</span> </h4>
     <div className='flex mt-2 items-center' ><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /></div>
   </div>
    <CosmaticSlider />
     <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='lg:text-sm text-xs' >Shop All 5 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a></div>
   </div>
  )
}

export default RatingProductSection