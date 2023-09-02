import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Modal } from './Reusable/Modal';

const ReviewExCard = ({ description, author, review }) => {

  const StarIconPrinter = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar key={index} className='text-b7 text-sm xl:text-xl' /> // Render the star icon component for each iteration
    ));

    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };
  const StarIconPrinter2 = ({ numberOfTimes }) => {
    const starIcons = Array.from({ length: numberOfTimes }, (_, index) => (
      <AiFillStar key={index} className='text-gray-300 text-sm xl:text-xl' /> // Render the star icon component for each iteration
    ));

    return <div className='flex mt-2 items-center' >{starIcons}</div>; // Render the array of star icons
  };

  return (
    <div className={`maxmd:mx-2 flex flex-col bg-[rgba(255,155,62,0.08)] shadow-sm p-6 sm:p-10 rounded-2xl md:mx-[11px]`} >
      <div className='flex' >
        <StarIconPrinter numberOfTimes={review} />
        <StarIconPrinter2 numberOfTimes={5 - review} />
      </div>
      <p className='text-sm xl:text-base mt-6 font-normal leading-6 line-clamp-6' >{description}</p>
      <h5 className='text-lg xl:text-base mt-4 mb-2 font-bold lg:w-10/12 xl:w-10/12 w-full' >{author}</h5>
      <Modal title={author} description={description} buttonClass="text-b3 maxsm:text-sm font-semibold" buttonName={`Learn More`} />
    </div>
  )
}

export default ReviewExCard