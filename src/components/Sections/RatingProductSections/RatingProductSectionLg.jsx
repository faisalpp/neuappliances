import React from 'react'
import RatingProductSliderLg from './RatingProductSliderLg'
import {AiFillStar} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'

const RatingProductSectionLg = ({stars,title}) => {
    const StarIconPrinter = ({ numberOfTimes }) => {
        const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
          <AiFillStar className='text-b7 text-lg xl:text-2xl' /> // Render the star icon component for each iteration
        ));
      
        return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
      };
  return (
    <>
    <div className='xl:hidden lg:flex hidden flex-col lg:mx-20 py-10' >
    <div className='flex flex-col items-center' >
     {title?<h4 className='xl:text-4xl lg:text-2xl text-xl font-bold mb-10' >Shop By Cosmetic Rating</h4>:null}
     <h4 className='xl:text-[22px] lg:text-lg text-md font-bold' >Cosmetic Rating: <span className='font-normal' >{stars} Stars</span> </h4>
     <div className='flex mt-2 items-center' ><StarIconPrinter numberOfTimes={stars} /> </div>
   </div>
   <div className=' relative w-full lg:mx-5 mt-10' >
     <RatingProductSliderLg stars={stars} />
   </div>
    <div className='flex justify-center mt-5' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 xl:py-2 rounded-md text-b3 font-semibold' ><span className='lg:text-sm xl:text-[16px] text-xs' >Shop All 3 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a></div>
   </div>
    </>
  )
}

export default RatingProductSectionLg