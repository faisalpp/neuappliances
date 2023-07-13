import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ReviewExCard = ({ description, author, review }) => {
  return (
    <div className={`flex flex-col bg-[rgba(255,155,62,0.08)] shadow-sm lg:px-10 px-10 py-10 rounded-2xl md:mx-[11px]`} >
      <div className='flex' >
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 1 || review === 2 || review === 3 || review === 4 ? 'text-b7' : 'text-gray-300'}`} />
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 2 || review === 3 || review === 4 ? 'text-b7' : 'text-gray-300'}`} />
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 3 || review === 4 ? 'text-b7' : 'text-gray-300'}`} />
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 4 ? 'text-b7' : 'text-gray-300'}`} />
      </div>
      <p className='text-sm xl:text-base mt-6 font-normal leading-6' >{description}</p>
      <h5 className='lg:text-sm xl:text-base text-xs mt-4 mb-2 font-bold lg:w-10/12 xl:w-10/12 w-full' >{author}</h5>
    </div>
  )
}

export default ReviewExCard