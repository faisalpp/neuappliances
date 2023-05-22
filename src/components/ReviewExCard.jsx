import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const ReviewExCard = ({color}) => {
  return (
    <div style={{backgroundColor:color}} className='flex flex-col shadow-sm px-5 py-3 rounded-xl min-w-[300px] w-[400px]' >
      <div className='flex mt-2' ><AiFillStar className='text-yellow-300 text-sm' /><AiFillStar className='text-yellow-300 text-sm' /><AiFillStar className='text-yellow-300 text-sm' /></div>   
      <p className='text-sm font-normal mt-1' >Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet. Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat non ornare pellentesque in nam sem. Elementum porttitor nunc bibendum laoreet.</p>
      <h5 className='text-sm mt-2 font-bold w-10/12' >John Doe</h5>
    </div>
  )
}

export default ReviewExCard