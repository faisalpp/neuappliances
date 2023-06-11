import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ReviewExCard = ({ description, author, review }) => {
  return (
    <div className={`flex flex-col xl:space-y-6 bg-b7/10 shadow-sm lg:px-10 px-10 py-10 rounded-2xl md:mx-[10px]`} >
      <div className='flex mt-2' >
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 1 || review === 2 || review === 3 || review === 4 || review === 5 ? 'text-b7' : 'text-gray-300'}`} />
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 2 || review === 3 || review === 4 || review === 5 ? 'text-b7' : 'text-gray-300'}`} />
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 3 || review === 4 || review === 5 ? 'text-b7' : 'text-gray-300'}`} />
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 4 || review === 5 ? 'text-b7' : 'text-gray-300'}`} />
        <AiFillStar className={`text-b7 text-sm xl:text-xl ${review === 5 ? 'text-b7' : 'text-gray-300'}`} />
      </div>
      <p className='lg:text-sm xl:text-[1rem] text-xs font-normal mt-1' >{description}</p>
      <h5 className='lg:text-sm xl:text-[1rem] text-xs mt-2 mb-2 font-bold lg:w-10/12 xl:w-10/12 w-full' >{author}</h5>
    </div>
  )
}

export default ReviewExCard