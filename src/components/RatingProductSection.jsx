import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import CosmaticSlider from '../components/CosmaticSlider'

const RatingProductSection = ({stars}) => {
  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar className='text-b7 text-lg' /> // Render the star icon component for each iteration
    ));
  
    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };
  return (
    <div className='flex flex-col lg:mx-10 mx-5 py-10' >
    <div className='flex flex-col items-center' >
     <h4 className='xl:text-4xl lg:text-2xl text-xl font-bold mb-10' >Shop By Cosmetic Rating</h4>
     <h4 className='xl:text-[22px] lg:text-lg text-md font-bold' >Cosmetic Rating: <span className='font-normal' >{stars} Stars</span> </h4>
     <div className='flex mt-2 items-center' ><StarIconPrinter numberOfTimes={stars} /> </div>
   </div>
    <CosmaticSlider stars={stars} />
     <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='lg:text-sm xl:text-[16px] text-xs' >Shop All {stars} Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a></div>
   </div>
  )
}

export default RatingProductSection