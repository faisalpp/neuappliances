import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const ReviewExCard = ({color}) => {
  return (
    <div className={`flex flex-col xl:space-y-6 bg-b7/10 shadow-sm lg:px-10 px-10 py-10 rounded-2xl 3xl:min-w-[455px] 2xl:min-w-[410px] xl:w-[450px] lg:w-[480px] md:min-w-[500px] sm:min-w-[480px] xs:min-w-[360px] min-w-[310px]`} >
      <div className='flex mt-2' ><AiFillStar className='text-b7 text-sm xl:text-xl' /><AiFillStar className='text-b7 text-sm xl:text-xl' /><AiFillStar className='text-b7 text-sm xl:text-xl' /><AiFillStar className='text-b7 text-sm xl:text-xl' /><AiFillStar className='text-b7 text-sm xl:text-xl' /></div>   
      <p className='lg:text-sm xl:text-[1rem] text-xs font-normal mt-1' >Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.</p>
      <h5 className='lg:text-sm xl:text-[1rem] text-xs mt-2 mb-2 font-bold lg:w-10/12 xl:w-10/12 w-full' >John Doe</h5>
    </div>
  )
}

export default ReviewExCard