import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ReviewExCard = ({ description, author, review }) => {
  return (
    <div className={`maxmd:mx-2 flex flex-col bg-[rgba(255,155,62,0.08)] shadow-sm p-6 sm:p-10 rounded-2xl md:mx-[11px]`} >
      <div className='flex' >
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 1 || review === 2 || review === 3 || review === 4 ? 'text-b7' : 'text-gray-300'}`} />
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 2 || review === 3 || review === 4 ? 'text-b7' : 'text-gray-300'}`} />
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 3 || review === 4 ? 'text-b7' : 'text-gray-300'}`} />
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 4 ? 'text-b7' : 'text-gray-300'}`} />
      </div>
      <p className='text-sm xl:text-base mt-6 font-normal leading-6' >{description}</p>
      <h5 className='text-lg xl:text-base mt-4 mb-2 font-bold lg:w-10/12 xl:w-10/12 w-full' >{author}</h5>
    </div>
  )
}

export default ReviewExCard