import React from 'react'
import ReviewSlider from '../components/ReviewSlider'
import ReviewSlider2 from '../components/ReviewSlider2'
import {BsArrowRightShort} from 'react-icons/bs'

const ReviewSection = () => {
  return (
    <div className='flex flex-col justify-center xl:px-32 lg:px-14 px-5 py-16' >
    <h4 className='text-2xl font-bold mb-12' >Saving Austinites Money on Appliances Since 2015</h4>
     <ReviewSlider  color="#F5F5F5" icon="google.png" />
     <ReviewSlider2  color="#ff9b3e14" icon="yelp.png" />

    <div className='flex justify-center mt-5' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop Austin's Best Appliance Deals</span><BsArrowRightShort className='text-2xl' /></a></div> 
   </div>
  )
}

export default ReviewSection